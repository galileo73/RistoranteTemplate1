/**
 * Build Configuration Script
 *
 * Replaces placeholders in public files with values from config.
 * Run before build: node scripts/build-config.js
 */

const fs = require('fs');
const path = require('path');

// Load restaurant config
const configPath = path.join(__dirname, '../src/config/restaurant.js');

// Parse the config file (simple approach - read exports)
const configContent = fs.readFileSync(configPath, 'utf-8');

// Extract values from config (simplified parsing)
function extractValue(content, key) {
  const regex = new RegExp(`${key}:\\s*["']([^"']+)["']`);
  const match = content.match(regex);
  return match ? match[1] : '';
}

// Extract name from config
const nameMatch = configContent.match(/name:\s*["']([^"']+)["']/);
const restaurantName = nameMatch ? nameMatch[1] : 'Restaurant';

// Extract description (English version)
const descMatch = configContent.match(/description:\s*\{[\s\S]*?en:\s*["']([^"']+)["']/);
const description = descMatch ? descMatch[1] : '';

// Extract keywords
const keywordsMatch = configContent.match(/keywords:\s*\[([\s\S]*?)\]/);
const keywords = keywordsMatch
  ? keywordsMatch[1].split(',').map(k => k.trim().replace(/["']/g, '')).join(', ')
  : '';

// Extract hero image for OG image
const heroImageMatch = configContent.match(/backgroundImage:\s*["']([^"']+)["']/);
const ogImage = heroImageMatch ? heroImageMatch[1] : '';

// Get current date for sitemap
const lastmod = new Date().toISOString().split('T')[0];

// Site URL (from env or default)
const siteUrl = process.env.SITE_URL || 'https://yourrestaurant.com';

// Build replacements
const replacements = {
  '%RESTAURANT_NAME%': restaurantName,
  '%RESTAURANT_DESCRIPTION%': description,
  '%RESTAURANT_KEYWORDS%': keywords,
  '%OG_IMAGE_URL%': ogImage,
  '%SITE_URL%': siteUrl,
  '%LASTMOD%': lastmod
};

// Files to process
const files = [
  '../public/index.html',
  '../public/sitemap.xml'
];

console.log('🔄 Processing build configuration...');
console.log(`   Restaurant: ${restaurantName}`);

for (const file of files) {
  const filePath = path.join(__dirname, file);

  if (!fs.existsSync(filePath)) {
    console.log(`   ⚠️  Skipping ${file} (not found)`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  for (const [placeholder, value] of Object.entries(replacements)) {
    content = content.split(placeholder).join(value);
  }

  fs.writeFileSync(filePath, content);
  console.log(`   ✅ Updated ${file}`);
}

console.log('✨ Build configuration complete!');