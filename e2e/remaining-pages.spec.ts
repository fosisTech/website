import { expect, test as base, type APIRequestContext, type Locator, type Page } from "@playwright/test";

declare global {
  interface Window {
    __fosisMailtoHref?: string;
  }
}

const softExpect = expect.configure({ soft: true });
const ORIGIN = "https://fosis.org.uk";
const NONSENSE = "zzzz-no-such-fosis-result-98765";
const CONSENT = "By submitting your information, you’re giving us permission to email you. You may unsubscribe at any time.";
const REGIONS = [
  ["London", "london", 25],
  ["North", "north", 25],
  ["South", "south", 19],
  ["Midlands", "midlands", 17],
  ["Scotland", "scotland", 12],
  ["Ireland", "ireland", 8],
  ["Wales & West", "wales", 6],
] as const;

// Copy is literal source text from docs/fosis-site/content/<slug>.md.
// Leadership uses isoc-essentials-leadership.md; UCL has labels, not prose sentences.
const ROUTES = [
  ["/fosis-history/", "Our Story", "FOSIS History", [
    "From a single room in Birmingham to a national movement spanning 350,000 students, six decades of service, scholarship, and sacrifice.",
    "In July 1963, representatives from eleven Islamic societies gathered in the Cadbury Room at the University of Birmingham. What they agreed to that day would shape Muslim student life in the UK and Ireland for generations.",
  ]],
  ["/find-your-isoc/", "Find Your ISoc", "Find Your ISoc", [
    "Wherever you study in the UK or Ireland, there is almost certainly an Islamic Society on your campus. FOSIS affiliates over 150 ISocs across universities and colleges from Edinburgh to Exeter, and our network spans 7 regional committees covering every corner of the country. Your ISoc is your home on campus, a community, a support network, and a space to grow your faith alongside your studies.",
  ]],
  ["/contact-us/", "Contact Us", "Contact Us", [
    "We would love to hear from you. Whether you are a student, an ISoc leader, a media professional, or a prospective partner, get in touch with the right team using the details below.",
  ]],
  ["/events/", "Events", "Events", [
    "FOSIS runs over 100 national and regional events each year, from large-scale conferences to intimate training days, socials, dinners, sports tournaments, and Islamic camps. Our events bring Muslim students together from every corner of the UK and Ireland, building the connections and community that define the FOSIS experience.",
  ]],
  ["/ihsaan-careers/", "Ihsaan Careers", "Ihsaan Careers", [
    "Ihsaan is FOSIS’s national careers conference series, a programme built around a single conviction: that every Muslim student in the UK and Ireland deserves the support and resources to enter their dream career and, in doing so, build a more ethical, God-conscious society for all.",
  ]],
  ["/fosis-report/", "FOSIS Report", "FOSIS Report", [
    "A reporting portal for ISocs and Muslim students to submit incidents regarding ISoc issues, SU problems, or Islamophobia.",
  ]],
  ["/islamic-resources/", "Islamic Resources", "Islamic Resources", [
    "Guides, companion reads, and spiritual resources curated by FOSIS for Muslim students across the UK.",
    "Practical, thoughtful resources to support your spiritual journey throughout the academic year.",
  ]],
  ["/day-of-arafat/", "The Day of Arafat", "The Day of Arafat, A Companion Guide", [
    "Complete any outstanding tasks so you are not burdened with them during the day of Arafat.",
  ]],
  ["/khutbah-library/", "Khutbah Library", "FOSIS Khutbah Library", [
    "36 ready-to-deliver Friday khutbahs with standardised Arabic openings and full English. Built for schools, colleges & campuses.",
  ]],
  ["/isoc-affiliations/", "ISoc Affiliations", "ISoc Affiliations", [
    "Browse 150+ affiliated Islamic Societies across the UK & Ireland, or join the FOSIS family today.",
    "Join the UK’s largest Muslim student network. Affiliating gives your society access to FOSIS resources, events, training, and national representation.",
  ]],
  ["/isoc-essentials/", "ISoc Essentials Hub", "ISoc Essentials Hub", [
    "Being part of an ISoc is the hardest work on campus. We help you lead with Barakah, not stress.",
  ]],
  ["/isoc-essentials/leadership/", "Leadership & Planning", "Leadership & Planning", [
    "A strong leader is the cornerstone of any effective team. True leadership in an ISoc is about serving your people and the Muslim community with humility and sincerity.",
  ]],
  ["/fosis-services/", "FOSIS Services", "FOSIS Services", [
    "Your Islamic Society should never have to figure it out alone.",
    "Four pillars of support, included in full the moment you affiliate. No tiers, no add-ons, no hidden extras.",
  ]],
  ["/join-team-fosis/", "Join Team FOSIS", "Join Team FOSIS", [
    "FOSIS is powered by Muslim students, for Muslim students. Every year, passionate individuals from across the UK and Ireland give their time, skills, and energy to serve the national student community, and we are always looking for the next generation of leaders to join us.",
  ]],
  ["/book-islamophobia-training/", "Book Islamophobia Training", "Book Islamophobia Training", [
    "A rigorous examination of what Islamophobia is, how it manifests in educational settings, and why the APPG definition matters for institutional policy.",
  ]],
  ["/sabbatical-officer-network/", "Sabbatical Officer Network", "Sabbatical Officer Network", [
    "Elected across student unions nationwide in a single year, an unprecedented milestone showing the growing influence of Muslim students in representative politics.",
  ]],
  ["/support-us/", "Support FOSIS", "Support Us", [
    "FOSIS is a registered charity in England and Wales. Your donation is used solely to support Muslim students and Islamic Societies across the UK.",
  ]],
  ["/isoc/ucl-islamic-society/", "UCL Islamic Society", "UCL Islamic Society", [
    "University College London", "Is your ISoc not listed here?",
  ]],
] as const;

function normalise(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

async function visibleCopy(scope: Locator, value: string) {
  const readable = scope.locator(':not([aria-hidden="true"]):not([aria-hidden="true"] *)');
  const copy = scope.getByText(normalise(value), { exact: true }).and(readable);
  await expect.soft(copy.first(), value).toBeVisible();
}

async function link(scope: Locator, name: string | RegExp, href: string, external = false) {
  const item = scope.getByRole("link", { name, exact: true });
  await expect(item).toBeVisible();
  await expect(item).toHaveAttribute("href", href);
  if (external) {
    await expect(item).toHaveAttribute("target", "_blank");
    await expect(item).toHaveAttribute("rel", /\bnoopener\b/);
    await expect(item).toHaveAttribute("rel", /\bnoreferrer\b/);
  }
}

async function sitemap(request: APIRequestContext) {
  const response = await request.get("/sitemap.xml");
  const body = await response.text();
  expect(response.status(), `/sitemap.xml: ${response.headers()["content-type"]}; ${body.slice(0, 180)}`).toBe(200);
  expect(response.headers()["content-type"]).toContain("xml");
  return Array.from(body.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g), (match) => match[1]);
}

async function responsiveImages(page: Page) {
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let offset = 0; offset < height; offset += 600) {
    await page.evaluate((y) => window.scrollTo(0, y), offset);
    await softExpect.poll(() => page.evaluate(() => ({
      width: document.documentElement.scrollWidth,
      viewport: document.documentElement.clientWidth,
    })), `Horizontal overflow on ${page.url()} at scroll ${offset}`).toMatchObject({
      width: page.viewportSize()!.width,
      viewport: page.viewportSize()!.width,
    });
  }
  const invalid = await page.locator("img").evaluateAll((images) => images
    .filter((image) => !(image.getAttribute("alt")?.trim() || (image.getAttribute("alt") === "" && image.getAttribute("role") === "presentation")))
    .map((image) => image.getAttribute("src")));
  expect.soft(invalid, "Every img needs alt text, or alt='' with role=presentation").toEqual([]);
}

const test = base.extend<{ browserErrors: string[] }>({
  browserErrors: [async ({ page }, use) => {
    const errors: string[] = [];
    page.on("console", (message) => {
      if (message.type() !== "error") return;
      const pathname = new URL(page.url()).pathname;
      const resource = message.location().url;
      // Only Luma/Tally blocked-client and 413 iframe noise on these two routes is external.
      const iframeHost = pathname === "/events/" ? "luma.com" : pathname === "/fosis-report/" ? "tally.so" : null;
      if (iframeHost && /^https?:\/\//.test(resource)) {
        const host = new URL(resource).hostname;
        if ((host === iframeHost || host.endsWith(`.${iframeHost}`)) && /ERR_BLOCKED_BY_CLIENT|\b413\b/.test(message.text())) return;
        // Luma/Tally Sentry telemetry can be browser-blocked; ignore only each embed's known host.
        const sentryHost = pathname === "/events/" ? "o370968.ingest.us.sentry.io" : "o407628.ingest.us.sentry.io";
        if (host === sentryHost && /ERR_BLOCKED_BY_CLIENT/.test(message.text())) return;
      }
      errors.push(`${pathname}: ${message.text()} (${resource})`);
    });
    page.on("pageerror", (error) => errors.push(`${page.url()}: ${error.message}`));
    await use(errors);
    expect.soft(errors, "Console errors and uncaught page errors").toEqual([]);
  }, { auto: true }],
});

for (const [path, heading, title, copy] of ROUTES) {
  test(`${path} page contract, source copy, layout, images and sitemap`, async ({ page, request }) => {
    const response = await page.goto(path, { waitUntil: "domcontentloaded" });
    expect.soft(response?.status(), `${path} HTTP status`).toBe(200);
    await expect.soft(page.locator("h1")).toHaveCount(1);
    await expect.soft(page.getByRole("heading", { level: 1, name: heading, exact: true })).toBeVisible();
    await expect.soft(page).toHaveTitle(`${title} | FOSIS`);
    await expect.soft(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `${ORIGIN}${path}`);
    for (const sentence of copy) await visibleCopy(page.getByRole("main"), sentence);
    expect.soft(await sitemap(request), `${path} sitemap entry`).toContain(`${ORIGIN}${path}`);
    await responsiveImages(page);
  });
}

test("directory has all 112 ISocs and literal regional counts", async ({ page }) => {
  await page.goto("/find-your-isoc/");
  const main = page.getByRole("main");
  const cards = main.locator('h3 a[href^="/isoc/"]');
  await expect(main.getByRole("status")).toHaveText("112 ISocs found");
  await expect(cards).toHaveCount(112);
  for (const [name, , count] of REGIONS) {
    const filter = main.getByRole("button", { name, exact: true });
    await filter.click();
    await expect(filter).toHaveAttribute("aria-pressed", "true");
    await expect(main.getByRole("status")).toHaveText(`${count} ISocs found`);
    await expect(cards).toHaveCount(count);
  }
  await main.getByRole("button", { name: "All Regions", exact: true }).click();
  await expect(cards).toHaveCount(112);
});

test("directory search, empty state and card-to-profile journey", async ({ page }) => {
  await page.goto("/find-your-isoc/");
  const main = page.getByRole("main");
  const search = main.getByRole("searchbox", { name: "Search ISocs", exact: true });
  const cards = main.locator('h3 a[href^="/isoc/"]');
  await search.fill("Cambridge");
  await expect(cards).toHaveCount(1);
  for (const card of await cards.all()) await expect(card).toContainText("Cambridge");
  await search.fill(NONSENSE);
  await expect(main.getByRole("status")).toHaveText("0 ISocs found");
  await expect(cards).toHaveCount(0);
  await visibleCopy(main, "No ISocs match your search. Try a different term or region.");
  await search.fill("Cambridge");
  await cards.first().click();
  await expect(page).toHaveURL(/\/isoc\/cambridge-university-islamic-society\/$/);
  await expect(main.locator("dt")).toHaveText(["Region", "Institution"]);
  await link(main, "@cu_isoc", "https://instagram.com/cu_isoc");
});

test("directory London deep link selects the London filter", async ({ page }) => {
  await page.goto("/find-your-isoc/?region=london");
  await expect(page.getByRole("button", { name: "London", exact: true })).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByRole("main").getByRole("status")).toHaveText("25 ISocs found");
  await expect(page.getByRole("main").locator('h3 a[href^="/isoc/"]')).toHaveCount(25);
});

test("UCL profile preserves institution, region and online links", async ({ page }) => {
  await page.goto("/isoc/ucl-islamic-society/");
  const main = page.getByRole("main");
  await expect(main.locator("dt")).toHaveText(["Region", "Institution"]);
  await expect(main.locator("dd")).toHaveText(["London", "University College London"]);
  await link(main, "@uclislamicsociety", "https://instagram.com/uclislamicsociety");
  await link(main, "Visit Website", "https://linktr.ee/uclisoc");
  // The scrape uses a typographic apostrophe in Students’ Union Page.
  await link(main, "Students’ Union Page", "https://studentsunionucl.org/clubs-societies/islamic-society");
  await link(main, "Affiliate Your ISoc", "/isoc-affiliations/");
});

test("unknown ISoc returns 404 and sitemap contains exactly 112 unique profiles", async ({ request }) => {
  const response = await request.get("/isoc/not-a-real-isoc/");
  expect(response.status()).toBe(404);
  const urls = (await sitemap(request)).filter((url) => url.startsWith(`${ORIGIN}/isoc/`));
  expect(urls).toHaveLength(112);
  expect(new Set(urls).size).toBe(112);
  expect(urls).toContain(`${ORIGIN}/isoc/ucl-islamic-society/`);
  expect(urls).not.toContain(`${ORIGIN}/isoc/not-a-real-isoc/`);
});

test("affiliation region cards open filtered directories and the source Google Form", async ({ page }) => {
  await page.goto("/isoc-affiliations/");
  const main = page.getByRole("main");
  const regionLinks = main.locator('a[href^="/find-your-isoc/?region="]');
  await expect(regionLinks).toHaveCount(7);
  for (const [name, key] of REGIONS) await link(main, `Browse ISocs in ${name}`, `/find-your-isoc/?region=${key}`);
  await link(main, "Affiliate Your ISoc Now", "https://docs.google.com/forms/d/e/1FAIpQLScnDtkucoB_VUGZ007ef_FRI8DGPEPheB5Ur4wSC9CBGkU4XQ/viewform", true);
  await main.getByRole("link", { name: "Browse ISocs in North", exact: true }).click();
  await expect(page).toHaveURL(/\/find-your-isoc\/\?region=north$/);
  await expect(page.getByRole("button", { name: "North", exact: true })).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByRole("status")).toHaveText("25 ISocs found");
});

test("15 volunteer roles form four groups and share an exclusive disclosure", async ({ page }) => {
  await page.goto("/join-team-fosis/");
  const main = page.getByRole("main");
  const roles = main.locator('details[name="role"]');
  await expect(roles).toHaveCount(15);
  for (const [name, count] of [["Regional Teams", 2], ["Operations", 3], ["Projects", 4], ["SEAD Team", 6]] as const) {
    const group = main.getByRole("heading", { level: 2, name: `${name} (${count} roles)`, exact: true }).locator("..");
    await expect(group.locator('details[name="role"]')).toHaveCount(count);
  }
  const first = roles.nth(0);
  const description = first.getByText("Behind every high-functioning team is someone who keeps everything moving: the meetings organised, the actions followed up, the information flowing to the right people at the right time. That person is the General Secretary.", { exact: true });
  await expect(description).not.toBeVisible();
  await first.locator("summary").getByText("See details", { exact: true }).click();
  await expect(first).toHaveAttribute("open", "");
  await expect(description).toBeVisible();
  await link(first, "Apply Now", "https://fosis.uk/joinfosis", true);
  const second = roles.nth(1);
  await second.locator("summary").getByText("See details", { exact: true }).click();
  await expect(second).toHaveAttribute("open", "");
  await expect(first).not.toHaveAttribute("open", "");
  await expect(description).not.toBeVisible();
  await link(second, "Apply Now", "https://fosis.uk/joinfosis", true);
  for (let index = 0; index < 15; index++) {
    const role = roles.nth(index);
    const body = role.locator(":scope > div");
    await role.locator("summary").getByText("See details", { exact: true }).click();
    await expect(role).toHaveAttribute("open", "");
    await expect(main.locator('details[name="role"][open]')).toHaveCount(1);
    const prose = body.locator("p").first();
    await expect(prose).toBeVisible();
    await expect(prose).toHaveText(/\S/);
    await link(role, "Apply Now", "https://fosis.uk/joinfosis", true);
    const previous = roles.nth(index === 0 ? 1 : index - 1);
    await expect(previous).not.toHaveAttribute("open", "");
    await expect(previous.locator(":scope > div")).not.toBeVisible();
  }
  await first.locator("summary").getByText("See details", { exact: true }).click();
  await expect(first).toHaveAttribute("open", "");
  await expect(roles.last()).not.toHaveAttribute("open", "");
  await expect(roles.last().locator(":scope > div")).not.toBeVisible();
});

test("khutbah library filters 36 items by pack and searches real text", async ({ page }) => {
  await page.goto("/khutbah-library/");
  const main = page.getByRole("main");
  const items = main.locator("li > button");
  const filters = main.getByRole("group", { name: "Filter by pack", exact: true });
  await expect(items).toHaveCount(36);
  for (const [pack, count] of [["II", 10], ["III", 6]] as const) {
    await filters.getByRole("button", { name: new RegExp(`^Pack ${pack} •`) }).click();
    await expect(items).toHaveCount(count);
    for (const item of await items.all()) await expect(item).toContainText(`Pack ${pack} •`);
  }
  await filters.getByRole("button", { name: "All packs", exact: true }).click();
  const search = main.getByRole("searchbox", { name: "Search khutbahs", exact: true });
  await search.fill("patience");
  await expect.poll(() => items.count()).toBeGreaterThan(0);
  expect(await items.count()).toBeLessThan(36);
  await items.first().click();
  const readerText = await main.locator('section[aria-labelledby="first-khutbah"], section[aria-labelledby="second-khutbah"]').allTextContents();
  expect(normalise(readerText.join(" "))).toMatch(/patience/i);
  await main.getByRole("button", { name: "‹ Library", exact: true }).click();
  await search.fill(NONSENSE);
  await expect(items).toHaveCount(0);
  await expect(main.getByRole("status")).toHaveText(`No khutbahs match “${NONSENSE}”.`);
});

test("khutbah reader navigates, scales text and loads Arabic opening images", async ({ page }) => {
  await page.goto("/khutbah-library/");
  const main = page.getByRole("main");
  await main.getByRole("button", { name: /^Pack I • Khutbah 1 The Covenant/ }).click();
  await expect(main.getByRole("heading", { level: 2, name: /^The Covenant . A Promise to Allah$/ })).toBeVisible();
  for (const name of ["First Khutbah • English", "Second Khutbah • English", "Closing Du’as"]) {
    await expect(main.getByRole("heading", { name, exact: true })).toBeVisible();
  }
  const navigation = main.getByRole("navigation", { name: "Khutbah navigation", exact: true });
  await expect(navigation.getByRole("button", { name: "‹ Previous", exact: true })).toBeDisabled();
  await expect(navigation.getByRole("button", { name: "Next ›", exact: true })).toBeEnabled();
  const opening = main.locator("details").filter({ hasText: "Opening • Standardised Arabic opening" });
  await opening.locator("summary").click();
  await expect(opening.locator("img")).toHaveCount(5);
  for (const image of await opening.locator("img").all()) {
    await image.scrollIntoViewIfNeeded();
    await expect.poll(() => image.evaluate((element: HTMLImageElement) => element.complete && element.naturalWidth > 0)).toBe(true);
  }
  const paragraph = main.locator('section[aria-labelledby="first-khutbah"] p').first();
  const initial = await paragraph.evaluate((element) => parseFloat(getComputedStyle(element).fontSize));
  await main.getByRole("button", { name: "Larger text", exact: true }).click();
  await expect.poll(() => paragraph.evaluate((element) => parseFloat(getComputedStyle(element).fontSize))).toBeGreaterThan(initial);
  await main.getByRole("button", { name: "Smaller text", exact: true }).click();
  await expect.poll(() => paragraph.evaluate((element) => parseFloat(getComputedStyle(element).fontSize))).toBe(initial);
  await navigation.getByRole("button", { name: "Next ›", exact: true }).click();
  await expect(main.getByText("Pack I • Khutbah 2", { exact: true })).toBeVisible();
  await expect(navigation.getByRole("button", { name: "‹ Previous", exact: true })).toBeEnabled();
  await main.getByRole("button", { name: "‹ Library", exact: true }).click();
  await expect(main.getByRole("searchbox", { name: "Search khutbahs", exact: true })).toBeVisible();
  await expect(main.locator("li > button")).toHaveCount(36);
});

test("Arafat planner persists ticks, adds a task and resets progress", async ({ page }) => {
  await page.goto("/day-of-arafat/");
  const main = page.getByRole("main");
  const counter = main.locator('[aria-live="polite"]');
  const progress = main.getByRole("progressbar", { name: "Your day progress", exact: true });
  await expect(counter).toHaveText("0 / 27");
  await expect(progress).toHaveAttribute("max", "27");
  const fajr = main.getByRole("checkbox", { name: "Pray Fajr", exact: true });
  await fajr.check();
  await expect(counter).toHaveText("1 / 27");
  expect(await page.evaluate(() => localStorage.getItem("fosis-arafat-v1"))).toContain("Pray Fajr");
  await page.reload();
  await expect(fajr).toBeChecked();
  await expect(counter).toHaveText("1 / 27");
  await main.getByRole("textbox", { name: "Add an outstanding to-do", exact: true }).fill("Return library books");
  await main.getByRole("button", { name: "Add", exact: true }).click();
  await expect(main.getByRole("checkbox", { name: "Return library books", exact: true })).toBeVisible();
  await expect(counter).toHaveText("1 / 28");
  await main.getByRole("button", { name: "Reset", exact: true }).click();
  await expect(counter).toHaveText("0 / 28");
  await expect(fajr).not.toBeChecked();
  await expect(main.getByRole("checkbox", { checked: true })).toHaveCount(0);
});

test("khutbah reader brings the last title into view and restores its card focus", async ({ page }) => {
  await page.goto("/khutbah-library/");
  const main = page.getByRole("main");
  const last = main.locator("li > button").last();
  await expect(last).toContainText("Pack IV • Khutbah 10");
  await expect(last).toContainText("Hard Heart");
  await last.scrollIntoViewIfNeeded();
  const listScroll = await page.evaluate(() => window.scrollY);
  expect(listScroll).toBeGreaterThan(page.viewportSize()!.height);
  await last.click();
  const heading = main.getByRole("heading", { level: 2, name: /Hard Heart/ });
  await expect(heading).toBeFocused();
  await expect.poll(async () => (await heading.boundingBox())?.y).toBeGreaterThanOrEqual(0);
  await expect.poll(async () => (await heading.boundingBox())?.y).toBeLessThan(page.viewportSize()!.height);
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThan(listScroll - page.viewportSize()!.height / 2);
  await main.getByRole("button", { name: "‹ Library", exact: true }).click();
  await expect(last).toBeFocused();
});

test("khutbah Next and Previous focus each new title in the viewport", async ({ page }) => {
  await page.goto("/khutbah-library/");
  const main = page.getByRole("main");
  const first = main.getByRole("button", { name: /^Pack I • Khutbah 1 The Covenant/ });
  await first.click();
  const navigation = main.getByRole("navigation", { name: "Khutbah navigation", exact: true });
  for (const [button, title] of [
    ["Next ›", /^Success . How Does Islam Define It\?$/],
    ["‹ Previous", /^The Covenant . A Promise to Allah$/],
  ] as const) {
    await navigation.getByRole("button", { name: button, exact: true }).click();
    const heading = main.getByRole("heading", { level: 2, name: title });
    await expect(heading).toBeFocused();
    await expect.poll(async () => (await heading.boundingBox())?.y).toBeGreaterThanOrEqual(0);
    await expect.poll(async () => (await heading.boundingBox())?.y).toBeLessThan(page.viewportSize()!.height);
  }
  await main.getByRole("button", { name: "‹ Library", exact: true }).click();
  await expect(first).toBeFocused();
});

test("khutbah disclosure image alternatives name their Arabic passages", async ({ page }) => {
  await page.goto("/khutbah-library/");
  const main = page.getByRole("main");
  await main.getByRole("button", { name: /^Pack I • Khutbah 1 The Covenant/ }).click();
  const labels = [
    "Opening • Standardised Arabic opening",
    "Closing of the first part (Arabic)",
    "Opening • Standardised Arabic (second part)",
  ];
  await expect(main.locator("details")).toHaveCount(labels.length);
  for (const label of labels) {
    const panel = main.locator("details").filter({ has: page.locator("summary").filter({ hasText: label }) });
    await panel.locator("summary").click();
    const images = panel.locator("img");
    expect(await images.count()).toBeGreaterThan(0);
    for (const image of await images.all()) {
      await expect(image).toBeVisible();
      await expect(image).toHaveAttribute("alt", /Arabic text/);
      expect(await image.getAttribute("alt")).toContain(label);
    }
  }
});

for (const [name, value] of [
  ["object todos", '{"done":[],"todos":{}}'],
  ["wrong array members", '{"done":"x","todos":[1]}'],
  ["non-JSON text", "not JSON"],
] as const) {
  test(`Arafat planner recovers from malformed storage: ${name}`, async ({ page, browserErrors }) => {
    await page.addInitScript((raw) => localStorage.setItem("fosis-arafat-v1", raw), value);
    await page.goto("/day-of-arafat/");
    const main = page.getByRole("main");
    const counter = main.locator('[aria-live="polite"]');
    await expect(counter).toHaveText("0 / 27");
    await expect(main.getByRole("checkbox")).toHaveCount(27);
    // Exercise hydration as well as the server-rendered empty counter.
    await main.getByRole("checkbox", { name: "Pray Fajr", exact: true }).check();
    await expect(counter).toHaveText("1 / 27");
    expect(browserErrors).toEqual([]);
  });
}

test("Arafat planner keeps ticks and new tasks when storage writes are blocked", async ({ page }) => {
  await page.addInitScript(() => {
    Storage.prototype.setItem = () => { throw new DOMException("Storage is blocked", "SecurityError"); };
  });
  await page.goto("/day-of-arafat/");
  const main = page.getByRole("main");
  const counter = main.locator('[aria-live="polite"]');
  const fajr = main.getByRole("checkbox", { name: "Pray Fajr", exact: true });
  await expect(counter).toHaveText("0 / 27");
  await fajr.check();
  await expect(counter).toHaveText("1 / 27");
  await expect(fajr).toBeChecked();
  await main.getByRole("textbox", { name: "Add an outstanding to-do", exact: true }).fill("Return library books");
  await main.getByRole("button", { name: "Add", exact: true }).click();
  const todo = main.getByRole("checkbox", { name: "Return library books", exact: true });
  await expect(todo).toBeVisible();
  await expect(counter).toHaveText("1 / 28");
  await expect(fajr).toBeChecked();
  await expect(main.getByRole("progressbar", { name: "Your day progress", exact: true })).toHaveAttribute("max", "28");
  await todo.check();
  await expect(counter).toHaveText("2 / 28");
  await expect(todo).toBeChecked();
});

const FORMS = [
  {
    path: "/book-islamophobia-training/", submit: "Book Training", subject: "Islamophobia Awareness Training enquiry",
    fields: [
      ["Name", true, "Test Student"], ["Email", true, "test@example.org"], ["Phone", true, "07700900000"],
      ["Date (DD/MM/YYYY)", false, "20/12/2026"], ["Time", true, "Morning"],
      ["Notes", true, "Test University, 20 attendees"],
    ],
  },
  {
    path: "/sabbatical-officer-network/", submit: "Contact us", subject: "Sabbatical Officer Network",
    fields: [
      ["Name", true, "Test Student"], ["Email", true, "test@example.org"], ["Phone number", true, "07700900000"],
      ["Your Student’s Union/University", true, "Test University"], ["Your Role", true, "Welfare Officer"],
      ["Message", false, "Please connect me to the network."],
    ],
  },
] as const;

for (const form of FORMS) {
  test(`${form.path} source form labels and required states`, async ({ page }) => {
    await page.goto(form.path);
    const main = page.getByRole("main");
    await expect(main.locator("form")).toHaveAttribute("action", `mailto:student.affairs@fosis.org.uk?subject=${encodeURIComponent(form.subject)}`);
    await expect(main.locator("form")).toHaveAttribute("method", "post");
    await expect(main.locator("form")).toHaveAttribute("enctype", "text/plain");
    // Required states and Time options come from the source markdown, not the implementation.
    for (const [label, required] of form.fields) {
      if (label === "Time") {
        const time = main.getByRole("group", { name: "Time", exact: true });
        await expect(time).toBeVisible();
        await expect(time.getByRole("radio")).toHaveCount(2);
        for (const name of ["Morning", "Afternoon"]) {
          const option = time.getByRole("radio", { name, exact: true });
          await expect.soft(option).toBeVisible();
          await expect.soft(option).toHaveJSProperty("required", required);
          await expect.soft(option).not.toBeChecked();
        }
        continue;
      }
      const field = main.getByRole("textbox", { name: label, exact: true });
      await expect.soft(field).toBeVisible();
      await expect.soft(field).toHaveJSProperty("required", required);
    }
    await expect(main.getByRole("textbox", { name: "Email", exact: true })).toHaveAttribute("type", "email");
    if (form.path === "/sabbatical-officer-network/") {
      const consent = main.getByRole("checkbox", { name: CONSENT, exact: true });
      await expect.soft(consent).toBeVisible();
      await expect.soft(consent).toHaveJSProperty("required", false);
      await expect.soft(consent).not.toBeChecked();
    }
    await expect(main.getByRole("button", { name: form.submit, exact: true })).toBeVisible();
  });

  test(`${form.path} submit constructs the student-affairs mailto`, async ({ page }) => {
    let intercepted = false;
    // Intercept only the mailto href assignment in the browser bundle, never launch an OS mail client.
    await page.route("**/_next/static/**/*.js", async (route) => {
      const response = await route.fetch();
      const source = await response.text();
      const body = source.replace(/window\.location\.href\s*=\s*(?=[`"]mailto:)/g, () => {
        intercepted = true;
        return "window.__fosisMailtoHref=";
      });
      await route.fulfill({ response, body });
    });
    await page.goto(form.path);
    const main = page.getByRole("main");
    for (const [label, , value] of form.fields) {
      if (label !== "Time") await main.getByRole("textbox", { name: label, exact: true }).fill(value);
    }
    expect(intercepted, "The actual mailto navigation boundary was intercepted").toBe(true);
    const captured = () => page.evaluate(() => window.__fosisMailtoHref);
    const submit = main.getByRole("button", { name: form.submit, exact: true });
    if (form.path === "/book-islamophobia-training/") {
      await submit.click();
      expect(await captured(), "Time must be selected before submitting").toBeUndefined();
      expect(await main.getByRole("radio", { name: "Morning", exact: true }).evaluate((input: HTMLInputElement) => input.validity.valueMissing)).toBe(true);
    }
    for (const selection of form.path === "/book-islamophobia-training/" ? ["Morning", "Afternoon"] : ["No", "Yes"]) {
      if (form.path === "/book-islamophobia-training/") {
        await main.getByRole("group", { name: "Time", exact: true }).getByRole("radio", { name: selection, exact: true }).check();
        await expect(main.getByRole("radio", { checked: true })).toHaveCount(1);
      } else {
        await main.getByRole("checkbox", { name: CONSENT, exact: true }).setChecked(selection === "Yes");
      }
      await submit.click();
      const lines = form.fields.map(([label, , value]) => `${label}: ${label === "Time" ? selection : value}`);
      if (form.path === "/sabbatical-officer-network/") lines.push(`${CONSENT}: ${selection}`);
      await expect.poll(captured).toBe(`mailto:student.affairs@fosis.org.uk?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(lines.join("\n"))}`);
    }
  });
}

const noScriptTest = test.extend({
  javaScriptEnabled: false,
  launchOptions: async ({ launchOptions }, use) => {
    await use({ ...launchOptions, args: [...(launchOptions.args ?? []), "--disable-external-intent-requests"] });
  },
});

noScriptTest("training form without JavaScript never puts answers in the site URL", async ({ page }) => {
  const form = FORMS[0];
  const name = "Privacy Probe Student";
  const email = "privacy-probe@example.org";
  const navigations: string[] = [];
  page.on("framenavigated", (frame) => {
    if (frame === page.mainFrame()) navigations.push(frame.url());
  });
  await page.goto(form.path);
  const originalURL = page.url();
  const main = page.getByRole("main");
  for (const [label, , value] of form.fields) {
    if (label === "Time") await main.getByRole("radio", { name: value, exact: true }).check();
    else await main.getByRole("textbox", { name: label, exact: true }).fill(label === "Name" ? name : label === "Email" ? email : value);
  }
  // Chromium blocks external protocol launches, but the native form submission still runs.
  await main.getByRole("button", { name: form.submit, exact: true }).click();
  await expect(page).toHaveURL(originalURL);
  for (const url of [...navigations, page.url()]) {
    const decoded = decodeURIComponent(url.replace(/\+/g, " "));
    expect(decoded).not.toContain(name);
    expect(decoded).not.toContain(email);
  }
});

for (const [path, src] of [
  ["/events/", "https://luma.com/embed/calendar/cal-U05Qd0a3Ri06jpT/events"],
  ["/fosis-report/", "https://tally.so/embed/w5QE4d?hideTitle=1&alignLeft=1"],
] as const) {
  test(`${path} retains the source iframe and permits both embed hosts in CSP`, async ({ page }) => {
    const response = await page.goto(path, { waitUntil: "domcontentloaded" });
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("main").locator("iframe")).toHaveAttribute("src", src);
    const csp = response?.headers()["content-security-policy"] ?? "";
    const frameSrc = csp.split(";").map((directive) => directive.trim()).find((directive) => directive.startsWith("frame-src ")) ?? "";
    expect(frameSrc.split(/\s+/)).toContain("https://luma.com");
    expect(frameSrc.split(/\s+/)).toContain("https://tally.so");
  });
}

test("support donation links retain Zeffy destinations and safe new tabs", async ({ page }) => {
  await page.goto("/support-us/");
  const main = page.getByRole("main");
  const oneOff = main.getByRole("article").filter({ hasText: "One-Off Donation" });
  await link(oneOff, "Donate Now", "https://www.zeffy.com/en-GB/donation-form/donate-to-fosis", true);
  const waqf = main.getByRole("article").filter({ hasText: "Donate to the FOSIS Waqf" });
  await link(waqf, "Donate to Waqf", "https://www.zeffy.com/en-GB/donation-form/fosis-waqf", true);
});
