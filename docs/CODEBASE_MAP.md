---
last_mapped: 2026-11-21T00:00:00Z
---

# Codebase Map

## System Overview

Rebuild of https://fosis.org.uk/ on Next.js App Router. Every page of the source site is built: the home page, the About, ISoc, events, articles, resources, support and contact pages, and one page for each of 112 ISocs and 12 articles. The scraped reference for the rebuild is `docs/fosis-site/`. Stack: Zod-validated env helper, Oxlint (anti-slop plugin) plus ESLint, Playwright E2E, Tailwind CSS 4, Bun. Vitest is configured but has no tests.

The site is fully static. Page data comes from `src/lib/` and the generated JSON and Markdown in `src/content/`. It has no API routes, database, or server state.

Cloudflare deployment config ships in the tree (`wrangler.jsonc`, `open-next.config.ts`, `bun run cf:build`, `bun run cf:deploy`). The Worker `website` runs at `https://website.fosis.workers.dev`. The domain `fosis.org.uk` is not attached yet. No auth, Convex, Clerk, or email integration ships yet. The enquiry forms open the visitor's email app. The CLI profiles for those services are inventoried in `AGENTS.md`; Cloudflare and Convex are already set up for this repo, Clerk and Resend are not.

Local checkout: `fosis-website`. Started from the GitHub template `mwijanarko1/template`, now at `fosisTech/website`.

## Directory Guide

| Path | Role |
|------|------|
| `src/app/layout.tsx` | Root layout: Encode Sans Condensed, Frank Ruhl Libre, Inter and Amiri fonts, viewport theme colors, SEO metadata (`metadataBase`, canonical, Open Graph, Twitter, robots), `Organization` JSON-LD, skip link, `SiteHeader`, `SupportBand`, `SiteFooter` |
| `src/app/page.tsx` | Home route: hero with `HeroVideo`, Get Started cards, network, latest articles, `NewsletterBand`, projects, `FaqSection`, contact |
| `src/app/globals.css` | Tailwind v4 entry (`@import "tailwindcss"`), `@theme` colour and typography tokens, shared utilities |
| `src/lib/site.ts` | Site constants (`SITE_URL`, name, description, `sameAs`), `SITEMAP_PATHS`, and `isIndexable()` |
| `src/app/robots.ts` | `robots.txt`: allow all plus AI crawler block list on production, disallow all elsewhere |
| `src/app/sitemap.ts` | `sitemap.xml` built from `SITEMAP_PATHS` |
| `src/app/not-found.tsx` | Custom 404 (returns HTTP 404, `noindex`) |
| `public/og-image.png` | 1200 x 630 Open Graph and Twitter image |
| `src/app/favicon.ico` | App favicon (16, 32, 48 px), generated from the FOSIS logo |
| `src/app/apple-icon.png` | 180 px Apple touch icon, from the FOSIS logo |
| `src/components/SiteHeader.tsx` | Fixed header: transparent over the hero, white bar on scroll, desktop dropdown nav, mobile drawer (focus trap, Escape, scroll lock) |
| `src/components/SupportBand.tsx` | "Support FOSIS" donate band, rendered by the root layout on every page directly above the footer (same navy field) |
| `src/components/SiteFooter.tsx` | Navy footer: link columns, socials, legal line |
| `src/components/HeroVideo.tsx` | Muted looping hero video with pause button; stays paused under `prefers-reduced-motion` |
| `src/components/FaqSection.tsx` | Home FAQ accordion (native `details`, one open at a time), placed above the contact section |
| `src/components/NewsletterBand.tsx` | Home newsletter signup (obama.org "Be an Insider" pattern). The form is not wired to a provider yet |
| `src/components/ui.tsx` | `ButtonLink`, `ArrowLink`, `SectionHead` (heavy rule plus condensed label) |
| `src/components/ArafatPlanner.tsx` | Day of Arafat checklist. Ticks, added tasks and progress persist in `localStorage` and survive malformed or blocked storage |
| `src/components/ArticleBody.tsx` | Renders an article's Markdown body from `src/content/articles/` |
| `src/components/ContactCard.tsx`, `src/components/GetInvolvedBand.tsx` | Contact details block and the get-involved band |
| `src/components/FormField.tsx`, `src/components/MailtoForm.tsx` | Form field markup and the enquiry form that opens the visitor's email app |
| `src/components/IsocDirectory.tsx` | ISoc search and region filter over `src/content/isocs.json` |
| `src/components/KhutbahLibrary.tsx` | Khutbah filter, search and reader over `src/content/khutbahs.json` |
| `src/components/SocialIcon.tsx` | Social icons for the footer and contact blocks |
| `src/lib/nav.ts` | Header nav (5 links plus Support Us, like obama.org), footer columns and social links |
| `src/lib/articles.ts` | The 12 real articles (newest first), shared by home and `/articles/` |
| `src/lib/isocs.ts`, `src/lib/jobs.ts` | Typed views over the generated JSON in `src/content/` |
| `src/content/` | `articles/` (12 Markdown files), `history.json`, `isocs.json`, `jobs.json`, `khutbahs.json`. The JSON is generated from `docs/fosis-site/` |
| `wrangler.jsonc`, `open-next.config.ts` | Cloudflare Worker `website` built with OpenNext. Prerendered pages serve from the static assets cache. The config has no `routes` |
| `tools/content/` | `build-isocs.py` and `build-pages-data.py` regenerate `src/content/*.json` and ISoc logos from `docs/fosis-site/` (run from the repo root) |
| `public/video/`, `public/images/`, `public/khutbah/` | Compressed hero video and poster, FOSIS logo, home and article photos, ISoc logos, Arabic khutbah passage images |
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
| `docs/CONTRIBUTING.md` | Contributor workflow, checks, commit format and pull request template |
| `docs/MAINTAINERS.md` | Maintainer-only release, deploy and domain procedure |
| `docs/ENVIRONMENT.md` | Environment variables, file order and indexing behavior |
| `docs/context.md` | Product purpose, audience, relationship to IHSAAN, and change constraints |
| `docs/hero-video/` | Source conference video and its provenance note |
| `docs/fosis-site/` | Scrape of fosis.org.uk: `README.md` index, `STRUCTURE.md` (sitemap, nav, footer, section stacks, design tokens), `content/` (146 verbatim page files), `links.md`, `images.md`, `images/` (incl. `favicons/`) |
| `docs/security-checklist.md` | Security gate (from `security-audit` / mitigation skills) |
| `docs/web-compliance-checklist.md` | Privacy / a11y / consumer (from `website-compliance`) |
| `docs/technical-seo-checklist.md` | Crawl / index / metadata (from `technical-seo`) |
| `.env.example` | Documented env keys for local setup |

## Routes

| Route | Source |
|-------|--------|
| `/` | `src/app/page.tsx` (hero, get-started feature cards, network, news, projects list, support, contact) |
| `/about-us/` | `src/app/about-us/page.tsx` (intro, mission, statistics, three pillars) |
| `/YYYY/MM/DD/slug/` | `src/app/[year]/[month]/[day]/[slug]/page.tsx`, one page per article in `src/lib/articles.ts` (static params, other paths 404). Body Markdown lives in `src/content/articles/`, rendered by `src/components/ArticleBody.tsx` |
| `/articles/` | `src/app/articles/page.tsx` (card grid modelled on obama.org/stories/all, Stay Informed band; single page, no pagination or filter) |
| `/fosis-history/` | `src/app/fosis-history/page.tsx` (timeline, chapters, people from `src/content/history.json`) |
| `/find-your-isoc/` | `src/app/find-your-isoc/page.tsx` plus `IsocDirectory` (search and region filter over `src/content/isocs.json`, preset by `?region=`) |
| `/isoc/<slug>/` | `src/app/isoc/[slug]/page.tsx`, one page per ISoc (static params, other slugs 404) |
| `/isoc-affiliations/`, `/fosis-services/`, `/isoc-essentials/`, `/isoc-essentials/leadership/` | ISoc-facing pages. The Essentials pillars Events, Finance, Advocacy, Tarbiyyah and Alumni are "Coming Soon" because the source pages never existed |
| `/events/`, `/fosis-report/` | Pages embedding Luma and Tally iframes (allowed by `frame-src` in `next.config.mjs`) |
| `/ihsaan-careers/`, `/islamic-resources/`, `/support-us/`, `/contact-us/`, `/join-team-fosis/` | Content pages. Donate buttons link to the Zeffy forms. Open roles come from `src/content/jobs.json` |
| `/book-islamophobia-training/`, `/sabbatical-officer-network/` | Enquiry forms via `MailtoForm` (opens the email app, no backend yet) |
| `/day-of-arafat/` | Guide plus `ArafatPlanner` (checklist and progress saved in `localStorage`) |
| `/khutbah-library/` | `KhutbahLibrary` reader over `src/content/khutbahs.json`, Arabic passages in `public/khutbah/` |
| `/_not-found` | Next.js default not-found |

## Key Workflows

1. **Local loop:** `bun install`, `bun run dev`, edit under `src/`, `bun run lint`, `bun run typecheck`, `bun run test:e2e` (it runs the production build itself).
2. **New UI section:** add a component under `src/components/`, compose it from `src/app/page.tsx` (or a new `src/app/<route>/page.tsx`). Reuse `ButtonLink`, `ArrowLink` and `SectionHead` from `src/components/ui.tsx`.
3. **New public route:** add `src/app/<route>/page.tsx`, add the route to `SITEMAP_PATHS` in `src/lib/site.ts`, and add or extend an E2E spec in `e2e/` when behaviour matters.
4. **Regenerate content:** run `python3 tools/content/build-isocs.py` and `python3 tools/content/build-pages-data.py` from the repo root after a change to `docs/fosis-site/`.
5. **Release:** follow `docs/MAINTAINERS.md`. `bun run cf:deploy` is maintainer-only.
6. **Env vars:** extend the Zod schema in `src/lib/env.ts`, document in `.env.example`, call `getEnv()` from server code only.
7. **Lint:** `bun run lint` (Oxlint + anti-slop) is the default gate. Use `bun run lint:eslint` for Next/ESLint rules. Do not lint `tools/oxlint/anti-slop` via TypeScript project checks (excluded in `tsconfig.json`).
8. **CLI / deploy accounts:** `AGENTS.md` lists the profile to use per service. For this repo that is `fosisTech` for `gh`, `techfosis` for Cloudflare and Convex. Clerk and Resend have no FOSIS profile yet.
9. **Dependency bumps:** stay inside Bun's 7-day `minimumReleaseAge`. Pair `oxlint` and `@oxlint/plugins` on the same version.
10. **Launch / compliance pass:** walk `docs/security-checklist.md`, `docs/web-compliance-checklist.md`, and `docs/technical-seo-checklist.md` (or load the matching skills for a deeper audit).

## Tests

| File | Covers |
|------|--------|
| `e2e/home.spec.ts` | Home sections, copy and links, header and mobile drawer, footer, hero video, support pill, overflow, 404 and crawler endpoints at 1440 and 390 px |
| `e2e/about-us.spec.ts` | About Us copy, links, title, canonical, solid header, overflow, sitemap entry at 1440 and 390 px |
| `e2e/remaining-pages.spec.ts` | Every other page: source copy, layout, images and sitemap entry. ISoc directory (112 ISocs, filters, deep links), 15 volunteer roles, khutbah library and reader, Arafat planner storage, enquiry form labels and mailto output, Luma and Tally embeds under the CSP, Zeffy donation links |

## Design decisions

- The home section order follows obama.org's homepage: hero, feature cards (Visit), news cards (Latest), projects list (Programs), donate band, contact details. The mission statement, statistics and pillars live on `/about-us/`. Network stays on home. The newsletter band is built but its form is not connected to a provider. The announcement bar is not built because there is no real announcement.
- The home page copies the obama.org visual language from `DESIGN.md`: navy `#1a4a7a` (the old FOSIS theme's light navy, close to the FOSIS Instagram blue), gold `#fbbf24` panels and mist `#eef1f6` bands, heavy section rules, split hero headline, oversized condensed type, square buttons, radiating line panel.
- Navy `#1a4a7a` is the one dark brand colour (fields, footer, buttons). A slightly darker `navy-mid` `#143a6b` is used for alternating panels. The old FOSIS gold is not used; the accent is the brighter `#fbbf24`.
- Fonts are free lookalikes loaded with `next/font`: Encode Sans Condensed 700 (display, closest measured width and weight to Gotham Condensed Bold), Frank Ruhl Libre 400 (body, narrow and dense like Chronicle Text), Inter 500 (labels). Gotham and Chronicle are licensed and not used.
- Copy comes from `docs/fosis-site/content/`: `home.md` (mission, statistics, pillars, network), `find-your-isoc.md`, `isoc-affiliations.md`, `ihsaan-careers.md` and `book-islamophobia-training.md` (feature cards, the Ihsaan and training lines are short synopses), `articles.md` (news), `support-us.md` and `contact-us.md`. Photos come from `docs/fosis-site/images/`.

## Known Risks

- The hero video is a 20 s, 2.5 MB cut of the 2019 conference highlights (title card, on-screen captions and end cards removed). It is from 2019, so confirm it still represents FOSIS.
- 17 internal links still use `prefetch={false}` from when most routes were unbuilt. All routes exist now, so it can be removed.
- `bun run test:e2e` needs the Helium browser at `/Applications/Helium.app` (`playwright.config.ts`). Machines without it cannot run the suite.
- The enquiry forms use `mailto:` and send nothing. A visitor without a mail app cannot submit one.
- `fosis.org.uk` is not attached to the Worker. Until it is, the site is `noindex` and `https://website.fosis.workers.dev` is the only address.
- CSP allows `'unsafe-inline'` scripts because Next injects inline hydration scripts and the pages are static.
- `docs/fosis-site/` is a 28 MB, 294 file capture. It has no sitemap on the source site, 3 linked 404s, 136 pages with empty meta descriptions, and a broken default `og:image`. Read its `README.md` gaps before relying on it. Copy and images belong to FOSIS; confirm usage rights before publishing the rebuild.
- `NEXT_PUBLIC_APP_URL` must equal `https://fosis.org.uk` on the production build, or the site ships `noindex` and a disallow-all `robots.txt`. Metadata base and canonicals always use `SITE_URL`.
- CSP in `next.config.mjs` is strict (`script-src 'self'`). Adding analytics, Clerk, or Convex clients will need deliberate CSP / header updates.
- `@tailwindcss/typography` is pulled for the Tailwind plugin; an override pins `postcss-selector-parser` for audit cleanliness. Removing typography means revisiting that override.
- Anti-slop lives under `tools/` and is excluded from `tsc`; breaking the plugin only shows up when Oxlint loads it.
- Clerk and Resend have no FOSIS profile yet; do not reuse the `ihsaan` accounts for this project.
