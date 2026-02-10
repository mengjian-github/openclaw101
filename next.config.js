const path = require('path');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  
  // ==========================================
  // 关键修复：配置 webpack 路径别名
  // 确保 @/* 路径在 Docker 环境中正确解析
  // ==========================================
  webpack: (config) => {
    // 确保 resolve 和 alias 对象存在
    if (!config.resolve) {
      config.resolve = {};
    }
    if (!config.resolve.alias) {
      config.resolve.alias = {};
    }
    
    // 添加 @ 路径别名指向 src 目录
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    
    return config;
  },
  
  // 确保 TypeScript 路径别名也能被正确解析
  experimental: {
    // 禁用某些可能导致问题的实验性功能
    turboMode: false,
  },
};

module.exports = withMDX(nextConfig);
