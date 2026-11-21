import { expect, test, type Locator } from "@playwright/test";

async function link(scope: Locator, name: string, href: string) {
  const item = scope.getByRole("link", { name, exact: true });
  await expect(item).toBeVisible();
  await expect(item).toHaveAttribute("href", href);
}

async function visibleCopy(scope: Locator, value: string | RegExp) {
  const readable = scope.locator(':not([aria-hidden="true"]):not([aria-hidden="true"] *)');
  await expect(scope.getByText(value, { exact: true }).and(readable)).toBeVisible();
}

function block(heading: Locator, level: number) {
  return heading.locator(`xpath=ancestor::*[count(.//h${level})=1][last()]`);
}

const about = test.extend<{ browserErrors: string[] }>({
  browserErrors: [async ({ page }, use) => {
    const errors: string[] = [];
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    page.on("pageerror", (error) => errors.push(error.message));
    await use(errors);
    expect(errors, "About Us console errors and uncaught exceptions").toEqual([]);
  }, { auto: true }],
});

about("About Us introduction, title and production canonical", async ({ page }) => {
  const response = await page.goto("/about-us/");
  expect(response?.status()).toBe(200);
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.getByRole("heading", { level: 1, name: "About FOSIS", exact: true })).toBeVisible();
  await visibleCopy(page.getByRole("main"), "The Federation of Student Islamic Societies, the national voice for Muslim students across the UK & Ireland since 1963.");
  await expect(page).toHaveTitle("About Us | FOSIS");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://fosis.org.uk/about-us/");
});

about("About Us preserves the moved section headings and labels", async ({ page }) => {
  await page.goto("/about-us/");
  const main = page.getByRole("main");
  await expect(main.getByRole("heading", { level: 2 })).toHaveText([
    "We have been serving Muslim students since 1963.",
    "Three Pillars of Our Work",
  ]);
  for (const heading of await main.getByRole("heading", { level: 2 }).all()) await expect(heading).toBeVisible();
  for (const label of ["Our Mission", "By The Numbers", "What We Do"]) await visibleCopy(main, label);
});

about("mission copy links to FOSIS History", async ({ page }) => {
  await page.goto("/about-us/");
  const mission = block(page.getByRole("main").getByRole("heading", { level: 2, name: "We have been serving Muslim students since 1963.", exact: true }), 2);
  await visibleCopy(mission, "FOSIS connects, empowers, and advocates for Islamic Societies across every university in the United Kingdom. From spiritual development to career guidance, from national campaigns to grassroots community building, we are the infrastructure behind Muslim student excellence.");
  await link(mission, "FOSIS History", "/fosis-history/");
});

about("four moved statistics retain their values, labels and descriptions", async ({ page }) => {
  await page.goto("/about-us/");
  const main = page.getByRole("main");
  const statistics = [
    ["63+", "Years of Service", "Serving Muslim students since our foundation in 1963."],
    ["350K", "Students Represented", "The largest Muslim student network across the UK."],
    ["100+", "Affiliated ISocs", "Islamic Societies united under one national body."],
    ["50+", "Events Per Year", "National and regional events for students across the UK."],
  ] as const;
  for (const [value, label, description] of statistics) {
    const stat = main.getByText(description, { exact: true }).locator("xpath=ancestor::*[contains(., '" + value + "')][1]");
    await visibleCopy(stat, value);
    await visibleCopy(stat, label);
    await visibleCopy(stat, description);
    for (const [, , otherDescription] of statistics) {
      if (otherDescription !== description) await expect(stat.getByText(otherDescription, { exact: true })).toHaveCount(0);
    }
  }
});

about("three moved pillars retain their copy and link to the approved destinations", async ({ page }) => {
  await page.goto("/about-us/");
  const pillars = block(page.getByRole("main").getByRole("heading", { level: 2, name: "Three Pillars of Our Work", exact: true }), 2);
  await expect(pillars.getByRole("heading", { level: 3 })).toHaveText(["Development", "Unity", "Advocacy"]);
  for (const [name, copy, href] of [
    ["Development", "Training, resources, and leadership programmes that equip students for success in their careers and communities.", "/fosis-services/"],
    ["Unity", "Bridging ISocs from every corner of the UK into one powerful, unified network of Muslim student excellence.", "/isoc-affiliations/"],
    ["Advocacy", "Championing the rights and welfare of Muslim students at every level, from individual campuses to parliament.", "/fosis-report/"],
  ]) {
    const pillar = block(pillars.getByRole("heading", { level: 3, name, exact: true }), 3);
    await visibleCopy(pillar, copy);
    await link(pillar, "Learn more", href);
  }
});

about("header is solid white at scroll zero", async ({ page }) => {
  const response = await page.goto("/about-us/");
  expect(response?.status()).toBe(200);
  await page.evaluate(() => window.scrollTo(0, 0));
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
  await expect(page.locator("header")).toHaveCSS("background-color", "rgb(255, 255, 255)");
  await expect(page.locator("header")).toHaveCSS("opacity", "1");
});

about("responsive width and image alternatives across the About Us page", async ({ page }) => {
  const response = await page.goto("/about-us/");
  expect(response?.status()).toBe(200);
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

about("sitemap includes the production About Us URL", async ({ request }) => {
  const response = await request.get("/sitemap.xml");
  const body = await response.text();
  expect(response.status(), `/sitemap.xml: ${response.headers()["content-type"]}; ${body.slice(0, 180)}`).toBe(200);
  expect(response.headers()["content-type"]).toContain("xml");
  expect(body).toMatch(/<loc>\s*https:\/\/fosis\.org\.uk\/about-us\/\s*<\/loc>/);
});
