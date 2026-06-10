# Portfolio Ripaldo Lumban Batu

Portfolio website pribadi — Information Systems Graduate dengan pengalaman di digitization, IoT, dan machine learning.

## Tech Stack

- **Vite** — Build tool & dev server
- **React** — UI library
- **TypeScript** — Type safety
- **Tailwind CSS** — Styling
- **Local Storage** — Data persistence (admin panel)

## Fitur

- Hero section dengan profil & kontak
- Tentang Saya — summary, education, experience
- Portfolio — project cards dengan detail modal
- Kontak form (terintegrasi Formspree)
- **Admin Panel** — login (`admin123`), CRUD project, edit profil (tersimpan di localStorage)
- Netflix-inspired dark theme
- Fully responsive

## Cara Menjalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Admin Panel

Klik **Admin** di navbar. Password default: `admin123`.

## Build Production

```bash
npm run build
npm run preview
```
