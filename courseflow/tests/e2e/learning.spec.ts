import { expect, test, type Page } from "@playwright/test";

const LESSON = "/learn/pydantic-structured-output/01-vi-sao-can-pydantic";

function collectErrors(page: Page) {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error" && !/favicon|React DevTools/.test(m.text())) errors.push(m.text());
  });
  return errors;
}

test("dashboard shows the real catalog and domain chips", async ({ page }) => {
  const errors = collectErrors(page);
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("khóa học");
  await expect(page.getByRole("navigation", { name: "Lĩnh vực" }).getByRole("link").first()).toBeVisible();
  expect(errors).toEqual([]);
});

test("search works without Vietnamese accents (page + Ctrl+K)", async ({ page }) => {
  await page.goto("/search?q=giam+mo");
  await expect(page.getByRole("heading", { name: "Bài học" })).toBeVisible();
  await expect(page.locator("mark").first()).toBeVisible();
  await page.goto("/");
  await page.keyboard.press("Control+k");
  await page.getByRole("combobox", { name: "Từ khóa tìm kiếm" }).fill("pydantic");
  await expect(page.getByRole("option").filter({ hasText: "Pydantic" }).first()).toBeVisible();
});

test("explore filters by domain", async ({ page }) => {
  await page.goto("/explore");
  expect(await page.locator("article").count()).toBeGreaterThan(10);
  await page.getByRole("button", { name: /^AI & Dữ liệu/ }).first().click();
  await expect(page).toHaveURL(/domain=/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("AI & Dữ liệu");
});

test("lesson: markdown renders, quiz grades, completion persists, [ ] navigate", async ({ page }) => {
  const errors = collectErrors(page);
  await page.goto(LESSON);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Vì sao ứng dụng Python cần Pydantic?");
  await expect(page.locator(".code-shell").first()).toBeVisible();
  const quiz = page.locator("[data-quiz]").first();
  await expect(quiz.getByText("Đáp án đúng")).toHaveCount(0);
  const cards = quiz.locator("article");
  const n = await cards.count();
  for (let i = 0; i < n; i++) await cards.nth(i).locator("label").first().click();
  await quiz.getByRole("button", { name: "Nộp bài" }).click();
  await expect(quiz.getByRole("status").first()).toContainText("%");
  await page.getByRole("button", { name: "Đánh dấu đã học" }).first().click();
  await expect(page.getByRole("button", { name: "Đã học", exact: true }).first()).toBeVisible();
  await page.reload();
  await expect(page.getByRole("button", { name: "Đã học", exact: true }).first()).toBeVisible();
  await page.locator("body").press("]");
  await expect(page).toHaveURL(/02-cai-dat-uv-pip/);
  await expect(page.getByRole("heading", { level: 1 })).not.toHaveText("Vì sao ứng dụng Python cần Pydantic?");
  await page.waitForTimeout(1000);
  await page.locator("body").press("[");
  await expect(page).toHaveURL(/01-vi-sao-can-pydantic/);
  expect(errors).toEqual([]);
});

test("random review draws questions from learned lessons", async ({ page }) => {
  await page.goto(LESSON);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await page.waitForTimeout(1500);
  if (!(await page.getByRole("button", { name: "Đã học", exact: true }).first().isVisible())) await page.getByRole("button", { name: "Đánh dấu đã học" }).first().click();
  await expect(page.getByRole("button", { name: "Đã học", exact: true }).first()).toBeVisible();
  await page.waitForTimeout(500);
  await page.goto("/practice");
  await page.getByRole("button", { name: "Tạo đề" }).click();
  await expect(page.locator("article").first()).toBeVisible();
  await expect(page.getByText("Từ bài:").first()).toBeVisible();
});

test("editorial marks appear on the review board", async ({ page }) => {
  await page.goto(LESSON);
  await page.waitForTimeout(1500);
  await page.getByRole("combobox", { name: "Trạng thái biên tập" }).first().selectOption("needs_edit");
  await page.waitForTimeout(500);
  await page.goto("/review");
  await expect(page.getByRole("link", { name: "Vì sao ứng dụng Python cần Pydantic?" })).toBeVisible();
});

test("course structures open: deep nesting, wrapper folder, flat, incomplete", async ({ page }) => {
  for (const slug of ["ai-engineer", "khoa-hoc-geometry-nodes-ca-procedural", "nextjs-15-app-router", "blender-2-8-tutorial-cell-fracture-explosion"]) {
    await page.goto(`/courses/${slug}`);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await page.getByRole("link", { name: /Bắt đầu học|Tiếp tục học|Học tiếp/ }).click();
    await expect(page.locator("article.prose-lesson")).toBeVisible();
  }
});

test("template page renders image, diagram, math and a quiz", async ({ page }) => {
  await page.goto("/templates");
  const img = page.locator("article img").first();
  await img.scrollIntoViewIfNeeded();
  await expect(img).toBeVisible();
  await expect(page.locator(".katex").first()).toBeVisible();
  await expect(page.locator(".mermaid-canvas svg").first()).toBeVisible({ timeout: 120_000 });
  await expect(page.locator("[data-quiz]").first()).toBeVisible();
});

test("editor opens markdown with live preview (does not save)", async ({ page }) => {
  await page.goto("/edit/pydantic-structured-output/01-vi-sao-can-pydantic");
  await expect(page.getByRole("status").filter({ hasText: "Chưa thay đổi" })).toBeVisible({ timeout: 120_000 });
  await expect(page.locator(".cm-content")).toContainText("Pydantic");
  await expect(page.locator("article.prose-lesson h1")).toContainText("Pydantic");
});

test("asset route blocks path traversal", async ({ request }) => {
  const r = await request.get("/api/asset/khoa-hoc/..%2F..%2Fcourseflow%2Fpackage.json");
  expect([403, 404]).toContain(r.status());
});
