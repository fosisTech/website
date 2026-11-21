# FOSIS website rebuild

Rebuild of https://fosis.org.uk/ (Federation of Student Islamic Societies) as a Next.js site. The current WordPress site is the reference. A full scrape of its structure, copy, links, and images lives in [`docs/fosis-site/`](docs/fosis-site/README.md).

The repository started from the `mwijanarko1/template` Next.js starter. The site uses the obama.org visual style described in [`DESIGN.md`](DESIGN.md). Every page of the source site is built. The site runs as a Cloudflare Worker at `https://website.fosis.workers.dev`. The domain `fosis.org.uk` is not attached yet.

## Rebuild reference

All source material for the rebuild is in `docs/fosis-site/` (scraped 12 November 2026):

- [`README.md`](docs/fosis-site/README.md): index, page list, counts, known gaps
- [`STRUCTURE.md`](docs/fosis-site/STRUCTURE.md): sitemap, header and footer, per-page section stacks, design tokens, fonts, tech stack
- `content/<page-slug>.md`: verbatim copy for each of the 146 pages
- [`links.md`](docs/fosis-site/links.md): every unique link
- [`images.md`](docs/fosis-site/images.md) and `images/`: every image and the favicon set

The site favicon (`src/app/favicon.ico`, `src/app/apple-icon.png`) comes from the FOSIS logo in `docs/fosis-site/images/favicons/`.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript for type safety
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4 with custom animations
- **Development**: Turbopack for fast builds
- **Linting**: Oxlint (primary, with anti-slop rules) plus ESLint / Next.js config
- **Testing**: Playwright E2E (Vitest configured, no unit tests)
- **Build Tool**: PostCSS with Autoprefixer

## Features

- **Current state**: all pages built, including 112 ISoc pages, 12 articles, the khutbah library, and the Day of Arafat planner. The enquiry forms open the visitor's email app. The newsletter form has no provider yet
- **Reference capture**: 146 pages of structure, copy, links, and images under `docs/fosis-site/`
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **TypeScript Support**: Full type checking and IntelliSense
- **Custom Animations**: Blob animations and smooth transitions
- **Developer Experience**: Optimized with Turbopack for fast local development

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Bun](https://bun.sh/) (recommended package manager for this project)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/fosisTech/website.git
   cd fosis-website
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Start the development server**
   ```bash
   bun run dev
   ```

## Project Structure

```
fosis-website/
├── AGENTS.md                  # Agent rules + CLI profile inventory
├── docs/
│   ├── CODEBASE_MAP.md        # Architecture / navigation map
│   ├── CONTRIBUTING.md        # Contributor workflow
│   ├── MAINTAINERS.md         # Release and deploy procedure (maintainers only)
│   ├── ENVIRONMENT.md         # Environment variables
│   ├── context.md             # Product context and constraints
│   ├── fosis-site/            # Scrape of fosis.org.uk: structure, copy, links, images
│   ├── security-checklist.md
│   ├── web-compliance-checklist.md
│   └── technical-seo-checklist.md
├── src/
│   ├── app/                   # Next.js App Router routes
│   ├── components/            # Header, footer, hero video, directory, forms, shared UI
│   ├── content/               # Articles (Markdown) and generated JSON data
│   ├── lib/                   # Site constants, nav, articles, ISocs, jobs, env validation
│   └── test/                  # Vitest setup
├── e2e/                       # Playwright E2E specs and runner
├── public/                    # Images, hero video, khutbah passage images
├── tools/content/             # Scripts that regenerate src/content from docs/fosis-site
├── tools/oxlint/anti-slop/    # Custom oxlint rules used across Mikhail Builds repos
├── wrangler.jsonc             # Cloudflare Worker config
├── open-next.config.ts        # OpenNext config
├── DESIGN.md                  # Design brief
├── oxlint.config.mjs          # Primary linter config
├── eslint.config.mjs          # ESLint / Next.js config
├── vitest.config.mts          # Unit test config
├── next.config.mjs
├── postcss.config.mjs
├── tailwind.config.js
└── package.json
```

## Documentation

- [`AGENTS.md`](AGENTS.md): working rules for coding agents, including the GitHub / Cloudflare / Convex / Clerk / Resend profile inventory
- [`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md): contributor workflow, checks, commits, and PR template
- [`docs/context.md`](docs/context.md): product purpose, audience, related organisations, and change constraints
- [`docs/ENVIRONMENT.md`](docs/ENVIRONMENT.md): environment variables and indexing behavior
- [`docs/MAINTAINERS.md`](docs/MAINTAINERS.md): maintainer-only release and deploy procedure
- [`docs/CODEBASE_MAP.md`](docs/CODEBASE_MAP.md): modules, routes, workflows, and risks
- [`docs/fosis-site/README.md`](docs/fosis-site/README.md): scraped reference for the rebuild (structure, copy, links, images)
- [`docs/security-checklist.md`](docs/security-checklist.md): security gate (`security-audit` / `security-vulnerability-mitigation`)
- [`docs/web-compliance-checklist.md`](docs/web-compliance-checklist.md): privacy, a11y, consumer (`website-compliance`)
- [`docs/technical-seo-checklist.md`](docs/technical-seo-checklist.md): crawl/index/metadata (`technical-seo`)

## Scripts

```bash
bun run dev         # Next.js + Turbopack
bun run lint        # Oxlint (primary)
bun run lint:eslint # ESLint / next core-web-vitals
bun run typecheck   # TypeScript
bun run test        # Vitest watch mode
bun run test:run    # Vitest single run (no unit tests)
bun run test:e2e    # Playwright E2E against a production build
bun run build       # Production build
bun run cf:build    # Build the OpenNext bundle for Cloudflare
bun run cf:deploy   # Build and deploy (maintainers only)
```

## Testing

Behaviour is covered by Playwright E2E tests in `e2e/` (Helium browser, production build, 1440 and 390 px viewports). Run `bun run test:e2e`. The suite needs the Helium browser at `/Applications/Helium.app`. Specs: `home.spec.ts`, `about-us.spec.ts`, and `remaining-pages.spec.ts`.

## Environment

Copy `.env.example` to `.env.local` and fill in values. Use `getEnv()` from `src/lib/env.ts` for validated access. Extend the Zod schema when adding Clerk, Convex, or other services.

## Customization

### Styling
- Modify `tailwind.config.js` to add custom colors, fonts, or animations
- Update `src/app/globals.css` for global styles
- Components use Tailwind utility classes for easy customization

### Components
- Add new components in `src/components/`
- Import and use them in your pages

## Deployment

### Build for Production
```bash
bun run build
```

### Start Production Server
```bash
bun run start
```

### Deploy to Cloudflare

The site runs as a Cloudflare Worker through OpenNext (`wrangler.jsonc`, `open-next.config.ts`). The Worker is named `website` on the FOSIS account (`techfosis` profile), so the production URL is `https://website.fosis.workers.dev`.

```bash
bun run cf:build                          # next build plus the OpenNext bundle
bunx wrangler deploy --profile techfosis  # upload to production
```

Wrangler needs an API token in non-interactive shells. Do not set `NEXT_PUBLIC_APP_URL` for the workers.dev URL: with it unset, `robots.txt` disallows everything and every page is `noindex`. Set it to `https://fosis.org.uk` at build time only when the real domain is attached.

To attach the domain, add `fosis.org.uk` as a Custom Domain on the `website` Worker (Workers & Pages, Settings, Domains and Routes), then rebuild with `NEXT_PUBLIC_APP_URL=https://fosis.org.uk`.

## Contributing

Read [`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md) before you open a pull request. Contributions should also follow the rules in `AGENTS.md`:
- Read `docs/fosis-site/` before writing copy, and do not paraphrase it
- Add new components in `src/components/`
- Run `bun run lint` and `bun run typecheck` before proposing a change

## License

This project is open source and available under the [MIT License](LICENSE).
