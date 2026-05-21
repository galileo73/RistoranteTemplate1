/**
 * Build Configuration Script
 *
 * Replaces placeholders in public files with values from config.
 * Run before build: node scripts/build-config.js
 *
 * NOTE: This script modifies source files in public/.
 * For white-label deployments, run this before each client build.
 * Commit placeholder versions to git, not replaced versions.
 */

const fs = require('fs');
const path = require('path');

console.log('🔄 Processing build configuration...\n');

// ============================================
// Load Configurations
// ============================================

const restaurantPath = path.join(__dirname, '../src/config/restaurant.js');
const themePath = path.join(__dirname, '../src/config/theme.js');

const restaurantContent = fs.readFileSync(restaurantPath, 'utf-8');
const themeContent = fs.readFileSync(themePath, 'utf-8');

// ============================================
// Extract Values from Restaurant Config
// ============================================

// Extract name (simple string)
const nameMatch = restaurantContent.match(/name:\s*["']([^"']+)["']/);
const restaurantName = nameMatch ? nameMatch[1] : 'Restaurant';

// Extract seo.description (English)
const descMatch = restaurantContent.match(/description:\s*\{[\s\S]*?en:\s*["']([^"']+)["']/);
const description = descMatch ? descMatch[1] : 'Restaurant description';

// Extract seo.keywords array
const keywordsMatch = restaurantContent.match(/keywords:\s*\[([\s\S]*?)\]/);
const keywords = keywordsMatch
  ? keywordsMatch[1].split(',').map(k => k.trim().replace(/["']/g, '')).join(', ')
  : 'restaurant, food, dining';

// Extract hero image for OG image
const heroImageMatch = restaurantContent.match(/backgroundImage:\s*["']([^"']+)["']/);
const ogImage = heroImageMatch ? heroImageMatch[1] : '';

// Extract seo.title (English)
const titleMatch = restaurantContent.match(/title:\s*\{[\s\S]*?en:\s*["']([^"']+)["']/);
const seoTitle = titleMatch ? titleMatch[1] : restaurantName;

// ============================================
// Extract Values from Theme Config
// ============================================

// Extract primary color for theme-color
const primaryColorMatch = themeContent.match(/DEFAULT:\s*"(#[A-Fa-f0-9]+)"/);
const themeColor = primaryColorMatch ? primaryColorMatch[1] : '#2F3A2F';

// ============================================
// Build Replacements
// ============================================

// Get current date for sitemap
const lastmod = new Date().toISOString().split('T')[0];

// Site URL (from env or default)
const siteUrl = process.env.SITE_URL || 'https://yourrestaurant.com';

const replacements = {
  '%RESTAURANT_NAME%': restaurantName,
  '%RESTAURANT_DESCRIPTION%': description,
  '%RESTAURANT_KEYWORDS%': keywords,
  '%RESTAURANT_TITLE%': seoTitle,
  '%OG_IMAGE_URL%': ogImage,
  '%THEME_COLOR%': themeColor,
  '%SITE_URL%': siteUrl,
  '%LASTMOD%': lastmod
};

// ============================================
// Log Extracted Values
// ============================================

console.log('   Restaurant:', restaurantName);
console.log('   Description:', description.substring(0, 50) + '...');
console.log('   Keywords:', keywords.substring(0, 50) + '...');
console.log('   Theme Color:', themeColor);
console.log('   Site URL:', siteUrl);
console.log('   Last Modified:', lastmod);
console.log('');

// ============================================
// Process Files
// ============================================

const files = [
  { path: '../public/index.html', name: 'index.html' },
  { path: '../public/sitemap.xml', name: 'sitemap.xml' },
  { path: '../public/robots.txt', name: 'robots.txt' },
  { path: '../public/manifest.json', name: 'manifest.json' }
];

let successCount = 0;

for (const file of files) {
  const filePath = path.join(__dirname, file.path);

  if (!fs.existsSync(filePath)) {
    console.log(`   ⚠️  Skipping ${file.name} (not found)`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf-8');
  let replaced = false;

  for (const [placeholder, value] of Object.entries(replacements)) {
    if (content.includes(placeholder)) {
      content = content.split(placeholder).join(value);
      replaced = true;
    }
  }

  if (replaced) {
    fs.writeFileSync(filePath, content);
    console.log(`   ✅ Updated ${file.name}`);
    successCount++;
  } else {
    console.log(`   ℹ️  No placeholders in ${file.name}`);
  }
}

// ============================================
// Summary
// ============================================

console.log('');
if (successCount === files.length) {
  console.log('✨ Build configuration complete!');
  console.log('   All placeholders replaced successfully.\n');
} else {
  console.log('⚠️  Build configuration partially complete.');
  console.log(`   ${successCount}/${files.length} files updated.\n`);
}

// ============================================
// Warning for White-Label
// ============================================

console.log('📌 NOTE: Source files have been modified.');
console.log('   For white-label deployments:');
console.log('   1. Build with these values');
console.log('   2. Run: git checkout public/ to restore placeholders');
console.log('   3. Or commit replaced versions for production\n');