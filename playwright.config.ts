import { defineConfig } from "@playwright/test";
import { existsSync } from "node:fs";

const port = Number(process.env.FOSIS_E2E_PORT);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("Run bun run test:e2e to allocate a free localhost port");
}
const helium = "/Applications/Helium.app/Contents/MacOS/Helium";
if (!existsSync(helium)) throw new Error(`Helium is required at ${helium}`);

export default defineConfig({
  testDir: "./e2e",
  testMatch: "**/*.spec.ts",
  outputDir: "./e2e/artifacts/results",
  reporter: [["list"], ["json", { outputFile: "./e2e/artifacts/results.json" }]],
  fullyParallel: false,
  workers: 1,
  retries: 0,
  globalTimeout: 360_000,
  timeout: 30_000,
  expect: { timeout: 5_000 },
  use: {
    baseURL: `http://localhost:${port}`,
    browserName: "chromium",
    launchOptions: { executablePath: helium },
    reducedMotion: "no-preference",
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
  projects: [
    { name: "desktop", use: { viewport: { width: 1440, height: 900 } } },
    { name: "mobile", use: { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true } },
  ],
  webServer: {
    command: `bun run build && bun run start --hostname localhost --port ${port}`,
    url: `http://localhost:${port}`,
    env: { NEXT_PUBLIC_APP_URL: "" },
    reuseExistingServer: false,
    timeout: 180_000,
    gracefulShutdown: { signal: "SIGTERM", timeout: 5_000 },
  },
});
