import { expect, test } from "@playwright/test";

test("mobile lesson: no horizontal scroll, outline drawer and TOC sheet", async ({ page }) => {
  await page.goto("/learn/pydantic-structured-output/01-vi-sao-can-pydantic");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  const { inner, scroll } = await page.evaluate(() => ({ inner: innerWidth, scroll: document.documentElement.scrollWidth }));
  expect(scroll).toBeLessThanOrEqual(inner);
  await page.getByRole("button", { name: "Mở danh sách bài học" }).click();
  await expect(page.getByRole("dialog", { name: "Bài học trong khóa" })).toBeVisible();
  await page.keyboard.press("Escape");
  await page.getByRole("button", { name: "Mục lục bài" }).click();
  await expect(page.getByRole("dialog", { name: "Mục lục bài" })).toBeVisible();
});

test("mobile explore has a filter drawer", async ({ page }) => {
  await page.goto("/explore");
  await page.getByRole("button", { name: "Lọc" }).click();
  await expect(page.getByRole("dialog", { name: "Bộ lọc" })).toBeVisible();
});
