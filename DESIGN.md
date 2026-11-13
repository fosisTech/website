---
title: "Obama.org visual-language reference for FOSIS"
source: "https://www.obama.org/"
observed: "2026-11-12"
status: "Reference extraction, not approval to replace FOSIS branding"
evidence: "docs/obama-design/evidence.md"
colors:
  ink: "#000000"
  paper: "#ffffff"
  light-grey: "#f3f3ee"
  cobalt-blue: "#0064f0"
  dark-blue: "#081f5d"
  sky-blue: "#8eddff"
  light-blue: "#d2faff"
  light-green: "#d3ffb8"
  yellow: "#ffbd12"
  pink: "#ffc0d6"
  grey: "#727679"
typography:
  display: '"Gotham Condensed", Gotham-Fallback, system-ui, sans-serif'
  editorial: '"Chronicle Text G1", Georgia, serif'
  label: 'Gotham, system-ui, sans-serif'
  root: "16px"
  display-face-weight: 700
  editorial-weights: [400, 700]
spacing:
  micro: "4px"
  small: "8px"
  field-inset-mobile: "12px"
  control-inset: "16px"
  button-inline-mobile: "20px"
  button-inline-desktop: "24px"
  gutter-mobile: "30px"
  gutter-tablet: "36px"
  gutter-desktop: "72px"
  margin-mobile: "30px"
  margin-desktop: "60px"
  section-mobile: "100px"
  section-tablet: "120px"
  section-desktop: "160px"
  section-wide: "200px"
rounded:
  default: "0px"
  circle-utility: "9999px"
---

## Overview

An editorial civic-institution system: exceptionally condensed display lettering, literary serif body text, oversized typographic statements, documentary media, sharp edges, visible rules, and saturated color fields. Whitespace and scale create hierarchy instead of floating panels or soft shadows.

Reference scope: homepage, programs overview, one article, and donation landing page. Browser measurements cover desktop at 1440px and mobile at 390px. Intermediate and wide-screen values below come from the delivered CSS, not screenshots at those widths. See [evidence](docs/obama-design/evidence.md) for per-page PNGs, raw declarations, computed measurements, and limitations.

**Evidence notation:** Observed means rendered DOM or delivered CSS. Derived means arithmetic from observed values. Inferred means a proposed interpretation, never an extracted token. Front-matter semantic aliases and Tailwind aliases below are implementation names, not claims that Obama.org publishes these variable names. This brief describes visual treatment only. Do not reuse the reference site's logo, photography, copy, font files, or application code.

## Colors

Colors are compiled utility classes, not a discovered semantic CSS-variable palette. Main roles:

| Role | Observed value | Text and use | Opaque contrast |
| --- | --- | --- | --- |
| Paper / ink | `#ffffff` / `#000000` | Main pages, editorial copy, rules, outline controls | Black on white: 21.00:1 |
| Neutral surface | `#f3f3ee` | Light-grey utility, navigation/menu surface variant; black text | 18.87:1 |
| Primary cobalt | `#0064f0` | Footer, solid CTA, mobile home hero, promotional cards; white text | 5.15:1 |
| Dark blue | `#081f5d` | Delivered dark-blue theme utility; white is the safe main text pairing | 15.39:1 |
| Sky blue | `#8eddff` | Observed announcement background; black text | 13.94:1 |
| Light blue | `#d2faff` | Observed article hero; black text | 18.86:1 |
| Light green | `#d3ffb8` | Delivered accent/background utility; black text pairing | 18.77:1 |
| Yellow | `#ffbd12` | Delivered accent utility; black text pairing | 12.54:1 |
| Pink | `#ffc0d6` | Delivered accent/background utility; black text pairing | 13.76:1 |
| Grey | `#727679` | Observed article metadata and disabled carousel-control class | Do not assume compliant small text on every background |

The latter accent utilities are present in the shared stylesheet; their availability does not prove every accent is used on the sampled templates. Dark-blue and accent pairings above are calculated implementation guidance, not a claim of observed text combinations. Additional source palette values are archived in the evidence, not promoted automatically into FOSIS tokens.

Black on cobalt measures 4.08:1, below normal-text AA. White on cobalt passes normal-text AA. Use black on the pastel backgrounds, not white. These ratios assume opaque flat surfaces. A photograph under a black overlay requires separate local contrast checks.

Tailwind 4 mapping, with aliases explicitly introduced for the rebuild:

```css
@theme {
  --color-ink: #000000;
  --color-paper: #ffffff;
  --color-cobalt: #0064f0;
  --color-surface: #f3f3ee;
  --color-sky: #8eddff;
  --color-article: #d2faff;
  --font-display: "Gotham Condensed", Gotham-Fallback, system-ui, sans-serif;
  --font-editorial: "Chronicle Text G1", Georgia, serif;
  --radius-none: 0px;
  --breakpoint-sm: 20rem;
  --breakpoint-md: 42.5rem;
  --breakpoint-lg: 75rem;
  --breakpoint-xl: 120rem;
}
```

Font names above document the reference, not permission to serve those fonts. See Typography and the owner decisions at the end.

## Typography

### Families and loading

All observed custom fonts load from the site's own origin, through `@font-face` in `/_app/immutable/assets/0.7e72e0af.css`, with `font-display: swap`:

| Family | Declared files under `https://www.obama.org` | Role and fallback |
| --- | --- | --- |
| Gotham Condensed | `/fonts/gotham-condensed/gotham-condensed-bold.woff2`, weight 700 | Display, navigation, buttons, labels. Declared stack: `"Gotham Condensed", Gotham-Fallback, system-ui, sans-serif` |
| Gotham-Fallback | `local("Arial Narrow Bold")`; size-adjust 98%, ascent-override 92%, descent-override 20% | Local/system fallback, not a downloaded font |
| Gotham | `/fonts/gotham/gotham-medium.woff2`, weight 500 | Small category/metadata labels and footer group labels. Declared fallback: `system-ui, sans-serif` |
| Chronicle Text G1 | `/fonts/chronicle-text/chronicle-text-book.woff2`, `/fonts/chronicle-text/chronicle-text-book-italic.woff2`, `/fonts/chronicle-text/chronicle-text-bold.woff2`, `/fonts/chronicle-text/chronicle-text-bold-italic.woff2` | Editorial body, introduction, legal copy. Weights 400 and 700, normal and italic. Declared fallback: `Georgia, serif` |

Treat Gotham and Chronicle as proprietary fonts requiring license confirmation. No license grant was observed. Use the declared system fallbacks for an unlicensed prototype; they do not reproduce the exact proportions. The owner must approve a licensed or replacement type system before production.

### Responsive scale

Each size cell is **px / rem**, at a 16px root. Columns describe CSS ranges starting at the listed width. The desktop sample falls within the 1200px range. Line-height values are unitless multipliers, not pixel sizes. Tracking values are px; `normal` means no explicit letter spacing. These roles are explicit source classes, not guesses based on heading tags.

| Source role | 390px | 680px | 1200px | 1920px | Line height across those ranges | Tracking across those ranges |
| --- | --- | --- | --- | --- | --- | --- |
| heading-xxl | 68 / 4.25 | 110 / 6.875 | 200 / 12.5 | 260 / 16.25 | .8 throughout | -.5, -2, -5.6, -5.6 |
| heading-xl | 72 / 4.5 | 90 / 5.625 | 150 / 9.375 | 200 / 12.5 | .9 throughout | -1.1, -1.1, -3.2, -4 |
| heading-lg | 60 / 3.75 | 72 / 4.5 | 100 / 6.25 | 140 / 8.75 | .9 throughout | -.7, -1, -1.5, -2 |
| heading-md | 44 / 2.75 | 60 / 3.75 | 72 / 4.5 | 90 / 5.625 | 1, 1, .9, .9 | -.8, -.8, -1.2, -1.4 |
| heading-sm | 36 / 2.25 | 44 / 2.75 | 54 / 3.375 | 64 / 4 | 1 throughout | normal, normal, normal, -1 |
| heading-xs | 28 / 1.75 | 28 / 1.75 | 32 / 2 | 44 / 2.75 | 1.15, 1, 1.15, 1.15 | normal throughout |
| heading-xxs | 20 / 1.25 | 20 / 1.25 | 24 / 1.5 | 32 / 2 | 1.15, 1, 1.15, 1.15 | normal throughout |
| body-sm | 16 / 1 | 16 / 1 | 16 / 1 | 22 / 1.375 | 1.5 throughout | normal throughout |
| body-md | 18 / 1.125 | 18 / 1.125 | 22 / 1.375 | 30 / 1.875 | 1.6 throughout | normal, -.2, -.2, -.2 |
| body-lg | 22 / 1.375 | 22 / 1.375 | 34 / 2.125 | 46 / 2.875 | 1.35, 1.5, 1.5, 1.5 | -.2, -.2, -.2, -.4 |
| cta-sm | 20 / 1.25 | 20 / 1.25 | 20 / 1.25 | 24 / 1.5 | 1 throughout | normal throughout |
| cta-md | 20 / 1.25 | 20 / 1.25 | 24 / 1.5 | 32 / 2 | 1 throughout | normal throughout |
| cta-lg | 24 / 1.5 | 24 / 1.5 | 32 / 2 | 44 / 2.75 | 1 throughout | normal throughout |
| label | 14 / .875 | 14 / .875 | 15 / .9375 | 18 / 1.125 | 1.35 throughout | -.4, -.4, -.5, -.5 |

Below 390px, heading-xxl is 62.4px / 3.9rem, with the same .8 line height and -.5px tracking. At the sampled width it is 68px, not an interpolated clamp. Preserve the discrete media-query steps.

Display and CTA classes use Gotham Condensed. Their CSS often computes weight 400, while the only loaded condensed face is weight 700. The browser matches that bold face. Do not synthesize a regular condensed appearance from the computed 400 value. Small labels use Gotham, compute weight 400, and match the loaded 500 face. Chronicle body defaults to 400; explicit emphasis has supplied bold and italic declarations. The footer's display statement explicitly requests 700.

Role overrides matter: the homepage split-layout paragraphs render at 16px / 1rem and 1.5 line height on desktop, despite carrying `body-md`. Article body is 22px / 1.375rem with 1.6 line height. Programs uses heading-xxl; donation uses heading-xl; article uses heading-lg; editorial section titles frequently use heading-md or heading-sm.

Uppercase belongs to selected large page titles and the footer statement, not every headline. The homepage headline and article title retain mixed case. The footer uses 35vw on mobile and 16.25vw in the desktop range, with .8 line height and -2.48px tracking. This is a bespoke responsive treatment, not a general heading token.

## Layout

### Grid and breakpoints

The shared CSS declares these actual variables:

```css
:root {
  --grid-columns: 4;
  --grid-gap: 1.875rem;
  --grid-gap-half: .9375rem;
  --grid-margin: 1.875rem;
  --grid-max-width: 120rem;
  --nav-height: 92px;
  --embed-height: 350px;
}
@media (min-width: 680px) {
  :root {
    --grid-columns: 12;
    --grid-gap: 2.25rem;
    --grid-gap-half: 1.125rem;
  }
}
@media (min-width: 1200px) {
  :root {
    --grid-gap: 4.5rem;
    --grid-margin: 60px;
    --grid-gap-half: 2.25rem;
    --nav-height: 125px;
  }
}
```

The outer wrapper is centered, full width, capped at 1920px / 120rem **including its side padding**. Padding is 30px / 1.875rem below desktop and 60px / 3.75rem at desktop. Thus content width is 330px at the mobile sample and 1320px at the desktop sample. Maximum interior width is a derived 1800px when the wrapper reaches its cap. Do not confuse this wrapper with the unrelated generated `.container` utility.

Grid gutters are 30px / 1.875rem on mobile, 36px / 2.25rem from 680px, and 72px / 4.5rem from 1200px. Use four columns below 680px and twelve above. At desktop the article hero has two six-column blocks, each measured at 624px; article text is a centered six-column block, also 624px. Full-width mobile blocks measure 330px. Some repeated cards use their own flex layout and gaps; do not impose the main gutter on every component.

Source breakpoint names are `sm` at 320px / 20rem, `md` at 680px / 42.5rem, `lg` at 1200px / 75rem, and `xl` at 1920px / 120rem. The 390px display adjustment is a separate query. Tailwind defaults do not match this system.

### Spacing rhythm

Observed utility spacing includes 4px / .25rem, 8px / .5rem, 12px / .75rem, 16px / 1rem, 20px / 1.25rem, 24px / 1.5rem, and 30px / 1.875rem. Larger layout increments include 40px / 2.5rem, 50px / 3.125rem, 60px / 3.75rem, 80px / 5rem, and 100px / 6.25rem.

The `.section` rhythm is bottom padding of 100px / 6.25rem on mobile, 120px / 7.5rem from tablet, 160px / 10rem from desktop, and 200px / 12.5rem at wide screens. Nested components override this and the last section can remove the bottom padding. Do not turn it into uniform padding on every side. The sampled article hero uses 80px top and 60px bottom at desktop; donation introduction uses 80px top and 100px bottom. Mobile equivalents are 60px top with 30px bottom for the article, and 60px on both ends for donation.

Use an editorial sequence of open whitespace, a large type block, and media or a rule-defined content grid. On mobile, collapse split layouts into a single reading order. Preserve deliberate title wrapping; do not shrink all display headings to fit one line.

## Elevation & Depth

Most sampled content, cards, and forms have `box-shadow: none`. Depth comes from image crops, typography, white space, and contrasting background panels. Hairline dividers use 1px; section-marker bars use 8px mobile, 10px tablet, and 12px desktop.

The compact sticky header is an exception. Observed shadow layers are `0 20px 25px -5px rgba(0,0,0,.1)` and `0 8px 10px -6px rgba(0,0,0,.1)`. Do not apply this to ordinary cards.

Source stacking variables reserve 400 for global navigation, 500 for drawers, and 600 for popups. Reusing these exact numbers is not required, but preserve their ordering. Hero text and media overlays must remain below interactive navigation and dialogs.

## Shapes

Default corner radius is 0px. Buttons, image frames, content cards, and fields are rectangular. A `rounded-full` utility of 9999px exists for genuinely circular elements such as small selection marks. It is not evidence for pill-shaped primary buttons.

Use thin straight rules, heavy horizontal section markers, flat image edges, and simple geometric controls. The observed square checkbox is 24px with a circular inner selection mark. No general soft-card radius system was found.

## Components

### Header and navigation

- A conditional sky-blue announcement strip precedes the navigation. It has condensed headline text, serif supporting text, and a directional link. It wraps into a taller stacked block on mobile. It is not present on every sampled template.
- Global navigation is `position: sticky; top: 0`. Desktop starts at 125px tall. The homepage version is transparent over hero media with light navigation content; inner-page treatments use dark content on white or the hero's light-blue field.
- On scroll, desktop adopts a white compact bar and the exception shadow. Source classes reduce it to 74px in the desktop range and 82px in the wide range. The measured settled desktop state is 74px. Do not treat every transitional sample as the final height.
- Below 1200px, use the observed 92px mobile bar with the brand mark area, rectangular donation CTA, and menu toggle. Desktop navigation links disappear. The toggle comprises straight strokes, with 24px icon geometry.
- The mobile menu is a large drawer with primary sections and nested links, not a small floating popover. Source CSS shows staged opacity, translation, and height transitions. Open/close was exercised without following destination links. Focus-visible outlines are dashed, usually offset by 2px; text links can use a 4px offset.
- Desktop menu panels and mobile navigation use separate markup. Keyboard trigger buttons exist alongside desktop links. Exact focus-trap, Escape, and desktop hover-path behavior were not fully tested. Preserve accessibility rather than assuming the reference implementation is complete.

### Hero patterns

1. **Homepage media hero:** desktop media fills a small-viewport-height section (`100svh`), uses `object-fit: cover`, and carries a black overlay at opacity .3. The headline splits across widely separated grid blocks. On mobile, the title and CTA sit on a solid cobalt panel before the media, rather than compressing the desktop overlay. Video treatment is square below tablet, 5:3 at tablet, and full-cover on desktop. Playback controls are outlined square buttons.
2. **Programs overview:** an uppercase heading-xxl introduces a wide documentary photograph. Follow with large section headlines, serif descriptions, and ruled program cards. The large title is not enclosed in a card.
3. **Article:** light-blue field with a heavy rule, mixed-case heading-lg, short editorial introduction, category links, and square media in the other desktop half. Stack text before media on mobile. Follow with a narrow centered reading column and occasional wider media.
4. **Donation landing:** white page, mixed-case heading-xl, body-lg introduction, wide media, then sectioned giving information and CTAs. No payment modal was opened and no donation form was submitted. Do not derive payment-field design from this landing-page inspection.

### Buttons and links

Observed rectangular CTA variants share a 1px border, square corners, condensed `cta-md`, flex alignment, and color transitions:

| Variant | Rest | Hover, as specified by observed classes |
| --- | --- | --- |
| Cobalt filled | White text, cobalt background and border | Transparent background, cobalt text, retained cobalt border |
| Black filled | White text, black background and border | Transparent background, black text, retained black border |
| White filled on dark | Black text, white background and border | Transparent background, white text, retained white border |
| Black outline | Transparent background, black text and border | Black background, white text |
| White outline | Transparent background, white text and border | White background, black text |

Text CTA padding is 20px horizontal and 16px vertical on mobile, 24px horizontal and 16px vertical on desktop, then 32px horizontal and 20px vertical in the wide range. Navigation has its own 32px horizontal / 24px vertical override. Icon-only controls use 16px padding. Focus-visible uses a dashed current-color or contrasting outline with a 2px offset. No distinct pressed-state design was established.

Disabled carousel controls have transparent backgrounds with grey text and border (`#727679`), and default cursor behavior is defined in CSS. This is not proof of one universal disabled recipe for every CTA. Loading and success states were not exercised.

Arrow links pair text with a directional SVG. Their underline is a current-color background line that grows from zero to full width at 2px thickness over .3s `ease-in-out`. Other link variants reveal an arrow by opacity over .3s. Inline prose links are underlined and can become cobalt on hover. Footer links retain their light color. Do not remove focus indication when replacing the animated underline.

### Cards and listing modules

Cards are part of the page grid, not elevated rounded boxes. Common combinations are a rectangular image, condensed title, serif description, and arrow link. Program cards can be text-led or use a saturated image-backed/color-backed panel. Some panels contain their own minimum-height rules; those are component variants, not universal card heights.

Desktop repeated cards use thin vertical dividers or horizontal row rules. Mobile stacks cards with 30px spacing and thin horizontal separators. Observed source classes remove terminal separators. Colored promotional cards can pair white text with cobalt; ordinary listing cards remain black on white. Image crops and content density vary with the template.

### Forms

The shared newsletter module contains text and email fields plus other optional contact fields. Main field prompts and input text use condensed heading-xxs: 20px mobile and 24px desktop. A separate small floating-label class uses the Gotham label scale above. Inputs are transparent with square corners and no enclosing filled box. A parent wrapper draws a 1px black bottom rule; `hover` and `focus-within` switch to a heavier bottom-rule class. Mobile bottom inset is 12px; desktop is 16px with a 28px right inset. Label markup is positioned above the field and the placeholder uses black; filled-label behavior was not exercised.

Square selection controls use a circular inner mark; classes specify a 2px hover border. No input values were entered. Required-field, invalid, loading, submission, and confirmation behavior are unknown. Do not infer payment controls, autocomplete, validation colors, or error copy from the newsletter styling.

### Footer

The sampled footer is a saturated cobalt field with white content and 60px / 3.75rem vertical padding. It uses a giant condensed uppercase statement, a strong rule-based grid, newsletter/contact pathways, grouped navigation, social links, and small serif legal links. Its statement uses viewport-relative typography rather than the general scale. Columns collapse and the statement wraps on mobile. Reuse the typographic hierarchy, not the Obama wordmark or its wording.

### Images and iconography

Photos retain natural documentary color. Observed image filters are `none`; no universal duotone was established. `object-fit: cover` and centered positioning are common. Article hero media is square; wider editorial media includes 3:2 proportions. Homepage video uses the responsive aspect ratios described above. Use FOSIS-owned or licensed media with equivalent composition and subject emphasis.

Gradients exist as specific text treatments: sky blue to light green, and a dark-blue-to-cobalt variant. Their presence is not a universal image filter. The homepage's black .3 overlay is separately observed. Do not replace all photographs with gradients.

Icons are inline SVGs with simple directional arrows, search, menu, close, media controls, and recognizable social symbols. Observed controls include 24px geometry. Match stroke/fill treatment by function; no evidence established a named icon library. Do not copy branded emblems.

### Motion

- Header transition: .3s, `cubic-bezier(.25,.1,.25,.1)`; CTA navigation override: .15s using the same easing.
- Hero group: .6s, `cubic-bezier(.65,0,.35,1)`, observed on the homepage wrapper.
- Link underline and opacity: .3s `ease-in-out`.
- Menu primary exit opacity: .2s; primary return opacity: .8s with .4s delay. Height changes use .5s. These source transitions use `cubic-bezier(.33,1,.68,1)`.
- Nested menu entry uses .5s transform with .2s delay and .4s opacity with .5s delay. A drawer-grid utility specifies .52s with .5s delay and a sampled `linear(...)` spring easing, archived verbatim in evidence.
- Native smooth scrolling is enabled only under `prefers-reduced-motion: no-preference`. That declaration alone does not prove every scripted animation honors reduced motion.
- Scrolling and dynamic hero changes were observed, but a universal scroll-reveal trigger, distance, stagger, or duration was not established. Do not invent a default fade-up token or claim that the .6s hero timing governs all sections. Keep scroll-reveal implementation undecided pending focused runtime verification.

## Do's and Don'ts

**Do** preserve the contrast between very condensed display type and readable serif text; large editorial white space; discrete responsive type steps; square geometry; thin rules; oversized but selective statements; and grid-aligned documentary media. Check mobile title wrapping and opaque contrast pairs separately.

**Don't** use the reference logo, photography, marketing copy, font files, or proprietary application code. Do not replace the system with generic rounded cards, shadows on every surface, pill CTAs, uniformly uppercase text, one universal hero, or speculative animation tokens. Do not silently promote a delivered but unused CSS utility into an approved brand role. This is a reference brief, not a completed accessibility audit or implementation review.

### Mapping to FOSIS

Source of incumbent values: `docs/fosis-site/STRUCTURE.md`, section 5. These are decisions for the owner, not decisions made by this extraction.

- **Color conflict:** FOSIS navy `#0a2240` and gold `#c9a84c` do not match the reference's primary cobalt and pastel field system. Decide whether to retain FOSIS colors while borrowing hierarchy/layout, introduce cobalt as an additional role, or authorize a rebrand. No option is selected here.
- **Type conflict:** FOSIS uses Inter throughout; the reference depends on Gotham Condensed display plus Chronicle Text G1 editorial text. Decide whether Inter remains the sole family, becomes supporting UI type, or is replaced by an approved licensed/system-based pairing. Decide font licensing or substitution explicitly.
- **Shape alignment, not conflict:** FOSIS square corners already match the reference's default 0px geometry. Keep square primary surfaces unless the owner requests otherwise; isolated circles do not imply a rounded-card redesign.
- **Related layout choice:** FOSIS's recorded container is 1280px, while the reference uses a 1920px outer cap and responsive side padding. Decide how much of the reference's wider editorial spacing fits FOSIS content density before implementation.
