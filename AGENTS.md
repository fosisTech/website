# Agent Instructions

## Project

Rebuild of https://fosis.org.uk/ (FOSIS) in Next.js. Reference material is the scrape in `docs/fosis-site/` (start at its `README.md`, then `STRUCTURE.md`). Treat it as read-only source of truth for copy, links, and images. The code started from the Next.js template `mwijanarko1/template`.

Stack: Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, Vitest, Oxlint (with anti-slop), Bun.

Setup for this repo is complete. The profile inventories below were read from the CLIs on 12 November 2026; re-run the listed check command before trusting them if much time has passed.

## GitHub account

Use the **`fosisTech`** GitHub CLI profile for every git and `gh` operation in this repository.

```bash
env -u GITHUB_TOKEN gh auth switch --user fosisTech
gh api user --jq .login   # must print fosisTech
```

- Remote owner: `fosisTech/website` (`https://github.com/fosisTech/website.git`)
- Do not push, open PRs, or create issues as a different logged-in account
- If `GITHUB_TOKEN` is set in the shell, it overrides the keyring user; unset it when switching

Accounts in `gh` on this machine (`gh auth status`):

| Account | Status | Location |
|---------|--------|----------|
| `fosisTech` | active, the one to use here | keyring |
| `mwijanarko1` | not active, template author, not for this repo | `~/.config/gh/hosts.yml` |

## CLI profiles (Cloudflare, Convex, Clerk, Resend)

These services are optional until the project adds them. When they are in use, always target the named profile or instance for this repo. Never use a personal default profile by accident.

This repository uses:

| Tool | Profile for this repo | Check |
|------|----------------------|-------|
| Cloudflare (`cf` CLI) | `techfosis` | `cf auth whoami --profile techfosis` |
| Convex (`convex-profile`) | `techfosis` | `convex-profile list` |
| Clerk CLI | none yet, see the Clerk note below | `clerk whoami` |
| Resend CLI | none yet, see the Resend note below | `resend auth list` |

### Cloudflare (`cf`)

Prefer the `cf` CLI over bare Wrangler for auth and account ops. Pass the profile on every call:

```bash
cf auth whoami --profile techfosis
cf <command> --profile techfosis
```

Optional: bind the profile to this checkout so later commands inherit it:

```bash
cf auth activate techfosis /Users/mikhail/Code/fosis-website
```

If a deploy step needs Wrangler (for example OpenNext), pass the matching profile there too (`bunx wrangler deploy --profile techfosis`).

Every `cf` profile on this machine (`cf auth list`):

| Profile | Email | Bound directories |
|---------|-------|-------------------|
| `techfosis` | tech@fosis.org.uk | none (use for this repo) |
| `techihsaan` | tech.ihsaan@fosis.org.uk | `ihsaan-member-platform`, `ihsaan-public-website` |
| `pareto-edu` | pareto.education.website@gmail.com | `pareto-edu`, `pareto-website` |
| `sheffhallamisoc` | sheffhallamisoc.web@gmail.com | `hallam-website` |
| `mikhailspeaks` | mikhailspeaks@gmail.com | none |
| `myakhirahaccount` | myakhiraha@gmail.com | none |
| `mwhsheffield` | dev.mwhs@gmail.com | none |

The FOSIS account id behind `techfosis` is `e466548ab93ade89665189f4550db361` ("Tech@fosis.org.uk's Account"). Confirm with `cf auth whoami --profile techfosis` before any destructive call.

To add a profile, run `cf auth create <name>` (add `--no-browser` to print the device URL instead of opening it). The device code expires in 5 minutes, so the command has to stay running while the browser step is completed.

### Convex

Convex CLI login is global. Use the local `convex-profile` helper (not a project dependency) to save and switch named logins under `~/.convex/profiles/`:

```bash
convex-profile list
convex-profile switch techfosis
bunx convex dev
```

Every Convex profile on this machine (`convex-profile list`; `*` marks the active one):

| Profile | Notes |
|---------|-------|
| `techfosis` | active, this repo |
| `ihsaan` | |
| `paretoedu` | |
| `sheffhallamisoc` | |
| `mikhailspeaks` | |
| `myakhirahaccount` | |

Save a new login after `bunx convex login --force` with `convex-profile save <name>`. Do not switch while another Convex command is writing credentials. Switching is global, so it affects every project that reads `~/.convex/config.json`.

The `techfosis` login currently reports one team, `hassan-kambala` ("Hassan Kambala's team"), via `bunx convex login status`. Confirm that is the intended team before deploying.

### Clerk

Clerk CLI auth is account-level; instances are selected per command:

```bash
clerk auth login
clerk config pull --instance <instance>
# production env files are often pulled separately, e.g.:
# bunx clerk env pull --instance prod --file .env.production.local
```

The signed-in Clerk account is `tech.ihsaan@fosis.org.uk`. Applications and instances available to it (`clerk apps list`):

| Application | Instance | Instance id |
|-------------|----------|-------------|
| IHSAAN Member Platform | production | `ins_3KdkExy4VcxXtuSzX9VD6VCOwKZ` |
| IHSAAN Member Platform | development | `ins_3J6OwQtfWfKtIq7owyDw65VzOKv` |
| My Application | development | `ins_3J6Oi3re0VWoCEMu0tgflhXxmj4` |

There is no FOSIS Clerk application yet. Create one before wiring auth, then record its instance ids here. Keep production secrets out of git.

### Resend

```bash
resend auth list
resend auth switch <profile>
resend whoami -p <profile>
```

Profiles on this machine (`resend auth list`):

| Profile | Notes |
|---------|-------|
| `ihsaan` | active, full access, belongs to IHSAAN not FOSIS |

There is no FOSIS Resend profile yet. When this project needs transactional email, log in and save a separate profile rather than reusing `ihsaan`, for example `resend login -p techfosis`. Then set `RESEND_PROFILE=techfosis` in the shell, or pass `-p techfosis` on each command.

## Working guidelines

- Keep changes small and limited to the requested scope.
- Follow existing patterns in `src/` before introducing new abstractions or dependencies.
- Use **Bun** for package management and project commands (`bun install`, `bun add`, `bun run …`). Do not use npm or yarn unless the user explicitly asks.
- Never commit secrets. Use `.env.local` for local values (see `.env.example`).
- Preserve unrelated worktree changes.
- Respect `~/.bunfig.toml` `minimumReleaseAge` (7 days). Do not disable the age gate for routine dependency bumps.
- Primary lint is Oxlint (`bun run lint`), including anti-slop rules under `tools/oxlint/anti-slop`. Use `bun run lint:eslint` when Next/ESLint rules matter.

## Commands

- `bun install` installs dependencies.
- `bun run dev` starts the local development server (Turbopack).
- `bun run lint` runs Oxlint.
- `bun run lint:eslint` runs ESLint (Next core-web-vitals + TypeScript).
- `bun run typecheck` runs `tsc --noEmit`.
- `bun run test` / `bun run test:run` runs Vitest.
- `bun run build` creates a production build.
- `bun run start` serves the production build.

## Verification

Run the narrowest relevant check first. Before finishing, review `git diff` and confirm every changed line belongs to the request.

Before a public launch or after adding auth, forms, payments, trackers, or a custom domain, walk the docs checklists (or load the matching skills for a deeper pass):

| Checklist | Skill(s) | When |
|-----------|----------|------|
| `docs/security-checklist.md` | `security-audit`, `security-vulnerability-mitigation` | Secrets, headers, authz, injection, supply chain, deploy |
| `docs/web-compliance-checklist.md` | `website-compliance` | Privacy, a11y, cookies, consumer surfaces |
| `docs/technical-seo-checklist.md` | `technical-seo` (+ `pagespeed` for live CWV) | robots/sitemap, canonicals, metadata, crawl/index |

Compliance gaps are not automatically vulnerabilities. Full repository security audits stay read-only under `security-audit` and need independent verification; do not probe production without explicit scope.

## Project references

Read these before architectural, product, launch, or UI-structure changes:

- `README.md`
- `docs/fosis-site/README.md` and `docs/fosis-site/STRUCTURE.md`
- `docs/CODEBASE_MAP.md` (refresh with the cartographer skill when module layout changes)
- `docs/security-checklist.md`
- `docs/web-compliance-checklist.md`
- `docs/technical-seo-checklist.md`
