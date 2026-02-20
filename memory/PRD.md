# Ristorantino da Matteo - PRD

## Original Problem Statement
Create a refined, authentic Italian restaurant website for "Ristorantino da Matteo" in Prague 7 (Letná). Website should position the restaurant as a high-quality Italian dining experience, increase direct reservations, tell Matteo's story, and build brand prestige.

## User Personas
1. **Local Residents (Letná)** - Looking for quality dining nearby
2. **Tourists in Prague** - Seeking authentic Italian cuisine
3. **Premium Diners** - Expecting 1000+ CZK per person experience

## Core Requirements
- Homepage with cinematic hero, story section, featured dishes, 4.7 rating highlight
- Menu page with categories (Antipasti, Primi, Secondi, Dolci, Vini)
- About page with Matteo's story
- Reservation form (name, phone required, email, date, time, guests, notes)
- Gallery page with food/interior photos
- Contact page with address, map, click-to-call, WhatsApp
- Trilingual support (CZ, EN, IT)
- Mobile-first responsive design
- Sticky reserve button on mobile

## What's Been Implemented (Feb 20, 2026)
### Backend (FastAPI + MongoDB)
- ✅ POST /api/reservations - Create reservation with validation
- ✅ GET /api/reservations - List all reservations
- ✅ GET /api/menu - Return menu data
- ✅ GET /api/info - Restaurant info
- ✅ POST /api/contact - Contact form submission

### Frontend (React + Tailwind)
- ✅ Homepage with hero, story, featured dishes, rating, hours, CTA
- ✅ Menu page with category tabs and PDF download button
- ✅ About page with Matteo's story and philosophy
- ✅ Reservation page with form validation
- ✅ Gallery page with 8 images grid
- ✅ Contact page with all contact info and map
- ✅ Navbar (transparent on hero, solid on scroll)
- ✅ Footer with hours, contact, social links
- ✅ Language switcher (CZ, EN, IT)
- ✅ Sticky mobile reserve button
- ✅ Responsive design for all devices

### Design System
- Colors: Olive (#2F3A2F), Cream (#F5EFE6), Wine (#6A1E2E)
- Typography: Playfair Display (headings), Lato (body)
- Motion: Framer Motion animations

## Prioritized Backlog
### P0 (Completed)
- [x] Core website structure
- [x] Reservation form
- [x] Menu display
- [x] Multilingual support

### P1 (Next Phase)
- [ ] Email notifications for reservations
- [ ] Admin dashboard for reservation management
- [ ] PDF menu generation/download
- [ ] Real restaurant photos replacement

### P2 (Future)
- [ ] Full booking system with calendar sync
- [ ] SMS confirmations
- [ ] Customer database with marketing emails
- [ ] Google Business integration
- [ ] SEO optimization
- [ ] Instagram feed integration

## Next Tasks
1. Implement email notifications (Resend/SendGrid)
2. Create admin panel for reservation management
3. Replace placeholder images with real photos
4. Add meta tags for SEO
5. Set up Google Analytics
