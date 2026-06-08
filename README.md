# Тойганбаева Б.Б. — Нотариус в Алматы

Premium bilingual (RU/EN) website for a private notary in Almaty, Kazakhstan.
Built from scratch as a high-conversion legal services site.

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** (custom ivory/gold luxury design system)
- **Framer Motion** (scroll reveals, staggered load, micro-interactions)
- Fully responsive, mobile-first
- SEO optimized (metadata, OpenGraph, JSON-LD `LegalService`, sitemap, robots)
- Vercel deployment ready

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Structure

```
app/
  layout.tsx        # fonts (Cormorant Garamond + Plus Jakarta), SEO, JSON-LD
  page.tsx          # composes all sections
  globals.css       # design system, grain texture, scrollbar
  sitemap.ts        # SEO sitemap
  robots.ts         # SEO robots
components/
  Navbar.tsx        # sticky nav + language toggle + mobile menu
  Hero.tsx          # headline, CTAs, animated SVG illustration
  Trust.tsx         # 4 trust pillars
  Services.tsx      # 8-service grid with hover animation
  About.tsx         # biography + engraved license plate card
  Reviews.tsx       # masonry testimonial cards (5-star)
  Contact.tsx       # map + working hours + lead form (→ WhatsApp)
  Footer.tsx
  FloatingWhatsApp.tsx
  Icons.tsx         # custom line icons
  Reveal.tsx        # Framer Motion reveal primitive
lib/
  content.ts        # ALL bilingual content (single source of truth)
  LanguageContext.tsx
```

## Editing content

All text, services, reviews, FAQ, booking, contact info, and the license
number live in `lib/content.ts` (single source of truth). Both languages
update from there.

## Images / photography

Every photo slot is declared in `lib/images.ts`. Each entry is marked
`real` (already supplied) or `placeholder` (awaiting a real photo).

**Already real (from the client's own materials):**
- `license.jpg` — the actual state license (rendered from the PDF)
- `building.jpg` — the real Koktem Towers building
- `entrance.jpg` — the building entrance
- `location-map.jpg` — 2GIS location map

**Still needed — drop these into `/public/images` with the exact filename, then set `status: "real"` in `lib/images.ts`:**
- `portrait.jpg` — professional portrait of the notary (1200×1500, vertical)
- `office-1.jpg` … `office-4.jpg` — office gallery (sizes noted in `images.ts`)

Until a real photo is added, the slot shows a tasteful branded placeholder
that names the missing image — nothing breaks, and it's obvious what to supply.
`SmartImage` renders real files through `next/image` (AVIF/WebP, lazy, sized).

## Notes

- The hero image is a hand-built SVG (no external assets needed). To use a real
  photo, drop it in `/public` and swap the `<NotaryArt />` component in `Hero.tsx`
  for a `next/image`.
- The contact form has no backend — it opens WhatsApp with a prefilled message.
  To collect leads server-side, wire `onSubmit` in `Contact.tsx` to an API route
  or a service like Formspree / Resend.
- The map uses an OpenStreetMap embed. Replace with a Google Maps embed if preferred.

## Deploy to Vercel

1. Push to a Git repo.
2. Import into Vercel — it auto-detects Next.js.
3. Update `SITE_URL` in `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`
   to your real domain.
