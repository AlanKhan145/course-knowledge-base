import { afterAll, beforeAll, describe, expect, it } from "vitest";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

let tmp = "";
let root = "";

beforeAll(() => {
  tmp = fs.mkdtempSync(path.join(os.tmpdir(), "cf-editor-"));
  root = path.join(tmp, "Khóa học");
  fs.mkdirSync(path.join(root, "01 - Lĩnh vực", "01 - Chuyên ngành", "khoa-a", "01-Module"), { recursive: true });
  fs.writeFileSync(path.join(root, "01 - Lĩnh vực", "01 - Chuyên ngành", "khoa-a", "01-Module", "01-bai.md"), "# Bài\r\n\r\nNội dung cũ\r\n");
  process.env.COURSEFLOW_CONTENT_ROOTS = root;
  process.env.COURSEFLOW_DATA_DIR = path.join(tmp, "data");
  process.env.COURSEFLOW_MODE = "local";
});

afterAll(() => {
  fs.rmSync(tmp, { recursive: true, force: true });
});

const REL = "01 - Lĩnh vực/01 - Chuyên ngành/khoa-a/01-Module/01-bai.md";

describe("in-app editor", () => {
  it("reads, saves with backup, keeps CRLF, detects conflicts, restores", async () => {
    const { readForEdit, saveFile, listBackups, readBackup } = await import("../../src/lib/content/editor.ts");
    const { getContentRoots } = await import("../../src/lib/content/config.ts");
    const rootId = getContentRoots()[0].id;
    const f = await readForEdit(rootId, REL);
    expect(f.content).toContain("Nội dung cũ");

    const saved = await saveFile(rootId, REL, "# Bài\n\nNội dung mới\n", f.hash);
    expect(saved.backup).toMatch(/\.md$/);
    const onDisk = fs.readFileSync(path.join(root, ...REL.split("/")), "utf8");
    expect(onDisk).toBe("# Bài\r\n\r\nNội dung mới\r\n"); // original line endings preserved

    const backups = await listBackups(rootId, REL);
    expect(backups).toHaveLength(1);
    expect(await readBackup(rootId, REL, backups[0].id)).toContain("Nội dung cũ");

    // stale base hash → conflict, file untouched
    await expect(saveFile(rootId, REL, "ghi đè", f.hash)).rejects.toMatchObject({ status: 409 });
    expect(fs.readFileSync(path.join(root, ...REL.split("/")), "utf8")).toContain("Nội dung mới");
  });

  it("refuses paths outside the content root and non-markdown files", async () => {
    const { readForEdit } = await import("../../src/lib/content/editor.ts");
    const { getContentRoots } = await import("../../src/lib/content/config.ts");
    const rootId = getContentRoots()[0].id;
    await expect(readForEdit(rootId, "../secret.md")).rejects.toMatchObject({ status: 400 });
    await expect(readForEdit(rootId, "01 - Lĩnh vực/x.txt")).rejects.toMatchObject({ status: 400 });
  });

  it("is disabled in public mode", async () => {
    process.env.COURSEFLOW_MODE = "public";
    const { readForEdit } = await import("../../src/lib/content/editor.ts");
    await expect(readForEdit("khoa-hoc", REL)).rejects.toMatchObject({ status: 403 });
    process.env.COURSEFLOW_MODE = "local";
  });
});
