#!/bin/bash
# Docker 构建修复测试脚本

set -e

# 获取脚本所在目录作为项目目录（兼容任何运行位置）
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$SCRIPT_DIR"
IMAGE_TAG="openclaw101:v1.0-test"
CONTAINER_NAME="test-openclaw101"
TEST_PORT="${TEST_PORT:-3000}"

echo "=============================================="
echo "  OpenClaw101 Docker 构建修复测试"
echo "=============================================="
echo "  项目目录: $PROJECT_DIR"
echo "  测试端口: $TEST_PORT"
echo ""

# 检查 Docker
echo "🔍 检查 Docker 状态..."
if ! command -v docker &> /dev/null; then
    echo "❌ Docker 命令未找到，请确保 Docker 已安装"
    exit 1
fi

if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker 服务未运行，请启动 Docker"
    exit 1
fi

echo "✅ Docker 可用"
echo ""

# 进入项目目录（确保在任何位置运行都能正确）
if [[ ! -f "$PROJECT_DIR/Dockerfile" ]]; then
    echo "❌ 未找到 Dockerfile，请确保脚本位于项目根目录"
    echo "   查找路径: $PROJECT_DIR/Dockerfile"
    exit 1
fi

cd "$PROJECT_DIR" || exit 1

# 清理旧构建
echo "🧹 清理旧构建..."
docker rm -f "$CONTAINER_NAME" 2>/dev/null || true
docker rmi -f "$IMAGE_TAG" 2>/dev/null || true
docker builder prune -f > /dev/null 2>&1 || true
echo "✅ 清理完成"
echo ""

# 开始构建
echo "🔨 开始构建 Docker 镜像..."
echo "   镜像标签: $IMAGE_TAG"
echo "   Dockerfile: $PROJECT_DIR/Dockerfile"
echo ""

if docker build -t "$IMAGE_TAG" .; then
    echo ""
    echo "✅ Docker 构建成功！"
    echo ""
else
    echo ""
    echo "❌ Docker 构建失败"
    echo ""
    echo "💡 尝试使用备用方案（node:20-slim）..."
    echo ""
    
    if docker build -f Dockerfile.slim -t "$IMAGE_TAG" .; then
        echo ""
        echo "✅ 备用方案构建成功！"
        echo ""
    else
        echo ""
        echo "❌ 备用方案也失败了"
        echo ""
        echo "请查看详细错误信息："
        echo "  docker build -f Dockerfile.debug -t openclaw101:debug . 2>&1"
        exit 1
    fi
fi

# 显示镜像信息
echo "📊 镜像信息:"
docker images | grep openclaw101 | grep -v "REPOSITORY"
echo ""

# 检查端口占用（多种方式确保兼容性）
echo "🔍 检查端口 $TEST_PORT 占用..."

port_in_use=0
# 方法1: 使用 ss (推荐，现代Linux)
if command -v ss > /dev/null 2>&1; then
    if ss -tuln 2>/dev/null | grep -q ":$TEST_PORT "; then
        port_in_use=1
    fi
# 方法2: 使用 netstat
elif command -v netstat > /dev/null 2>&1; then
    if netstat -tuln 2>/dev/null | grep -q ":$TEST_PORT "; then
        port_in_use=1
    fi
# 方法3: 使用 lsof
elif command -v lsof > /dev/null 2>&1; then
    if lsof -i :"$TEST_PORT" > /dev/null 2>&1; then
        port_in_use=1
    fi
fi

if [[ $port_in_use -eq 1 ]]; then
    echo "❌ 端口 $TEST_PORT 已被占用，请先释放端口"
    echo "   占用该端口的进程:"
    if command -v lsof > /dev/null 2>&1; then
        lsof -i :"$TEST_PORT" 2>/dev/null | grep -v "^COMMAND" | head -5
    elif command -v ss > /dev/null 2>&1; then
        ss -tulnp 2>/dev/null | grep ":$TEST_PORT " | head -5
    fi
    echo ""
    echo "💡 您可以:"
    echo "   1. 停止占用端口的进程"
    echo "   2. 使用其他端口: TEST_PORT=3001 $0"
    exit 1
else
    echo "✅ 端口 $TEST_PORT 可用"
fi
echo ""

# 检查 Docker 中是否有容器占用该端口
echo "🔍 检查 Docker 端口映射..."
if docker ps --format "table {{.Names}}\t{{.Ports}}" | grep -q ":$TEST_PORT-"; then
    echo "⚠️  发现 Docker 容器已映射端口 $TEST_PORT:"
    docker ps --format "table {{.Names}}\t{{.Ports}}" | grep ":$TEST_PORT-"
    echo ""
    echo "💡 建议先清理现有容器:"
    echo "   docker rm -f \$(docker ps -q --filter \"publish=$TEST_PORT\")"
    exit 1
fi
echo "✅ Docker 端口检查通过"
echo ""

# 运行测试容器
echo "🚀 启动测试容器..."
if ! docker run -d -p "$TEST_PORT":80 --name "$CONTAINER_NAME" "$IMAGE_TAG" > /dev/null; then
    echo "❌ 容器启动失败"
    exit 1
fi

# 等待服务启动（智能轮询，支持健康检查）
echo "⏳ 等待服务启动..."
echo "   最大等待时间: 60秒"
echo ""

max_wait=60
interval=2
elapsed=0
health_check_url="http://localhost:$TEST_PORT"

# 先等待容器状态变为 running
echo "   [1/2] 等待容器启动..."
while [[ $elapsed -lt $max_wait ]]; do
    container_status=$(docker inspect -f '{{.State.Status}}' "$CONTAINER_NAME" 2>/dev/null || echo "unknown")
    
    if [[ "$container_status" == "running" ]]; then
        echo "   ✅ 容器已启动 (${elapsed}s)"
        break
    elif [[ "$container_status" == "exited" ]] || [[ "$container_status" == "dead" ]]; then
        echo "   ❌ 容器异常退出"
        echo ""
        echo "📋 容器日志:"
        docker logs --tail 50 "$CONTAINER_NAME" 2>&1 || true
        docker rm -f "$CONTAINER_NAME" > /dev/null 2>&1 || true
        exit 1
    fi
    
    sleep $interval
    elapsed=$((elapsed + interval))
    echo "   ⏳ 等待容器启动... (${elapsed}s/${max_wait}s)"
done

if [[ $elapsed -ge $max_wait ]]; then
    echo "   ❌ 容器启动超时"
    docker logs --tail 30 "$CONTAINER_NAME" 2>&1 || true
    docker rm -f "$CONTAINER_NAME" > /dev/null 2>&1 || true
    exit 1
fi

# 等待应用响应 HTTP 请求
echo ""
echo "   [2/2] 等待应用响应..."
elapsed=0
while [[ $elapsed -lt $max_wait ]]; do
    http_code=$(curl -s -o /dev/null -w "%{http_code}" "$health_check_url" 2>/dev/null || echo "000")
    
    if [[ "$http_code" =~ ^[23][0-9]{2}$ ]]; then
        echo "   ✅ 应用响应正常 (HTTP $http_code, ${elapsed}s)"
        echo ""
        echo "🎉 测试完成！构建修复成功！"
        echo ""
        echo "📋 使用说明:"
        echo "  访问地址: $health_check_url"
        echo "  查看日志: docker logs -f $CONTAINER_NAME"
        echo "  停止容器: docker stop $CONTAINER_NAME"
        echo "  删除容器: docker rm $CONTAINER_NAME"
        echo ""
        echo "=============================================="
        echo "  测试完成"
        echo "=============================================="
        exit 0
    fi
    
    # 检查容器是否还在运行
    if [[ $(docker inspect -f '{{.State.Status}}' "$CONTAINER_NAME" 2>/dev/null) != "running" ]]; then
        echo "   ❌ 容器已停止"
        echo ""
        echo "📋 容器日志:"
        docker logs --tail 50 "$CONTAINER_NAME" 2>&1 || true
        exit 1
    fi
    
    sleep $interval
    elapsed=$((elapsed + interval))
    echo "   ⏳ 等待应用就绪... (${elapsed}s/${max_wait}s, last HTTP: $http_code)"
done

# 超时处理
echo ""
echo "⚠️  应用启动超时（${max_wait}秒）"
echo ""
echo "📋 诊断信息:"
echo "  容器状态: $(docker inspect -f '{{.State.Status}}' "$CONTAINER_NAME" 2>/dev/null || echo "unknown")"
echo "  容器日志（最近20行）:"
docker logs --tail 20 "$CONTAINER_NAME" 2>&1 || true
echo ""
echo "💡 您可以手动检查:"
echo "  curl -v $health_check_url"
echo "  docker exec -it $CONTAINER_NAME /bin/sh"
