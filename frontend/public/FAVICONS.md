# Favicon & Icon Generation

The following placeholder files are needed in `frontend/public/`:

## Required Files

| File | Size | Purpose |
|------|------|---------|
| `favicon.ico` | 16x16, 32x32 | Browser tab icon |
| `logo192.png` | 192x192 | Android/iOS icon |
| `logo512.png` | 512x512 | PWA splash screen |
| `og-image.png` | 1200x630 | Social media sharing |

## How to Generate

### Option 1: Use Online Tool
1. Go to https://realfavicongenerator.net/
2. Upload your logo/image
3. Download generated files
4. Extract to `frontend/public/`

### Option 2: Use ImageMagick
```bash
# From a square logo.png
convert logo.png -resize 16x16 favicon.ico
convert logo.png -resize 192x192 logo192.png
convert logo.png -resize 512x512 logo512.png
convert logo.png -resize 1200x630 -background white -gravity center -extent 1200x630 og-image.png
```

### Option 3: Use Sharp (Node.js)
```javascript
const sharp = require('sharp');

// Generate all sizes from logo.png
sharp('logo.png')
  .resize(16, 16)
  .toFile('favicon.ico');

sharp('logo.png')
  .resize(192, 192)
  .toFile('logo192.png');

sharp('logo.png')
  .resize(512, 512)
  .toFile('logo512.png');

sharp('logo.png')
  .resize(1200, 630)
  .toFile('og-image.png');
```

## Temporary Placeholders

Until you have the actual icons, you can:
1. Use a simple colored square as placeholder
2. Use the restaurant logo from config
3. Generate from brand colors

## After Adding Icons

1. Update `manifest.json` with correct icon paths
2. Verify icons load in browser
3. Test on mobile devices
4. Test social media sharing with og-image