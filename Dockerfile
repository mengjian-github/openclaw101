# ==========================================
# 阶段 1: 构建阶段
# ==========================================
FROM node:20-alpine AS builder

# 设置工作目录
WORKDIR /app

# 安装必要的构建工具（Alpine环境需要）
RUN apk add --no-cache libc6-compat

# 先复制package文件（利用Docker缓存层）
COPY package*.json ./

# 安装所有依赖（包括开发依赖，构建需要TypeScript等）
RUN npm ci && npm cache clean --force

# 复制源代码
COPY . .

# 验证 TypeScript 配置和路径别名
# 如果这一步失败，会提前发现问题
RUN echo "=== 验证 TypeScript 路径别名 ===" && \
    node -e "const ts = require('typescript'); const cfg = require('./tsconfig.json'); console.log('tsconfig paths:', JSON.stringify(cfg.compilerOptions?.paths, null, 2))"

# 构建静态站点
ENV NODE_ENV=production
RUN npm run build

# ==========================================
# 阶段 2: 运行阶段（Nginx 托管）
# ==========================================
FROM nginx:1.25-alpine-slim AS runtime

# 复制构建产物到 Nginx
COPY --from=builder /app/out /usr/share/nginx/html

# 复制自定义 Nginx 配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 80

# 健康检查
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
