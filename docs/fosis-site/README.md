# FOSIS website, full scrape for a rebuild

This folder is a complete read-only capture of the public FOSIS website at
**https://fosis.org.uk**, taken so the site can be rebuilt from these files alone without
touching the original.

| | |
| --- | --- |
| Crawl date | 12 November 2026, 21:57 to 23:10 UTC |
| Tooling | `curl` (no headless browser, no paid scraping service), parsed with Python 3.9 + `beautifulsoup4` 4.15 + `lxml` 6.1 |
| Pages fetched | 212 distinct internal URLs requested, 209 returned 200 and 3 returned 404 |
| Pages captured | 146 unique content pages |
| Discovery method | homepage, both nav menus, footer, in-page links, pagination, `/feed/`, and the WordPress REST API (`/wp-json/wp/v2/`) |
| Sitemap | none published, see gaps below |
| Result | 0 unreadable content pages |

## What is in this folder

| File or folder | What it holds |
| --- | --- |
| `README.md` | This index, the page list, the counts, and the gaps. |
| `STRUCTURE.md` | Sitemap tree, global header/nav, global footer, per-page section stacks with real CSS class names, per-page `<title>` / meta description / `og:image` / canonical, design tokens, fonts, tech stack, behaviour notes. |
| `content/<page-slug>.md` | One file per page: every visible word in document order, heading levels preserved, lists, button labels, image alt text, form field labels, placeholders and `mailto`s, and every link as `[text](url)`. |
| `links.md` | Every unique link (347), with link text, the page(s) it appears on, and a type (`nav`, `footer`, `body`, `social`, `external`, `mailto`, `anchor`). Plus the decoded email addresses and the embedded third-party endpoints. |
| `images.md` | Every image (131 content files), source URL, local path, alt text, intrinsic pixel size, and the pages it appears on. Also the logo, the `og:image` audit, the favicon table with the recommended 32x32 and 180x180 picks, and the CSS background images. |
| `images/` | The images themselves at the largest resolution available. `images/site/` for brand and hero assets, `images/pages/` for everything else, `images/favicons/` for the icon set. |
| `downloads/` | Empty by design. The site links no downloadable documents, see `downloads/README.md`. |

## Counts

| Measure | Count |
| --- | --- |
| Content pages captured | **146** |
| WordPress pages | 21 |
| Blog posts | 13 |
| ISoc profile pages | 112 |
| Content markdown files | **146** |
| Total content markdown | 628,422 bytes |
| Unique links | **347** |
| Unique image URLs referenced | 131 (plus one 1x1 data-URI tracking pixel that was not saved) |
| Image files downloaded | **131** across the site (plus 12 favicon files) |
| Downloadable documents | 0 |
| Pages returning 404 while linked from the site | 3 |
| Pages reachable in the CMS but serving a 301 to the homepage | 30 |

Link breakdown: **social** 153, **external** 104, **body** 66, **nav** 17, **footer** 16, **mailto** 15, **anchor** 2.

## Every page found

### WordPress pages (21)

| URL | `<title>` | Content file |
| --- | --- | --- |
| https://fosis.org.uk/ | `FOSIS` | `content/home.md` |
| https://fosis.org.uk/about-us/ | `About Us – FOSIS` | `content/about-us.md` |
| https://fosis.org.uk/fosis-history/ | `FOSIS History – FOSIS` | `content/fosis-history.md` |
| https://fosis.org.uk/find-your-isoc/ | `Find Your ISoc – FOSIS` | `content/find-your-isoc.md` |
| https://fosis.org.uk/events/ | `Events – FOSIS` | `content/events.md` |
| https://fosis.org.uk/ihsaan-careers/ | `Ihsaan Careers – FOSIS` | `content/ihsaan-careers.md` |
| https://fosis.org.uk/fosis-report/ | `FOSIS Report – FOSIS` | `content/fosis-report.md` |
| https://fosis.org.uk/islamic-resources/ | `Islamic Resources – FOSIS` | `content/islamic-resources.md` |
| https://fosis.org.uk/isoc-affiliations/ | `ISoc Affiliations – FOSIS` | `content/isoc-affiliations.md` |
| https://fosis.org.uk/isoc-essentials/ | `ISoc Essentials – FOSIS` | `content/isoc-essentials.md` |
| https://fosis.org.uk/isoc-essentials/leadership/ | `Leadership – FOSIS` | `content/isoc-essentials-leadership.md` |
| https://fosis.org.uk/join-team-fosis/ | `Join Team FOSIS – FOSIS` | `content/join-team-fosis.md` |
| https://fosis.org.uk/support-us/ | `Support Us – FOSIS` | `content/support-us.md` |
| https://fosis.org.uk/book-islamophobia-training/ | `Book Islamophobia Training – FOSIS` | `content/book-islamophobia-training.md` |
| https://fosis.org.uk/sabbatical-officer-network/ | `Sabbatical Officer Network – FOSIS` | `content/sabbatical-officer-network.md` |
| https://fosis.org.uk/contact-us/ | `Contact Us – FOSIS` | `content/contact-us.md` |
| https://fosis.org.uk/articles/ | `Articles – FOSIS` | `content/articles.md` |
| https://fosis.org.uk/articles/page/2/ | `Articles – Page 2 – FOSIS` | `content/articles-page-2.md` |
| https://fosis.org.uk/fosis-services/ | `FOSIS Services – FOSIS` | `content/fosis-services.md` |
| https://fosis.org.uk/day-of-arafat/ | `The Day of Arafat, A Companion Guide` | `content/day-of-arafat.md` |
| https://fosis.org.uk/khutbah-library/ | `FOSIS Khutbah Library` | `content/khutbah-library.md` |

### Blog posts (13)

| Date | URL | `<title>` | Content file |
| --- | --- | --- | --- |
| 2026-04-16 | https://fosis.org.uk/2026/04/16/towards-an-ummatic-vision-lessons-from-fosis-annual-conference-2025/ | `Towards an Ummatic Vision: Lessons from FOSIS Annual Conference 2025 – FOSIS` | `content/article-towards-an-ummatic-vision-lessons-from-fosis-annual-conference-2025.md` |
| 2026-04-16 | https://fosis.org.uk/2026/04/16/the-new-face-of-islamophobia-in-britain/ | `The New Face of Islamophobia in Britain. – FOSIS` | `content/article-the-new-face-of-islamophobia-in-britain.md` |
| 2026-04-16 | https://fosis.org.uk/2026/04/16/4-surprising-truths-about-power-protest-and-a-generation-reawakened/ | `4 Surprising Truths About Power, Protest, and a Generation Reawakened – FOSIS` | `content/article-4-surprising-truths-about-power-protest-and-a-generation-reawakened.md` |
| 2026-04-16 | https://fosis.org.uk/2026/04/16/when-tyranny-falls-lessons-from-syria-for-todays-students/ | `When Tyranny Falls: Lessons from Syria for Today’s Students – FOSIS` | `content/article-when-tyranny-falls-lessons-from-syria-for-todays-students.md` |
| 2026-04-16 | https://fosis.org.uk/2026/04/16/narrative-warfare-and-intifada-freedom-of-expression-and-the-policing-of-protest/ | `Narrative Warfare and ‘Intifada’: Freedom of Expression and the Policing of Protest – FOSIS` | `content/article-narrative-warfare-and-intifada-freedom-of-expression-and-the-policing-of-protest.md` |
| 2026-04-16 | https://fosis.org.uk/2026/04/16/the-spiritual-cost-of-modern-education-and-a-muslim-vision-for-renewal/ | `The Spiritual Cost of Modern Education and a Muslim Vision for Renewal – FOSIS` | `content/article-the-spiritual-cost-of-modern-education-and-a-muslim-vision-for-renewal.md` |
| 2026-04-15 | https://fosis.org.uk/2026/04/15/hello-world/ | `Hello World! – FOSIS` | `content/article-hello-world.md` |
| 2024-11-15 | https://fosis.org.uk/2024/11/15/ihsaan-2024-how-3000-muslim-graduates-found-their-path/ | `IHSAAN 2024: How 3,000 Muslim Graduates Found Their Path – FOSIS` | `content/article-ihsaan-2024-how-3000-muslim-graduates-found-their-path.md` |
| 2024-10-02 | https://fosis.org.uk/2024/10/02/islamophobia-on-campus-what-the-data-tells-us-and-what-were-doing-about-it/ | `Islamophobia on Campus: What the Data Tells Us, and What We’re Doing About It – FOSIS` | `content/article-islamophobia-on-campus-what-the-data-tells-us-and-what-were-doing-about-it.md` |
| 2024-09-05 | https://fosis.org.uk/2024/09/05/how-to-build-a-thriving-isoc-10-lessons-from-the-uks-best-islamic-societies/ | `How to Build a Thriving ISoc: 10 Lessons from the UK’s Best Islamic Societies – FOSIS` | `content/article-how-to-build-a-thriving-isoc-10-lessons-from-the-uks-best-islamic-societies.md` |
| 2024-03-10 | https://fosis.org.uk/2024/03/10/ramadan-at-university-a-complete-guide-for-students-and-isoc-leaders/ | `Ramadan at University: A Complete Guide for Students and ISoc Leaders – FOSIS` | `content/article-ramadan-at-university-a-complete-guide-for-students-and-isoc-leaders.md` |
| 2024-01-18 | https://fosis.org.uk/2024/01/18/faith-identity-and-the-british-muslim-graduate/ | `Faith, Identity and the British Muslim Graduate – FOSIS` | `content/article-faith-identity-and-the-british-muslim-graduate.md` |
| 2023-11-22 | https://fosis.org.uk/2023/11/22/why-muslim-students-need-a-national-voice-more-than-ever/ | `Why Muslim Students Need a National Voice More Than Ever – FOSIS` | `content/article-why-muslim-students-need-a-national-voice-more-than-ever.md` |

### ISoc profiles (112)

All under `https://fosis.org.uk/isoc/<slug>/`, one content file each named
`content/isoc-<slug>.md`. The complete list with URLs is in the table in `STRUCTURE.md`.

Two different region taxonomies are in play, which is a real inconsistency in the original:
the `/find-your-isoc/` directory groups the 112 societies into the 7 broad committees used by
the filter pills, while each profile page and the `/isoc-affiliations/` region cards record a
finer geographic region. The two do not agree, so both are listed.

**Directory grouping (7 filters on `/find-your-isoc/`, sums to 112):**

| Filter | Cards |
| --- | --- |
| London | 25 |
| North | 25 |
| South | 19 |
| Midlands | 17 |
| Scotland | 12 |
| Ireland | 8 |
| Wales and West | 6 |

**Fine region recorded on the profile page (17 values, also sums to 112):**

| Profile region | Profiles |
| --- | --- |
| London | 26 |
| Scotland | 13 |
| Yorkshire & Humber | 10 |
| North West | 8 |
| West Midlands | 8 |
| Wales | 6 |
| East Midlands | 6 |
| South East | 6 |
| South West | 5 |
| Ireland | 5 |
| North East | 5 |
| South | 3 |
| Midlands | 3 |
| East of England | 3 |
| North | 2 |
| Northern Ireland | 2 |
| South, South West | 1 |

## Pages I could not reach

| URL | Status | Why |
| --- | --- | --- |
| `https://fosis.org.uk/isoc-essentials/finance/` | 404 | Linked from ISoc Essentials dashboard card 03. The page was never created. |
| `https://fosis.org.uk/isoc-essentials/advocacy/` | 404 | Linked from ISoc Essentials dashboard card 04. |
| `https://fosis.org.uk/isoc-essentials/tarbiyyah/` | 404 | Linked from ISoc Essentials dashboard card 05. |
| 15 x `https://fosis.org.uk/fosis_jobs/<role>/` | 301 to `/` | Present in the WP REST API (`/wp-json/wp/v2/fosis_jobs`, 15 items) but every public URL redirects to the homepage, so no content is retrievable. Role titles: Divestment Lead, External Partnerships & Relations Officer, Fresher Pack Co-Ordinator, Gazan Scholars Lead, Gazan Scholars Welfare Officer, General Officer, General Secretary (Midlands Region), Graphic Designer (Media and Marketing), HR Operations & Recruitment Volunteer, HR Training & People Development Volunteer, ISoc Rep (Midlands), Mental Health Researcher, Research & Policy Officer, Team Member (Student Engagement), Volunteer (North Sisters Education). Note the `/join-team-fosis/` page renders all 15 as client-side job cards with full descriptions, and those descriptions **are** captured in `content/join-team-fosis.md`. |
| 8 x `https://fosis.org.uk/nec_member/<role>/` | 301 to `/` | In the REST API, not routable. Names and roles are captured from the `/about-us/` carousel instead. |
| 7 x `https://fosis.org.uk/regional_chair/<role>/` | 301 to `/` | In the REST API, not routable. Names, roles and emails are captured from the `/about-us/` chairs grid. |
| `https://fosis.org.uk/sitemap.xml` | 301 to `/wp-sitemap.xml` | No XML sitemap is published. `/wp-sitemap.xml` itself is a 404. |
| `https://fosis.org.uk/site.webmanifest` | 404 | No web app manifest. |
| `https://fosis.org.uk/wp-content/themes/fosis/assets/images/og-default.jpg` | 404 | The theme points every page's `og:image` at this file, but it does not exist. This is a live bug on the site, see `images.md`. |

No page returned a JavaScript-only shell. Every URL above that returned 200 was fully
server-rendered HTML. The two richest client-side surfaces were handled separately:

- `/khutbah-library/` is a single-file HTML app whose entire 36-khutbah corpus lives in a JSON
  blob inside the page. That blob is plain text in the source, so it was parsed directly into
  `content/khutbah-library.md` rather than needing a browser.
- `/join-team-fosis/` exposes each job description in a `data-description` attribute on the
  card, which was read and formatted into `content/join-team-fosis.md`.

## Verification

Three checks were run against the finished output.

**1. Re-fetch and diff.** Two pages were fetched a second time and re-extracted, then compared
line by line against what is saved in `content/`.

| Page | Fresh bytes | Saved bytes | Extracted text identical | Saved markdown contains it in full |
| --- | --- | --- | --- | --- |
| `/` | 74,932 | 74,857 | yes | yes |
| `/book-islamophobia-training/` | 111,931 | 111,932 | yes | yes |

The byte differences are per-request nonces and cache-build timestamps in inline scripts, not
copy. The extracted visible text was byte-identical for both.

**2. Word-coverage audit.** Every page was re-parsed and every visible word was checked against
its own `content/` file. Across 146 pages and 32,932 visible words in page bodies, the only
unmatched tokens are `email` and `protected` from Cloudflare's `[email protected]` placeholder,
which this capture replaces with the decoded address (e.g.
`[info@fosis.org.uk](mailto:info@fosis.org.uk)`). No other visible text is missing from any
page. `khutbah-library` is excluded from that word count because its copy lives in a JS blob
rather than the document body; its 36 khutbahs and 222,121 characters of English text were
extracted separately into `content/khutbah-library.md`.

**3. Counts.** Page, image and link counts above are computed from the artefacts themselves
(files on disk, the link inventory, the image manifest), not typed in by hand, so they match
what is in the folder.

## Things a rebuild has to decide, because the original is inconsistent

These are real defects on the live site, recorded here so they are not reproduced by accident.

- **The default share image 404s.** `og-default.jpg` is referenced in the head of every
  non-ISoc page and does not exist. 33 pages have a broken `og:image` as a result.
- **Meta descriptions are empty.** 136 of 146 pages ship `<meta name="description" content="">`.
  Only 8 posts and 2 pages have a real one.
- **No canonical tag** on `/articles/`, `/articles/page/2/`, `/day-of-arafat/` or
  `/khutbah-library/`.
- **Duplicate Open Graph tags.** Posts and ISoc pages emit the theme `og:*` block and then a
  second Jetpack `og:*` block in the same `<head>`.
- **No sitemap, no manifest, no robots sitemap line.** `robots.txt` only disallows `/wp-admin/`.
- **No privacy policy, terms, cookie notice or charity registration link in the footer.** The
  charity number 1040360 appears only inside `/support-us/` body copy. For a site that takes
  donations and runs forms, that is a compliance gap in the original.
- **Six broken template links** on `/isoc-essentials/leadership/` and three 404 resource pages
  under `/isoc-essentials/`.
- **Two different contact pages use different spelling for the same inbox:**
  `studentaffairs@fosis.org.uk` on `/contact-us/` versus `student.affairs@fosis.org.uk`
  everywhere else. Worth confirming which is real before rebuilding.
- **Nav labels do not match page titles** in three places (Career Help, ISoc Resources,
  Explore FOSIS Projects). Preserved as-is in `STRUCTURE.md`.
- **The logo is 512x464, not square**, and renders at that size in a 100px header.
- **No `tel:` link and no postal address anywhere**, despite the contact page having a
  "Find Us" section.

## Note on dashes in this documentation

The verbatim copy inside `content/` preserves every original dash, apostrophe and typographic
character exactly, including the en dashes in page titles such as `About Us – FOSIS` and the
curly apostrophes in body text. Prose written by this capture, meaning this README,
`STRUCTURE.md`, `links.md` and `images.md`, avoids em dashes and en dashes so it cannot be
confused with site copy.

