# Environment reference

The site has no Clerk, Convex, or mail runtime and needs no secrets. The local
template is [.env.example](../.env.example). The
[setup guide](../README.md#getting-started) describes local configuration.

## Application variables

| Variable | Default | Behavior |
| --- | --- | --- |
| `NEXT_PUBLIC_APP_URL` | Unset | Controls indexing. The exact value `https://fosis.org.uk` makes `robots.txt` allow crawlers and removes `noindex`. Any other value, or no value, disallows all crawlers. Next.js inlines the value at build time. |
| `NODE_ENV` | Set by Next.js | Selects development or production behavior. In development, the Content Security Policy allows `unsafe-eval` for React debugging. |
| `FOSIS_E2E_PORT` | Set by `bun run test:e2e` | Holds the port of the Playwright production server. The runner reserves a free local port and sets the variable. |

`src/lib/site.ts` defines the canonical origin `SITE_URL` and the function
`isIndexable()`. `src/lib/env.ts` validates `NODE_ENV` and `NEXT_PUBLIC_APP_URL`
with Zod through `getEnv()`.

## Environment file order

In development, the first definition wins in this order:

1. The process environment.
2. `.env.development.local`.
3. `.env.local`.
4. `.env.development`.
5. `.env`.

In production, Next.js uses `production` in place of `development` in those file
names. A production build reads `.env.local` and does not read
`.env.development.local`.

In test mode, Next.js uses the test file names and skips `.env.local`.

## E2E target

`bun run test:e2e` builds the site with `NEXT_PUBLIC_APP_URL` set to an empty
string, so the suite always runs in the non-indexable mode. The runner starts
its own server and needs no running server.

## Worker secrets

The Worker has no runtime secrets. Only authorized maintainers change the Worker
configuration. The [maintainer procedure](MAINTAINERS.md#add-a-secret) describes
the steps.
