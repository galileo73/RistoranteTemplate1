# Commercial MVP Strategy

**Goal:** White-label restaurant template ready for client deployment in < 2 hours setup.

**Current State:** 75% complete

---

## Scope

### INCLUDE
- Configuration extraction
- Hardcoded content removal
- Reusable sections
- SEO basics
- Deployment stability
- White-label readiness

### EXCLUDE
- Enterprise SaaS
- Billing systems
- Multi-tenancy
- Kubernetes/Docker orchestration
- Complex auth systems
- Advanced analytics
- Unnecessary abstractions

---

## Current Status

### ✅ Completed
- Config system (restaurant.js, menu.js, theme.js)
- Reusable sections (Hero, Hours, FeaturedDishes, CTA, GoogleMap)
- Error boundary
- Environment validation
- Backend .env.example
- Translation system (cs, en, it)
- Placeholder URLs in public files

### 🔴 Critical Gaps
1. **Hardcoded menu in backend** - server.py has hardcoded menu data
2. **No deployment config** - Missing vercel.json, netlify.toml, or Dockerfile
3. **Missing README** - No setup documentation
4. **Theme not integrated** - theme.js exists but not used by Tailwind
5. **No robots.txt** - Basic SEO file missing

### 🟡 Partial
- Content in LanguageContext (should be in config)
- Images hardcoded in config (no fallback system)

---

## Action Plan (Priority Order)

### Phase 1: White-Label Essentials (4-6 hours)

| # | Task | Effort | Files |
|---|------|--------|-------|
| 1.1 | Create deployment configs | 30min | `vercel.json`, `netlify.toml` |
| 1.2 | Create README.md | 30min | Root README |
| 1.3 | Add robots.txt | 10min | `public/robots.txt` |
| 1.4 | Move backend menu to config | 30min | `backend/config/menu.py` |
| 1.5 | Create client setup checklist | 20min | `SETUP.md` |

### Phase 2: Configuration Polish (2-3 hours)

| # | Task | Effort | Files |
|---|------|--------|-------|
| 2.1 | Integrate theme.js with Tailwind | 1h | `tailwind.config.js` |
| 2.2 | Add image fallbacks | 30min | `config/images.js` |
| 2.3 | Validate config on build | 30min | Build script |

### Phase 3: SEO & Performance (2-3 hours)

| # | Task | Effort | Files |
|---|------|--------|-------|
| 3.1 | Add lazy loading to images | 30min | All image components |
| 3.2 | Add image dimensions | 30min | All image components |
| 3.3 | Add manifest.json | 20min | `public/manifest.json` |
| 3.4 | Generate dynamic sitemap | 30min | Build script |

---

## Client Onboarding Flow

```
1. Clone repository
2. Edit config/restaurant.js (name, address, hours, contact)
3. Edit config/menu.js (menu items)
4. Replace images in config/restaurant.js
5. Run npm run build
6. Deploy to Vercel/Netlify
```

**Target: < 2 hours for new client**

---

## Deployment Targets

### Option A: Vercel (Recommended)
- Frontend: Vercel (automatic HTTPS, CDN)
- Backend: Railway or Render
- Database: MongoDB Atlas free tier
- Cost: $0-5/month

### Option B: Netlify
- Frontend: Netlify
- Backend: Render or Railway
- Database: MongoDB Atlas
- Cost: $0/month

---

## File Structure (Target)

```
ristorante-template/
├── frontend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── restaurant.js    ✅
│   │   │   ├── menu.js          ✅
│   │   │   ├── theme.js         ✅ (needs Tailwind integration)
│   │   │   ├── env.js           ✅
│   │   │   └── images.js        🔴 NEW
│   │   ├── pages/               ✅
│   │   ├── components/
│   │   │   ├── sections/        ✅
│   │   │   └── ui/              ✅
│   │   └── context/             ✅
│   ├── public/
│   │   ├── index.html           ✅ (placeholders)
│   │   ├── sitemap.xml          ✅ (placeholders)
│   │   ├── robots.txt           🔴 NEW
│   │   └── manifest.json        🔴 NEW
│   ├── vercel.json              🔴 NEW
│   └── package.json             ✅
├── backend/
│   ├── config/
│   │   └── menu.py              🔴 NEW (extract from server.py)
│   ├── server.py                ✅ (needs refactor)
│   └── .env.example             ✅
├── README.md                    🔴 NEW
├── SETUP.md                     🔴 NEW
└── CLAUDE.md                    ✅
```

---

## Success Metrics

| Metric | Target |
|--------|--------|
| Setup time for new client | < 2 hours |
| Build time | < 2 minutes |
| Bundle size (gzipped) | < 300KB |
| Lighthouse score | > 80 |
| Configuration files edited | 2-3 files max |

---

## Next Steps

1. Create deployment configs (vercel.json, netlify.toml)
2. Create README.md with setup instructions
3. Add robots.txt
4. Extract backend menu to config
5. Create SETUP.md client checklist

**Estimated total effort: 8-12 hours to MVP**