# Raveenesshan T — Portfolio

A dark-mode-first personal portfolio built with **Next.js 16** (App Router), **Tailwind CSS v4**, and **Motion** (the library formerly known as Framer Motion). Glassmorphism cards, an animated "network map" background, scroll-triggered reveals, and a terminal-inspired type system throughout.

## Quick start

Requires **Node.js 20.9+**.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # ESLint
```

## Stack notes (things worth knowing before you touch the code)

- **Tailwind CSS v4** — there's no `tailwind.config.js`. Theme colors, fonts, and dark mode are configured directly in `app/globals.css` via `@theme`. If you want to add a color or font, add it there.
- **Motion, not `framer-motion`** — Framer Motion was renamed to **Motion** in 2025. The API is identical; only the import path changed (`motion/react` instead of `framer-motion`). The `package.json` installs the `motion` package.
- **`lucide-react` v1.0** removed all trademarked brand icons (GitHub, LinkedIn, Figma, etc.) for legal reasons. The GitHub and LinkedIn glyphs you see are small hand-written SVGs in `components/ui/BrandIcons.js` — every other icon comes from `lucide-react` through a single registry in `components/ui/Icon.js`.

## Editing content

Almost everything text-based lives in **`lib/data.js`** — name, tagline, skills, projects, achievements, education, and contact links. Edit values there and they'll flow through the whole site; you shouldn't need to touch individual component files just to change copy.

## Before you deploy — a short checklist

1. **Resume** — drop your actual PDF at `public/resume.pdf`. The "Download Resume" buttons already point there.
2. **Domain** — `app/layout.js` sets `metadataBase` to a placeholder (`https://raveenesshan.dev`). Update it (and the URLs in `app/sitemap.js` / `app/robots.js`) once you have a real domain, so social share previews resolve correctly.
3. **Project repo links** — `featuredProjects` in `lib/data.js` currently links both project "Code" buttons to your GitHub profile. Point them at the specific repos once they're public.
4. **Education dates** — you didn't share exact enrollment/graduation years, so the Education section shows the institution and degree without dates. Add them in `lib/data.js` (`education` object) if you'd like them displayed.
5. **Double-check `github.com/raveenesshan`** — your brief had a stray character after this URL, so I cleaned it up. Confirm it's your actual GitHub username before publishing.

## Project structure

```
app/
  layout.js        Root layout — fonts, metadata, JSON-LD, theme provider
  page.js           Assembles every section
  globals.css       Tailwind v4 theme tokens, dark/light mode, animations
  sitemap.js, robots.js, icon.svg
components/
  Hero, About, Skills, Projects, UniversityProjects,
  Education, Achievements, Contact, Footer, Navbar
  BackgroundFX.js   Canvas particle network + gradient background
  ScrollProgressBar.js, ThemeToggle.js, ThemeProvider.js
  ui/               Button, GlassCard, SectionHeading, ProgressBar,
                     TimelineItem, Icon (registry), BrandIcons
lib/
  data.js           All site content lives here
public/
  images/profile.jpg
```

## Deploying

This is a standard Next.js app, so it deploys cleanly to [Vercel](https://vercel.com) (zero config — just import the repo), or anywhere else that runs Node.js (Netlify, Render, a Dockerfile, etc.).

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (the background animation, floating chips, and scroll effects all scale down or stop).
- Skip-to-content link, semantic landmarks, and `aria-label`s on icon-only buttons.
- Profile photo is served through `next/image` (automatic AVIF/WebP + responsive sizing); the source file was already resized and stripped of EXIF/location metadata before being added to `public/images/`.
