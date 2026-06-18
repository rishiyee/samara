# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Note on `AGENTS.md`:** The repo also contains `AGENTS.md`, which describes a customized Next.js setup. That guidance is **stale** — the project was migrated off Next.js to Vite + React (commit `bee914a`). There is no Next.js here; ignore the "read `node_modules/next/dist/docs/`" instruction. This file reflects the actual stack.

## Commands

```bash
npm run dev      # Start Vite dev server (HMR)
npm run build    # Type-check (tsc -b) then production build (vite build)
npm run lint     # ESLint over the repo
npm run preview  # Serve the production build locally
```

There is no test runner configured.

## Stack

- **Vite 8** + `@vitejs/plugin-react` — SPA, no SSR/router/framework.
- **React 19** with `StrictMode`. Entry: `src/main.tsx` → mounts `App` into `#root` (`index.html`).
- **TypeScript** in strict mode with `noUnusedLocals`/`noUnusedParameters`. Bundler module resolution; `.tsx` extensions importable.
- **Tailwind CSS v4** via the `@tailwindcss/vite` plugin (not PostCSS). There is no `tailwind.config.js` — theme tokens are defined in CSS.

## Architecture

This is a single-page marketing/landing site for **Samara** (backyard homes / ADUs). There is no routing or data layer — it is a static composition of section components.

- `src/App.tsx` is the whole page: it stacks `Navbar`, a `Banner` header, `Hero`, `Feature`, `Home`, and `Footer` in document order. To change the page layout, edit this file.
  - `src/Home.tsx` is currently an empty placeholder `<div>` still wired into `App` — a stub, not a route.
- `src/components/` holds one component per page section. They are presentational and mostly static; the only stateful ones are:
  - `Footer.tsx` — local email-subscribe form state (no backend; just flips to a "subscribed" message).
  - `Hero.tsx` — scroll-driven parallax: a `scroll` listener (throttled via `requestAnimationFrame`) drives `translate3d` on stacked sky/title/foreground image layers.

## Styling conventions

- Global styles live in `src/global.css`, imported once in `main.tsx`. It uses Tailwind v4's `@import "tailwindcss"` and an `@theme` block.
- **Design tokens are defined in `@theme`**, not a JS config: `--font-sans` (Manrope, loaded from Google Fonts) and `--color-brand` (`#0096f7`). Use the generated utilities (`font-sans`, `bg-brand`, `text-brand`, etc.) rather than hardcoding these values.
- `global.css` applies a global `letter-spacing: -0.027em !important` to every element and sets `body` background to black. The `!important` means per-element tracking must be set carefully.
- `src/components/Button.tsx` is the shared button. It has a typed `variant` system (`primary` | `accent` | `light`) mapped through `variantClasses`. **Add new button styles as a variant here** rather than restyling buttons ad hoc; it spreads native `ButtonHTMLAttributes`.
- Layout leans heavily on viewport units (`vw`/`vh`) and arbitrary Tailwind values (`text-[6.5vw]`, `h-[110vh]`) for fluid full-bleed sections.

## Assets

Static images/SVGs live in `public/` and are referenced by absolute path (e.g. `src="/hero.webp"`, `/Logo.svg`). The hero uses several pre-sized `.webp`/`.svg` variants (sky, title, foreground).
