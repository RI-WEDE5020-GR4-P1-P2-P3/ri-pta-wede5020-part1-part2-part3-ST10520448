# TechFix Solutions – Website (WEDE5020 Part 3)

Multi-page website for a fictional local tech repair business in Pretoria.

**Part 3 adds:** JavaScript (accordion, lightbox, service search), dual forms with validation & simulated AJAX, SEO meta tags, `robots.txt`, `sitemap.xml`, and deployment readiness.

---

## Pages

| File | Description |
|------|-------------|
| `index.html` | Home – hero, why us, services preview, FAQ accordion |
| `services.html` | Services with **search + category filters** |
| `about.html` | Mission, vision, who we help |
| `gallery.html` | Completed repairs with **lightbox** |
| `enquiry.html` | **Repair quote form** (validated + estimate response) |
| `contact.html` | General contact form (validated + AJAX-style success) + **interactive map** |

---

## How to view locally

1. Open the project folder in VS Code  
2. Open `index.html` with **Live Server** (or a browser)  
3. Test:
   - Resize for tablet/mobile  
   - Gallery: click an image  
   - Services: type in search / click filter buttons  
   - Forms: submit empty fields to see errors; submit valid data for success message  
   - Contact: interactive map (zoom / pan / marker popup)  

---

## JavaScript features (Part 3)

| Feature | File |
|---------|------|
| Active nav + FAQ accordion | `js/main.js` |
| Gallery lightbox | `js/gallery.js` |
| Service search / filter | `js/services.js` |
| Form validation + simulated AJAX | `js/forms.js` |

Core features use vanilla JavaScript. The Contact map uses the Leaflet CDN (see REFERENCES.md).

---

## SEO & extra files

- Title + meta description + meta keywords on each page  
- Descriptive image file names and `alt` text  
- `robots.txt`  
- `sitemap.xml` (replace `YOUR-USERNAME` with your GitHub username after deploy)  
- Interactive map on Contact (Leaflet / OpenStreetMap)  

---

## Folder structure

```
techfix/
├── index.html
├── services.html
├── about.html
├── gallery.html
├── enquiry.html
├── contact.html
├── css/style.css
├── js/
│   ├── main.js
│   ├── gallery.js
│   ├── services.js
│   └── forms.js
├── images/
├── screenshots/
├── robots.txt
├── sitemap.xml
├── README.md
├── CHANGELOG.md
└── REFERENCES.md
```

---

## Deploy (required for Part 3)

### Option A – GitHub Pages
1. Push this project to your GitHub repository  
2. Repo **Settings → Pages → Deploy from branch `main` / root**  
3. Site URL will look like: `https://YOUR-USERNAME.github.io/REPO-NAME/`  
4. Update `robots.txt` and `sitemap.xml` URLs to match  

### Option B – Netlify
1. Go to [netlify.com](https://www.netlify.com) → **Add new site → Import from Git**  
2. Or drag-and-drop the project folder onto Netlify Drop  
3. Copy the live URL for your LMS submission  

---

## Screenshots (Part 2 evidence)

![Desktop – Home](screenshots/index-desktop.png)
![Tablet – Home](screenshots/index-tablet.png)
![Mobile – Home](screenshots/index-mobile.png)

![Desktop – Services](screenshots/services-desktop.png)
![Tablet – Services](screenshots/services-tablet.png)
![Mobile – Services](screenshots/services-mobile.png)

---

## Author

Student submission – WEDE5020 Formative Part 3  
Rosebank International / IIE  
