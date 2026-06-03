# Elisa & Vian — Wedding Website

A pretty, frontend-only wedding site for Elisa & Vian's three celebrations:
Washington D.C. 🇺🇸 · Singapore 🇸🇬 · São Paulo 🇧🇷.

Built with Vite + React + TypeScript. No backend (yet) — it's static and can be
dropped on GitHub Pages, Netlify, Vercel, S3, etc.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
npm run lint
```

## Structure

Routing is a tiny dependency-free hash router (`#/weddings/singapore`), so deep
links work on any static host without server rewrites.

```
src/
  main.tsx            app entry
  App.tsx             layout + route table
  index.css           palette, fonts, shared helpers
  App.css             component & page styles
  navigation.ts       route context + useRoute() + navigate()
  router.tsx          <Router> and <Link> components
  data/weddings.ts    the 3 celebrations (single source of truth)
  components/         Nav, Footer, PageHeader, Botanical (leaf SVGs)
  pages/             Home, Story, Weddings, WeddingDetail, Rsvp
```

Pages: **Home**, **Our Story**, **Weddings** (→ **D.C.**, **Singapore**,
**São Paulo**), and **RSVP**.

## Editing content

- **Wedding dates / venues / blurbs** → `src/data/weddings.ts`. Update each
  entry's `date`, `details`, `status` (`past` | `planning` | `upcoming`), etc.
- **Our Story timeline & text** → `src/pages/Story.tsx` (currently placeholder
  copy).
- **Colors & fonts** → CSS variables at the top of `src/index.css`.
- **Photos** → drop images in `src/assets/` (or `public/`) and reference them in
  the relevant page. Placeholders note where photos will go.

## Wiring up RSVP later

`src/pages/Rsvp.tsx` is a complete, styled form whose `onSubmit` currently just
shows a thank-you message (nothing is saved). The input `name` attributes are
ready to POST. To go live, point `handleSubmit` at a form backend (e.g. Formspree,
Google Forms, Netlify Forms, or your own API) and remove the "not connected yet"
note.
