# Task: Backend — Portofolio Pribadi
**Agent:** Seno (Backend)
**Status:** ✅ Direkomendasikan

## Analisis
Portfolio ini **static-first**. Konten dikelola via `src/data/portfolio.ts` — no database needed.

## Satu-satunya kebutuhan backend: Contact Form
Opsi yang direkomendasikan (dari yang paling simpel):

| Opsi | Biaya | Setup | Maintenance |
|---|---|---|---|
| **Formspree** | Gratis (50/bulan) | 5 menit | 0 |
| **Resend** + API route | Gratis (100/hari) | 15 menit | Minimal |
| **Next.js API route** + SMTP | Gratis | 30 menit | Sedang |
| **Custom backend** (Node.js) | Gratis | 2-3 jam | Perlu di-host |

**Rekomendasi:** Formspree — tinggal ganti `action` di ContactForm, no backend code needed.

## Jika pilih API route (Next.js):
Buat `src/app/api/contact/route.ts`:
- Method: POST
- Body: `{ name, email, message }`
- Validasi input, kirim email via Resend/Nodemailer
- Response: `{ success: true }`
