import os from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { resolveInside } from "../../src/lib/content/config.ts";

// The root need not exist: resolveInside is pure path arithmetic.
const ROOT = path.join(os.tmpdir(), "courseflow-root", "Khóa học", "Thư viện số");

describe("resolveInside — blocks escapes", () => {
  const blocked: [string, string][] = [
    ["parent traversal", "../x"],
    ["parent traversal (backslash)", "..\\x"],
    ["bare parent", ".."],
    ["nested traversal", "a/b/../../../x"],
    ["nested traversal (backslashes)", "a\\..\\..\\x"],
    ["traversal after a Vietnamese segment", "Khóa học/../../x.md"],
    ["traversal into a sibling with the same prefix", `../${path.basename(ROOT)}-evil/a.md`],
    ["Windows drive path", "C:/Windows"],
    ["Windows drive path (backslash)", "C:\\Windows\\system32"],
    ["lowercase drive letter", "d:/data"],
    ["drive-relative path", "C:foo"],
    ["POSIX absolute path", "/etc/passwd"],
    ["backslash-rooted path", "\\Windows\\win.ini"],
    ["UNC path", "\\\\server\\share\\x"],
    ["NUL byte", "a\0b.md"],
    ["NUL byte after a traversal-free prefix", "ok.md\0../../x"],
    ["empty string", ""],
  ];

  for (const [label, rel] of blocked) {
    it(`rejects ${label}: ${JSON.stringify(rel)}`, () => {
      expect(resolveInside(ROOT, rel)).toBeNull();
    });
  }
});

describe("resolveInside — allows paths inside the root", () => {
  it("resolves a plain nested path", () => {
    expect(resolveInside(ROOT, "a/b/c.md")).toBe(path.resolve(ROOT, "a", "b", "c.md"));
  });

  it("resolves Vietnamese names with spaces", () => {
    const rel = "01 - AI & Dữ liệu/02 - Lập trình/Khóa học Python (cơ bản)/Bài 1 - Giới thiệu.md";
    const abs = resolveInside(ROOT, rel);
    expect(abs).toBe(path.resolve(ROOT, "01 - AI & Dữ liệu", "02 - Lập trình", "Khóa học Python (cơ bản)", "Bài 1 - Giới thiệu.md"));
    expect(abs!.startsWith(ROOT + path.sep)).toBe(true);
  });

  it("accepts backslash separators as the same as slashes", () => {
    expect(resolveInside(ROOT, "a\\b\\Bài 2.md")).toBe(path.resolve(ROOT, "a", "b", "Bài 2.md"));
  });

  it("a '..' that stays inside the root is fine", () => {
    expect(resolveInside(ROOT, "a/b/../c.md")).toBe(path.resolve(ROOT, "a", "c.md"));
    expect(resolveInside(ROOT, "./a/./b.md")).toBe(path.resolve(ROOT, "a", "b.md"));
  });

  it("allows file names that merely contain dots", () => {
    expect(resolveInside(ROOT, "a/v1.2..3/notes...md")).toBe(path.resolve(ROOT, "a", "v1.2..3", "notes...md"));
    expect(resolveInside(ROOT, "a/b..c/d.md")).toBe(path.resolve(ROOT, "a", "b..c", "d.md"));
  });

  it("tolerates a trailing slash", () => {
    expect(resolveInside(ROOT, "a/b/")).toBe(path.resolve(ROOT, "a", "b"));
  });

  it("'.' resolves to the root itself", () => {
    expect(resolveInside(ROOT, ".")).toBe(path.resolve(ROOT));
  });

  it("does not URL-decode: an encoded traversal is just an odd (inside) folder name", () => {
    const abs = resolveInside(ROOT, "%2e%2e/x.md");
    expect(abs).toBe(path.resolve(ROOT, "%2e%2e", "x.md"));
  });

  it("the result always stays within the root", () => {
    for (const rel of ["a", "a/b", "Khóa học/Bài 1.md", "a/../b", "./x/y/z"]) {
      const abs = resolveInside(ROOT, rel)!;
      expect(abs, rel).not.toBeNull();
      expect(path.relative(ROOT, abs).startsWith("..")).toBe(false);
    }
  });
});
