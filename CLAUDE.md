# CLAUDE.md

Project type:
Commercial restaurant website template.

Main goal:
Create a reusable and sellable restaurant website system for restaurants, bars, cafés, and local food businesses.

Business objective:
This project should be adaptable for future restaurant clients with minimal code changes.

## Architecture

**Frontend**: React 19 + Tailwind CSS + shadcn/ui + Framer Motion
**Backend**: FastAPI + MongoDB
**Build**: Create React App with Craco

### Key Files

- `frontend/src/config/restaurant.js` - Restaurant info, hours, contact, SEO meta
- `frontend/src/config/menu.js` - Menu items, categories, translations
- `frontend/src/config/theme.js` - Colors, fonts, spacing, shadows
- `frontend/src/config/env.js` - Environment validation and config
- `frontend/src/context/LanguageContext.js` - i18n translations (cs, en, it)
- `backend/server.py` - FastAPI backend with reservations API

### Environment Variables

**Frontend** (`frontend/.env`):
```
REACT_APP_BACKEND_URL=http://localhost:8000
REACT_APP_GOOGLE_MAPS_KEY=your_key_here (optional)
```

**Backend** (`backend/.env`):
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=ristorantino_dev
CORS_ORIGINS=http://localhost:3000
```

### Commands

```bash
# Frontend
cd frontend && npm start      # Development server (localhost:3000)
cd frontend && npm run build  # Production build

# Backend
cd backend && python -m uvicorn server:app --reload --port 8000
```

## Expected Client Features

- Landing page with hero, story, featured dishes
- Menu section with categories
- Gallery with lightbox
- Reservation form
- Contact page with map
- WhatsApp/contact button
- Opening hours display
- Local SEO (JSON-LD schema, meta tags)
- Mobile-first responsive design
- Multi-language support (Czech, English, Italian)

## Development Rules

1. **Configuration over hardcoding**: All content in config files
2. **Use translations**: All UI text via LanguageContext
3. **Keep components modular**: Reusable sections in `components/sections/`
4. **Preserve build stability**: Test `npm run build` before commits
5. **Mobile-first**: Test responsive behavior
6. **SEO-ready**: Use SEO component for meta tags

## Customization Guide

For a new client, edit these files:

1. `frontend/src/config/restaurant.js` - Name, address, hours, contact
2. `frontend/src/config/menu.js` - Menu items
3. `frontend/public/index.html` - Replace placeholders before build
4. `frontend/public/sitemap.xml` - Replace `%SITE_URL%` with domain
5. `backend/.env` - Database connection
6. Images in config - Replace URLs with client images

## Commercial Direction

This template should become part of a website package that can be sold to small restaurants and local businesses. Target: < 2 hour setup per client.