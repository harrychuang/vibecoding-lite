/**
 * Button「like」心形圖示（Figma MCP SVG）
 * Run: node scripts/download-like-icons.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '../src/assets/button-icons');

const URLS = [
  'https://www.figma.com/api/mcp/asset/a56212b8-1c9a-4b42-9083-7c8285ce98f7',
  'https://www.figma.com/api/mcp/asset/13446127-b212-411a-b79c-b6165a410fe3',
];

fs.mkdirSync(outDir, { recursive: true });

for (const url of URLS) {
  const id = url.split('/').pop();
  const dest = path.join(outDir, `${id}.svg`);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
    console.log('skip', id);
    continue;
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error(String(res.status));
  fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
  console.log('ok', id);
}
console.log('done');
