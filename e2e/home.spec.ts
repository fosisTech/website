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

home("home copy, section CTAs, statistics and pillars", async ({ page }) => {
  await page.goto("/");
  const main = page.getByRole("main");
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Empowering Muslim Students. Enriching Society.");
  const hero = main.getByRole("heading", { level: 1 }).locator("xpath=ancestor::*[.//video][1]");
  await visibleCopy(hero, "Est. 1963, The Federation of Student Islamic Societies");
  await visibleCopy(hero, "The UK’s national voice for Muslim students in higher education, connecting over 100 Islamic Societies and 350,000 students across every campus in the country.");
  await link(hero, "Affiliate Your ISoc", "/isoc-affiliations/");
  await link(hero, "Support Us", "/support-us/");
  await expect(main.getByRole("heading", { level: 2 })).toHaveText([
    "We have been serving Muslim students since 1963.",
    "Three Pillars of Our Work",
    "Affiliated ISocs",
    "There Is a Place For You Here.",
  ]);
  const mission = block(main.getByRole("heading", { name: "We have been serving Muslim students since 1963.", exact: true }), 2);
  await visibleCopy(mission, "FOSIS connects, empowers, and advocates for Islamic Societies across every university in the United Kingdom. From spiritual development to career guidance, from national campaigns to grassroots community building, we are the infrastructure behind Muslim student excellence.");
  await link(mission, "About FOSIS", "/about-us/");

  await visibleCopy(main, "By The Numbers");
  for (const [value, label, description] of [
    ["63+", "Years of Service", "Serving Muslim students since our foundation in 1963."],
    ["350K", "Students Represented", "The largest Muslim student network across the UK."],
    ["100+", "Affiliated ISocs", "Islamic Societies united under one national body."],
    ["50+", "Events Per Year", "National and regional events for students across the UK."],
  ]) {
    const stat = main.getByText(description, { exact: true }).locator("xpath=ancestor::*[contains(., '" + value + "')][1]");
    await visibleCopy(stat, value);
    await visibleCopy(stat, label);
    await visibleCopy(stat, description);
  }

  for (const [name, copy, href] of [
    ["Development", "Training, resources, and leadership programmes that equip students for success in their careers and communities.", "/about-us/"],
    ["Unity", "Bridging ISocs from every corner of the UK into one powerful, unified network of Muslim student excellence.", "/isoc-affiliations/"],
    ["Advocacy", "Championing the rights and welfare of Muslim students at every level, from individual campuses to parliament.", "/fosis-report/"],
  ]) {
    const pillar = block(main.getByRole("heading", { level: 3, name, exact: true }), 3);
    await visibleCopy(pillar, copy);
    await link(pillar, "Learn more", href);
  }
  const network = block(main.getByRole("heading", { level: 2, name: "Affiliated ISocs", exact: true }), 2);
  await visibleCopy(network, "Over 110 Islamic Societies from universities and colleges across the UK and Ireland, united under one national body.");
  await link(network, "View All ISocs", "/find-your-isoc/");
  await link(network, "Affiliate Your ISoc", "/isoc-affiliations/");
  const involved = block(main.getByRole("heading", { level: 2, name: "There Is a Place For You Here.", exact: true }), 2);
  await visibleCopy(involved, "Whether you want to affiliate your ISoc, access our services, or join the national team, we want to hear from you.");
  await link(involved, "Contact Us", "/join-team-fosis/");
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
