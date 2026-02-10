#!/bin/bash

# OpenClaw101 Docker 构建脚本
# 用法: ./build-docker-run.sh [tag]

set -e

# 默认标签
TAG=${1:-"openclaw101:latest"}

echo "🔨 开始构建 OpenClaw101 Docker 镜像..."
echo "📦 镜像标签: $TAG"

# 检查 Docker 是否运行
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker 未运行，请启动 Docker 服务"
    exit 1
fi

# 清理旧的构建缓存（可选）
echo "🧹 清理旧的构建缓存..."
docker builder prune -f

# 构建镜像
echo "📦 构建 Docker 镜像..."
docker build -t "$TAG" .

# 显示构建结果
echo ""
echo "✅ 构建完成！"
echo "📊 镜像信息:"
docker images | grep openclaw101

echo ""
echo "🚀 运行命令:"
echo "  docker run -d -p 3000:80 --name openclaw101 $TAG"
echo ""
echo "🔍 查看日志:"
echo "  docker logs -f openclaw101"
echo ""
echo "🌐 访问地址: http://localhost:3000"