import fs from 'fs';
import path from 'path';

const cnameContent = 'antoniogou.com';
const outDir = path.join(path.resolve(), 'docs'); // Same as your outDir in vite.config.js

fs.writeFileSync(path.join(outDir, 'CNAME'), cnameContent, 'utf8');
