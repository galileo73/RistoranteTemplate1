/**
 * Generate Placeholder Icons
 *
 * Creates simple placeholder favicon and icons using SVG.
 * For production, replace with actual restaurant logo.
 */

const fs = require('fs');
const path = require('path');

// Read theme color from config
const themePath = path.join(__dirname, '../src/config/theme.js');
const themeContent = fs.readFileSync(themePath, 'utf-8');
const colorMatch = themeContent.match(/DEFAULT:\s*"(#[A-Fa-f0-9]+)"/);
const primaryColor = colorMatch ? colorMatch[1] : '#2F3A2F';

console.log('🎨 Generating placeholder icons...');
console.log(`   Primary color: ${primaryColor}\n`);

// SVG templates
const createSvg = (size, color) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" fill="${color}" rx="${size * 0.15}"/>
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="${size * 0.5}" font-weight="bold">R</text>
</svg>`;

// Create favicon.ico (base64 encoded simple icon)
// Note: Real favicon.ico requires binary format, but browsers accept PNG/SVG
const createFaviconPng = () => {
  // Simple 32x32 SVG that can work as favicon
  return createSvg(32, primaryColor);
};

// Create larger icons
const sizes = [
  { name: 'favicon.svg', size: 32, desc: 'Browser tab icon (SVG)' },
  { name: 'logo192.png', size: 192, desc: 'Android/iOS icon' },
  { name: 'logo512.png', size: 512, desc: 'PWA splash screen' }
];

const publicDir = path.join(__dirname, '../public');

// Write SVG favicon
const faviconSvg = createSvg(32, primaryColor);
fs.writeFileSync(path.join(publicDir, 'favicon.svg'), faviconSvg);
console.log('   ✅ Created favicon.svg (32x32)');

// Write larger SVGs (browsers can use SVG directly)
sizes.slice(1).forEach(({ name, size }) => {
  const svg = createSvg(size, primaryColor);
  // Save as SVG (PNG would require sharp or canvas, but SVG works)
  const svgName = name.replace('.png', '.svg');
  fs.writeFileSync(path.join(publicDir, svgName), svg);
  console.log(`   ✅ Created ${svgName} (${size}x${size})`);
});

// Update index.html to use SVG favicon
const indexPath = path.join(publicDir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf-8');

// Replace favicon link to use SVG
indexContent = indexContent.replace(
  /<link rel="icon"[^>]*>/,
  `<link rel="icon" type="image/svg+xml" href="%PUBLIC_URL%/favicon.svg" />`
);
indexContent = indexContent.replace(
  /<link rel="apple-touch-icon"[^>]*>/,
  `<link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.svg" />`
);

fs.writeFileSync(indexPath, indexContent);
console.log('   ✅ Updated index.html to use SVG icons');

// Update manifest.json to use SVG icons
const manifestPath = path.join(publicDir, 'manifest.json');
let manifestContent = fs.readFileSync(manifestPath, 'utf-8');
manifestContent = manifestContent.replace(
  /"src": "favicon\.ico"/g,
  '"src": "favicon.svg"'
);
manifestContent = manifestContent.replace(
  /"src": "logo192\.png"/g,
  '"src": "logo192.svg"'
);
manifestContent = manifestContent.replace(
  /"src": "logo512\.png"/g,
  '"src": "logo512.svg"'
);
manifestContent = manifestContent.replace(
  /"type": "image\/x-icon"/g,
  '"type": "image/svg+xml"'
);
manifestContent = manifestContent.replace(
  /"type": "image\/png"/g,
  '"type": "image/svg+xml"'
);

fs.writeFileSync(manifestPath, manifestContent);
console.log('   ✅ Updated manifest.json to use SVG icons');

console.log('\n✨ Placeholder icons generated!');
console.log('   For production, replace with actual restaurant logo.\n');