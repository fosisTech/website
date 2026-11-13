---
last_mapped: 2026-11-12T00:00:00Z
---

# Codebase Map

## System Overview

Rebuild of https://fosis.org.uk/ on Next.js App Router. The site is still the starter template (one home page with a Hero section); the rebuild has not started in `src/`. The scraped reference for the rebuild is `docs/fosis-site/`. Starter surface: one home page with a Hero section, Zod-validated env helper, Vitest + Testing Library, Oxlint (anti-slop plugin) plus ESLint, Tailwind CSS 4, Bun.

No auth, Convex, Clerk, Cloudflare Workers, or email integration ships in the tree yet. The CLI profiles for those services are inventoried in `AGENTS.md`; Cloudflare and Convex are already set up for this repo, Clerk and Resend are not.

Local checkout: `fosis-website`. Started from the GitHub template `mwijanarko1/template`, now at `fosisTech/website`.

## Directory Guide

| Path | Role |
|------|------|
| `src/app/layout.tsx` | Root layout: Geist fonts, viewport theme colors, SEO metadata (`metadataBase`, canonical, Open Graph, Twitter, robots), `Organization` JSON-LD, skip link, body shell |
| `src/app/page.tsx` | Home route; renders `Hero` |
| `src/app/globals.css` | Tailwind v4 entry (`@import "tailwindcss"`), `@theme` typography tokens, blob animation utilities |
| `src/lib/site.ts` | Site constants (`SITE_URL`, name, description, `sameAs`), `SITEMAP_PATHS`, and `isIndexable()` |
| `src/app/robots.ts` | `robots.txt`: allow all plus AI crawler block list on production, disallow all elsewhere |
| `src/app/sitemap.ts` | `sitemap.xml` built from `SITEMAP_PATHS` |
| `src/app/not-found.tsx` | Custom 404 (returns HTTP 404, `noindex`) |
| `public/og-image.png` | 1200 x 630 Open Graph and Twitter image |
| `src/app/favicon.ico` | App favicon (16, 32, 48 px), generated from the FOSIS logo |
| `src/app/apple-icon.png` | 180 px Apple touch icon, from the FOSIS logo |
| `src/components/SiteHeader.tsx` | Fixed header: transparent over the hero, white bar on scroll, desktop dropdown nav, mobile drawer (focus trap, Escape, scroll lock) |
| `src/components/SiteFooter.tsx` | Cobalt footer: link columns, socials, legal line, oversized FOSIS wordmark |
| `src/components/HeroVideo.tsx` | Muted looping hero video with pause button; stays paused under `prefers-reduced-motion` |
| `src/components/DonatePill.tsx` | "Support Us" pill shown after the hero |
| `src/components/ui.tsx` | `ButtonLink`, `ArrowLink`, `SectionHead` (heavy rule plus condensed label) |
| `src/lib/nav.ts` | Header nav, footer columns and social links |
| `public/video/`, `public/images/` | Compressed hero video and poster, FOSIS logo, home photos, ISoc logos |
| `e2e/`, `playwright.config.ts` | Playwright E2E suite (Helium browser, production build); `bun run test:e2e` |
| `DESIGN.md` | Design brief extracted from obama.org; `docs/obama-design/` holds its evidence |
| `src/lib/env.ts` | `getEnv()` + Zod schema (`NODE_ENV`, optional `NEXT_PUBLIC_APP_URL`) |
| `src/test/setup.ts` | Vitest setup (`@testing-library/jest-dom`) |
| `tools/oxlint/anti-slop/` | Vendored anti-slop Oxlint JS plugin (shared across Mikhail Builds repos) |
| `oxlint.config.mjs` | Primary linter config; wires anti-slop rules |
| `eslint.config.mjs` | Flat ESLint via `eslint-config-next` (core-web-vitals + typescript) |
| `vitest.config.mts` | Vitest + React plugin, `@` alias to `src/` |
| `next.config.mjs` | `reactStrictMode`, `trailingSlash`, `www` to apex redirect, security headers / CSP |
| `postcss.config.mjs` | `@tailwindcss/postcss` + autoprefixer |
| `tailwind.config.js` | Content paths, blob keyframes, `@tailwindcss/typography` plugin |
| `package.json` | Scripts and Bun-managed dependencies (`packageManager` field) |
| `AGENTS.md` | Agent rules, GitHub + SaaS CLI profile inventory, pointers to launch checklists |
| `README.md` | Human getting-started |
| `docs/CODEBASE_MAP.md` | This map |
| `docs/fosis-site/` | Scrape of fosis.org.uk: `README.md` index, `STRUCTURE.md` (sitemap, nav, footer, section stacks, design tokens), `content/` (146 verbatim page files), `links.md`, `images.md`, `images/` (incl. `favicons/`) |
| `docs/security-checklist.md` | Security gate (from `security-audit` / mitigation skills) |
| `docs/web-compliance-checklist.md` | Privacy / a11y / consumer (from `website-compliance`) |
| `docs/technical-seo-checklist.md` | Crawl / index / metadata (from `technical-seo`) |
| `.env.example` | Documented env keys for local setup |

## Routes

| Route | Source |
|-------|--------|
| `/` | `src/app/page.tsx` (hero, mission, stats, pillars, network, call to action) |
| `/_not-found` | Next.js default not-found |

## Key Workflows

1. **Local loop:** `bun install`, `bun run dev`, edit under `src/`, `bun run test:run`, `bun run lint`, `bun run typecheck`, `bun run build`.
2. **New UI section:** add a component under `src/components/`, compose it from `src/app/page.tsx` (or a new `src/app/<route>/page.tsx`). Prefer Tailwind utilities already used in `Hero`.
3. **New public route:** add `src/app/<route>/page.tsx`, update metadata in that page or via shared helpers if you introduce them, extend tests when behaviour matters.
4. **Env vars:** extend the Zod schema in `src/lib/env.ts`, document in `.env.example`, call `getEnv()` from server code only.
5. **Lint:** `bun run lint` (Oxlint + anti-slop) is the default gate. Use `bun run lint:eslint` for Next/ESLint rules. Do not lint `tools/oxlint/anti-slop` via TypeScript project checks (excluded in `tsconfig.json`).
6. **CLI / deploy accounts:** `AGENTS.md` lists the profile to use per service. For this repo that is `fosisTech` for `gh`, `techfosis` for Cloudflare and Convex. Clerk and Resend have no FOSIS profile yet.
7. **Dependency bumps:** stay inside Bun's 7-day `minimumReleaseAge`. Pair `oxlint` and `@oxlint/plugins` on the same version.
8. **Launch / compliance pass:** walk `docs/security-checklist.md`, `docs/web-compliance-checklist.md`, and `docs/technical-seo-checklist.md` (or load the matching skills for a deeper audit).

## Tests

| File | Covers |
|------|--------|
| `e2e/home.spec.ts` | Home copy and links, header and mobile drawer, footer, hero video, support pill, overflow, 404 and crawler endpoints at 1440 and 390 px |
| `src/components/Hero.test.tsx` | Hero renders heading, supporting copy, and main landmark |

## Design decisions

- The home page copies the obama.org visual language from `DESIGN.md`: cobalt `#0064f0`, sky `#8eddff`, ice `#d2faff` bands, heavy section rules, split hero headline, oversized condensed type, square buttons, radiating line panel.
- FOSIS navy `#0a2240` stays as a card and wordmark colour. The FOSIS gold is dropped.
- Fonts are free lookalikes loaded with `next/font`: Encode Sans Condensed 700 (display, closest measured width and weight to Gotham Condensed Bold), Frank Ruhl Libre 400 (body, narrow and dense like Chronicle Text), Inter 500 (labels). Gotham and Chronicle are licensed and not used.
- Copy is verbatim from `docs/fosis-site/content/home.md`. Photos come from `docs/fosis-site/images/`.

## Known Risks

- The hero video is a 20 s, 2.5 MB cut of the 2019 conference highlights (title card, on-screen captions and end cards removed). It is from 2019, so confirm it still represents FOSIS.
- Internal links use `prefetch={false}` because most target routes are not built yet. Remove it as routes ship.
- CSP allows `'unsafe-inline'` scripts because Next injects inline hydration scripts and the pages are static.
- `docs/fosis-site/` is a 28 MB, 294 file capture. It has no sitemap on the source site, 3 linked 404s, 136 pages with empty meta descriptions, and a broken default `og:image`. Read its `README.md` gaps before relying on it. Copy and images belong to FOSIS; confirm usage rights before publishing the rebuild.
- `NEXT_PUBLIC_APP_URL` must equal `https://fosis.org.uk` on the production build, or the site ships `noindex` and a disallow-all `robots.txt`. Metadata base and canonicals always use `SITE_URL`.
- CSP in `next.config.mjs` is strict (`script-src 'self'`). Adding analytics, Clerk, or Convex clients will need deliberate CSP / header updates.
- `@tailwindcss/typography` is pulled for the Tailwind plugin; an override pins `postcss-selector-parser` for audit cleanliness. Removing typography means revisiting that override.
- Anti-slop lives under `tools/` and is excluded from `tsc`; breaking the plugin only shows up when Oxlint loads it.
- Clerk and Resend have no FOSIS profile yet; do not reuse the `ihsaan` accounts for this project.
