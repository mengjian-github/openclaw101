#!/usr/bin/env node
/**
 * 从飞书页面提取图片
 * 使用 CDP 控制浏览器
 */

const fs = require('fs');
const path = require('path');
const http = require('http');

// 飞书文档 URL
const PAGES = [
  { day: 1, url: 'https://my.feishu.cn/wiki/MlyEwRKIwikkBlkGew0ckLfonEu' },
  { day: 2, url: 'https://my.feishu.cn/wiki/JCd8wARjliivC6kl4eMcGTvlnQg' },
  { day: 3, url: 'https://my.feishu.cn/wiki/DEaTwoZn0izajqkk98mcRge3nae' },
  { day: 4, url: 'https://my.feishu.cn/wiki/YJWNwd6s1isVz3kTVrbctCyAnIe' },
  { day: 5, url: 'https://my.feishu.cn/wiki/QGvewvXyEiFKOpkSPxrcQONrn8g' },
  { day: 6, url: 'https://my.feishu.cn/wiki/NGWmwdFkeioH5mkqem6cygRnnSe' },
  { day: 7, url: 'https://my.feishu.cn/wiki/HVttw0Cfcik8VWkHLs1c34DznFf' },
];

// 图片 token 到 day 的映射
const TOKEN_TO_DAY = {
  'Os6ybrqk2ougdtx3kFWcIe2rnyh': 1,
  'QEJsbh0eEoBSxgxJcYWcFZBpnab': 1,
  'YKk1bVbqeo4LqIxUkTLcTEEHnMf': 2,
  'UkRZbr5WbovmdgxgXRac5ih6nPg': 2,
  'G20jbQIYooeFHzxU8t4cBs7rnGe': 2,
  'AfxhbvKhKohSQ4xSntncqmdGnAY': 2,
  'OydvbbdZOoCiNKxgblpcNQxYnnN': 2,
  'H9Ryb8Wwyo6LiwxQwiAc1DoinQb': 2,
  'XPmObJx3soKyZoxkg1XcPJpvnHY': 2,
  'Ld6FbGMQCoemiHxWTUmckx8Qnre': 2,
  'M9QJbn28zoeiVRx3ZbncOiyhntf': 2,
  'ADjCbHTvmoVbDwxhxzdckSwOnde': 2,
  'LlPKbf5CDoLveJxSSc0ccFFEnWg': 2,
  'Jtaob8WM7oYt98xJexkc9yC0nng': 2,
  'PshrbTJTyoE4CDxBiO3csJNQnie': 3,
  'SYcCbpbyOovmj0xVRHhcBbgbnxg': 4,
  'ULpAbmThrorLbZxNb7Gc77UwnZf': 4,
  'IobGbiFGcoGaE1xzcjeceacHn8b': 4,
  'FPNHbQGfao6mMPx1SOjc77Kjnhh': 4,
  'CH1Bb1R6GokCW1xiH5dc6hWMnOf': 4,
  'P9hob6viMoD2Tbxpf88cG7Jtnuf': 4,
  'WBUObjc90oijXAxqMJAc2flHnTc': 4,
  'PSbGbzTv3o4X3YxOd4zc46L4nod': 4,
  'OovxbOWRYo0DRoxW3vccg4Penld': 5,
  'BAPAbaiyVofEKmxVIdhc0oytn6f': 5,
  'QuxkbJDP7oWHDtxg3uLcNr4Cn1e': 6,
  'YkYMbNijAo1Hdqx2QgqcHvq9nOg': 7,
};

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'days');

// 创建输出目录
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// 图片映射结果
const imageMapping = {};
const dayCounters = {};

// 从 base64 保存图片
function saveBase64Image(base64Data, token, day) {
  // 增加计数器
  dayCounters[day] = (dayCounters[day] || 0) + 1;
  const filename = `day${day}-${dayCounters[day]}.png`;
  const filePath = path.join(OUTPUT_DIR, filename);
  
  // 移除 data URL 前缀
  const base64Content = base64Data.replace(/^data:image\/\w+;base64,/, '');
  const buffer = Buffer.from(base64Content, 'base64');
  
  fs.writeFileSync(filePath, buffer);
  console.log(`  ✓ Saved: ${filename} (${Math.round(buffer.length / 1024)}KB)`);
  
  // 记录映射
  imageMapping[token] = `/images/days/${filename}`;
  
  return filename;
}

// 输出映射和替换命令
function outputResults() {
  console.log('\n=== 图片映射 ===\n');
  console.log(JSON.stringify(imageMapping, null, 2));
  
  // 保存映射文件
  const mappingPath = path.join(__dirname, 'image-mapping.json');
  fs.writeFileSync(mappingPath, JSON.stringify(imageMapping, null, 2));
  console.log(`\n✓ 映射表已保存到 ${mappingPath}`);
  
  console.log('\n=== 更新 Markdown 文件 ===\n');
  console.log('cd /root/clawd/sites/openclaw101');
  for (const [token, imgPath] of Object.entries(imageMapping)) {
    console.log(`sed -i 's|FEISHU_IMAGE:${token}|${imgPath}|g' content/days/day*.md`);
  }
}

// 主函数
async function main() {
  console.log('=== 飞书图片提取工具 ===');
  console.log('请在另一个终端运行 OpenClaw browser 命令来控制浏览器\n');
  
  // 从命令行读取 base64 数据
  // 格式: node extract-feishu-images.js <token> <base64_data>
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('用法:');
    console.log('  node extract-feishu-images.js save <token> <base64_data>');
    console.log('  node extract-feishu-images.js list');
    console.log('  node extract-feishu-images.js mapping');
    console.log('  node extract-feishu-images.js update-md');
    return;
  }
  
  const command = args[0];
  
  if (command === 'list') {
    console.log('需要提取的图片 tokens:\n');
    for (const [token, day] of Object.entries(TOKEN_TO_DAY)) {
      console.log(`Day ${day}: ${token}`);
    }
    return;
  }
  
  if (command === 'mapping') {
    // 读取现有映射
    const mappingPath = path.join(__dirname, 'image-mapping.json');
    if (fs.existsSync(mappingPath)) {
      const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf8'));
      console.log(JSON.stringify(mapping, null, 2));
    } else {
      console.log('映射文件不存在');
    }
    return;
  }
  
  if (command === 'update-md') {
    // 更新 Markdown 文件
    const mappingPath = path.join(__dirname, 'image-mapping.json');
    if (!fs.existsSync(mappingPath)) {
      console.log('映射文件不存在，请先提取图片');
      return;
    }
    
    const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf8'));
    const contentDir = path.join(__dirname, '..', 'content', 'days');
    
    for (let day = 1; day <= 7; day++) {
      const mdPath = path.join(contentDir, `day${day}.md`);
      if (!fs.existsSync(mdPath)) continue;
      
      let content = fs.readFileSync(mdPath, 'utf8');
      let updated = false;
      
      for (const [token, imgPath] of Object.entries(mapping)) {
        const pattern = `FEISHU_IMAGE:${token}`;
        if (content.includes(pattern)) {
          content = content.replace(new RegExp(pattern, 'g'), imgPath);
          updated = true;
        }
      }
      
      if (updated) {
        fs.writeFileSync(mdPath, content);
        console.log(`✓ Updated: day${day}.md`);
      }
    }
    return;
  }
  
  if (command === 'save') {
    const token = args[1];
    const base64Data = args[2];
    
    if (!token || !base64Data) {
      console.log('用法: node extract-feishu-images.js save <token> <base64_data>');
      return;
    }
    
    const day = TOKEN_TO_DAY[token];
    if (!day) {
      console.log(`未知的 token: ${token}`);
      return;
    }
    
    // 读取现有映射
    const mappingPath = path.join(__dirname, 'image-mapping.json');
    let existingMapping = {};
    if (fs.existsSync(mappingPath)) {
      existingMapping = JSON.parse(fs.readFileSync(mappingPath, 'utf8'));
      // 计算已有的计数器
      for (const [t, p] of Object.entries(existingMapping)) {
        const d = TOKEN_TO_DAY[t];
        const match = p.match(/day(\d+)-(\d+)\.png/);
        if (match && parseInt(match[1]) === d) {
          dayCounters[d] = Math.max(dayCounters[d] || 0, parseInt(match[2]));
        }
      }
    }
    
    Object.assign(imageMapping, existingMapping);
    saveBase64Image(base64Data, token, day);
    
    // 保存更新后的映射
    fs.writeFileSync(mappingPath, JSON.stringify(imageMapping, null, 2));
    console.log(`✓ 映射已更新: ${Object.keys(imageMapping).length} 张图片`);
  }
}

main().catch(console.error);
