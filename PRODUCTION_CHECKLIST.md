# Production Deployment Checklist

Complete this checklist before deploying to production.

## Pre-Deployment (Required)

### 1. Environment Configuration
- [ ] Copy `.env.example` to `.env` in frontend/
- [ ] Copy `.env.example` to `.env` in backend/
- [ ] Set `REACT_APP_BACKEND_URL` to production API URL
- [ ] Set `MONGO_URL` to MongoDB Atlas connection string
- [ ] Set `CORS_ORIGINS` to production domain(s)
- [ ] Remove any test/demo data from database

### 2. Content Customization
- [ ] Edit `frontend/src/config/restaurant.js` with client data
- [ ] Edit `frontend/src/config/menu.js` with menu items
- [ ] Edit `backend/config/menu.py` with menu items
- [ ] Replace all image URLs with client images
- [ ] Update translations in `LanguageContext.js` if needed

### 3. SEO Setup
- [ ] Replace `%RESTAURANT_NAME%` in `public/index.html`
- [ ] Replace `%RESTAURANT_DESCRIPTION%` in `public/index.html`
- [ ] Replace `%RESTAURANT_KEYWORDS%` in `public/index.html`
- [ ] Replace `%OG_IMAGE_URL%` in `public/index.html`
- [ ] Replace `%SITE_URL%` in `public/sitemap.xml`
- [ ] Replace `%SITE_URL%` in `public/robots.txt`
- [ ] Replace `%THEME_COLOR%` in `public/manifest.json`
- [ ] Replace `%RESTAURANT_NAME%` in `public/manifest.json`

### 4. Assets
- [ ] Add `favicon.ico` (16x16, 32x32)
- [ ] Add `logo192.png` (192x192 for PWA)
- [ ] Add `logo512.png` (512x512 for PWA)
- [ ] Add `og-image.png` (1200x630 for social sharing)

### 5. Security
- [ ] Review `.env` files are in `.gitignore`
- [ ] Ensure no API keys in frontend code
- [ ] Set up HTTPS (automatic on Vercel/Netlify)
- [ ] Configure CORS origins properly

## Build & Test

### 6. Local Build
```bash
cd frontend
npm install
npm run build
```

### 7. Test Production Build
```bash
# Install serve globally
npm install -g serve

# Serve the build locally
serve -s build

# Test all pages:
# - Home (/)
# - Menu (/menu)
# - About (/about)
# - Gallery (/gallery)
# - Contact (/contact)
# - Reservation (/reservation)
```

### 8. Mobile Testing
- [ ] Test on mobile device
- [ ] Test on tablet
- [ ] Test on desktop browsers (Chrome, Firefox, Safari)
- [ ] Verify all images load
- [ ] Verify all links work
- [ ] Test reservation form
- [ ] Test contact form
- [ ] Test language switching

## Deployment

### 9. Frontend Deployment (Vercel)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd frontend
vercel

# Set environment variables in Vercel dashboard:
# - REACT_APP_BACKEND_URL
# - REACT_APP_GOOGLE_MAPS_KEY (optional)
```

### 10. Frontend Deployment (Netlify)
```bash
# Build
cd frontend
npm run build

# Drag 'build' folder to Netlify
# OR use Netlify CLI:
npm i -g netlify-cli
netlify deploy --prod --dir=build

# Set environment variables in Netlify dashboard
```

### 11. Backend Deployment (Railway)
```bash
# Install Railway CLI
npm i -g @railway/cli

# Login and deploy
cd backend
railway login
railway init
railway up

# Set environment variables:
railway variables set MONGO_URL=<your-mongodb-url>
railway variables set DB_NAME=<database-name>
railway variables set CORS_ORIGINS=<your-frontend-url>
```

### 12. Database Setup (MongoDB Atlas)
1. Create free cluster at mongodb.com
2. Create database user
3. Whitelist IP addresses (or use 0.0.0.0/0 for development)
4. Get connection string
5. Add to backend `.env` as `MONGO_URL`

## Post-Deployment

### 13. DNS Configuration
- [ ] Point custom domain to deployment
- [ ] Verify SSL certificate is active
- [ ] Update `CORS_ORIGINS` with final domain
- [ ] Update `%SITE_URL%` in all public files

### 14. Monitoring
- [ ] Set up uptime monitoring (UptimeRobot, Pingdom)
- [ ] Configure error logging (Sentry, LogRocket)
- [ ] Set up analytics (Google Analytics, Plausible)

### 15. Performance
- [ ] Run Lighthouse audit (target: 80+)
- [ ] Verify image optimization
- [ ] Check Core Web Vitals
- [ ] Test page load speed

## Go-Live

### 16. Final Checks
- [ ] Test reservation submission
- [ ] Test contact form
- [ ] Verify Google Maps loads (if API key set)
- [ ] Check all social links
- [ ] Test on multiple devices
- [ ] Verify backup/restore process

### 17. Launch
- [ ] Remove any "Coming Soon" notices
- [ ] Submit sitemap to Google Search Console
- [ ] Verify robots.txt is accessible
- [ ] Test social sharing (Facebook, Twitter, LinkedIn)

## Ongoing Maintenance

- [ ] Weekly: Check error logs
- [ ] Monthly: Update dependencies
- [ ] Quarterly: Review security patches
- [ ] As needed: Content updates via config files