#!/usr/bin/env node
/**
 * 从飞书知识库导出 7 天教程
 * 输出：Markdown 文件 + 图片资源
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// 飞书配置
const FEISHU_APP_ID = 'cli_a9f759afe1f89cd4';
const FEISHU_APP_SECRET = 'AqGxpB1V30fP7qFbLZhwpbBABFnYAGn8';

// 7天教程文档 ID
const DOCS = [
  { day: 1, docId: 'PEqFdjg4mobZobxUQRDcQ9E6nve', title: 'Day 1: 初识 OpenClaw' },
  { day: 2, docId: 'AfFzd2HPSoSvx0xRLOCcLhqwndd', title: 'Day 2: 深入对话' },
  { day: 3, docId: 'UbmzdGMa7o4cFExGcJgcuPponGc', title: 'Day 3: 文件与代码' },
  { day: 4, docId: 'DIzVdZpeqojgYFxYrZNcVbPcnoc', title: 'Day 4: 网络能力' },
  { day: 5, docId: 'EKAxdyCWnoL0bGxS3Frcx0ednDc', title: 'Day 5: 技能扩展' },
  { day: 6, docId: 'PnyPd6GuRoH9WOxFWPgc3l3Knnf', title: 'Day 6: 自动化' },
  { day: 7, docId: 'P92sdbVk7oKtiex9FQscHQh8nrf', title: 'Day 7: 高级技巧' },
];

// 输出目录
const OUTPUT_DIR = path.join(__dirname, '..', 'content', 'days');
const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images', 'days');

// Block type 映射
const BLOCK_TYPES = {
  1: 'page',
  2: 'text',
  3: 'heading1',
  4: 'heading2',
  5: 'heading3',
  6: 'heading4',
  7: 'heading5',
  8: 'heading6',
  9: 'heading7',
  10: 'heading8',
  11: 'heading9',
  12: 'bullet',
  13: 'ordered',
  14: 'code',
  15: 'quote',
  16: 'equation',
  17: 'todo',
  18: 'bitable',
  19: 'divider',
  20: 'file',
  21: 'grid',
  22: 'callout',
  23: 'chat_card',
  24: 'diagram',
  25: 'table',
  26: 'table_cell',
  27: 'image',
  28: 'widget',
  29: 'iframe',
  30: 'isv',
  31: 'grid',
  32: 'grid_column',
  33: 'view',
  34: 'undefined',
};

let token = null;

async function getToken() {
  if (token) return token;
  
  const res = await fetch('https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      app_id: FEISHU_APP_ID,
      app_secret: FEISHU_APP_SECRET,
    }),
  });
  const data = await res.json();
  token = data.tenant_access_token;
  return token;
}

async function getDocBlocks(docId) {
  const token = await getToken();
  const blocks = [];
  let pageToken = '';
  
  do {
    const url = `https://open.feishu.cn/open-apis/docx/v1/documents/${docId}/blocks?page_size=500${pageToken ? '&page_token=' + pageToken : ''}`;
    const res = await fetch(url, {
      headers: { 'Authorization': `Bearer ${token}` },
    });
    const data = await res.json();
    
    if (data.data?.items) {
      blocks.push(...data.data.items);
    }
    pageToken = data.data?.page_token || '';
  } while (pageToken);
  
  return blocks;
}

async function downloadImage(fileToken, outputPath, day) {
  const token = await getToken();
  
  // 先获取图片下载链接
  const url = `https://open.feishu.cn/open-apis/drive/v1/medias/${fileToken}/download`;
  
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: { 'Authorization': `Bearer ${token}` },
    }, (res) => {
      if (res.statusCode === 302 || res.statusCode === 301) {
        // 跟随重定向
        https.get(res.headers.location, (imgRes) => {
          const chunks = [];
          imgRes.on('data', chunk => chunks.push(chunk));
          imgRes.on('end', () => {
            const buffer = Buffer.concat(chunks);
            fs.writeFileSync(outputPath, buffer);
            console.log(`  ✓ Downloaded image: ${path.basename(outputPath)}`);
            resolve(outputPath);
          });
          imgRes.on('error', reject);
        });
      } else if (res.statusCode === 200) {
        const chunks = [];
        res.on('data', chunk => chunks.push(chunk));
        res.on('end', () => {
          const buffer = Buffer.concat(chunks);
          fs.writeFileSync(outputPath, buffer);
          console.log(`  ✓ Downloaded image: ${path.basename(outputPath)}`);
          resolve(outputPath);
        });
        res.on('error', reject);
      } else {
        console.log(`  ✗ Failed to download image: ${res.statusCode}`);
        resolve(null);
      }
    }).on('error', reject);
  });
}

function extractTextContent(elements) {
  if (!elements) return '';
  return elements.map(el => {
    let text = el.text_run?.content || '';
    const style = el.text_run?.text_element_style;
    
    if (style?.bold) text = `**${text}**`;
    if (style?.italic) text = `*${text}*`;
    if (style?.strikethrough) text = `~~${text}~~`;
    if (style?.inline_code) text = `\`${text}\``;
    if (style?.link?.url) text = `[${text}](${style.link.url})`;
    
    return text;
  }).join('');
}

async function blocksToMarkdown(blocks, day) {
  const lines = [];
  let inCodeBlock = false;
  let codeContent = '';
  let codeLanguage = '';
  let listDepth = 0;
  let imageCount = 0;
  
  // 创建图片目录
  const dayImagesDir = path.join(IMAGES_DIR, `day${day}`);
  if (!fs.existsSync(dayImagesDir)) {
    fs.mkdirSync(dayImagesDir, { recursive: true });
  }
  
  for (const block of blocks) {
    const type = BLOCK_TYPES[block.block_type] || 'unknown';
    
    switch (type) {
      case 'page':
        // 跳过页面 block
        break;
        
      case 'text':
        const text = extractTextContent(block.text?.elements);
        if (text.trim()) lines.push(text);
        else lines.push('');
        break;
        
      case 'heading1':
        lines.push(`# ${extractTextContent(block.heading1?.elements)}`);
        break;
      case 'heading2':
        lines.push(`## ${extractTextContent(block.heading2?.elements)}`);
        break;
      case 'heading3':
        lines.push(`### ${extractTextContent(block.heading3?.elements)}`);
        break;
      case 'heading4':
        lines.push(`#### ${extractTextContent(block.heading4?.elements)}`);
        break;
        
      case 'bullet':
        const bulletText = extractTextContent(block.bullet?.elements);
        lines.push(`- ${bulletText}`);
        break;
        
      case 'ordered':
        const orderedText = extractTextContent(block.ordered?.elements);
        lines.push(`1. ${orderedText}`);
        break;
        
      case 'code':
        const codeBlock = block.code;
        let lang = codeBlock?.style?.language || '';
        // language 可能是数字 ID，需要映射
        const langMap = {
          1: 'plaintext', 2: 'abap', 3: 'ada', 4: 'apache', 5: 'apex',
          6: 'assembly', 7: 'bash', 8: 'csharp', 9: 'cpp', 10: 'c',
          11: 'cobol', 12: 'css', 13: 'coffeescript', 14: 'd', 15: 'dart',
          16: 'delphi', 17: 'django', 18: 'dockerfile', 19: 'erlang', 20: 'fortran',
          21: 'foxpro', 22: 'go', 23: 'groovy', 24: 'html', 25: 'htmlbars',
          26: 'http', 27: 'haskell', 28: 'json', 29: 'java', 30: 'javascript',
          31: 'julia', 32: 'kotlin', 33: 'latex', 34: 'lisp', 35: 'lua',
          36: 'matlab', 37: 'makefile', 38: 'markdown', 39: 'nginx', 40: 'objectivec',
          41: 'opencl', 42: 'php', 43: 'perl', 44: 'powershell', 45: 'prolog',
          46: 'protobuf', 47: 'python', 48: 'r', 49: 'rpm', 50: 'ruby',
          51: 'rust', 52: 'sas', 53: 'scss', 54: 'sql', 55: 'scala',
          56: 'scheme', 57: 'shell', 58: 'swift', 59: 'thrift', 60: 'typescript',
          61: 'vbscript', 62: 'vbnet', 63: 'xml', 64: 'yaml', 65: 'cmake',
          66: 'diff', 67: 'gherkin', 68: 'graphql', 69: 'less', 70: 'nix',
          71: 'svelte', 72: 'vue', 73: 'wasm', 74: 'toml', 75: 'glsl',
        };
        if (typeof lang === 'number') {
          lang = langMap[lang] || 'plaintext';
        } else if (typeof lang === 'string') {
          lang = lang.toLowerCase();
        } else {
          lang = '';
        }
        const codeText = extractTextContent(codeBlock?.elements);
        lines.push('```' + lang);
        lines.push(codeText);
        lines.push('```');
        break;
        
      case 'quote':
        const quoteText = extractTextContent(block.quote?.elements);
        lines.push(`> ${quoteText}`);
        break;
        
      case 'divider':
        lines.push('---');
        break;
        
      case 'callout':
        const calloutText = extractTextContent(block.callout?.elements);
        const emoji = block.callout?.emoji_id || '💡';
        lines.push(`> ${emoji} ${calloutText}`);
        break;
        
      case 'image':
        imageCount++;
        const imageBlock = block.image;
        const fileToken = imageBlock?.token;
        if (fileToken) {
          // 先用占位符，图片后面通过浏览器导出
          lines.push(`![Image ${imageCount}](FEISHU_IMAGE:${fileToken})`);
          console.log(`  📷 Image placeholder: ${fileToken}`);
        }
        break;
        
      case 'grid':
      case 'grid_column':
        // Grid 布局，内容在子 blocks 中，这里跳过
        break;
        
      default:
        // 未知类型，添加注释
        // lines.push(`<!-- Unknown block type: ${type} (${block.block_type}) -->`);
        break;
    }
  }
  
  return lines.join('\n');
}

async function exportDoc(doc) {
  console.log(`\nExporting Day ${doc.day}: ${doc.title}`);
  
  // 获取文档 blocks
  const blocks = await getDocBlocks(doc.docId);
  console.log(`  Found ${blocks.length} blocks`);
  
  // 转换为 Markdown
  const markdown = await blocksToMarkdown(blocks, doc.day);
  
  // 添加 frontmatter
  const content = `---
title: "${doc.title}"
day: ${doc.day}
description: "OpenClaw 7天教程 - ${doc.title}"
---

${markdown}
`;
  
  // 写入文件
  const outputPath = path.join(OUTPUT_DIR, `day${doc.day}.md`);
  fs.writeFileSync(outputPath, content);
  console.log(`  ✓ Written to ${outputPath}`);
  
  return { day: doc.day, blocks: blocks.length };
}

async function main() {
  console.log('=== 飞书 7 天教程导出工具 ===\n');
  
  // 创建输出目录
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  if (!fs.existsSync(IMAGES_DIR)) {
    fs.mkdirSync(IMAGES_DIR, { recursive: true });
  }
  
  // 导出所有文档
  const results = [];
  for (const doc of DOCS) {
    try {
      const result = await exportDoc(doc);
      results.push(result);
    } catch (err) {
      console.error(`  ✗ Failed to export Day ${doc.day}: ${err.message}`);
    }
  }
  
  console.log('\n=== 导出完成 ===');
  console.log(`成功导出 ${results.length}/7 天的内容`);
  results.forEach(r => console.log(`  Day ${r.day}: ${r.blocks} blocks`));
}

main().catch(console.error);
