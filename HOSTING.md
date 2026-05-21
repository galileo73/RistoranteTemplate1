# Hosting Configuration Guide

## Recommended Stack

| Component | Service | Cost |
|-----------|---------|------|
| Frontend | Vercel | Free tier |
| Backend | Railway | $5/month |
| Database | MongoDB Atlas | Free tier |
| Domain | Cloudflare | $10/year |

**Total: ~$15/year** (domain only)

---

## Option 1: Vercel + Railway (Recommended)

### Frontend: Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
cd frontend
vercel

# Production deployment
vercel --prod
```

**Configuration (`vercel.json`):**
- Already configured for SPA redirects
- Static asset caching enabled
- Security headers enabled

**Environment Variables:**
Set in Vercel dashboard: Project > Settings > Environment Variables

### Backend: Railway

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Initialize project
cd backend
railway init

# Deploy
railway up

# Set environment variables
railway variables set MONGO_URL="mongodb+srv://..."
railway variables set DB_NAME="restaurant_prod"
railway variables set CORS_ORIGINS="https://your-frontend.vercel.app"
```

### Database: MongoDB Atlas

1. Create free cluster at mongodb.com
2. Create database user (readWrite permissions)
3. Network Access: Add `0.0.0.0/0` (or specific Railway IPs)
4. Get connection string
5. Add to Railway environment variables

---

## Option 2: Netlify + Render

### Frontend: Netlify

```bash
# Build
cd frontend
npm run build

# Deploy via drag-and-drop
# OR use Netlify CLI
npm i -g netlify-cli
netlify deploy --prod --dir=build
```

**Configuration (`netlify.toml`):**
- Already configured for SPA redirects
- Headers configured

### Backend: Render

1. Create account at render.com
2. Create new Web Service
3. Connect GitHub repository
4. Set build command: `pip install -r requirements.txt`
5. Set start command: `uvicorn server:app --host 0.0.0.0 --port $PORT`
6. Add environment variables

---

## Option 3: Self-Hosted (VPS)

### Requirements
- Ubuntu 20.04+ or similar
- 1GB RAM minimum
- Node.js 18+
- Python 3.11+
- Nginx
- SSL certificate (Let's Encrypt)

### Nginx Configuration

```nginx
# /etc/nginx/sites-available/restaurant
server {
    listen 80;
    server_name yourrestaurant.com www.yourrestaurant.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourrestaurant.com www.yourrestaurant.com;

    ssl_certificate /etc/letsencrypt/live/yourrestaurant.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourrestaurant.com/privkey.pem;

    # Frontend
    location / {
        root /var/www/restaurant/build;
        try_files $uri $uri/ /index.html;
    }

    # Backend API
    location /api {
        proxy_pass http://127.0.0.1:8000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## Custom Domain Setup

### Vercel

1. Go to Project > Settings > Domains
2. Add your domain
3. Configure DNS:
   - Type: `A`
   - Name: `@`
   - Value: `76.76.21.21`
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com`

### Netlify

1. Go to Site settings > Domain management
2. Add custom domain
3. Configure DNS as instructed

### Railway Backend

Update CORS in backend `.env`:
```
CORS_ORIGINS=https://yourrestaurant.com,https://www.yourrestaurant.com
```

---

## SSL/HTTPS

- **Vercel**: Automatic SSL via Let's Encrypt
- **Netlify**: Automatic SSL via Let's Encrypt
- **Self-hosted**: Use Certbot for Let's Encrypt

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d yourrestaurant.com -d www.yourrestaurant.com
```

---

## Monitoring

### Uptime Monitoring (Free)
- UptimeRobot: https://uptimerobot.com
- Pingdom: https://pingdom.com

### Error Tracking
- Sentry: https://sentry.io (free tier available)

### Analytics
- Google Analytics: Free
- Plausible: Privacy-focused alternative
- Umami: Self-hosted alternative

---

## Backup Strategy

### MongoDB Atlas
- Automatic backups on paid tiers
- Export data periodically:
  ```bash
  mongodump --uri="mongodb+srv://..." --out=backup/
  ```

### Code Repository
- GitHub with GitHub Actions for CI/CD
- Regular pushes to main branch

---

## Cost Comparison

| Stack | Monthly Cost | Annual Cost |
|-------|-------------|-------------|
| Vercel Free + Railway Free + Atlas Free | $0 | $10 (domain only) |
| Vercel Pro + Railway Hobby + Atlas Free | $25 | $310 |
| Self-hosted VPS | $5-10 | $70-130 |

**Recommended: Free tier + custom domain = ~$10/year**