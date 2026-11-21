import { expect, test, type Locator } from "@playwright/test";

const navigation = [
  ["What's FOSIS?", "/about-us/"],
  ["For Students", "#"],
  ["For ISocs", "#"],
  ["For Student Unions", "#"],
  ["Articles", "/articles/"],
  ["Explore FOSIS Projects", "/join-team-fosis/"],
  ["Contact Us", "/contact-us/"],
  ["Support Us", "/support-us/"],
] as const;

const students = [
  ["Find Your ISoc", "/find-your-isoc/"],
  ["Events", "/events/"],
  ["Career Help", "/ihsaan-careers/"],
  ["FOSIS Report", "/fosis-report/"],
  ["Islamic Resources", "/islamic-resources/"],
] as const;

async function link(scope: Locator, name: string, href: string) {
  const item = scope.getByRole("link", { name, exact: true });
  await expect(item).toBeVisible();
  await expect(item).toHaveAttribute("href", href);
}

async function visibleCopy(scope: Locator, value: string | RegExp) {
  const readable = scope.locator(':not([aria-hidden="true"]):not([aria-hidden="true"] *)');
  await expect(scope.getByText(value, { exact: true }).and(readable)).toBeVisible();
}

// Include the whole content block, but stop before a peer heading.
function block(heading: Locator, level: number) {
  return heading.locator(`xpath=ancestor::*[count(.//h${level})=1][last()]`);
}

async function topLevelLinks(nav: Locator) {
  const items = nav.getByRole("link").filter({ hasText: /./ });
  const expectedLabels = navigation.map(([name]) => name);
  const labels = await items.evaluateAll((links, expected) => links
    .map((item) => item.textContent?.replace(/\s+/g, " ").trim().replace(/[▼▾⌄]/g, "").trim())
    .filter((label) => expected.some((name) => name === label)), expectedLabels);
  expect(labels).toEqual(expectedLabels);
  for (const [name, href] of navigation) await link(nav, name, href);
}

const home = test.extend<{ browserErrors: string[] }>({
  browserErrors: [async ({ page }, use) => {
    const errors: string[] = [];
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    page.on("pageerror", (error) => errors.push(error.message));
    await use(errors);
    expect(errors, "Homepage console errors and uncaught exceptions").toEqual([]);
  }, { auto: true }],
});

home("unchanged hero copy and CTAs", async ({ page }) => {
  await page.goto("/");
  const main = page.getByRole("main");
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Empowering Muslim Students.");
  const hero = main.getByRole("heading", { level: 1 }).locator("xpath=ancestor::*[.//video][1]");
  await link(hero, "Affiliate Your ISoc", "/isoc-affiliations/");
  await link(hero, "Support Us", "/support-us/");
});

home("homepage section headings follow the approved order", async ({ page }) => {
  await page.goto("/");
  const main = page.getByRole("main");
  await expect(main.getByRole("heading", { level: 2 })).toHaveText([
    "Your ISoc Is Waiting For You",
    "Ready to Affiliate Your ISoc?",
    "What is Ihsaan?",
    "Making Campuses Safer for Muslim Students",
    "Affiliated ISocs",
    "News & Updates",
    "Explore FOSIS Projects",
    "Support FOSIS",
    "Have a question or want to work with us?",
  ]);
  for (const heading of await main.getByRole("heading", { level: 2 }).all()) await expect(heading).toBeVisible();
});

home("Get Started label precedes four feature cards with copy and one CTA each", async ({ page }) => {
  await page.goto("/");
  const main = page.getByRole("main");
  await visibleCopy(main, "Get Started");
  const label = main.getByText("Get Started", { exact: true }).and(main.locator(':not([aria-hidden="true"]):not([aria-hidden="true"] *)'));
  for (const [title, copy, name, href] of [
    ["Your ISoc Is Waiting For You", "Wherever you study in the UK or Ireland, there is almost certainly an Islamic Society on your campus.", "Find Your ISoc", "/find-your-isoc/"],
    ["Ready to Affiliate Your ISoc?", "Affiliating gives your society access to FOSIS resources, events, training, and national representation.", "Affiliate Your ISoc", "/isoc-affiliations/"],
    ["What is Ihsaan?", "Ihsaan is FOSIS’s national careers conference series.", "Explore Ihsaan", "/ihsaan-careers/"],
    ["Making Campuses Safer for Muslim Students", "Interactive Islamophobia Awareness Training for Student Union leaders, sabbatical officers, and university staff.", "Book Training", "/book-islamophobia-training/"],
  ]) {
    const heading = main.getByRole("heading", { level: 2, name: title, exact: true });
    await expect(heading).toBeVisible();
    const headingElement = await heading.elementHandle();
    expect(await label.evaluate((element, target) => !!target && !!(element.compareDocumentPosition(target) & Node.DOCUMENT_POSITION_FOLLOWING), headingElement)).toBe(true);
    const feature = block(heading, 2);
    await visibleCopy(feature, copy);
    await expect(feature.getByRole("link")).toHaveCount(1);
    await link(feature, name, href);
  }
});

home("affiliated ISocs network retains its copy and CTAs", async ({ page }) => {
  await page.goto("/");
  const main = page.getByRole("main");
  const network = block(main.getByRole("heading", { level: 2, name: "Affiliated ISocs", exact: true }), 2);
  await visibleCopy(network, "Our Network");
  await visibleCopy(network, "Over 110 Islamic Societies from universities and colleges across the UK and Ireland, united under one national body.");
  await link(network, "View All ISocs", "/find-your-isoc/");
  await link(network, "Affiliate Your ISoc", "/isoc-affiliations/");
  const images = network.getByRole("img");
  await expect(images).toHaveCount(9);
  expect(await images.evaluateAll((elements) => elements.map((element) => element.getAttribute("alt")))).toEqual([
    "Cambridge University Islamic Society",
    "Cardiff University Islamic Society",
    "University of Dundee Islamic Society",
    "Durham University Islamic Society",
    "Heriot-Watt University Islamic Society",
    "Imperial College London Islamic Society",
    "King’s College London Islamic Society",
    "LSE Islamic Society",
    "Newcastle University Islamic Society",
  ]);
  for (const image of await images.all()) await expect(image).toBeVisible();
});

home("news shows exactly three articles with titles, excerpts, metadata and decorative images", async ({ page }) => {
  await page.goto("/");
  const news = block(page.getByRole("main").getByRole("heading", { level: 2, name: "News & Updates", exact: true }), 2);
  await visibleCopy(news, "The latest from FOSIS, perspectives on Muslim student life, advocacy, careers, and community.");
  await link(news, "View all articles", "/articles/");
  const articles = [
    ["Towards an Ummatic Vision: Lessons from FOSIS Annual Conference 2025", "/2026/04/16/towards-an-ummatic-vision-lessons-from-fosis-annual-conference-2025/", "4 min read", /^Perhaps one of the biggest challenges/],
    ["The New Face of Islamophobia in Britain.", "/2026/04/16/the-new-face-of-islamophobia-in-britain/", "6 min read", /^The time of sword-bearing crusaders has/],
    ["4 Surprising Truths About Power, Protest, and a Generation Reawakened", "/2026/04/16/4-surprising-truths-about-power-protest-and-a-generation-reawakened/", "6 min read", /^It’s a common and logical assumption/],
  ] as const;
  await expect(news.getByRole("heading", { level: 3 })).toHaveText(articles.map(([title]) => title));
  for (const [title, href, duration, excerpt] of articles) {
    const heading = news.getByRole("heading", { level: 3, name: title, exact: true });
    const articleLink = heading.locator("a").or(heading.locator("xpath=ancestor::a[1]"));
    await expect(articleLink).toHaveCount(1);
    await expect(articleLink).toBeVisible();
    await expect(articleLink).toHaveAttribute("href", href);
    const article = block(heading, 3);
    await visibleCopy(article, "16 Apr 2026");
    await visibleCopy(article, duration);
    await visibleCopy(article, excerpt);
    const image = article.locator("img");
    await expect(image).toHaveCount(1);
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute("alt", "");
    await expect(image).toHaveAttribute("role", "presentation");
  }
});

home("projects block lists the approved destinations", async ({ page }) => {
  await page.goto("/");
  const projects = block(page.getByRole("main").getByRole("heading", { level: 2, name: "Explore FOSIS Projects", exact: true }), 2);
  for (const [name, href] of [
    ["Ihsaan Careers", "/ihsaan-careers/"],
    ["ISoc Essentials", "/isoc-essentials/"],
    ["FOSIS Services", "/fosis-services/"],
    ["FOSIS Report", "/fosis-report/"],
    ["Islamic Resources", "/islamic-resources/"],
    ["Sabbatical Officer Network", "/sabbatical-officer-network/"],
    ["Book Islamophobia Training", "/book-islamophobia-training/"],
    ["Events", "/events/"],
    ["Explore Our Projects", "/join-team-fosis/"],
  ]) await link(projects, name, href);
});

home("support block has its fundraising copy and donation link", async ({ page }) => {
  await page.goto("/");
  const support = block(page.getByRole("main").getByRole("heading", { level: 2, name: "Support FOSIS", exact: true }), 2);
  await visibleCopy(support, "Your generosity helps us serve over 350,000 Muslim students across every campus in the UK. Every contribution strengthens our advocacy, programmes, and community.");
  await link(support, "Donate Now", "/support-us/");
});

home("contact block pairs six department labels with exact email links", async ({ page }) => {
  await page.goto("/");
  const contact = block(page.getByRole("main").getByRole("heading", { level: 2, name: "Have a question or want to work with us?", exact: true }), 2);
  await expect(contact.locator('a[href^="mailto:"]')).toHaveCount(6);
  for (const [label, email] of [
    ["General Enquiries", "info@fosis.org.uk"],
    ["Media & Press", "head.media@fosis.org.uk"],
    ["ISoc Affiliations", "vp.highereducation@fosis.org.uk"],
    ["IHSAAN Careers", "head.ihsaan@fosis.org.uk"],
    ["Islamophobia Training", "studentaffairs@fosis.org.uk"],
    ["President’s Office", "president@fosis.org.uk"],
  ]) {
    const address = contact.getByRole("link", { name: email, exact: true });
    await link(contact, email, `mailto:${email}`);
    const department = address.locator('xpath=ancestor::*[count(.//a[starts-with(@href,"mailto:")])=1][last()]');
    await visibleCopy(department, label);
  }
  await link(contact, "Contact Us", "/contact-us/");
});

home("old mission, statistics, pillars and involvement copy are absent from home", async ({ page }) => {
  await page.goto("/");
  const main = page.getByRole("main");
  for (const copy of [
    "By The Numbers",
    "Three Pillars of Our Work",
    "Our Mission",
    "What We Do",
    "We have been serving Muslim students since 1963.",
    "There Is a Place For You Here.",
  ]) await expect(main.getByText(copy, { exact: true })).toHaveCount(0);
});

home("keyboard skip link and responsive navigation", async ({ page }, testInfo) => {
  await page.goto("/");
  const skip = page.getByRole("link", { name: "Skip to main content", exact: true });
  await page.keyboard.press("Tab");
  await expect(skip).toBeFocused();
  await expect(skip).toHaveAttribute("href", "#main-content");
  await page.keyboard.press("Enter");
  await expect(page.locator("main#main-content")).toBeFocused();

  const primary = page.locator("header").getByRole("navigation", { name: "Primary Navigation", includeHidden: true });
  await expect(primary.getByRole("link", { name: "Home", exact: true, includeHidden: true })).toHaveCount(0);
  if (testInfo.project.name === "desktop") {
    await topLevelLinks(primary);
    await primary.getByRole("link", { name: "For Students", exact: true }).click();
    for (const [name, href] of students) await link(primary, name, href);
    return;
  }
  for (const [name] of navigation) {
    await expect(primary.getByRole("link", { name, exact: true, includeHidden: true })).not.toBeVisible();
  }
  const open = page.getByRole("button", { name: "Open menu", exact: true });
  await open.click();
  const dialog = page.getByRole("dialog", { name: "Site menu", exact: true });
  await expect(dialog).toBeVisible();
  await expect(dialog).toHaveAttribute("aria-modal", "true");
  await expect.poll(() => dialog.evaluate((element) => element.contains(document.activeElement))).toBe(true);
  const mobile = dialog.getByRole("navigation", { name: "Mobile Navigation", exact: true });
  await expect(mobile.getByRole("link", { name: "Home", exact: true, includeHidden: true })).toHaveCount(0);
  await topLevelLinks(mobile);
  await link(dialog, "Affiliate Your ISoc", "/isoc-affiliations/");
  expect(await page.locator("body").evaluate((body) => ["hidden", "clip"].includes(getComputedStyle(body).overflowY) || getComputedStyle(body).position === "fixed")).toBe(true);
  const scrollBefore = await page.evaluate(() => window.scrollY);
  await page.mouse.move(2, 420);
  await page.mouse.wheel(0, 900);
  await page.evaluate(() => new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve()))));
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(scrollBefore);
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(open).toBeFocused();
  await open.click();
  await dialog.getByRole("button", { name: "Close menu", exact: true }).click();
  await expect(dialog).not.toBeVisible();
  await expect(open).toBeFocused();
});

home("footer columns, social destinations and legal copy", async ({ page }) => {
  await page.goto("/");
  const footer = page.getByRole("contentinfo");
  for (const [heading, links] of [
    ["For Students", [["Career Help", "/ihsaan-careers/"], ["Islamic Resources", "/islamic-resources/"], ["FOSIS Report", "/fosis-report/"]]],
    ["For ISocs", [["ISoc Affiliations", "/isoc-affiliations/"], ["FOSIS Services", "/fosis-services/"], ["ISoc Resources", "/isoc-essentials/"]]],
    ["Organisation", [["About Us", "/about-us/"], ["Explore Our Projects", "/join-team-fosis/"], ["Events", "/events/"], ["Articles", "/articles/"], ["Contact Us", "/contact-us/"], ["Support Us", "/support-us/"]]],
  ] as const) {
    const title = footer.getByRole("heading", { name: heading, exact: true });
    await expect(title).toBeVisible();
    // Footer heading levels are not fixed by the acceptance contract.
    const column = title.locator("xpath=ancestor::*[count(.//*[self::h2 or self::h3 or self::h4 or self::h5 or self::h6])=1][last()]");
    for (const [name, href] of links) await link(column, name, href);
  }
  for (const href of [
    "https://x.com/fosischannel",
    "https://uk.linkedin.com/company/federation-of-student-islamic-societies",
    "https://luma.com/calendar/cal-U05Qd0a3Ri06jpT",
  ]) {
    const social = footer.locator(`a[href="${href}"]`);
    await expect(social).toBeVisible();
    await expect(social).toHaveAttribute("target", "_blank");
    await expect(social).toHaveAttribute("rel", /\bnoopener\b/);
  }
  await visibleCopy(footer, /© \d{4} FOSIS\. All rights reserved\./);
  await visibleCopy(footer, "Representing 350,000 Muslim Students Nationwide");
});

home("hero playback, reduced motion and scroll-triggered support link", async ({ page }) => {
  await page.goto("/");
  const video = page.locator("main video");
  await expect(video).toHaveCount(1);
  await expect(video).toHaveJSProperty("muted", true);
  await expect(video).toHaveJSProperty("loop", true);
  await expect(video).toHaveAttribute("playsinline");
  await expect(video).toHaveAttribute("poster", /\S+/);
  await expect.poll(() => video.evaluate((element: HTMLVideoElement) => !element.paused && element.currentTime > 0)).toBe(true);
  await page.getByRole("button", { name: "Pause background video", exact: true }).click();
  await expect(video).toHaveJSProperty("paused", true);
  await page.getByRole("button", { name: "Play background video", exact: true }).click();
  await expect(video).toHaveJSProperty("paused", false);

  const donate = page.getByRole("link", { name: "Support FOSIS", exact: true });
  await page.evaluate(() => window.scrollTo(0, 0));
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
  expect(await page.evaluate(() => window.scrollY)).toBe(0);
  await expect(donate).not.toBeVisible();
  const hero = page.getByRole("heading", { level: 1 }).locator("xpath=ancestor::*[.//video][1]");
  await hero.evaluate((element) => window.scrollTo(0, element.getBoundingClientRect().bottom + window.scrollY + 20));
  await expect(donate).toBeVisible();
  await expect(donate).toBeInViewport();
  await expect(donate).toHaveAttribute("href", "/support-us/");
  await page.evaluate(() => window.scrollTo(0, 0));
  await expect(donate).not.toBeVisible();

  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(video).toHaveJSProperty("paused", true);
  // Observe across animation frames, not just before autoplay has a chance to start.
  expect(await video.evaluate(async (element: HTMLVideoElement) => {
    let stayedPaused = true;
    for (let frame = 0; frame < 30; frame++) {
      await new Promise(requestAnimationFrame);
      stayedPaused &&= element.paused;
    }
    return stayedPaused;
  })).toBe(true);
});

home("responsive width and image alternatives across the full page", async ({ page }) => {
  await page.goto("/");
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let offset = 0; offset < height; offset += 600) {
    await page.evaluate((y) => window.scrollTo(0, y), offset);
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
  }
  const invalidImages = await page.locator("img").evaluateAll((images) => images
    .filter((image) => !(image.getAttribute("alt")?.trim() || (image.getAttribute("alt") === "" && image.getAttribute("role") === "presentation")))
    .map((image) => image.getAttribute("src")));
  expect(invalidImages, "Every image needs meaningful alt text or explicit presentation role").toEqual([]);
});

test("not-found response and crawler endpoints", async ({ page, request }) => {
  const missing = await page.goto("/nope/");
  expect(missing?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1, name: "Page not found", exact: true })).toBeVisible();
  for (const route of ["/robots.txt", "/sitemap.xml"]) {
    const response = await request.get(route);
    expect(response.status(), `${route}: ${response.headers()["content-type"]}; ${(await response.text()).slice(0, 180)}`).toBe(200);
  }
});
