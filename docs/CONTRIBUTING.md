# Contribute to the FOSIS website

Open pull requests against `main` in
[`fosisTech/website`](https://github.com/fosisTech/website).
Do not push to `main`. Maintainers review and merge pull requests and deploy
the site.

## Use your own account and identity

Use your own GitHub account, Git name, and email address. Ignore these
maintainer-only sections of [AGENTS.md](../AGENTS.md), including when you use a
coding agent:

- **GitHub account.** Do not switch to `fosisTech` or ask for shared credentials.
- **CLI profiles.** Do not use the FOSIS Cloudflare, Convex, Clerk, or Resend
  profiles. Do not change production secrets. Do not run `bun run cf:deploy` or
  `wrangler deploy`. Open a pull request instead.
- **Git commit author.** Do not use the `fosisTech` noreply address as your
  commit identity.

Follow the other rules in AGENTS.md. The same exceptions apply to the
[maintainer procedure](MAINTAINERS.md).

## Prepare the change

1. Follow the [local setup guide](../README.md#getting-started).
2. Read the [product context](context.md) and the [codebase map](CODEBASE_MAP.md).
3. If you change copy, links, or images, read the
   [scraped reference](fosis-site/README.md). Treat it as read-only and do not
   paraphrase its copy.
4. If you change the UI, read [DESIGN.md](../DESIGN.md).
5. Create a topic branch from the latest `main`, such as `docs/contributing` or
   `fix/contact-form`.
6. Limit the change to one problem.

If you have no branch access, use a fork when the repository allows it.
Otherwise, ask a maintainer for access. Discuss a large feature or an
architecture change with a maintainer before you start.

Use Bun for dependencies and project commands. Follow the existing patterns in
`src/` before you add a dependency or an abstraction. Put new components in
`src/components/`. Do not add eyebrow labels above headings.

Keep secrets, local environment files, build output, and unrelated edits out of
your commits. Copy `.env.example` to `.env.local` for local values. Do not ask
for production secrets. Before you change an environment variable, read the
[environment reference](ENVIRONMENT.md).

## Verify the change

Run the narrowest relevant check first. Stop the development server before you
run the production build. Before you request review, run these checks one at a
time in one checkout:

```bash
bun run lint
bun run typecheck
bun run test:e2e
```

`bun run test:e2e` builds the site, starts a production server on a free local
port, and runs the Playwright suite at 1440 px and 390 px. It needs the Helium
browser at `/Applications/Helium.app`. If you cannot run it, say so in the pull
request.

Match the evidence to the change:

- Reproduce the affected user flow and confirm the result.
- For a bug fix, show the same reproduction before and after the fix.
- Prefer an end-to-end (E2E) regression test in `e2e/`. If E2E cannot reach the
  behavior or is out of proportion to the change, write an integration test and
  explain why. Do not add unit tests.
- For a UI change, check the desktop and mobile layouts. Attach screenshots of
  the affected states. For an interaction, list the steps and assertions too. A
  screenshot does not prove that an interaction works.
- For a documentation change, check the commands, links, and rendered text. If
  the application checks do not apply, say why.

Report each failed or skipped check and the reason. Claim a pass only for checks
you ran. Before you commit, run `git diff --check` and read the full diff.

## Write focused commits

Make each commit complete and limit it to one problem. Put unrelated changes,
formatting, and refactors in separate commits. Remove accidental edits, unused
code, and comments that repeat the code.

Use a Conventional Commit title for each commit and each pull request:

```text
type(scope): short imperative subject
```

Use `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, or `perf` as the type.
Name the changed area as the scope, as in
`docs(contributing): explain the contributor PR workflow`.
Do not end the title with a period.

## Open a pull request

1. Push your topic branch.
2. After you verify the change, open a pull request against `main`.
3. Link the related issue, if one exists.
4. Describe the change with the template below.

A reviewer must be able to read the description in under a minute. Always
include Scope and Verification. Omit any other section that adds no information.
Keep the remaining headings in the order shown.

```markdown
## Why
State the problem and the approach in one to three sentences.

## What changed
- Summarize the main changes in one to three bullets.

## Scope
- State what the pull request includes and what it leaves out.

## Tradeoffs
Explain a rejected alternative when reviewers need the context.

## Blast radius
Name the affected users, the affected behavior, and any compatibility or
deployment risk.

## Verification
- Name each check and its result. Explain each skipped check.
```

Attach screenshots or other evidence that supports a claim. Link long logs
instead of pasting them. Remove secrets and personal data from all evidence.

## Address review feedback

Push focused follow-up commits. Keep the description and the verification
results current. Do not force-push a shared branch unless its collaborators
agree. Leave the merge and the deployment to the maintainers.

## Update shared documentation

When a command, variable, route, or workflow changes, update the guide that
describes it. Check relative links against the checkout. Date historical results
and do not present them as current verification.

Keep shared Markdown files in `docs/`. The exceptions are `README.md`,
`AGENTS.md`, and `DESIGN.md` in the repository root. Keep personal accounts,
absolute machine paths, private session records, and credentials out of shared
documentation.
