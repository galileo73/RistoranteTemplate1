/**
 * Restore Placeholder Files
 *
 * Restores placeholder versions of public files after build.
 * This keeps the git repository clean with placeholders for white-label.
 */

const fs = require('fs');
const path = require('path');

console.log('\n🔄 Restoring placeholder files...\n');

const publicDir = path.join(__dirname, '../public');

// Placeholder content for each file
const placeholders = {
  'index.html': `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#2F3A2F" />

    <!--
      NOTE: This is a template file. Replace placeholders before deployment:
      - %RESTAURANT_NAME% - Your restaurant name
      - %RESTAURANT_DESCRIPTION% - Your restaurant description
      - %RESTAURANT_KEYWORDS% - Your SEO keywords
      - %OG_IMAGE_URL% - Your Open Graph image URL
      - %SITE_URL% - Your website URL (e.g., https://yourrestaurant.com)
    -->
    <!-- Primary Meta Tags -->
    <meta name="title" content="%RESTAURANT_NAME% | Authentic Italian Restaurant" />
    <meta name="description" content="%RESTAURANT_DESCRIPTION%" />
    <meta name="keywords" content="%RESTAURANT_KEYWORDS%" />
    <meta name="author" content="%RESTAURANT_NAME%" />
    <meta name="robots" content="index, follow" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="restaurant" />
    <meta property="og:title" content="%RESTAURANT_NAME% | Authentic Italian Restaurant" />
    <meta property="og:description" content="%RESTAURANT_DESCRIPTION%" />
    <meta property="og:image" content="%OG_IMAGE_URL%" />
    <meta property="og:url" content="%SITE_URL%" />
    <meta property="og:site_name" content="%RESTAURANT_NAME%" />
    <meta property="og:locale" content="en_US" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="%RESTAURANT_NAME% | Authentic Italian Restaurant" />
    <meta name="twitter:description" content="%RESTAURANT_DESCRIPTION%" />
    <meta name="twitter:image" content="%OG_IMAGE_URL%" />

    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="%PUBLIC_URL%/favicon.svg" />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.svg" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap" rel="stylesheet" />

    <title>%RESTAURANT_TITLE%</title>

    <!-- JSON-LD Structured Data will be injected by React -->
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>`,

  'sitemap.xml': `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>%SITE_URL%/</loc>
    <lastmod>%LASTMOD%</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>%SITE_URL%/menu</loc>
    <lastmod>%LASTMOD%</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>%SITE_URL%/about</loc>
    <lastmod>%LASTMOD%</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>%SITE_URL%/gallery</loc>
    <lastmod>%LASTMOD%</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>%SITE_URL%/contact</loc>
    <lastmod>%LASTMOD%</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>%SITE_URL%/reservation</loc>
    <lastmod>%LASTMOD%</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`,

  'robots.txt': `# Robots.txt for Restaurant Template
# Replace %SITE_URL% with your actual domain

User-agent: *
Allow: /

# Sitemap location
Sitemap: %SITE_URL%/sitemap.xml

# Crawl delay (optional)
Crawl-delay: 1`,

  'manifest.json': `{
  "short_name": "%RESTAURANT_NAME%",
  "name": "%RESTAURANT_NAME% - Restaurant",
  "description": "%RESTAURANT_DESCRIPTION%",
  "icons": [
    {
      "src": "favicon.svg",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/svg+xml"
    },
    {
      "src": "logo192.svg",
      "type": "image/svg+xml",
      "sizes": "192x192"
    },
    {
      "src": "logo512.svg",
      "type": "image/svg+xml",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "%THEME_COLOR%",
  "background_color": "#ffffff",
  "categories": ["food", "restaurant"],
  "lang": "en"
}`
};

// Restore each file
for (const [filename, content] of Object.entries(placeholders)) {
  const filePath = path.join(publicDir, filename);
  fs.writeFileSync(filePath, content);
  console.log(`   ✅ Restored ${filename}`);
}

console.log('\n✨ Placeholder files restored!');
console.log('   Git repository is now clean for white-label deployment.\n');