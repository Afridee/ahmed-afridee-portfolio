# Ahmed Afridee — Developer Portfolio

Static portfolio site for Ahmed Afridee (Flutter Developer | AI Engineer), built strictly against the "Expo Luminous Developer" design system in `.cursor/rules/design.md`, with all content sourced from `assets/Ahmed Afridee Resume.pdf`.

## Stack

- Next.js 14 (App Router) with `output: 'export'` for static hosting
- Tailwind CSS with design tokens mapped 1:1 from the design system
- Framer Motion for entry animations (fade + translate-Y, 420ms ease-out, 80ms stagger)
- Lucide React icons (no emojis)
- Inter (UI) and JetBrains Mono (code/metadata) via `next/font`

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Static export

```bash
npm run build
```

The static site is emitted to `out/` — deploy that folder to any static host (GitHub Pages, Netlify, Cloudflare Pages, S3).

## Structure

```
app/
  layout.tsx        # Fonts, metadata
  page.tsx          # Section composition
  globals.css       # Canvas, container, gallery spacing
components/
  nav.tsx           # Sticky nav with scrollspy (cobalt active state)
  hero.tsx          # Split-screen dark hero, Download Resume CTA
  about.tsx         # Summary + stat cards + education
  experience.tsx    # Manush tech & Elements Group, all bullets
  projects.tsx      # Karo & Smart Notes in zig-zag rows
  publications.tsx  # Towards AI article
  skills.tsx        # Three groups as asymmetric label-rail rows
  contact.tsx       # Email, phone, GitHub, LinkedIn
  footer.tsx
  reveal.tsx        # Shared Framer Motion primitives
  section-header.tsx
lib/
  content.ts        # All resume content (single source of truth)
public/
  resume.pdf         # Served at /resume.pdf
  profile.png        # Portrait (used for the Open Graph image)
  profile-cutout.png # Transparent-background portrait for the hero disc composition
```

## Editing content

All text lives in `lib/content.ts`. Replace `public/resume.pdf` to update the downloadable resume.
