/**
 * One-off: fetch Figma MCP assets into src/assets/social-icons/ (API returns SVG; use .svg extension)
 * Run from frontend/storybook: node scripts/download-social-icons.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '../src/assets/social-icons');

const URLS = [
  'https://www.figma.com/api/mcp/asset/5c83363f-af8e-4577-a1fe-f351a8851cb8',
  'https://www.figma.com/api/mcp/asset/ba529fa1-b364-4513-ae3a-e1c4cbf6ff33',
  'https://www.figma.com/api/mcp/asset/ed8dd1ca-faa4-42a5-b03a-c55b77ab7886',
  'https://www.figma.com/api/mcp/asset/6ed29232-fd93-424a-b639-b1b8372bc295',
  'https://www.figma.com/api/mcp/asset/830eda43-3b83-4de3-8262-5bd24369b9fe',
  'https://www.figma.com/api/mcp/asset/b5dc36db-4de6-444f-a642-2cd5cfe94204',
  'https://www.figma.com/api/mcp/asset/d88f1027-2476-4ccc-91d8-bd73e1c6efb3',
  'https://www.figma.com/api/mcp/asset/edaffcbf-a305-49c6-8083-e1a8d9c5bb73',
  'https://www.figma.com/api/mcp/asset/751b0649-e3c6-4cdd-b88a-3ef70d58999b',
  'https://www.figma.com/api/mcp/asset/d694b6d3-8859-4949-858c-b70b08f8e070',
  'https://www.figma.com/api/mcp/asset/bea9be33-e913-4304-b662-dc77533fa17f',
  'https://www.figma.com/api/mcp/asset/921e0eb3-ae27-46c0-9b4b-250fa00b8ef2',
  'https://www.figma.com/api/mcp/asset/f85459b2-c004-4707-8b7a-ee8e15c8ba07',
  'https://www.figma.com/api/mcp/asset/6b1fe080-5084-43fa-aa7f-c5b81a116b77',
  'https://www.figma.com/api/mcp/asset/bdb6429d-3340-428c-9bbc-71a9f85c4d2c',
  'https://www.figma.com/api/mcp/asset/b4658343-986a-4b78-9e67-83061a098ca1',
  'https://www.figma.com/api/mcp/asset/deb5c265-ba5e-40c7-be67-031fdca997e9',
  'https://www.figma.com/api/mcp/asset/a7a06c2c-d48c-413c-8d46-aa046ad6c7ad',
  'https://www.figma.com/api/mcp/asset/70c7551c-7419-4f90-af8c-08eafcba2cce',
  'https://www.figma.com/api/mcp/asset/c080ca5f-c39a-419b-8c0e-38b6b929e505',
  'https://www.figma.com/api/mcp/asset/9c6f6463-dba3-4d95-9010-0a8900c3644e',
  'https://www.figma.com/api/mcp/asset/5324fe00-69ed-47fd-881f-e5d2aa2c534d',
  'https://www.figma.com/api/mcp/asset/f77ef9f1-9f24-44ce-9920-8b000316cb66',
  'https://www.figma.com/api/mcp/asset/25601a2a-eed6-47bb-9472-4d625206f92f',
  'https://www.figma.com/api/mcp/asset/9024bf18-2c51-4395-b86e-5fcdead215fb',
  'https://www.figma.com/api/mcp/asset/65938ab6-5c7e-4d06-a4c2-1692d3706012',
  'https://www.figma.com/api/mcp/asset/c9b11208-ef57-4d18-81a6-d6a842def5e2',
  'https://www.figma.com/api/mcp/asset/56bcf218-d219-46de-85af-429b3b460208',
  'https://www.figma.com/api/mcp/asset/cf7e45d9-9da9-4a66-ae43-9ae05485731a',
  'https://www.figma.com/api/mcp/asset/bc6b3710-957e-4d00-9496-6a8b56536814',
  'https://www.figma.com/api/mcp/asset/4fda357f-9fa8-4dd0-9174-fbd08397fa60',
  'https://www.figma.com/api/mcp/asset/ec1541e4-93ff-4981-b0a9-323d0732bd15',
  'https://www.figma.com/api/mcp/asset/a68f787a-ce3f-42c2-8240-31485be1baf7',
  'https://www.figma.com/api/mcp/asset/96696611-d2c4-4710-8e9a-1264a1c78993',
  'https://www.figma.com/api/mcp/asset/4d136117-1d0c-4a8e-a746-23cc4c4cac9b',
  'https://www.figma.com/api/mcp/asset/d2fcd7d7-9745-4dc6-902c-31788028f0cd',
  'https://www.figma.com/api/mcp/asset/e2f69561-60e1-47d6-b05f-c4781d53ab4d',
  'https://www.figma.com/api/mcp/asset/44abb913-60a1-4b47-9e48-789e71d862a5',
  'https://www.figma.com/api/mcp/asset/10b4b56f-fe93-474f-b945-66804deeed4c',
  'https://www.figma.com/api/mcp/asset/1f3f551a-f852-4045-a58a-b59ca9efe768',
  'https://www.figma.com/api/mcp/asset/fb138930-4353-4417-8b94-d5fb9c6bc60b',
  'https://www.figma.com/api/mcp/asset/0e9c5d83-cd1f-4223-ac67-159402e9f259',
  'https://www.figma.com/api/mcp/asset/357a667b-eb18-40c1-b904-0e6176e5f204',
  'https://www.figma.com/api/mcp/asset/25d7c7f9-2506-41b1-a382-79a0525db790',
  'https://www.figma.com/api/mcp/asset/db1a8886-158c-4eb1-8f83-e02caa073502',
  'https://www.figma.com/api/mcp/asset/863dd131-9b56-4b74-ab92-faaf331f39ec',
  'https://www.figma.com/api/mcp/asset/372e805c-6a1f-4324-92c2-9c462d8bf9c2',
  'https://www.figma.com/api/mcp/asset/df07dc31-be57-49ff-a94d-1629183db53a',
  'https://www.figma.com/api/mcp/asset/80fed2e3-4ba4-428b-85b7-003918e183f2',
  'https://www.figma.com/api/mcp/asset/aa1ddfe8-0788-43b4-8cd9-0d625cad0a04',
  'https://www.figma.com/api/mcp/asset/982e6df7-5d7d-4dd6-ad41-cc6a65fd58bf',
  'https://www.figma.com/api/mcp/asset/a5e3573e-6a71-47e3-97a7-2a2517a6bc60',
  'https://www.figma.com/api/mcp/asset/2152035f-18fb-4991-8484-00477d133666',
  'https://www.figma.com/api/mcp/asset/ef6e5596-0658-40f7-9e6d-721b9f95fb20',
  'https://www.figma.com/api/mcp/asset/e7d13b20-04ff-4ca1-aaaa-222498483b0a',
  'https://www.figma.com/api/mcp/asset/64f41b2a-4e72-4190-9739-6ec3fa6e8fe4',
  'https://www.figma.com/api/mcp/asset/ebfb8681-ab31-4308-bc55-5da8ba4ac673',
  'https://www.figma.com/api/mcp/asset/786b3a33-2eff-4072-8745-362bbea5674e',
  'https://www.figma.com/api/mcp/asset/7f8b5a40-fa84-4ff1-9c21-22386b058a91',
  'https://www.figma.com/api/mcp/asset/602b8ccb-0c37-4d81-a2a6-db03640c9363',
  'https://www.figma.com/api/mcp/asset/a5291e89-3303-4f26-ba85-aeed62d7f138',
  'https://www.figma.com/api/mcp/asset/3c96a359-875d-4715-bb78-1c1e2d39b2ad',
  'https://www.figma.com/api/mcp/asset/93f59a23-eca5-4834-a2d7-2e931a424041',
  'https://www.figma.com/api/mcp/asset/232ee221-6de6-470d-9eff-68bb45716a1e',
  'https://www.figma.com/api/mcp/asset/1a8b5cad-ae71-4c4b-a18f-e56bac1d0b3d',
  'https://www.figma.com/api/mcp/asset/fb84d9e4-7814-4cbd-a168-e4a123355931',
  'https://www.figma.com/api/mcp/asset/af6f96ae-ec26-4b8a-ac09-01f79b01a586',
  'https://www.figma.com/api/mcp/asset/d24bb05d-0bdc-47c3-9a23-b7d6fd8398b8',
  'https://www.figma.com/api/mcp/asset/fc1c05bc-7c1b-4e6c-8f9c-e35d7956ae1d',
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
  if (!res.ok) {
    throw new Error(`Failed ${url}: ${res.status}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  console.log('ok', id, buf.length);
}

console.log('done', URLS.length);
