import sharp from 'sharp';
import fs from 'fs';

const svg = fs.readFileSync('./public/og-image.svg');
await sharp(Buffer.from(svg))
  .resize(1200, 630)
  .png()
  .toFile('./public/og-image.png');

console.log('og-image.png erstellt!');

