# About the FOSIS website

## Purpose and audience

FOSIS, the Federation of Student Islamic Societies, is the national voice for
Muslim students in UK higher education. It connects more than 100 Islamic
Societies (ISocs) and 350,000 students. The website tells visitors what FOSIS
does and helps them act on it. A student can find their ISoc, a committee can
read the ISoc guidance, a partner can book training, and a supporter can donate.

This site rebuilds https://fosis.org.uk/ in Next.js. The scrape in
[docs/fosis-site/](fosis-site/README.md) is the source of truth for copy, links,
and images. The rebuild changes the code and the design. It does not change what
the pages say.

## Public content

The site has these areas:

- The home page, with the hero video, the FAQ, and the newsletter band.
- About us, the FOSIS history, the FOSIS report, and the FOSIS services.
- The ISoc directory, one page for each ISoc, affiliations, and essentials.
- Events, articles, Islamic resources, the khutbah library, and the Day of Arafat
  planner.
- Join the team, the sabbatical officer network, Islamophobia training booking,
  and IHSAAN careers.
- Support us and contact us.

`SITEMAP_PATHS` in `src/lib/site.ts` lists every route. The generated data is in
`src/content/`. The scripts in `tools/content/` rebuild it from the scrape.

The enquiry forms open the visitor's email app and send nothing. The newsletter
form has no provider yet. The only allowed third-party embeds are Luma and Tally
frames. The site has no backend, so it stores no visitor data.

## Relationship to IHSAAN

FOSIS is the parent organisation of IHSAAN. IHSAAN has its own public website
and member portal in separate repositories. This site shares no authentication,
backend, or private data with them.

The only link today is the careers page at `/ihsaan-careers/`. More links to
IHSAAN may follow. A link out is a content change. A shared login or shared data
would change the architecture and needs a recorded decision first.

## Domains and deployment

The canonical production origin is `https://fosis.org.uk`. `src/lib/site.ts`
fixes it. The site is not attached to that domain yet. It runs as a Cloudflare
Worker, built with OpenNext, at `https://website.fosis.workers.dev`. That copy
is not indexable. Local development uses `http://localhost:3000`.

`next.config.mjs` redirects `www.fosis.org.uk` to the apex domain. The
[maintainer procedure](MAINTAINERS.md) separates release approval and live
verification from local development.

## Visual identity

[DESIGN.md](../DESIGN.md) holds the design brief, which adapts the visual
language of obama.org. The evidence for it is in
[docs/obama-design/](obama-design/evidence.md).

## Constraints on change

Four rules shape most changes:

- Copy, links, and images come from `docs/fosis-site/`. Do not paraphrase or
  invent copy. Ask the FOSIS team before you change launch copy.
- Only the production origin is indexable. Every other deployment is `noindex`,
  so a preview copy cannot compete with the live site in search results.
- New analytics or third-party embeds need an explicit decision and a review of
  the Content Security Policy in `next.config.mjs`.
- Every new route goes into `SITEMAP_PATHS`.

The [contributor guide](CONTRIBUTING.md) describes the pull request workflow.
FOSIS maintainers own merges, secrets, and releases.
