// Usage: node tools/screenshot.mjs <url> <out.png> [width] [height] [dark]
// Uses the installed Microsoft Edge (no browser download). Prints console errors.
import { chromium } from "@playwright/test";

const [url, out, w = "1440", h = "900", theme = "light"] = process.argv.slice(2);
const browser = await chromium.launch({ channel: "msedge" });
const ctx = await browser.newContext({ viewport: { width: Number(w), height: Number(h) }, colorScheme: theme === "dark" ? "dark" : "light", deviceScaleFactor: 1 });
const page = await ctx.newPage();
const errors = [];
page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
await page.goto(url, { waitUntil: "networkidle", timeout: 600000 });
await page.waitForTimeout(Number(process.env.WAIT ?? 1500));
const dims = await page.evaluate(() => ({ inner: innerWidth, scroll: document.documentElement.scrollWidth }));
await page.screenshot({ path: out, fullPage: process.env.FULL === "1" });
console.log(JSON.stringify({ dims, errors: errors.slice(0, 10) }));
await browser.close();
