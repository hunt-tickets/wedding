import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const iconsDir = join(__dirname, '../public/icons');

// SVG with MP & PJ logo
const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="#1e3a5f"/>
  <rect x="40" y="40" width="432" height="432" fill="none" stroke="#c9a962" stroke-width="4"/>
  <rect x="56" y="56" width="400" height="400" fill="none" stroke="#c9a962" stroke-width="2" opacity="0.5"/>
  <text x="256" y="290" font-family="Georgia, serif" font-size="140" font-weight="300" fill="#ffffff" text-anchor="middle">MP&amp;PJ</text>
  <line x1="140" y1="330" x2="372" y2="330" stroke="#c9a962" stroke-width="3"/>
</svg>
`;

const sizes = [192, 512];

async function generateIcons() {
  for (const size of sizes) {
    const pngBuffer = await sharp(Buffer.from(svgContent))
      .resize(size, size)
      .png()
      .toBuffer();

    writeFileSync(join(iconsDir, `icon-${size}.png`), pngBuffer);
    console.log(`Generated icon-${size}.png`);
  }

  // Also generate apple-touch-icon
  const appleIcon = await sharp(Buffer.from(svgContent))
    .resize(180, 180)
    .png()
    .toBuffer();
  writeFileSync(join(iconsDir, 'apple-touch-icon.png'), appleIcon);
  console.log('Generated apple-touch-icon.png');
}

generateIcons().catch(console.error);
