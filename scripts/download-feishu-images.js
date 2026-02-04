#!/usr/bin/env node
/**
 * 通过飞书 URL 模式下载图片
 * 需要先在浏览器中登录飞书
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// 图片 token 列表
const IMAGE_TOKENS = [
  { token: 'Os6ybrqk2ougdtx3kFWcIe2rnyh', day: 1 },
  { token: 'QEJsbh0eEoBSxgxJcYWcFZBpnab', day: 1 },
  { token: 'YKk1bVbqeo4LqIxUkTLcTEEHnMf', day: 2 },
  { token: 'UkRZbr5WbovmdgxgXRac5ih6nPg', day: 2 },
  { token: 'G20jbQIYooeFHzxU8t4cBs7rnGe', day: 2 },
  { token: 'AfxhbvKhKohSQ4xSntncqmdGnAY', day: 2 },
  { token: 'OydvbbdZOoCiNKxgblpcNQxYnnN', day: 2 },
  { token: 'H9Ryb8Wwyo6LiwxQwiAc1DoinQb', day: 2 },
  { token: 'XPmObJx3soKyZoxkg1XcPJpvnHY', day: 2 },
  { token: 'Ld6FbGMQCoemiHxWTUmckx8Qnre', day: 2 },
  { token: 'M9QJbn28zoeiVRx3ZbncOiyhntf', day: 2 },
  { token: 'ADjCbHTvmoVbDwxhxzdckSwOnde', day: 2 },
  { token: 'LlPKbf5CDoLveJxSSc0ccFFEnWg', day: 2 },
  { token: 'Jtaob8WM7oYt98xJexkc9yC0nng', day: 2 },
  { token: 'PshrbTJTyoE4CDxBiO3csJNQnie', day: 3 },
  { token: 'SYcCbpbyOovmj0xVRHhcBbgbnxg', day: 4 },
  { token: 'ULpAbmThrorLbZxNb7Gc77UwnZf', day: 4 },
  { token: 'IobGbiFGcoGaE1xzcjeceacHn8b', day: 4 },
  { token: 'FPNHbQGfao6mMPx1SOjc77Kjnhh', day: 4 },
  { token: 'CH1Bb1R6GokCW1xiH5dc6hWMnOf', day: 4 },
  { token: 'P9hob6viMoD2Tbxpf88cG7Jtnuf', day: 4 },
  { token: 'WBUObjc90oijXAxqMJAc2flHnTc', day: 4 },
  { token: 'PSbGbzTv3o4X3YxOd4zc46L4nod', day: 4 },
  { token: 'OovxbOWRYo0DRoxW3vccg4Penld', day: 5 },
  { token: 'BAPAbaiyVofEKmxVIdhc0oytn6f', day: 5 },
  { token: 'QuxkbJDP7oWHDtxg3uLcNr4Cn1e', day: 6 },
  { token: 'YkYMbNijAo1Hdqx2QgqcHvq9nOg', day: 7 },
];

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'days');

// 生成图片映射表
function generateImageMapping() {
  const mapping = {};
  const dayCounters = {};
  
  for (const img of IMAGE_TOKENS) {
    dayCounters[img.day] = (dayCounters[img.day] || 0) + 1;
    const filename = `day${img.day}-${dayCounters[img.day]}.png`;
    mapping[img.token] = {
      day: img.day,
      filename,
      path: `/images/days/${filename}`,
    };
  }
  
  return mapping;
}

async function main() {
  console.log('=== 飞书图片映射生成 ===\n');
  
  // 创建输出目录
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  
  const mapping = generateImageMapping();
  
  // 保存映射表
  const mappingPath = path.join(__dirname, 'image-mapping.json');
  fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2));
  console.log(`✓ 映射表已保存到 ${mappingPath}`);
  
  // 生成替换命令
  console.log('\n=== 更新 Markdown 文件 ===\n');
  
  for (const [token, info] of Object.entries(mapping)) {
    const pattern = `FEISHU_IMAGE:${token}`;
    const replacement = info.path;
    console.log(`sed -i 's|${pattern}|${replacement}|g' content/days/day*.md`);
  }
  
  console.log('\n=== 图片 URL 列表 ===\n');
  console.log('在浏览器中登录飞书后，可以访问以下 URL 下载图片：\n');
  
  for (const [token, info] of Object.entries(mapping)) {
    const url = `https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/v2/cover/${token}/?fallback_source=1&height=1280&width=1280`;
    console.log(`${info.filename}:`);
    console.log(`  ${url}\n`);
  }
}

main().catch(console.error);
