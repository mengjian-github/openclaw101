# 🐳 OpenClaw101 容器化部署指南

## 🚀 快速部署

使用 `build-docker-run.sh` 脚本可以一键构建和运行 OpenClaw101 容器：

```bash
# 1. 进入项目目录
cd ~/openclaw101/

# 2. 运行部署脚本
chmod +x build-docker-run.sh
sudo ./build-docker-run.sh
```

脚本会自动：
- ✅ 检查 Docker 服务状态
- ✅ 清理旧的构建缓存
- ✅ 构建 Docker 镜像
- ✅ 显示运行命令和访问地址

## 📋 脚本详解

### 脚本功能
`build-docker-run.sh` 是一个自动化部署脚本，简化了 OpenClaw101 的容器化部署流程。

### 可配置参数

#### 1. 镜像标签（可选参数）
```bash
# 使用默认标签（openclaw101:latest）
./build-docker-run.sh

# 使用自定义标签
./build-docker-run.sh openclaw101:v1.0
./build-docker-run.sh myregistry.com/openclaw101:production
```

#### 2. 容器名称和端口（在脚本中修改）
脚本默认使用以下配置：
```bash
容器名称：openclaw101
主机端口：3000
容器端口：80
```

如果需要修改这些配置，可以编辑脚本中的运行命令部分：
```bash
# 在脚本中找到这一行（约第24行）
echo "  docker run -d -p 3000:80 --name openclaw101 $TAG"

# 修改为：
#  docker run -d -p 8080:80 --name my-openclaw101 $TAG
```

### 配置示例

#### 示例1：使用不同端口
```bash
# 修改脚本中的端口映射
# 原配置：-p 3000:80
# 新配置：-p 8080:80

# 然后运行脚本
./build-docker-run.sh
```

#### 示例2：使用不同容器名称
```bash
# 修改脚本中的容器名称
# 原配置：--name openclaw101
# 新配置：--name my-openclaw-app

# 然后运行脚本
./build-docker-run.sh
```

#### 示例3：同时修改端口和名称
```bash
# 修改脚本中的运行命令
# 原配置：docker run -d -p 3000:80 --name openclaw101 $TAG
# 新配置：docker run -d -p 9090:80 --name openclaw-prod $TAG

# 然后运行脚本
./build-docker-run.sh openclaw101:production
```

## 🔧 手动运行命令

如果你需要更多控制，也可以直接使用 Docker 命令：

### 1. 构建镜像
```bash
# 使用默认标签
docker build -t openclaw101:latest .

# 使用自定义标签
docker build -t myregistry.com/openclaw101:v1.0 .
```

### 2. 运行容器
```bash
# 基本运行（使用脚本默认配置）
docker run -d -p 3000:80 --name openclaw101 openclaw101:latest

# 自定义端口
docker run -d -p 8080:80 --name openclaw101 openclaw101:latest

# 自定义容器名称
docker run -d -p 3000:80 --name my-openclaw-app openclaw101:latest

# 后台运行并自动重启
docker run -d -p 3000:80 --name openclaw101 --restart unless-stopped openclaw101:latest
```

### 3. 查看运行状态
```bash
# 查看容器状态
docker ps | grep openclaw101

# 查看日志
docker logs -f openclaw101

# 查看资源使用
docker stats openclaw101
```

## 🌐 访问应用

部署完成后，通过以下地址访问：

```
http://localhost:3000
```

如果修改了端口，请使用对应的端口号：
```
http://localhost:8080  # 如果修改为8080端口
```

## 🛠️ 管理容器

### 停止容器
```bash
docker stop openclaw101
```

### 启动容器
```bash
docker start openclaw101
```

### 重启容器
```bash
docker restart openclaw101
```

### 删除容器
```bash
# 停止并删除容器
docker stop openclaw101 && docker rm openclaw101

# 删除镜像
docker rmi openclaw101:latest
```

### 进入容器
```bash
# 进入容器shell
docker exec -it openclaw101 sh
```

## 📊 脚本输出示例

运行 `./build-docker-run.sh` 会显示以下信息：

```
🔨 开始构建 OpenClaw101 Docker 镜像（修复版）...
📦 镜像标签: openclaw101:latest
🧹 清理旧的构建缓存...
📦 构建 Docker 镜像...

✅ 构建完成！
📊 镜像信息:
openclaw101   latest    abc123def456   35MB    2 minutes ago

🚀 运行命令:
  docker run -d -p 3000:80 --name openclaw101 openclaw101:latest

🔍 查看日志:
  docker logs -f openclaw101

🌐 访问地址: http://localhost:3000
```

## ⚠️ 注意事项

1. **Docker 服务**：确保 Docker 服务正在运行
2. **端口冲突**：如果 3000 端口被占用，请修改脚本中的端口配置
3. **容器名称冲突**：如果已存在名为 `openclaw101` 的容器，请修改容器名称
4. **权限问题**：通常不需要 `sudo`，除非 Docker 安装配置需要
5. **构建缓存**：脚本会自动清理旧的构建缓存，但不会影响现有容器

## 🔄 更新部署

如果需要更新应用：

```bash
# 1. 停止并删除旧容器
docker stop openclaw101 && docker rm openclaw101

# 2. 重新构建和运行
./build-docker-run.sh
```

## 📞 支持

如有问题，请参考：
- [Docker 官方文档](https://docs.docker.com/)
- [脚本源代码](./build-docker-run.sh)
- [项目主文档](./README.md)
