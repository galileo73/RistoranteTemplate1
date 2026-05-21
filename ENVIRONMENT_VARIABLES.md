# Environment Variables Reference

## Frontend Variables

### Required

| Variable | Description | Example |
|----------|-------------|---------|
| `REACT_APP_BACKEND_URL` | Backend API URL | `https://api.yourrestaurant.com` |

### Optional

| Variable | Description | Example |
|----------|-------------|---------|
| `REACT_APP_GOOGLE_MAPS_KEY` | Google Maps API key for embedded maps | `AIza...` |
| `REACT_APP_GA_TRACKING_ID` | Google Analytics tracking ID | `G-XXXXXXXXXX` |

### Frontend .env File

Create `frontend/.env`:

```env
# Required
REACT_APP_BACKEND_URL=https://your-backend-url.com

# Optional
REACT_APP_GOOGLE_MAPS_KEY=your_google_maps_api_key
REACT_APP_GA_TRACKING_ID=G-XXXXXXXXXX
```

## Backend Variables

### Required

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URL` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net` |
| `DB_NAME` | Database name | `restaurant_prod` |

### Optional

| Variable | Description | Default |
|----------|-------------|---------|
| `CORS_ORIGINS` | Allowed frontend origins (comma-separated) | `*` |
| `ENVIRONMENT` | Environment name | `development` |
| `LOG_LEVEL` | Logging level | `info` |

### Backend .env File

Create `backend/.env`:

```env
# Required
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net
DB_NAME=restaurant_prod

# Optional
CORS_ORIGINS=https://yourrestaurant.com,https://www.yourrestaurant.com
ENVIRONMENT=production
LOG_LEVEL=info
```

## Deployment Platform Variables

### Vercel

Set via dashboard or CLI:

```bash
vercel env add REACT_APP_BACKEND_URL production
vercel env add REACT_APP_GOOGLE_MAPS_KEY production
```

### Netlify

Set via `netlify.toml` or dashboard:

```toml
[build.environment]
  REACT_APP_BACKEND_URL = "https://api.yourrestaurant.com"
```

Or in Netlify dashboard: Site settings > Build & deploy > Environment

### Railway

Set via CLI:

```bash
railway variables set MONGO_URL="mongodb+srv://..."
railway variables set DB_NAME="restaurant_prod"
railway variables set CORS_ORIGINS="https://yourrestaurant.com"
```

## Security Notes

1. **Never commit `.env` files** - They should be in `.gitignore`
2. **Use different values per environment** - dev, staging, production
3. **Rotate credentials** - Change API keys periodically
4. **Restrict CORS** - Only allow your actual domains in production
5. **Use HTTPS** - Required for secure API calls
6. **MongoDB Atlas** - Use connection strings with limited permissions

## Variable Precedence

1. System environment variables (highest priority)
2. `.env` file
3. Default values in code (lowest priority)

## Validation

The app validates required variables on startup:

```javascript
// frontend/src/config/env.js
export const env = {
  backendUrl: process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000',
  googleMapsKey: process.env.REACT_APP_GOOGLE_MAPS_KEY || '',
  gaTrackingId: process.env.REACT_APP_GA_TRACKING_ID || '',
};
```

Missing `REACT_APP_BACKEND_URL` shows a warning in development mode.