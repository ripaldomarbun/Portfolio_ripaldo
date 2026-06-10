# Portfolio Ripaldo Lumban Batu

**v1.0.0**

Portfolio website pribadi — Information Systems Graduate dengan pengalaman di digitization, IoT, dan machine learning.

## Daftar Isi

- [Tech Stack](#tech-stack)
- [Struktur Project](#struktur-project)
- [Fitur](#fitur)
- [Cara Menjalankan](#cara-menjalankan)
- [Admin Panel](#admin-panel)
- [API Documentation](#api-documentation)
- [Build Production](#build-production)
- [Deploy](#deploy)

---

## Tech Stack

| Teknologi | Kegunaan |
|-----------|----------|
| **Vite** | Build tool & dev server |
| **React 18** | UI library |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling |
| **Local Storage** | Data persistence (admin CRUD) |
| **Formspree** | Contact form backend (opsional) |

## Struktur Project

```
src/
├── App.tsx                # Root component + routing (portfolio/admin)
├── main.tsx               # Entry point
├── vite-env.d.ts          # Vite type declarations
├── app/
│   ├── globals.css        # Global styles (Tailwind + custom)
│   └── page.tsx           # (legacy Next.js, tidak digunakan)
├── components/
│   ├── Navbar.tsx         # Navigation bar (transparent → solid on scroll)
│   ├── HeroSection.tsx    # Hero dengan nama, tagline, kontak
│   ├── AboutSection.tsx   # Tentang Saya + skills
│   ├── PortfolioGrid.tsx  # Grid project cards
│   ├── ProjectCard.tsx    # Card dengan hover effect Netflix
│   ├── ProjectDetail.tsx  # Modal detail project
│   ├── ContactForm.tsx    # Contact form (Formspree / fallback console)
│   ├── SocialLinks.tsx    # GitHub, LinkedIn, Email icons
│   ├── Footer.tsx         # Footer dengan copyright + links
│   ├── AdminPanel.tsx     # Admin routing (login vs dashboard)
│   ├── AdminLogin.tsx     # Login form
│   ├── AdminDashboard.tsx # Main admin: tabs Projects + Profile
│   ├── AdminProfileForm.tsx # Edit profil form
│   └── ProjectForm.tsx    # Add/edit project form
├── context/
│   └── AuthContext.tsx    # Auth state management
└── data/
    ├── portfolio.ts       # Types + default data (fallback)
    └── store.ts           # localStorage CRUD operations
```

## Fitur

### Public Pages
| Fitur | Deskripsi |
|-------|-----------|
| **Hero** | Nama besar, tagline, lokasi, email, telepon |
| **Tentang Saya** | Summary, education, experience, skills badges |
| **Portfolio** | Grid project cards dengan hover scale + border merah |
| **Project Detail** | Modal dengan info lengkap, tech stack, link Demo/GitHub |
| **Contact Form** | Form kirim pesan (via Formspree atau console log) |
| **Responsive** | Mobile-first, hamburger menu, grid adaptif |

### Admin Panel (`/admin`)
| Fitur | Deskripsi |
|-------|-----------|
| **Login** | Password default: `admin123` (bisa diubah via localStorage) |
| **Projects Tab** | CRUD: Tambah, Edit, Hapus, lihat semua project |
| **Profile Tab** | Edit nama, tagline, about, email, phone, lokasi, skills, social links |
| **Reset Data** | Kembalikan semua data ke default |

### Tema
- Dark theme Netflix-inspired (`#141414` background, `#E50914` accent)
- Custom scrollbar
- Smooth transitions & hover effects
- Font: Inter (Google Fonts)

## Cara Menjalankan

### Development
```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

### Production Build
```bash
npm run build    # Build ke dist/
npm run preview  # Preview production build
```

## Admin Panel

1. Klik **Admin** (merah) di pojok kanan navbar
2. Masukkan password: `admin123`
3. **Projects tab** — kelola project portfolio
4. **Profile tab** — edit data diri

> Semua data tersimpan di **localStorage**. Data tidak akan hilang selama browser tidak dibersihkan.

### Mengubah Password Admin
1. Buka browser Developer Tools → Application → Local Storage
2. Cari key `portfolio_admin_pass`
3. Ubah nilainya

## API Documentation

### Contact Form

Endpoint yang digunakan form kontak:

**POST** `https://formspree.io/f/{VITE_FORMSPREE_ID}`

| Field | Type | Required |
|-------|------|----------|
| name | string | ✅ |
| email | string | ✅ |
| message | string | ✅ |

> Jika `VITE_FORMSPREE_ID` tidak diset, form akan logging ke console.

### localStorage Keys

| Key | Type | Deskripsi |
|-----|------|-----------|
| `portfolio_admin_pass` | string | Password admin |
| `portfolio_projects` | Project[] | Data project (JSON) |
| `portfolio_info` | PersonalInfo | Data profil (JSON) |

## Konfigurasi Environment

Salin `.env.local.example` ke `.env.local`:

```bash
cp .env.local.example .env.local
```

| Variable | Required | Deskripsi |
|----------|----------|-----------|
| `VITE_FORMSPREE_ID` | No | ID form Formspree untuk contact form |

Daftar gratis di [formspree.io](https://formspree.io) untuk mendapatkan Formspree ID.

## Deploy

Project ini static, bisa di-deploy ke:

| Platform | Cara |
|----------|------|
| **Vercel** | Import repo, build command: `npm run build`, output: `dist/` |
| **Netlify** | Import repo, build command: `npm run build`, publish: `dist/` |
| **GitHub Pages** | Tambah `base` di vite.config.ts, build, push dist |

## Lisensi

© 2026 Ripaldo Lumban Batu. All rights reserved.
