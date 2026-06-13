import sharp from 'sharp';

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
for (const size of sizes) {
  await sharp('public/logo.svg')
    .resize(size, size)
    .toFile(`public/icons/icon-${size}x${size}.png`);
  console.log(`Generated icon-${size}x${size}.png`);
}

await sharp('public/logo.svg')
  .resize(180, 180)
  .toFile('public/icons/apple-touch-icon.png');
console.log('Generated apple-touch-icon.png');

await sharp('public/logo.svg')
  .resize(512, 512)
  .toFile('public/icons/maskable-icon-512x512.png');
console.log('Generated maskable-icon-512x512.png');

console.log('All icons generated successfully!');
