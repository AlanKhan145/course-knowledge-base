import { defineConfig } from "@playwright/test";

// E2E against the real catalog. Uses the installed Microsoft Edge (no browser download).
// Start the app first (`npm run dev`) or let Playwright start it; the first compile is slow on a slow disk.
export default defineConfig({
  testDir: "tests/e2e",
  timeout: 300_000,
  expect: { timeout: 90_000 },
  workers: 1,
  retries: 0,
  reporter: [["list"]],
  use: { baseURL: "http://localhost:3210", channel: "msedge", trace: "retain-on-failure", navigationTimeout: 300_000 },
  projects: [
    { name: "desktop", use: { channel: "msedge", viewport: { width: 1440, height: 900 } }, testIgnore: /mobile\.spec\.ts/ },
    { name: "mobile", use: { channel: "msedge", viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true }, testMatch: /mobile\.spec\.ts/ },
  ],
  webServer: { command: "npm run dev", url: "http://localhost:3210", reuseExistingServer: true, timeout: 300_000 },
});
