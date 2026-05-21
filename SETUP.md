# Client Setup Checklist

Complete this checklist to customize the template for a new client.

## Pre-Setup (5 minutes)

- [ ] Clone or download the repository
- [ ] Install Node.js 18+ and npm/yarn
- [ ] Install Python 3.11+ (for backend)

## Configuration (30-60 minutes)

### Step 1: Restaurant Information

Edit `frontend/src/config/restaurant.js`:

```javascript
export const restaurant = {
  name: "Your Restaurant Name",
  tagline: {
    cs: "Czech tagline",
    en: "English tagline",
    it: "Italian tagline"
  },
  address: {
    street: "Your Street 123",
    district: "District",
    city: "City",
    postal: "12345",
    coordinates: { lat: 50.0000, lng: 14.0000 }
  },
  contact: {
    phone: "+420 123 456 789",
    email: "info@yourrestaurant.com",
    whatsapp: "+420 123 456 789"
  },
  // ... continue with hours, social, etc.
};
```

### Step 2: Menu Items

Edit `frontend/src/config/menu.js`:

```javascript
export const menu = {
  categories: [
    {
      id: "antipasti",
      name: { cs: "Předkrmy", en: "Appetizers", it: "Antipasti" },
      items: [
        {
          name: "Dish Name",
          description: "Dish description",
          price: 180
        }
      ]
    }
  ]
};
```

### Step 3: Images

Replace all image URLs in `restaurant.js`:

- `hero.backgroundImage` - Hero section background
- `story.chefImage` - Chef photo
- `story.foodImage` - Food photo
- `story.locationImage` - Location/interior
- `story.interiorImage` - Interior photo
- `gallery[]` - Gallery images

**Image recommendations:**
- Hero: 1920x1080px minimum
- Gallery: 800x600px minimum
- All images: Use optimized JPEG/WebP

### Step 4: Translations (Optional)

Edit `frontend/src/context/LanguageContext.js` to update text translations.

### Step 5: Theme Colors (Optional)

Edit `frontend/src/config/theme.js` to customize colors.

## Deployment (15-30 minutes)

### Option A: Vercel (Recommended)

1. Create Vercel account
2. Install CLI: `npm i -g vercel`
3. Run: `cd frontend && vercel`
4. Set environment variables in Vercel dashboard

### Option B: Netlify

1. Create Netlify account
2. Run: `npm run build`
3. Drag `build` folder to Netlify
4. Set environment variables in Netlify dashboard

### Option C: Traditional Hosting

1. Run: `npm run build`
2. Upload `build` folder contents to web server
3. Configure server to redirect all requests to `index.html`

## Backend Setup (Optional)

If using reservations/contact forms:

1. Set up MongoDB (MongoDB Atlas free tier recommended)
2. Edit `backend/.env`:
   ```
   MONGO_URL=mongodb+srv://user:pass@cluster.mongodb.net
   DB_NAME=restaurant_prod
   CORS_ORIGINS=https://yourdomain.com
   ```
3. Deploy backend to Railway, Render, or your server

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Test reservation form (if backend configured)
- [ ] Test contact form (if backend configured)
- [ ] Verify mobile responsiveness
- [ ] Check Google Maps loads (if API key set)
- [ ] Test language switching
- [ ] Verify all images load
- [ ] Check SEO meta tags (view page source)
- [ ] Test on multiple browsers

## Custom Domain

1. Add domain in Vercel/Netlify dashboard
2. Update DNS records as instructed
3. Replace `%SITE_URL%` in `public/sitemap.xml` and `public/robots.txt`
4. Rebuild and redeploy

## Support

For issues or questions, refer to `CLAUDE.md` for technical details.