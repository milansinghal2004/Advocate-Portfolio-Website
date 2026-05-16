## Premium Advocate Portfolio — Minimal Grid Luxury

Build a single-page premium advocate portfolio matching the selected direction (charcoal #0f1011 background, muted gold #c5a368 accent, ivory text, Playfair Display + Inter, ultra-minimal grid layout with hairline borders).

### Design tokens (`src/styles.css`)
Replace current oklch palette with the direction's tokens:
- `--background: #0f1011`, `--foreground: #f4f2ef`, `--accent: #c5a368`, `--muted-foreground: #6b6b6b`, `--border: rgba(255,255,255,0.08)`
- Wire `--color-accent` into `@theme inline`
- Add keyframes `line-reveal`, `fade-up` and matching utilities
- Load Playfair Display (700, italic) + Inter (400, 500) via `<link>` in `__root.tsx` head

### Single-page route (`src/routes/index.tsx`)
The user requested smooth scroll between sections, so use one route with anchor sections + a header nav. Sections, in order:

1. **Fixed nav** — `Valerius.` wordmark, links (Practice / Advocate / Timeline / Contact), gold-outline Consultation button
2. **Hero** — 12-col grid; left col-8: massive Playfair headline "The Quiet *Authority* of Justice" + animated gold reveal line + intro paragraph; right col-4: portrait (generated image)
3. **Metrics bar** — 4-col stats (Years Active, Supreme Cases, Success Rate, Value Settled) with animated count-up on scroll (IntersectionObserver)
4. **About** — split layout: short bio + specialization tags + secondary portrait/abstract image
5. **Practice areas** — 3×2 grid of 6 cards (High Court Litigation, Supreme Court Matters, Legal Consultation, Arbitration, Corporate Advisory, Client Advocacy) with numbered indices, hover background shift, animated arrow
6. **Experience timeline** — vertical timeline with glowing gold connector, scroll-triggered fade-in entries (current role → past positions → judicial research → education)
7. **Testimonials** — minimal carousel, 3 quotes, glass card styling, prev/next dots
8. **Contact** — 2-col split: left = floating-label form (name, email, message) with gold focus underline + submit button; right = chambers address card over abstract architecture image
9. **Footer** — wordmark, copyright, social links

### Components (`src/components/`)
- `SiteNav.tsx`, `Hero.tsx`, `MetricsBar.tsx`, `About.tsx`, `PracticeAreas.tsx`, `Timeline.tsx`, `Testimonials.tsx`, `Contact.tsx`, `SiteFooter.tsx`
- `useInView.ts` hook for scroll-triggered reveals
- `AnimatedCounter.tsx` for metric count-up

### Animation approach
- Install `motion` (Framer Motion successor) for fade-up/stagger on section entry, magnetic CTA hover, smooth carousel transitions
- CSS-only for hairline reveals, hover glows, focus underlines (keeps bundle lean)
- Use `scroll-behavior: smooth` on html for anchor nav

### Imagery
Generate two assets in `src/assets/`:
- `advocate-portrait.jpg` — cinematic charcoal-suit portrait, dark studio lighting (1080×1350)
- `chambers-architecture.jpg` — abstract courthouse interior lines, granite + brass (1200×1200)

### SEO (`__root.tsx` head)
Title "Valerius — Advocate & Legal Consultant", matching meta description, og tags, viewport, font preconnects.

### Out of scope
- No backend / Cloud (placeholder form is non-submitting toast)
- No CMS — content lives in component constants for easy manual replacement
- Map embed deferred (using address card per direction)

Ready to build on approval.