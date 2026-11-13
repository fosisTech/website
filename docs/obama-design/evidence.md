# Obama.org design evidence

Observed on 12 November 2026. Public, logged-out research only. No login, field entry, newsletter submission, donation, payment-modal opening, package installation, commit, push, or delegation occurred. Screenshots are reference evidence requested by the owner, not reusable design assets. No separate logo, photograph, font, copy corpus, or application bundle was downloaded for reuse.

## Pages and screenshots

| Template | URL | Desktop PNG | Mobile PNG |
| --- | --- | --- | --- |
| Homepage | https://www.obama.org/ | [home-desktop.png](home-desktop.png) | [home-mobile.png](home-mobile.png) |
| Programs overview | https://www.obama.org/programs/ | [programs-desktop.png](programs-desktop.png) | [programs-mobile.png](programs-mobile.png) |
| Article | https://www.obama.org/stories/jahnavi-rao-empowering-next-generation-voters/ | [story-desktop.png](story-desktop.png) | [story-mobile.png](story-mobile.png) |
| Donation landing | https://www.obama.org/donate/ | [donate-desktop.png](donate-desktop.png) | [donate-mobile.png](donate-mobile.png) |

Only these four page URLs were sampled. Navigation links were inventoried to choose them; linked destinations outside this table were not sampled. Optional cookies were rejected to remove the initial consent overlay. A persistent cookie-settings launcher can remain in screenshots.

Requested CSS viewport sizes: desktop 1440px by 900px; mobile 390px by 844px. Final full-page PNGs stitch overlapping visible browser frames at those widths. Their per-frame metrics are listed in capture-metrics.jsonl. Programs desktop exposes content overflow beyond its 1440px viewport; final captures preserve the viewport crop rather than widening the layout. This is an observed source limitation, not a recommendation for the rebuild. The additional programs-mobile-menu.png is a viewport screenshot at device pixel ratio 2, rather than a full-page capture.

## Tools and method

1. Read extract-design-md, rea-local, and the relevant local browser/fallback instructions. Read the incumbent FOSIS values in docs/fosis-site/STRUCTURE.md section 5.
2. Checked DITTO_ROOT and the PATH command. DITTO_ROOT was unset; the only PATH result was /usr/bin/ditto, the macOS file/archive tool. No local Ditto extraction checkout was found in the bounded Code-directory discovery. A design-only clone CLI was therefore unavailable. No unknown --design-md flag or runnable-clone command was attempted.
3. Used T3 preview_open, preview_navigate, preview_resize, and preview_evaluate to inspect live document.styleSheets, CSSStyleRule declarations, @font-face, root custom properties, DOM classes, geometry, and getComputedStyle. No CSS values were guessed from screenshots.
4. T3's screenshot surface provided viewport images only. A stitched-image attempt hit its repeated-call guard. The owner then explicitly permitted only obama.org and www.obama.org as instance-scoped PinchTab domains. Global security and evaluate permissions were not changed.
5. Used a headless PinchTab rea-profile instance, bridge port 9894. Process inspection confirmed /Applications/Helium.app/Contents/MacOS/Helium. The backend's logical provider label is chrome; the executable is Helium, not Google Chrome.
6. PinchTab handled viewport changes, navigation, scrolling, cookie rejection, and menu interaction. Its first beyond-viewport PNG attempt was rejected during inspection because a footer crop showed earlier page content. A direct single-raster CDP document clip also repeated upper content in the lower image. The exact compositor cause is unknown; these images were not accepted as final evidence.
7. Final full-page images use Page.getLayoutMetrics and Page.captureScreenshot with captureBeyondViewport: true, fromSurface: true, and a viewport-sized clip through the same owned Helium tab's loopback CDP endpoint. Real visible frames are stitched with overlapping sticky-header regions cropped. Early captures used native scroll gestures; article lazy layout required DOM.scrollIntoViewIfNeeded for stable positions, with an offset for the sticky scroll area. capture_cdp.mjs, stitch_capture.py, and capture_pages.py record the exact method and assert complete document coverage. This does not resize viewport height or evaluate page JavaScript. No Runtime.evaluate call or security widening was used on the bridge.
8. Scrolled each page to load lower media, returned to top, and allowed navigation transitions to settle before capture. Live hero video frames and asynchronous modules can differ between captures and computed-style samples.

## Evidence files

- *-desktop.json and *-mobile.json: per-template computed styles, class names, root variables, bounding rectangles, viewport size, and document height. Text content and image URLs were intentionally omitted.
- home-mobile-components.json and *-components.json: additional layout, background, grid, and type-role observations.
- css-observations.json: extracted shared root variables, font-face declarations, typography, color, radius, and transition utilities.
- component-css.json: relevant section, aspect-ratio, link, form, and menu rules. Third-party consent-specific rules were removed from this evidence subset.
- utility-css.json: spacing, borders, fonts, easing, and breakpoint declarations.
- label-css.json and label-typography.json: the separate Gotham label scale and rendered metadata/field-label measurements.
- font-status.json: the 16px root size, font-loading status, and the delivered 100svh utility.
- layout-motion-images.json: source container rules, link animations, measured image geometry/filter treatment, and SVG dimensions.
- containers-forms-desktop.json and containers-forms-mobile.json: actual wrapper dimensions and input parent styles.
- desktop-header-buttons.json: top/scroll header and CTA class observations. The settled up-scroll sample measures a 74px header; an earlier transition sample still reports 125px despite compact classes.
- header-forms-motion.json: early mobile menu/nav and newsletter styles. Its early top/down snapshots did not establish successful scrolling and must not be used as proof of scroll thresholds. Newsletter styles remain useful. The menu was closed afterward.
- derived-values.json: explicit RGB-to-hex conversion, rem-to-px conversion at a 16px root, and WCAG opaque contrast calculations.
- capture-metrics.jsonl: final capture URLs and each visible frame's scroll position, content bounds, and unchanged layout viewport dimensions.
- overview.png, story-mobile-top.png, footer-desktop.png: inspection derivatives of full-page evidence, not additional page samples.
- inspect_evidence.py: reproduces contact sheets and derived token values.
- verify_brief.py and verification.txt: final mechanical checks, when present.

## CSS resources read

Styles were read from the live browser CSSOM, not a cached stylesheet guess. The common resources observed include:

- https://www.obama.org/_app/immutable/assets/0.7e72e0af.css
- https://www.obama.org/_app/immutable/assets/filters.551d98c0.css
- https://www.obama.org/_app/immutable/assets/2.9f60a3fc.css
- https://www.obama.org/_app/immutable/assets/PageBody.d02e6f04.css

Per-page stylesheet inventories are preserved in the component JSON files. Shared rules provide the type scale at 680px, 1200px, and 1920px. Only 390px and 1440px were visually sampled; wide and intermediate role values are CSS-backed, not visually verified.

## Raw root-variable declarations

The following are verbatim CSSOM declarations. CSSOM can normalize whitespace or numeric spelling. No source palette color variables were found in these roots; palette colors are compiled utility rules. Computed root values at each viewport also appear in the page JSON.

```css
:root { --grid-columns: 4; --grid-gap: 1.875rem; --grid-gap-half: .9375rem; --grid-margin: 1.875rem; --grid-max-width: 120rem; --nav-height: 92px; --embed-height: 350px; }

/* (min-width: 680px) */
:root { --grid-columns: 12; --grid-gap: 2.25rem; --grid-gap-half: 1.125rem; }

/* (min-width: 1200px) */
:root { --grid-gap: 4.5rem; --grid-margin: 60px; --grid-gap-half: 2.25rem; --nav-height: 125px; }

:root { --stack-level-layer-top: 1000; --stack-level-layer-9: 900; --stack-level-layer-8: 800; --stack-level-layer-7: 700; --stack-level-layer-6: 600; --stack-level-layer-5: 500; --stack-level-layer-4: 400; --stack-level-layer-3: 300; --stack-level-layer-2: 200; --stack-level-layer-1: 100; --stack-level-layer-base: 0; --stack-level-layer-minus-1: -100; --stack-level-layer-minus-2: -200; --stack-level-layer-minus-3: -300; --stack-level-layer-minus-4: -400; --stack-level-layer-bottom: -500; --stack-level-popup: var(--stack-level-layer-6); --stack-level-drawer: var(--stack-level-layer-5); --stack-level-drawer-background: calc(var(--stack-level-drawer) - 1); --stack-level-top-banner: calc(var(--stack-level-drawer) - 2); --stack-level-global-nav: var(--stack-level-layer-4); --stack-level-global-nav-bar-mobile: calc(var(--stack-level-global-nav) + 1); --stack-level-global-nav-animation-wrapper: calc(var(--stack-level-global-nav) - 1); --stack-level-bottom-banner: calc(var(--stack-level-global-nav) - 2); --stack-level-video-controls: calc(var(--stack-level-layer-1) + 2); --stack-level-overlay: calc(var(--stack-level-layer-1) + 1); --stack-level-video-iframe: var(--stack-level-layer-1); --stack-level-youtube-iframe: var(--stack-level-layer-1); --stack-level-newsletter-confirmation: var(--stack-level-layer-1); --stack-level-card: var(--stack-level-layer-1); --stack-level-event-card-bg: var(--stack-level-layer-minus-1); --stack-level-schedule-list-title: var(--stack-level-layer-1); --stack-level-pattern-container: var(--stack-level-layer-base); --stack-level-pattern-background: calc(var(--stack-level-pattern-container) - 1); }
```

## Raw font-face declarations

All relative URLs resolve against https://www.obama.org. These declarations were read, not font licenses or downloadable assets copied into the rebuild.

```css
@font-face { font-display: swap; font-family: "Gotham Condensed"; font-weight: 700; src: url("/fonts/gotham-condensed/gotham-condensed-bold.woff2") format("woff2"); }
@font-face { ascent-override: 92%; descent-override: 20%; font-family: Gotham-Fallback; size-adjust: 98%; src: local("Arial Narrow Bold"); }
@font-face { font-display: swap; font-family: Gotham; font-weight: 500; src: url("/fonts/gotham/gotham-medium.woff2") format("woff2"); }
@font-face { font-display: swap; font-family: "Chronicle Text G1"; font-weight: 400; src: url("/fonts/chronicle-text/chronicle-text-book.woff2") format("woff2"); }
@font-face { font-display: swap; font-family: "Chronicle Text G1"; font-style: italic; font-weight: 400; src: url("/fonts/chronicle-text/chronicle-text-book-italic.woff2") format("woff2"); }
@font-face { font-display: swap; font-family: "Chronicle Text G1"; font-weight: 700; src: url("/fonts/chronicle-text/chronicle-text-bold.woff2") format("woff2"); }
@font-face { font-display: swap; font-family: "Chronicle Text G1"; font-style: italic; font-weight: 700; src: url("/fonts/chronicle-text/chronicle-text-bold-italic.woff2") format("woff2"); }
```

No license terms were retrieved. Treating Gotham and Chronicle as proprietary/licensed families is a precaution requiring owner confirmation. Georgia, system-ui, sans-serif, serif, and the local Arial Narrow Bold fallback come from observed stacks/declarations. They are system fallbacks, not newly invented extracted fonts.

## Values, derivation, and implementation aliases

DESIGN.md's semantic token names and Tailwind 4 @theme mapping are new implementation aliases. Numeric and color values are extracted or arithmetically derived, not new artistic choices. The original utility names remain in JSON.

- Observed root size used for rem conversion: 16px, corroborated by the rendered base styles. CSS rem values are expanded in derived-values.json.
- Main wrapper cap: 120rem = 1920px. Its measured inclusive width is 1440px with 60px side padding and 390px with 30px side padding.
- Derived interior widths: 1440px minus two 60px margins = 1320px; 390px minus two 30px margins = 330px; 1920px minus two 60px margins = 1800px.
- Desktop article six-column content: observed 624px wide. Wider editorial image: observed 903px by 602px, giving a derived 3:2 displayed ratio. Hero article media is square.
- Main gutters: 1.875rem = 30px; 2.25rem = 36px; 4.5rem = 72px.
- Breakpoint rem aliases: 320px = 20rem; 680px = 42.5rem; 1200px = 75rem; 1920px = 120rem.
- Unitless line heights in the brief come directly from source classes. Pixel line heights in computed samples corroborate them, but component-specific overrides take precedence.
- Color pairs and contrast ratios in DESIGN.md are calculated with WCAG relative luminance for opaque sRGB colors. Where no rendered use was confirmed, the brief labels the pairing as implementation guidance rather than observed usage.
- Native form disabled state, focus, hover, and animation-class descriptions are CSS-backed. Hover and disabled recipes were read from live class strings; not every state was driven or independently captured.
- The source contains brand-specific palette utilities beyond the brief's core palette. Their presence does not grant permission to add them to FOSIS.

## Incumbent FOSIS evidence, not Obama tokens

Read-only source: docs/fosis-site/STRUCTURE.md section 5. Recorded values: navy #0a2240, gold #c9a84c, font Inter, radius 0px, and wide container 1280px. These are included only to document owner decisions at the end of DESIGN.md. No color or font conflict was resolved by this research.

## Limitations and unobserved behavior

- No font license grant was observed. No named SVG icon package was established.
- Payment widgets were not opened. No form was filled or submitted. Error, success, required, loading, payment-field, and autocomplete states remain unknown.
- Mobile menu opening/closing was exercised and an open-state viewport PNG was captured. Full keyboard focus-trap, Escape, desktop hover paths, and all submenu states were not tested.
- No universal scroll-reveal trigger, distance, stagger, or timing was established. Hero and menu timings are source-backed. Smooth scrolling has a reduced-motion media query; complete scripted reduced-motion compliance was not established.
- Captures are live and non-deterministic, particularly hero video and lazy media. Full-page images are composites of visible frames, not a single instant. The compact navigation transition changes document height during desktop capture, so a small seam displacement can occur. The persistent fixed cookie launcher can repeat in composite images; this is a capture artifact, not several launcher components. No claim of pixel-perfect repeatability or a full accessibility audit is made.
- Shared styles can contain utilities not rendered on these templates. The brief distinguishes availability from confirmed page usage.
- Reference screenshots necessarily depict the site's branded content. They remain in this evidence directory only and are not assets for FOSIS. DESIGN.md contains descriptive treatment, not copied marketing text.

## Tool friction log

The write scope prohibited filing global papercuts. Failures are recorded locally here instead. Safer approaches used or required:

- Initial preview_navigate: "No active preview tab was found for navigate. Call preview_open first." Open an owned preview tab before navigation.
- Oversized preview_evaluate responses: "Preview automation evaluate produced a result larger than 64000 bytes." Request bounded, category-specific CSS/DOM records and avoid returning full stylesheets or repeated form states.
- A follow-up script assumed structuredContent after an error: "TypeError: cannot read property 'value' of undefined". Check isError and structuredContent before parsing.
- Stitched T3 viewport capture: "Script aborted: This operation was aborted"; the operator's guard reported "identical mcp__t3-code__preview_snapshot call attempted 3 times." Use a native full-document capture path, not repeated identical snapshots.
- An ownership check after interruption returned "This browser tab belongs to another agent session or a human. Open your own tab." Re-open an owned tab and keep the current returned identifier.
- contact_supervisor returned "contact_supervisor works only inside a subagent; this session has no supervisor." Despite the assigned research role, this runtime has no native parent channel. The domain decision was therefore asked directly and approved by the user.
- Unsupported CLI discovery: "Error: unknown command \"browser\" for \"pinchtab\"". Inspect known command help and verify the executable using process inspection instead.
- Python YAML availability: "ModuleNotFoundError: No module named 'yaml'". Use macOS Ruby's standard YAML parser without installing packages.
- One constructed CSS probe returned "Preview automation evaluate failed: SyntaxError: Unexpected identifier 'out'". Use readable multi-line JavaScript with balanced branches, not compressed conditional construction.
- A completed capture process handle later returned "write_stdin failed: unknown process id pi-16". Verify output existence, timestamps, dimensions, and actual content before deciding whether a capture needs to be repeated.
- Initial PinchTab and direct CDP single-raster full-page output failed content inspection because lower content repeated the upper page. Use overlapping visible-frame capture with actual scroll metrics and verify the real footer, as in the final capture helper.
- An initial visible-frame stitch raised "AssertionError: Uncovered document interval before frame 11". Native scrolling could advance beyond the requested distance. Increase capture overlap and assert complete coverage before accepting a PNG. The final helper reserves 300px overlap and checks every join.
- Article scrolling exposed the same gap assertion before frame 7 because native gesture/layout changes advanced farther than requested. Use DOM.scrollIntoViewIfNeeded instead of accumulating native wheel gestures for that template. Its first mobile run then raised "AssertionError: Capture did not reach the document bottom" because sticky scroll-area padding stopped the requested rectangle early. Account for the known navigation offset and assert the final bottom bound. The corrected captures passed coverage checks.
- The initial footer checker raised "AssertionError: Actual cobalt footer missing: home-mobile.png" because it assumed more than 80% of bottom-strip pixels would be exactly cobalt. The image actually had 9113 cobalt pixels out of 11700, with legitimate white legal text and the cookie launcher accounting for the rest. Use exact dominant-color classification together with complete scroll-bound coverage, not an unsupported percentage assumption.

## Completion checks

The brief was reopened and parsed with Ruby YAML.safe_load. The required front-matter token groups and exact eight-section order were checked. Each named font, hex value, and explicit dimension was traced to evidence; all fourteen type roles were compared against the delivered CSS at all four listed breakpoints. All eight final PNGs must decode, have complete per-frame metrics, reach the document bottom, and show the actual cobalt footer. See verification.txt for the final invocation result. This is research validation, not implementation testing or independent review.

All four owned T3 tabs were closed. The temporary PinchTab instance was stopped. No global browser security setting was changed. Unrelated dirty repository files were left untouched.

