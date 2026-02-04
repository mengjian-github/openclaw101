const fs = require('fs');
const path = require('path');
const https = require('https');

const APP_ID = process.env.FEISHU_APP_ID || 'cli_a9f759afe1f89cd4';
const APP_SECRET = process.env.FEISHU_APP_SECRET || 'AqGxpB1V30fP7qFbLZhwpbBABFnYAGn8';

// Token to Day mapping
const TOKEN_TO_DAY = {
  'Os6ybrqk2ougdtx3kFWcIe2rnyh': { day: 1, seq: 1 },
  'QEJsbh0eEoBSxgxJcYWcFZBpnab': { day: 1, seq: 2 },
  'ADjCbHTvmoVbDwxhxzdckSwOnde': { day: 2, seq: 1 },
  'AfxhbvKhKohSQ4xSntncqmdGnAY': { day: 2, seq: 2 },
  'G20jbQIYooeFHzxU8t4cBs7rnGe': { day: 2, seq: 3 },
  'H9Ryb8Wwyo6LiwxQwiAc1DoinQb': { day: 2, seq: 4 },
  'Jtaob8WM7oYt98xJexkc9yC0nng': { day: 2, seq: 5 },
  'Ld6FbGMQCoemiHxWTUmckx8Qnre': { day: 2, seq: 6 },
  'LlPKbf5CDoLveJxSSc0ccFFEnWg': { day: 2, seq: 7 },
  'M9QJbn28zoeiVRx3ZbncOiyhntf': { day: 2, seq: 8 },
  'OydvbbdZOoCiNKxgblpcNQxYnnN': { day: 2, seq: 9 },
  'UkRZbr5WbovmdgxgXRac5ih6nPg': { day: 2, seq: 10 },
  'XPmObJx3soKyZoxkg1XcPJpvnHY': { day: 2, seq: 11 },
  'YKk1bVbqeo4LqIxUkTLcTEEHnMf': { day: 2, seq: 12 },
  'PshrbTJTyoE4CDxBiO3csJNQnie': { day: 3, seq: 1 },
  'CH1Bb1R6GokCW1xiH5dc6hWMnOf': { day: 4, seq: 1 },
  'FPNHbQGfao6mMPx1SOjc77Kjnhh': { day: 4, seq: 2 },
  'IobGbiFGcoGaE1xzcjeceacHn8b': { day: 4, seq: 3 },
  'P9hob6viMoD2Tbxpf88cG7Jtnuf': { day: 4, seq: 4 },
  'PSbGbzTv3o4X3YxOd4zc46L4nod': { day: 4, seq: 5 },
  'SYcCbpbyOovmj0xVRHhcBbgbnxg': { day: 4, seq: 6 },
  'ULpAbmThrorLbZxNb7Gc77UwnZf': { day: 4, seq: 7 },
  'WBUObjc90oijXAxqMJAc2flHnTc': { day: 4, seq: 8 },
  'BAPAbaiyVofEKmxVIdhc0oytn6f': { day: 5, seq: 1 },
  'OovxbOWRYo0DRoxW3vccg4Penld': { day: 5, seq: 2 },
  'QuxkbJDP7oWHDtxg3uLcNr4Cn1e': { day: 6, seq: 1 },
  'YkYMbNijAo1Hdqx2QgqcHvq9nOg': { day: 7, seq: 1 },
};

async function getToken() {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({ app_id: APP_ID, app_secret: APP_SECRET });
    const options = {
      hostname: 'open.feishu.cn',
      port: 443,
      path: '/open-apis/auth/v3/tenant_access_token/internal',
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': data.length }
    };
    const req = https.request(options, res => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        const json = JSON.parse(body);
        resolve(json.tenant_access_token);
      });
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function downloadImage(token, fileToken, outputPath) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'open.feishu.cn',
      port: 443,
      path: `/open-apis/drive/v1/medias/${fileToken}/download`,
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` }
    };
    const req = https.request(options, res => {
      if (res.statusCode === 200) {
        const chunks = [];
        res.on('data', chunk => chunks.push(chunk));
        res.on('end', () => {
          fs.writeFileSync(outputPath, Buffer.concat(chunks));
          resolve(true);
        });
      } else {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
          console.log(`Failed ${fileToken}: ${res.statusCode} - ${body.slice(0, 200)}`);
          resolve(false);
        });
      }
    });
    req.on('error', reject);
    req.end();
  });
}

async function main() {
  const token = await getToken();
  console.log('Got token:', token.slice(0, 20) + '...');
  
  const tokens = Object.keys(TOKEN_TO_DAY);
  let success = 0, failed = 0;
  
  for (const fileToken of tokens) {
    const info = TOKEN_TO_DAY[fileToken];
    const dir = path.join(__dirname, '..', 'public', 'images', 'days', `day${info.day}`);
    fs.mkdirSync(dir, { recursive: true });
    const outputPath = path.join(dir, `${info.seq}.png`);
    
    console.log(`Downloading ${fileToken} -> day${info.day}/${info.seq}.png`);
    const ok = await downloadImage(token, fileToken, outputPath);
    if (ok) success++; else failed++;
  }
  
  console.log(`\nDone: ${success} success, ${failed} failed`);
}

main().catch(console.error);
