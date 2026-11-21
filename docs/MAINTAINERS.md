# Release the site to Cloudflare

Only authorized FOSIS maintainers use this procedure. Each deployment, each
production secret change, and each domain change needs approval. Contributors
open [pull requests](CONTRIBUTING.md) instead.

## Confirm the release target

1. Follow the maintainer account and author rules in [AGENTS.md](../AGENTS.md).
2. Run `cf auth whoami --profile techfosis`. Check that the account id matches
   the one in AGENTS.md.
3. Check the domain bindings and DNS records.

`wrangler.jsonc` configures the Worker `website` on the FOSIS account and builds
it with OpenNext. The file has no `routes` array, so Cloudflare serves the
Worker only at `https://website.fosis.workers.dev`. The domain `fosis.org.uk` is
not attached to the Worker. Do not change domain bindings or DNS during routine
pull request work.

On workers.dev, leave `NEXT_PUBLIC_APP_URL` unset. With the variable unset,
`robots.txt` disallows all crawlers and every page carries `noindex`.

## Check the release

1. Run the [contributor checks](CONTRIBUTING.md#verify-the-change).
2. Check the dependency advisories:

   ```bash
   bun audit
   ```

3. Walk the checklists that apply to the change: [security](security-checklist.md),
   [web compliance](web-compliance-checklist.md), and
   [technical SEO](technical-seo-checklist.md). A result from an earlier release
   does not count as a new check.

## Deploy the Worker

A Git push does not deploy. Stop the development server before the production
build. Wrangler needs an API token in a non-interactive shell. Do not commit the
token.

1. Build and deploy with the `techfosis` profile:

   ```bash
   bun run cf:deploy
   ```

2. Request the intended host. Check the redirects, `robots.txt`, `sitemap.xml`,
   and the 404 page.
3. Open a page with a Luma or Tally frame. Check that the frame loads under the
   Content Security Policy.
4. Record the deployment and the verification results.

A local build does not show production behavior. Verify on the live host.

## Attach the domain

Do this only with approval.

1. In Workers & Pages, open the `website` Worker. Under Settings, Domains and
   Routes, add `fosis.org.uk` as a Custom Domain.
2. Rebuild with `NEXT_PUBLIC_APP_URL=https://fosis.org.uk`. Next.js reads the
   value at build time, so setting it after the build has no effect.
3. Deploy the new build.
4. Check that `www.fosis.org.uk` redirects to `https://fosis.org.uk`. The rules
   are in `next.config.mjs`.
5. Check `robots.txt` and `sitemap.xml` on the live host.

## Add a secret

The Worker has no runtime secrets. To add a service, record its variables in the
[environment reference](ENVIRONMENT.md) and keep production values out of
`.env.example`.
