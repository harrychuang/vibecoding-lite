/**
 * Figma Avatar default photo (102:62) — MCP asset as JPEG
 * Run: node scripts/download-avatar-asset.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const url = 'https://www.figma.com/api/mcp/asset/c5d27645-6e60-4f28-a9ef-a7899fef8dcb';
const id = url.split('/').pop();
const dest = path.join(__dirname, '../src/assets/avatar', `${id}.jpg`);

fs.mkdirSync(path.dirname(dest), { recursive: true });
if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
  console.log('skip', dest);
  process.exit(0);
}
const res = await fetch(url);
if (!res.ok) throw new Error(String(res.status));
fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
console.log('ok', dest);
