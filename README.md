# Ristorante Template

A white-label restaurant website template for restaurants, cafés, bars, and local food businesses.

## Quick Start

```bash
# Install dependencies
cd frontend && npm install

# Start development server
npm start

# Build for production
npm run build
```

## Customization

### 1. Restaurant Info
Edit `frontend/src/config/restaurant.js`:
- Restaurant name, address, contact
- Opening hours
- Social media links
- Hero content and images

### 2. Menu
Edit `frontend/src/config/menu.js`:
- Menu categories and items
- Prices and descriptions
- Featured dishes

### 3. Images
Replace image URLs in `restaurant.js` with your own images.

### 4. Theme
Edit `frontend/src/config/theme.js` to customize:
- Colors
- Fonts
- Spacing

### 5. Languages
Edit `frontend/src/context/LanguageContext.js` to update translations.

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd frontend && vercel
```

### Netlify
```bash
# Build
npm run build

# Deploy the 'build' folder to Netlify
```

## Backend Setup

```bash
# Install Python dependencies
cd backend
pip install -r requirements.txt

# Create .env file
cp .env.example .env

# Run server
python -m uvicorn server:app --reload --port 8000
```

## Environment Variables

### Frontend (.env)
```
REACT_APP_BACKEND_URL=http://localhost:8000
REACT_APP_GOOGLE_MAPS_KEY=your_key_here
```

### Backend (.env)
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=restaurant_dev
CORS_ORIGINS=http://localhost:3000
```

## Tech Stack

- **Frontend**: React 19, Tailwind CSS, Framer Motion
- **Backend**: FastAPI, MongoDB
- **Build**: Create React App + Craco

## License

MIT License - Use freely for commercial projects.