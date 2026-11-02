# Changelog – TechFix Solutions

## [Part 3] – November 2026

### Added
- **JavaScript interactivity**
  - FAQ accordion on the home page (`js/main.js`)
  - Gallery **lightbox** – click any repair photo to enlarge (`js/gallery.js`)
  - Services **search and category filter** (`js/services.js`)
  - Active navigation highlighting on the current page
- **Forms (Part 3 brief)**
  - New **enquiry.html** – repair quote form (device type, issue, phone)
  - Client-side **validation** with visible error messages (`js/forms.js`)
  - Simulated **AJAX submission** (no page reload) + success / estimate response
  - Contact form enhanced with message-type select and validation
- **SEO**
  - Unique title and meta description on every page
  - Meta **keywords** on every page
  - Descriptive image `alt` text
  - `robots.txt` and `sitemap.xml`
  - Internal links between Contact and Enquiry
- **Interactive map** on Contact page (Leaflet + OpenStreetMap, Pretoria marker)
- Documentation updates: README, References for Part 3

### Changed
- Navigation now includes **Enquiry**
- Services page converted to filterable **service cards** (Grid)
- Home page hero restored to Flexbox layout with dual CTAs
- About page mission/vision in side-by-side grid
- Contact page now includes map section + form

### Notes on Part 2 feedback
- Responsive screenshots remain in `screenshots/`
- External CSS, Flexbox, Grid and media queries retained and extended
- Part 3 builds on Part 2 without removing existing layout work
- Changelog updated to document feedback-driven improvements

---

## [Part 2]

### Added
- External CSS (`css/style.css`) on all pages
- Flexbox (header, cards, hero) and CSS Grid (services, about, gallery)
- Media queries for tablet (768px) and mobile (480px)
- Pseudo-classes and pseudo-elements
- Active nav state; responsive images

### Changed (Part 1 feedback)
- Stronger colour palette and typography
- Hero and services layout upgrades
