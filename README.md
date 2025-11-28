# NovaPay Landing Page

A single-page, Razorpay-inspired fintech landing page built with React and Vite. The design focuses on a clean, modern aesthetic with responsive layouts for mobile, tablet, and desktop.

## Tech Stack
- React (functional components & hooks)
- Vite
- CSS (modular component styles + global theme variables)

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Project Structure
```
.
├─ index.html
├─ package.json
├─ vite.config.js
├─ public/
│  └─ favicon.svg
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ Hero.jsx
│  │  ├─ Features.jsx
│  │  ├─ ProductHighlights.jsx
│  │  ├─ CtaBand.jsx
│  │  └─ Footer.jsx
│  └─ styles/
│     ├─ global.css
│     ├─ navbar.css
│     ├─ hero.css
│     ├─ features.css
│     ├─ highlights.css
│     ├─ cta.css
│     └─ footer.css
└─ README.md
```

## Screenshot
To avoid binary files in version control, the screenshot asset is not tracked. Add your own capture at `./screenshot.png` after running the site locally (e.g., `npm run dev`). If you prefer a 1x1 placeholder, you can create one via:

```bash
base64 -d > screenshot.png <<'B64'
iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMB/6X8clcAAAAASUVORK5CYII=
B64
```

## Responsiveness
- Mobile (≤600px): stacked layout, full-width CTAs, hamburger navigation, hero visual below copy.
- Tablet (601–1024px): two-column hero and product highlights, responsive grids.
- Desktop (≥1025px): full navigation, multi-column grids, side-by-side hero layout.

## Customization
- Theme colors and typography are defined in `src/styles/global.css` (CSS variables).
- Update hero copy, feature data, and product tab data inside the respective component files.
- Replace `screenshot.png` with an actual capture of the page after running `npm run dev`.
