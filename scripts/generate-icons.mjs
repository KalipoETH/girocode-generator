import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = join(__dirname, '../public/logo-dark.jpg');
const out = join(__dirname, '../public/icons');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

for (const size of sizes) {
  await sharp(src)
    .resize(size, size, { fit: 'cover' })
    .png()
    .toFile(join(out, `icon-${size}x${size}.png`));
  console.log(`✓ icon-${size}x${size}.png`);
}

// Maskable Icon: Logo auf dunkelgrünem Hintergrund (#0b0c10) mit ~10% Padding (Safe Zone)
const maskableSize = 512;
const logoSize = Math.round(maskableSize * 0.8); // 80% der Fläche
const padding = Math.round((maskableSize - logoSize) / 2);

const logoBuffer = await sharp(src)
  .resize(logoSize, logoSize, { fit: 'cover' })
  .png()
  .toBuffer();

await sharp({
  create: {
    width: maskableSize,
    height: maskableSize,
    channels: 4,
    background: { r: 11, g: 12, b: 16, alpha: 1 },
  },
})
  .composite([{ input: logoBuffer, top: padding, left: padding }])
  .png()
  .toFile(join(out, 'maskable-icon-512x512.png'));
console.log('✓ maskable-icon-512x512.png');

// Apple Touch Icon: 180x180, kein transparenter Hintergrund
const appleSize = 180;
const appleLogoSize = Math.round(appleSize * 0.85);
const applePadding = Math.round((appleSize - appleLogoSize) / 2);

const appleLogoBuffer = await sharp(src)
  .resize(appleLogoSize, appleLogoSize, { fit: 'cover' })
  .png()
  .toBuffer();

await sharp({
  create: {
    width: appleSize,
    height: appleSize,
    channels: 4,
    background: { r: 11, g: 12, b: 16, alpha: 1 },
  },
})
  .composite([{ input: appleLogoBuffer, top: applePadding, left: applePadding }])
  .png()
  .toFile(join(out, 'apple-touch-icon.png'));
console.log('✓ apple-touch-icon.png');

console.log('\nAlle Icons erfolgreich generiert → public/icons/');
