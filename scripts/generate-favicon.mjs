// scripts/generate-favicon.mjs
// Generates proper favicon files from the logo.png

import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');
const logoPath = join(publicDir, 'logo.png');

async function generateFavicons() {
  console.log('🎨 Generating favicons from logo.png...\n');

  // 1. Generate 32x32 PNG for ICO conversion
  const png32 = await sharp(logoPath)
    .resize(32, 32, { fit: 'contain', background: { r: 8, g: 13, b: 26, alpha: 1 } })
    .png()
    .toBuffer();
  console.log('✅ Generated 32x32 PNG');

  // 2. Generate 16x16 PNG for ICO conversion  
  const png16 = await sharp(logoPath)
    .resize(16, 16, { fit: 'contain', background: { r: 8, g: 13, b: 26, alpha: 1 } })
    .png()
    .toBuffer();
  console.log('✅ Generated 16x16 PNG');

  // 3. Generate proper .ico file with both sizes
  const icoBuffer = await pngToIco([png16, png32]);
  writeFileSync(join(publicDir, 'favicon.ico'), icoBuffer);
  console.log(`✅ favicon.ico created (${(icoBuffer.length / 1024).toFixed(1)} KB)`);

  // 4. Generate 192x192 PNG for favicon.png (used by modern browsers)
  await sharp(logoPath)
    .resize(192, 192, { fit: 'contain', background: { r: 8, g: 13, b: 26, alpha: 1 } })
    .png({ quality: 90 })
    .toFile(join(publicDir, 'favicon.png'));
  console.log('✅ favicon.png (192x192) created');

  // 5. Generate 180x180 Apple Touch Icon
  await sharp(logoPath)
    .resize(180, 180, { fit: 'contain', background: { r: 8, g: 13, b: 26, alpha: 1 } })
    .png({ quality: 90 })
    .toFile(join(publicDir, 'apple-touch-icon.png'));
  console.log('✅ apple-touch-icon.png (180x180) created');

  // 6. Generate 512x512 for PWA
  await sharp(logoPath)
    .resize(512, 512, { fit: 'contain', background: { r: 8, g: 13, b: 26, alpha: 1 } })
    .png({ quality: 90 })
    .toFile(join(publicDir, 'icon-512.png'));
  console.log('✅ icon-512.png (512x512) created');

  console.log('\n🎉 All favicons generated successfully!');
}

generateFavicons().catch(console.error);
