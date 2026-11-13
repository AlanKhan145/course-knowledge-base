// Course Discovery Engine tests: real folders under os.tmpdir() (Vietnamese names with spaces),
// walkDir → DocLookup built from extractDocMeta → buildCatalog. Nothing here touches the real course library.
import { createHash } from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import {
  buildCatalog,
  iterMd,
  walkDir,
  type CatalogBuild,
  type CourseRow,
  type DirNode,
  type DocInfo,
  type DocLookup,
} from "../../src/lib/content/discovery.ts";
import { extractDocMeta } from "../../src/lib/content/lesson-meta.ts";
import { slugify } from "../../src/lib/content/text.ts";

// ------------------------------------------------------------------ helpers

let base: string;
let counter = 0;

beforeAll(() => {
  base = fs.mkdtempSync(path.join(os.tmpdir(), "courseflow-discovery-"));
});
afterAll(() => {
  fs.rmSync(base, { recursive: true, force: true });
});

/** A fresh library root with a Vietnamese name containing spaces. */
function newRoot(): string {
  const root = path.join(base, `Thư viện số ${++counter}`);
  fs.mkdirSync(root, { recursive: true });
  return root;
}

/** Write files (keys use "/" separators; a null value creates only the folder). */
function write(root: string, files: Record<string, string | null>): void {
  for (const [rel, content] of Object.entries(files)) {
    const abs = path.join(root, ...rel.split("/"));
    if (content === null) {
      fs.mkdirSync(abs, { recursive: true });
      continue;
    }
    fs.mkdirSync(path.dirname(abs), { recursive: true });
    fs.writeFileSync(abs, content, "utf8");
  }
}

/** DocLookup the way the scanner builds it: extractDocMeta per markdown file + fake rowids. */
function makeLookup(root: string, tree: DirNode): DocLookup {
  const docs = new Map<string, DocInfo>();
  let rowid = 0;
  for (const f of iterMd(tree)) {
    const text = fs.readFileSync(path.join(root, f.rel), "utf8");
    const m = extractDocMeta(text);
    docs.set(f.rel, {
      rowid: ++rowid,
      path: f.rel,
      h1: m.h1,
      description: m.description,
      fm: m.fm,
      headings: m.headings,
      words: m.words,
      questions: m.questions,
      gradable: m.gradable,
      hasMermaid: m.hasMermaid,
      hasMath: m.hasMath,
      hasImages: m.hasImages,
      hasCode: m.hasCode,
      links: m.links,
      lang: m.lang,
      objectives: m.objectives,
      prerequisites: m.prerequisites,
      sourceUrl: m.sourceUrl,
      mtime: f.mtime,
      hash: createHash("sha1").update(text).digest("hex"),
    });
  }
  return (rel) => docs.get(rel);
}

async function scan(root: string, manifestsDir: string | null = null): Promise<CatalogBuild> {
  const tree = await walkDir(root, "");
  return buildCatalog(tree, makeLookup(root, tree), { rootId: "lib", rootAbs: root, manifestsDir });
}

const WORDS = "một hai ba bốn năm sáu bảy tám chín mười".split(" ");
const prose = (n: number, seed = 0) => Array.from({ length: n }, (_, i) => WORDS[(i + seed) % WORDS.length]).join(" ") + ".";

/** A normal lesson of ~`words` words (counts as "real" content, not tiny). */
function lesson(title: string, opts: { words?: number; fm?: Record<string, string | number | boolean>; extra?: string } = {}): string {
  const fm = opts.fm
    ? "---\n" + Object.entries(opts.fm).map(([k, v]) => `${k}: ${v}`).join("\n") + "\n---\n"
    : "";
  return `${fm}# ${title}\n\nBài này nói về ${title}. ${prose(opts.words ?? 200, title.length)}\n\n## Ví dụ\n\n${prose(20, title.length + 3)}\n${opts.extra ? "\n" + opts.extra + "\n" : ""}`;
}

const DOM = "01 - Công nghệ";
const CAT = "01 - Lập trình";
const P = (course: string) => `${DOM}/${CAT}/${course}`;

const courseNamed = (c: CatalogBuild, name: string): CourseRow => {
  const found = c.courses.find((x) => x.id === slugify(name));
  if (!found) throw new Error(`course ${name} not found; have ${c.courses.map((x) => x.id).join(", ")}`);
  return found;
};
const modulesOf = (c: CatalogBuild, course: CourseRow) => c.modules.filter((m) => m.courseId === course.id).sort((a, b) => a.ord - b.ord);
const lessonsOf = (c: CatalogBuild, course: CourseRow) => c.lessons.filter((l) => l.courseId === course.id);
const realLessons = (c: CatalogBuild, course: CourseRow) => lessonsOf(c, course).filter((l) => l.kind === "lesson").sort((a, b) => a.ord - b.ord);
const issuesOf = (c: CatalogBuild, course: CourseRow | string, code?: string) => {
  const id = typeof course === "string" ? course : course.id;
  return c.issues.filter((i) => i.courseId === id && (!code || i.code === code));
};

// ------------------------------------------------------------------ taxonomy

describe("buildCatalog — taxonomy (domain → category → course)", () => {
  it("builds domains and categories from numbered folders; other root folders are skipped", async () => {
    const root = newRoot();
    write(root, {
      [`${P("Khóa A")}/01-a.md`]: lesson("A một"),
      [`${P("Khóa A")}/02-a.md`]: lesson("A hai"),
      [`${P("Khóa A")}/03-a.md`]: lesson("A ba"),
      "Ghi chú linh tinh/note.md": lesson("Không thuộc lĩnh vực nào"),
      [`${DOM}/Khóa B/01-b.md`]: lesson("B một"),
    });
    const c = await scan(root);
    expect(c.domains).toEqual([{ id: "01-cong-nghe", title: "Công nghệ", ord: 1, dir: DOM, rootId: "lib" }]);
    expect(c.skipped).toContainEqual({ path: "Ghi chú linh tinh", reason: "not a numbered domain folder" });
    const cat = c.categories.find((x) => x.title === "Lập trình");
    expect(cat).toMatchObject({ id: "01-cong-nghe--01-lap-trinh", domainId: "01-cong-nghe", parentId: null, dir: `${DOM}/${CAT}`, level: null });
    // a non-numbered folder directly under the domain is collected under the catch-all "Khác" category
    const khac = c.categories.find((x) => x.title === "Khác");
    expect(khac).toMatchObject({ id: "01-cong-nghe--khac", parentId: null });
    expect(courseNamed(c, "Khóa A")).toMatchObject({ domainId: "01-cong-nghe", categoryId: cat!.id, subcategoryId: null });
    expect(courseNamed(c, "Khóa B").categoryId).toBe(khac!.id);
  });
});

// ------------------------------------------------------------------ (a) flat course

describe("(a) flat course with module folders and 00-MUC-LUC-MODULE.md overviews", () => {
  const NAME = "Khóa học phẳng";
  let c: CatalogBuild;
  let course: CourseRow;

  beforeAll(async () => {
    const root = newRoot();
    write(root, {
      [`${P(NAME)}/README.md`]:
        "# Khóa học phẳng – Lập trình cơ bản\n\nĐây là khóa học giúp bạn làm quen với lập trình từ con số không qua nhiều bài thực hành.\n\n## Mục tiêu\n\n- Hiểu biến và kiểu dữ liệu\n- Viết được hàm đơn giản\n",
      [`${P(NAME)}/01-Nhập-môn/00-MUC-LUC-MODULE.md`]: "# Module 1: Nhập môn lập trình\n\nTổng quan module.\n",
      [`${P(NAME)}/01-Nhập-môn/01-Biến.md`]: lesson("Biến và kiểu dữ liệu"),
      [`${P(NAME)}/01-Nhập-môn/02-Hàm.md`]: lesson("Hàm cơ bản"),
      [`${P(NAME)}/02-Kỹ-thuật/00-MUC-LUC-MODULE.md`]: "# Module 2 – Kỹ thuật nâng cao\n\nTổng quan module.\n",
      [`${P(NAME)}/02-Kỹ-thuật/10-Thuật-toán.md`]: lesson("Thuật toán sắp xếp"),
      [`${P(NAME)}/02-Kỹ-thuật/01-Đệ-quy.md`]: lesson("Đệ quy"),
      [`${P(NAME)}/02-Kỹ-thuật/2-Con-trỏ.md`]: lesson("Con trỏ"),
      [`${P(NAME)}/03-Dự án cuối/00-MUC-LUC-MODULE.md`]: "# Mục lục\n\nDanh sách bài.\n",
      [`${P(NAME)}/03-Dự án cuối/01-Đồ-án.md`]: lesson("Đồ án cuối khóa"),
    });
    c = await scan(root);
    course = courseNamed(c, NAME);
  });

  it("creates one module per folder, titled from the overview H1 (prefix stripped)", () => {
    expect(course.structure).toBe("flat");
    expect(modulesOf(c, course).map((m) => m.title)).toEqual(["Nhập môn lập trình", "Kỹ thuật nâng cao", "Dự án cuối"]);
    expect(modulesOf(c, course).map((m) => m.kind)).toEqual(["module", "module", "module"]);
    expect(modulesOf(c, course).map((m) => m.ord)).toEqual([1, 2, 3]);
  });

  it("falls back to the folder name when the overview H1 is generic ('Mục lục')", () => {
    expect(modulesOf(c, course)[2].title).toBe("Dự án cuối");
  });

  it("records each module's overview file", () => {
    expect(modulesOf(c, course).map((m) => m.overviewPath)).toEqual([
      `${P(NAME)}/01-Nhập-môn/00-MUC-LUC-MODULE.md`,
      `${P(NAME)}/02-Kỹ-thuật/00-MUC-LUC-MODULE.md`,
      `${P(NAME)}/03-Dự án cuối/00-MUC-LUC-MODULE.md`,
    ]);
  });

  it("does not count the overview files as lessons", () => {
    const real = realLessons(c, course);
    expect(real).toHaveLength(6);
    expect(real.some((l) => l.path.endsWith("00-MUC-LUC-MODULE.md"))).toBe(false);
    expect(course.lessonCount).toBe(6);
    expect(modulesOf(c, course).map((m) => m.lessonCount)).toEqual([2, 3, 1]);
    for (const l of lessonsOf(c, course).filter((x) => x.path.endsWith("00-MUC-LUC-MODULE.md"))) expect(l.kind).not.toBe("lesson");
  });

  it("orders lessons naturally (2 before 10) and numbers them 1..n across modules", () => {
    const real = realLessons(c, course);
    expect(real.map((l) => l.title)).toEqual([
      "Biến và kiểu dữ liệu",
      "Hàm cơ bản",
      "Đệ quy",
      "Con trỏ",
      "Thuật toán sắp xếp",
      "Đồ án cuối khóa",
    ]);
    expect(real.map((l) => l.ord)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("takes course title, description, objectives and overview from README.md", () => {
    expect(course.title).toBe("Khóa học phẳng – Lập trình cơ bản");
    expect(course.description).toMatch(/^Đây là khóa học giúp bạn làm quen với lập trình/);
    expect(course.objectives).toEqual(["Hiểu biến và kiểu dữ liệu", "Viết được hàm đơn giản"]);
    expect(course.overviewPath).toBe(`${P(NAME)}/README.md`);
    expect(course.moduleCount).toBe(3);
    expect(course.status).toBe("ready");
    expect(course.language).toBe("vi");
  });
});

// ------------------------------------------------------------------ (b) deep nesting

describe("(b) deep nesting 'Khóa-1/Course-Name/01 - Tuan 1/…' with Resources folders", () => {
  const NAME = "Khóa-1";
  let c: CatalogBuild;
  let course: CourseRow;

  beforeAll(async () => {
    const root = newRoot();
    write(root, {
      [`${P(NAME)}/README.md`]: "# Khóa 1 – Tổng quan\n\nGiới thiệu chung về khóa học và cách học hiệu quả nhất.\n",
      [`${P(NAME)}/Course-Name/00-MUC-LUC-KHOA-HOC.md`]: "# Python cho người mới bắt đầu\n\nMục lục khóa học này gồm hai tuần học liên tiếp.\n",
      [`${P(NAME)}/Course-Name/01 - Tuan 1/01-a.md`]: lesson("Bài A"),
      [`${P(NAME)}/Course-Name/01 - Tuan 1/02-b.md`]: lesson("Bài B"),
      [`${P(NAME)}/Course-Name/02 - Tuan 2/01-c.md`]: lesson("Bài C"),
      [`${P(NAME)}/Course-Name/02 - Tuan 2/02-d.md`]: lesson("Bài D"),
      // Resources next to the weeks, and Resources next to Course-Name
      [`${P(NAME)}/Course-Name/Resources/slides-notes.md`]: lesson("Ghi chú slide"),
      [`${P(NAME)}/Course-Name/Resources/slides.pdf`]: "%PDF-1.4",
      [`${P(NAME)}/Resources/extra-reading.md`]: lesson("Đọc thêm"),
      [`${P(NAME)}/Resources/data.csv`]: "a,b\n1,2\n",
    });
    c = await scan(root);
    course = courseNamed(c, NAME);
  });

  it("collapses the single-child wrapper folder and records it in `structure`", () => {
    expect(course.structure).toBe("collapse:Course-Name");
    expect(modulesOf(c, course).map((m) => m.title)).toEqual(["Tuan 1", "Tuan 2"]);
    expect(modulesOf(c, course).map((m) => m.dir)).toEqual([`${P(NAME)}/Course-Name/01 - Tuan 1`, `${P(NAME)}/Course-Name/02 - Tuan 2`]);
    expect(course.moduleCount).toBe(2);
  });

  it("never turns a Resources folder into a module", () => {
    expect(modulesOf(c, course).some((m) => /resources/i.test(m.dir))).toBe(false);
  });

  it("counts markdown inside Resources as resources, not lessons", () => {
    expect(course.lessonCount).toBe(4);
    expect(realLessons(c, course).map((l) => l.title)).toEqual(["Bài A", "Bài B", "Bài C", "Bài D"]);
    const res = lessonsOf(c, course).filter((l) => /\/Resources\//.test(l.path));
    expect(res.map((l) => path.posix.basename(l.path)).sort()).toEqual(["extra-reading.md", "slides-notes.md"]);
    for (const l of res) {
      expect(l.kind).toBe("resource");
      expect(l.moduleId).toBeNull();
      expect(l.ord).toBeGreaterThanOrEqual(100000); // sorted after real lessons, outside progress
    }
  });

  it("includes resource markdown and resource files in resourceCount", () => {
    const nonLessonRows = lessonsOf(c, course).filter((l) => l.kind !== "lesson").length;
    expect(course.resourceCount).toBe(nonLessonRows + 2); // + slides.pdf + data.csv
    expect(course.resourceCount).toBeGreaterThanOrEqual(4);
  });

  it("prefers 00-MUC-LUC-KHOA-HOC.md over README.md as the course overview", () => {
    expect(course.overviewPath).toBe(`${P(NAME)}/Course-Name/00-MUC-LUC-KHOA-HOC.md`);
    expect(course.title).toBe("Python cho người mới bắt đầu");
    const overviews = lessonsOf(c, course).filter((l) => l.kind === "overview");
    expect(overviews.map((l) => path.posix.basename(l.path)).sort()).toEqual(["00-MUC-LUC-KHOA-HOC.md", "README.md"]);
  });
});

// ------------------------------------------------------------------ (c) wrapper + assets

describe("(c) 'modules/01_x/…' wrapper with assets/images folders", () => {
  const NAME = "Khóa bọc modules";
  let c: CatalogBuild;
  let course: CourseRow;

  beforeAll(async () => {
    const root = newRoot();
    write(root, {
      [`${P(NAME)}/README.md`]: "# Khóa bọc modules\n\nKhóa này đặt mọi module trong một thư mục tên modules.\n",
      [`${P(NAME)}/modules/01_foundations/01-intro.md`]: lesson("Giới thiệu nền tảng"),
      [`${P(NAME)}/modules/01_foundations/02-setup.md`]: lesson("Cài đặt môi trường"),
      [`${P(NAME)}/modules/01_foundations/assets/images/fig1.png`]: "png",
      [`${P(NAME)}/modules/01_foundations/assets/images/captions.md`]: lesson("Chú thích hình"),
      [`${P(NAME)}/modules/02_advanced/01-topic.md`]: lesson("Chủ đề nâng cao"),
      [`${P(NAME)}/modules/assets/images/shared.png`]: "png",
      [`${P(NAME)}/modules/assets/README.md`]: "# Thư mục assets\n\nChỉ chứa tài nguyên dùng chung.\n",
      [`${P(NAME)}/assets/images/logo.png`]: "png",
    });
    c = await scan(root);
    course = courseNamed(c, NAME);
  });

  it("unwraps `modules/` so its children are the modules", () => {
    expect(course.structure).toBe("collapse:modules");
    expect(modulesOf(c, course).map((m) => m.title)).toEqual(["foundations", "advanced"]);
    expect(modulesOf(c, course).map((m) => m.dir)).toEqual([`${P(NAME)}/modules/01_foundations`, `${P(NAME)}/modules/02_advanced`]);
  });

  it("assets / images folders never become modules (or groups of lessons)", () => {
    expect(modulesOf(c, course).some((m) => /assets|images/i.test(m.dir))).toBe(false);
    expect(modulesOf(c, course).map((m) => m.lessonCount)).toEqual([2, 1]);
    expect(realLessons(c, course).some((l) => /assets/i.test(l.path))).toBe(false);
    expect(realLessons(c, course).every((l) => l.groupLabel === null)).toBe(true);
  });

  it("markdown inside assets/ is a resource", () => {
    const captions = c.lessons.find((l) => l.path.endsWith("assets/images/captions.md"))!;
    expect(captions.kind).toBe("resource");
    expect(captions.moduleId).toBeNull();
    const assetsReadme = c.lessons.find((l) => l.path === `${P(NAME)}/modules/assets/README.md`)!;
    expect(assetsReadme.kind).toBe("resource");
  });
});

// ------------------------------------------------------------------ (d) root-level markdown

describe("(d) markdown directly in the course root", () => {
  it("with no module folders: one default module holding every root file (CHEATSHEET included)", async () => {
    const NAME = "Chỉ có file gốc";
    const root = newRoot();
    write(root, {
      [`${P(NAME)}/01-Giới thiệu.md`]: lesson("Giới thiệu"),
      [`${P(NAME)}/02-Cơ bản.md`]: lesson("Kiến thức cơ bản"),
      [`${P(NAME)}/03-Nâng cao.md`]: lesson("Kiến thức nâng cao"),
      [`${P(NAME)}/CHEATSHEET.md`]: lesson("Bảng tra nhanh"),
    });
    const c = await scan(root);
    const course = courseNamed(c, NAME);
    const mods = modulesOf(c, course);
    expect(mods).toHaveLength(1);
    expect(mods[0]).toMatchObject({ title: "Nội dung khóa học", kind: "intro", dir: P(NAME), lessonCount: 4 });
    expect(course.moduleCount).toBe(1);
    expect(realLessons(c, course).map((l) => l.title)).toEqual(["Giới thiệu", "Kiến thức cơ bản", "Kiến thức nâng cao", "Bảng tra nhanh"]);
  });

  it("with module folders: intro lessons first, appendix-like docs in a trailing 'Tài liệu bổ sung' module", async () => {
    const NAME = "Gốc và module";
    const root = newRoot();
    write(root, {
      [`${P(NAME)}/README.md`]: "# Gốc và module\n\nKhóa có file ở thư mục gốc lẫn các module riêng biệt.\n",
      [`${P(NAME)}/00-Welcome.md`]: lesson("Chào mừng"),
      [`${P(NAME)}/CHEATSHEET.md`]: lesson("Bảng tra nhanh"),
      [`${P(NAME)}/GLOSSARY.md`]: lesson("Bảng thuật ngữ"),
      [`${P(NAME)}/01-Một/01-x.md`]: lesson("Bài x"),
      [`${P(NAME)}/02-Hai/01-y.md`]: lesson("Bài y"),
    });
    const c = await scan(root);
    const course = courseNamed(c, NAME);
    const mods = modulesOf(c, course);
    expect(mods.map((m) => [m.title, m.kind])).toEqual([
      ["Mở đầu", "intro"],
      ["Một", "module"],
      ["Hai", "module"],
      ["Tài liệu bổ sung", "appendix"],
    ]);
    const lessonsIn = (m: (typeof mods)[number]) => realLessons(c, course).filter((l) => l.moduleId === m.id).map((l) => l.title);
    expect(lessonsIn(mods[0])).toEqual(["Chào mừng"]);
    expect(lessonsIn(mods[3])).toEqual(["Bảng tra nhanh", "Bảng thuật ngữ"]);
    // appendix lessons come last in the learning order and the appendix is not counted as a module
    expect(realLessons(c, course).map((l) => l.title)).toEqual(["Chào mừng", "Bài x", "Bài y", "Bảng tra nhanh", "Bảng thuật ngữ"]);
    expect(course.moduleCount).toBe(3);
    expect(course.lessonCount).toBe(5);
  });

  it("nested folders below a module become 'group' labels", async () => {
    const NAME = "Nhóm bài";
    const root = newRoot();
    write(root, {
      [`${P(NAME)}/README.md`]: "# Nhóm bài\n\nKhóa có thư mục con bên trong module để gom nhóm bài.\n",
      [`${P(NAME)}/01-Module/Phần A/01-a.md`]: lesson("Bài a"),
      [`${P(NAME)}/01-Module/Phần B/01-b.md`]: lesson("Bài b"),
      [`${P(NAME)}/01-Module/00-cuối.md`]: lesson("Bài gốc module"),
      [`${P(NAME)}/02-Module/01-c.md`]: lesson("Bài c"),
    });
    const c = await scan(root);
    const course = courseNamed(c, NAME);
    const byTitle = Object.fromEntries(realLessons(c, course).map((l) => [l.title, l.groupLabel]));
    expect(byTitle["Bài a"]).toBe("Phần A");
    expect(byTitle["Bài b"]).toBe("Phần B");
    expect(byTitle["Bài gốc module"]).toBeNull();
    expect(byTitle["Bài c"]).toBeNull();
    expect(modulesOf(c, course)).toHaveLength(2);
  });
});

// ------------------------------------------------------------------ (e) sub-categories

describe("(e) sub-category folders like '01 - Sơ cấp (A1-A2)'", () => {
  let c: CatalogBuild;

  beforeAll(async () => {
    const root = newRoot();
    const lang = "06 - Ngôn ngữ/01 - Tiếng Anh";
    const mk = (dir: string, title: string): Record<string, string> => ({
      [`${lang}/${dir}/README.md`]: `# ${title}\n\nMô tả khóa ${title}, dùng để kiểm tra cây thư mục con.\n`,
      [`${lang}/${dir}/01-a.md`]: lesson(`${title} một`),
      [`${lang}/${dir}/02-b.md`]: lesson(`${title} hai`),
      [`${lang}/${dir}/03-c.md`]: lesson(`${title} ba`),
    });
    write(root, {
      ...mk("01 - Sơ cấp (A1-A2)/Giao tiếp cơ bản", "Giao tiếp cơ bản"),
      ...mk("01 - Sơ cấp (A1-A2)/Từ vựng nền tảng", "Từ vựng nền tảng"),
      ...mk("02 - Trung cấp (B1-B2)/Ngữ pháp B1", "Ngữ pháp B1"),
      ...mk("Khóa ngoài nhóm", "Khóa ngoài nhóm"),
      // README difficulty beats the taxonomy hint
      ...mk("02 - Trung cấp (B1-B2)/Ngữ pháp nâng cao", "Ngữ pháp nâng cao"),
      [`${lang}/02 - Trung cấp (B1-B2)/Ngữ pháp nâng cao/README.md`]:
        "---\ndifficulty: advanced\n---\n# Ngữ pháp nâng cao\n\nKhóa này tự khai báo mức độ nâng cao trong phần đầu tệp.\n",
      // a category that is itself a level
      "06 - Ngôn ngữ/02 - Cao cấp (C1-C2)/Biện luận/01-a.md": lesson("Biện luận một"),
    });
    c = await scan(root);
  });

  it("creates sub-categories with parentId and a level taken from the folder name", () => {
    const cat = c.categories.find((x) => x.title === "Tiếng Anh")!;
    expect(cat).toMatchObject({ id: "06-ngon-ngu--01-tieng-anh", parentId: null, level: null });
    const sub1 = c.categories.find((x) => x.title === "Sơ cấp (A1-A2)")!;
    const sub2 = c.categories.find((x) => x.title === "Trung cấp (B1-B2)")!;
    expect(sub1).toMatchObject({ parentId: cat.id, domainId: "06-ngon-ngu", level: "beginner", dir: "06 - Ngôn ngữ/01 - Tiếng Anh/01 - Sơ cấp (A1-A2)" });
    expect(sub2).toMatchObject({ parentId: cat.id, level: "intermediate" });
    expect(sub1.id).toBe(`${cat.id}--01-so-cap-a1-a2`);
  });

  it("attaches courses to the parent category plus the sub-category and gives them the level", () => {
    const cat = c.categories.find((x) => x.title === "Tiếng Anh")!;
    const sub1 = c.categories.find((x) => x.title === "Sơ cấp (A1-A2)")!;
    const giaoTiep = c.courses.find((x) => x.title === "Giao tiếp cơ bản")!;
    expect(giaoTiep).toMatchObject({ categoryId: cat.id, subcategoryId: sub1.id, level: "beginner" });
    const tuVung = c.courses.find((x) => x.title === "Từ vựng nền tảng")!;
    expect(tuVung).toMatchObject({ categoryId: cat.id, subcategoryId: sub1.id, level: "beginner" });
    const b1 = c.courses.find((x) => x.title === "Ngữ pháp B1")!;
    expect(b1.level).toBe("intermediate");
  });

  it("a course directly in the category has no sub-category and no level", () => {
    const cat = c.categories.find((x) => x.title === "Tiếng Anh")!;
    const outside = c.courses.find((x) => x.title === "Khóa ngoài nhóm")!;
    expect(outside).toMatchObject({ categoryId: cat.id, subcategoryId: null, level: null });
  });

  it("README frontmatter difficulty overrides the taxonomy hint", () => {
    expect(c.courses.find((x) => x.title === "Ngữ pháp nâng cao")!.level).toBe("advanced");
  });

  it("a level-named category gives its courses that level", () => {
    const cao = c.categories.find((x) => x.title === "Cao cấp (C1-C2)")!;
    expect(cao).toMatchObject({ parentId: null, level: "advanced" });
    expect(c.courses.find((x) => x.title === "Biện luận")!.level).toBe("advanced");
  });
});

// ------------------------------------------------------------------ (f) partial / empty

describe("(f) incomplete and empty courses", () => {
  let c: CatalogBuild;

  beforeAll(async () => {
    const root = newRoot();
    write(root, {
      // 1 tiny lesson
      [`${P("Khóa dở dang")}/README.md`]: "# Khóa dở dang\n\nKhóa học mới có đúng một bài viết rất ngắn mà thôi.\n",
      [`${P("Khóa dở dang")}/01-Bài duy nhất.md`]: "# Bài duy nhất\n\nChỉ vài chữ.\n",
      // complete but one short lesson of five stays "ready"
      [`${P("Khóa đủ")}/README.md`]: "# Khóa đủ\n\nKhóa học đầy đủ với năm bài học có độ dài vừa phải mỗi bài.\n",
      [`${P("Khóa đủ")}/01-a.md`]: lesson("Bài a"),
      [`${P("Khóa đủ")}/02-b.md`]: lesson("Bài b"),
      [`${P("Khóa đủ")}/03-c.md`]: lesson("Bài c"),
      [`${P("Khóa đủ")}/04-d.md`]: lesson("Bài d"),
      [`${P("Khóa đủ")}/05-e.md`]: "# Bài ngắn\n\nNgắn.\n",
      // 3 lessons but mostly tiny
      [`${P("Khóa toàn bài ngắn")}/01.md`]: "# Một\n\nNgắn.\n",
      [`${P("Khóa toàn bài ngắn")}/02.md`]: "# Hai\n\nNgắn.\n",
      [`${P("Khóa toàn bài ngắn")}/03.md`]: lesson("Ba"),
      // empty folder, folder with only non-markdown files, folder with only ignored dirs
      [`${P("Khóa rỗng")}`]: null,
      [`${P("Khóa chỉ có PDF")}/sach.pdf`]: "%PDF",
      [`${P("Khóa chỉ có node_modules")}/node_modules/pkg/readme.md`]: "# ignored\n",
      // README only
      [`${P("Chỉ có tổng quan")}/README.md`]: `# Chỉ có tổng quan\n\nKhóa học này mới có phần giới thiệu dài.\n\n${prose(160)}\n`,
      [`${P("Chỉ có tổng quan ngắn")}/README.md`]: "# Tổng quan ngắn\n\nQuá ngắn để đọc thành bài học riêng nhưng vẫn có mô tả đủ dài.\n",
    });
    c = await scan(root);
  });

  it("a course with a single tiny lesson is 'partial'", () => {
    const course = courseNamed(c, "Khóa dở dang");
    expect(course.status).toBe("partial");
    expect(course.lessonCount).toBe(1);
    expect(issuesOf(c, course, "lesson-too-short")).toHaveLength(1);
  });

  it("a complete course is 'ready' even when one lesson is short", () => {
    const course = courseNamed(c, "Khóa đủ");
    expect(course.status).toBe("ready");
    expect(course.lessonCount).toBe(5);
  });

  it("a course whose lessons are mostly tiny is 'partial'", () => {
    expect(courseNamed(c, "Khóa toàn bài ngắn").status).toBe("partial");
  });

  it("empty / markdown-less course folders are skipped with a 'course-empty' error issue", () => {
    for (const name of ["Khóa rỗng", "Khóa chỉ có PDF", "Khóa chỉ có node_modules"]) {
      expect(c.courses.some((x) => x.id === slugify(name)), name).toBe(false);
      expect(c.skipped, name).toContainEqual({ path: P(name), reason: "no markdown" });
      const issues = issuesOf(c, slugify(name), "course-empty");
      expect(issues, name).toHaveLength(1);
      expect(issues[0]).toMatchObject({ severity: "error", lessonId: null, detail: P(name) });
    }
  });

  it("a README-only course with a long README is 'overview-only' and its overview becomes readable", () => {
    const course = courseNamed(c, "Chỉ có tổng quan");
    expect(course.status).toBe("overview-only");
    expect(modulesOf(c, course).map((m) => [m.title, m.kind])).toEqual([["Tổng quan khóa học", "overview"]]);
    expect(issuesOf(c, course, "course-overview-only")).toHaveLength(1);
  });

  it("a README-only course with a very short README is 'empty' and reports it", () => {
    const course = courseNamed(c, "Chỉ có tổng quan ngắn");
    expect(course.status).toBe("empty");
    expect(course.lessonCount).toBe(0);
    expect(issuesOf(c, course, "course-empty")).toHaveLength(1);
  });
});

// ------------------------------------------------------------------ (g) broken links

describe("(g) broken relative links", () => {
  const NAME = "Khóa liên kết";
  let c: CatalogBuild;
  let course: CourseRow;

  beforeAll(async () => {
    const root = newRoot();
    write(root, {
      [`${P(NAME)}/README.md`]: "# Khóa liên kết\n\nKhóa học dùng để kiểm tra liên kết và hình ảnh tương đối.\n",
      [`${P(NAME)}/01-Một/images/diagram.png`]: "png",
      [`${P(NAME)}/01-Một/tài-liệu/sơ-đồ.pdf`]: "%PDF",
      [`${P(NAME)}/01-Một/02-khác.md`]: lesson("Bài khác"),
      [`${P(NAME)}/01-Một/03-khác.md`]: lesson("Bài khác nữa"),
      [`${P(NAME)}/01-Một/01-chính.md`]: lesson("Bài chính", {
        extra: [
          "![thiếu](images/missing.png)", // broken
          "![ổn](images/diagram.png)", // ok
          "[bài kế](02-khác.md)", // ok
          "[bài kế có neo](02-khác.md#phan-2)", // ok (anchor stripped)
          "[thư mục](images)", // ok: a folder
          "[tài liệu](tài-liệu/sơ-đồ.pdf)", // ok (non-ASCII)
          "[tài liệu mã hóa](t%C3%A0i-li%E1%BB%87u/s%C6%A1-%C4%91%E1%BB%93.pdf)", // ok (percent-encoded)
          "[trang web](https://example.com/a.png)", // external: ignored
          "[mục](#phan-1)", // in-page: ignored
          "[thư](mailto:a@b.c)", // ignored
          "[bài sai tên](02-khac.md)", // broken (diacritics matter)
          "[ra ngoài](../../../../../../etc/passwd)", // escapes the library → broken
          "[hình có tham số](images/diagram.png?raw=1)", // ok (query stripped)
        ].join("\n\n"),
      }),
    });
    c = await scan(root);
    course = courseNamed(c, NAME);
  });

  it("reports exactly the broken targets as 'broken-link' errors tied to the lesson", () => {
    const broken = issuesOf(c, course, "broken-link");
    expect(broken.map((i) => i.message).sort()).toEqual(
      [
        "Liên kết/tài nguyên không tìm thấy: ../../../../../../etc/passwd",
        "Liên kết/tài nguyên không tìm thấy: 02-khac.md",
        "Liên kết/tài nguyên không tìm thấy: images/missing.png",
      ].sort(),
    );
    const lesson1 = realLessons(c, course).find((l) => l.title === "Bài chính")!;
    for (const i of broken) {
      expect(i.severity).toBe("error");
      expect(i.lessonId).toBe(lesson1.id);
      expect(i.detail).toBe(lesson1.path);
    }
  });

  it("lessons without broken links produce no 'broken-link' issue", () => {
    const others = realLessons(c, course).filter((l) => l.title !== "Bài chính").map((l) => l.id);
    expect(issuesOf(c, course, "broken-link").some((i) => others.includes(i.lessonId!))).toBe(false);
  });
});

// ------------------------------------------------------------------ (h) stable ids and order

describe("(h) stable lesson ids and ordering", () => {
  it("renaming the H1 title changes the title but not the lesson id or slug", async () => {
    const NAME = "Khóa ổn định";
    const root = newRoot();
    write(root, {
      [`${P(NAME)}/README.md`]: "# Khóa ổn định\n\nKhóa học dùng để kiểm tra tính ổn định của mã định danh bài học.\n",
      [`${P(NAME)}/01-Một/01-bài.md`]: lesson("Tiêu đề cũ"),
      [`${P(NAME)}/01-Một/02-bài.md`]: lesson("Bài hai"),
      [`${P(NAME)}/01-Một/03-bài.md`]: lesson("Bài ba"),
    });
    const before = await scan(root);
    write(root, { [`${P(NAME)}/01-Một/01-bài.md`]: lesson("Tiêu đề hoàn toàn mới") });
    const after = await scan(root);

    const a = realLessons(before, courseNamed(before, NAME));
    const b = realLessons(after, courseNamed(after, NAME));
    expect(a.map((l) => l.title)).toEqual(["Tiêu đề cũ", "Bài hai", "Bài ba"]);
    expect(b.map((l) => l.title)).toEqual(["Tiêu đề hoàn toàn mới", "Bài hai", "Bài ba"]);
    expect(b.map((l) => l.id)).toEqual(a.map((l) => l.id));
    expect(b.map((l) => l.slug)).toEqual(a.map((l) => l.slug));
    expect(new Set(a.map((l) => l.id)).size).toBe(3);
    // module ids are derived from the folder, so they are stable too
    expect(modulesOf(after, courseNamed(after, NAME)).map((m) => m.id)).toEqual(modulesOf(before, courseNamed(before, NAME)).map((m) => m.id));
    // plain files get "<course>--<hash>" ids
    for (const l of a) expect(l.id).toMatch(new RegExp(`^${slugify(NAME)}--[0-9a-f]{12}$`));
  });

  it("UD-coded file names give ids '<course>--udNNN-sNN-lNNN', stable across renames and moves", async () => {
    const NAME = "Khóa UD";
    const root = newRoot();
    write(root, {
      [`${P(NAME)}/README.md`]: "# Khóa UD\n\nKhóa học có tên tệp theo mã Udemy để kiểm tra mã định danh.\n",
      [`${P(NAME)}/01-Một/UD687-S01-L001-Intro-to-Fitness.md`]: lesson("Giới thiệu thể hình"),
      [`${P(NAME)}/01-Một/UD687-S01-L002-Setup.md`]: lesson("Cài đặt"),
      [`${P(NAME)}/02-Hai/UD687-S02-L001-Squat.md`]: lesson("Squat"),
    });
    const a = await scan(root);
    const ids = realLessons(a, courseNamed(a, NAME)).map((l) => l.id).sort();
    expect(ids).toEqual(["khoa-ud--ud687-s01-l001", "khoa-ud--ud687-s01-l002", "khoa-ud--ud687-s02-l001"]);

    // rename the descriptive part and move another file to a different module: ids do not move
    fs.renameSync(
      path.join(root, ...`${P(NAME)}/01-Một/UD687-S01-L001-Intro-to-Fitness.md`.split("/")),
      path.join(root, ...`${P(NAME)}/01-Một/UD687-S01-L001-Introduction-v2.md`.split("/")),
    );
    fs.renameSync(
      path.join(root, ...`${P(NAME)}/02-Hai/UD687-S02-L001-Squat.md`.split("/")),
      path.join(root, ...`${P(NAME)}/01-Một/UD687-S02-L001-Squat.md`.split("/")),
    );
    const b = await scan(root);
    expect(realLessons(b, courseNamed(b, NAME)).map((l) => l.id).sort()).toEqual(ids);
  });

  it("an explicit frontmatter id wins; duplicate ids are disambiguated", async () => {
    const NAME = "Khóa id";
    const root = newRoot();
    write(root, {
      [`${P(NAME)}/README.md`]: "# Khóa id\n\nKhóa học thử mã định danh khai báo thủ công trong frontmatter.\n",
      [`${P(NAME)}/01-a.md`]: lesson("A", { fm: { id: "Bài Mở Đầu" } }),
      [`${P(NAME)}/02-b.md`]: lesson("B", { fm: { id: "bai-mo-dau" } }),
      [`${P(NAME)}/03-c.md`]: lesson("C"),
    });
    const c = await scan(root);
    const real = realLessons(c, courseNamed(c, NAME));
    expect(real[0].id).toBe("bai-mo-dau");
    expect(real[1].id).toMatch(/^bai-mo-dau-[0-9a-f]{6}$/);
    expect(new Set(real.map((l) => l.id)).size).toBe(3);
  });

  it("frontmatter `order` reorders lessons; lessons without `order` follow in file order", async () => {
    const NAME = "Khóa thứ tự";
    const root = newRoot();
    write(root, {
      [`${P(NAME)}/README.md`]: "# Khóa thứ tự\n\nKhóa học dùng để thử thứ tự bài học khai báo trong frontmatter.\n",
      [`${P(NAME)}/01-Một/a.md`]: lesson("Bài a", { fm: { order: 3 } }),
      [`${P(NAME)}/01-Một/b.md`]: lesson("Bài b", { fm: { order: 1 } }),
      [`${P(NAME)}/01-Một/c.md`]: lesson("Bài c", { fm: { order: 2 } }),
      [`${P(NAME)}/01-Một/d.md`]: lesson("Bài d"),
      [`${P(NAME)}/01-Một/e.md`]: lesson("Bài e"),
    });
    const c = await scan(root);
    const real = realLessons(c, courseNamed(c, NAME));
    expect(real.map((l) => l.title)).toEqual(["Bài b", "Bài c", "Bài a", "Bài d", "Bài e"]);
    expect(real.map((l) => l.ord)).toEqual([1, 2, 3, 4, 5]);
  });

  it("without `order`, files sort naturally by name (alphabetical when unnumbered, with an info issue)", async () => {
    const NAME = "Khóa không số";
    const root = newRoot();
    write(root, {
      [`${P(NAME)}/README.md`]: "# Khóa không số\n\nKhóa học có tên tệp không đánh số thứ tự để thử sắp xếp.\n",
      [`${P(NAME)}/01-Một/zeta.md`]: lesson("Zeta"),
      [`${P(NAME)}/01-Một/alpha.md`]: lesson("Alpha"),
      [`${P(NAME)}/01-Một/mid.md`]: lesson("Mid"),
    });
    const c = await scan(root);
    const course = courseNamed(c, NAME);
    expect(realLessons(c, course).map((l) => l.title)).toEqual(["Alpha", "Mid", "Zeta"]);
    expect(issuesOf(c, course, "order-unclear")).toHaveLength(1);
  });

  it("same file name in two modules still yields unique slugs and ids", async () => {
    const NAME = "Khóa trùng tên";
    const root = newRoot();
    write(root, {
      [`${P(NAME)}/README.md`]: "# Khóa trùng tên\n\nKhóa học có hai module cùng chứa một tên tệp để thử slug duy nhất.\n",
      [`${P(NAME)}/01-Một/01-Giới thiệu.md`]: lesson("Giới thiệu A"),
      [`${P(NAME)}/02-Hai/01-Giới thiệu.md`]: lesson("Giới thiệu B"),
    });
    const c = await scan(root);
    const real = realLessons(c, courseNamed(c, NAME));
    expect(real.map((l) => l.slug)).toEqual(["01-gioi-thieu", "01-gioi-thieu-2"]);
    expect(new Set(real.map((l) => l.id)).size).toBe(2);
  });
});

// ------------------------------------------------------------------ (i) code projects

describe("(i) code projects are resources, never module sources", () => {
  it("a course folder that holds package.json at its root is skipped as a code project", async () => {
    const NAME = "Dự án Node";
    const root = newRoot();
    write(root, {
      [`${P(NAME)}/package.json`]: "{}",
      [`${P(NAME)}/README.md`]: "# Dự án Node\n\nĐây là mã nguồn chứ không phải khóa học.\n",
      [`${P(NAME)}/docs/01-guide.md`]: lesson("Hướng dẫn"),
      [`${P(NAME)}/docs/02-api.md`]: lesson("API"),
      [`${P("Khóa bình thường")}/01-a.md`]: lesson("A"),
    });
    const c = await scan(root);
    expect(c.courses.map((x) => x.id)).toEqual(["khoa-binh-thuong"]);
    expect(c.skipped).toContainEqual({ path: P(NAME), reason: "code project, not a course" });
    expect(c.lessons.some((l) => l.path.startsWith(P(NAME)))).toBe(false);
    expect(c.modules.some((m) => m.dir.startsWith(P(NAME)))).toBe(false);
  });

  it("a package.json (or .git, or Unity ProjectSettings) folder inside a course is a resource, not a module", async () => {
    const NAME = "Khóa có dự án";
    const root = newRoot();
    write(root, {
      [`${P(NAME)}/README.md`]: "# Khóa có dự án\n\nKhóa học kèm một dự án mẫu chứa mã nguồn và tài liệu của nó.\n",
      [`${P(NAME)}/01 - Lý thuyết/01-a.md`]: lesson("Lý thuyết a"),
      [`${P(NAME)}/01 - Lý thuyết/02-b.md`]: lesson("Lý thuyết b"),
      [`${P(NAME)}/01 - Lý thuyết/03-c.md`]: lesson("Lý thuyết c"),
      [`${P(NAME)}/02 - Dự án mẫu/package.json`]: "{}",
      [`${P(NAME)}/02 - Dự án mẫu/README.md`]: "# Dự án mẫu\n\nHướng dẫn chạy dự án mẫu.\n",
      [`${P(NAME)}/02 - Dự án mẫu/docs/guide.md`]: lesson("Hướng dẫn dự án"),
      [`${P(NAME)}/02 - Dự án mẫu/src/index.ts`]: "export {}",
      [`${P(NAME)}/03 - Dự án Unity/ProjectSettings/ProjectVersion.txt`]: "2022",
      [`${P(NAME)}/03 - Dự án Unity/Assets/notes.md`]: lesson("Ghi chú Unity"),
    });
    const c = await scan(root);
    const course = courseNamed(c, NAME);
    expect(modulesOf(c, course).map((m) => m.title)).toEqual(["Lý thuyết"]);
    expect(realLessons(c, course).map((l) => l.title)).toEqual(["Lý thuyết a", "Lý thuyết b", "Lý thuyết c"]);
    const projectDocs = lessonsOf(c, course).filter((l) => l.path.includes("Dự án"));
    expect(projectDocs.length).toBe(3);
    for (const l of projectDocs) {
      expect(l.kind).toBe("resource");
      expect(l.moduleId).toBeNull();
    }
    // not reported as "a module folder without lessons" either
    expect(issuesOf(c, course, "empty-module-folder")).toHaveLength(0);
  });

  it("node_modules and dot-folders are never walked", async () => {
    const NAME = "Khóa sạch";
    const root = newRoot();
    write(root, {
      [`${P(NAME)}/README.md`]: "# Khóa sạch\n\nKhóa học có thư mục công cụ bị bỏ qua hoàn toàn khi quét.\n",
      [`${P(NAME)}/01-a.md`]: lesson("A"),
      [`${P(NAME)}/node_modules/x/readme.md`]: "# x\n",
      [`${P(NAME)}/.git/HEAD.md`]: "# git\n",
      [`${P(NAME)}/.obsidian/notes.md`]: "# obs\n",
    });
    const c = await scan(root);
    expect(c.lessons.every((l) => !/node_modules|\.git|\.obsidian/.test(l.path))).toBe(true);
  });
});

// ------------------------------------------------------------------ misc: frontmatter + manifests

describe("frontmatter and manifest overrides", () => {
  it("draft pages are dropped; `kind:` overrides the file-name classification", async () => {
    const NAME = "Khóa frontmatter";
    const root = newRoot();
    write(root, {
      [`${P(NAME)}/README.md`]: "# Khóa frontmatter\n\nKhóa học thử các khóa khai báo trong phần đầu của tệp markdown.\n",
      [`${P(NAME)}/01-a.md`]: lesson("Bài a"),
      [`${P(NAME)}/02-nháp.md`]: lesson("Bản nháp", { fm: { draft: true } }),
      [`${P(NAME)}/03-ghi-chú.md`]: lesson("Ghi chú", { fm: { kind: "resource" } }),
      [`${P(NAME)}/04-tổng-quan.md`]: lesson("Mục lục phụ", { fm: { kind: "lesson" } }),
      [`${P(NAME)}/CHANGELOG.md`]: lesson("Nhật ký", { fm: { kind: "lesson" } }),
    });
    const c = await scan(root);
    const course = courseNamed(c, NAME);
    const titles = realLessons(c, course).map((l) => l.title);
    expect(titles).toContain("Bài a");
    expect(titles).toContain("Nhật ký"); // CHANGELOG forced to lesson
    expect(titles).not.toContain("Bản nháp");
    expect(titles).not.toContain("Ghi chú");
    expect(c.lessons.some((l) => l.path.endsWith("02-nháp.md"))).toBe(false);
    expect(lessonsOf(c, course).find((l) => l.path.endsWith("03-ghi-chú.md"))!.kind).toBe("resource");
  });

  it("courseflow.yaml overrides title/level and module/lesson order and can hide modules or courses", async () => {
    const NAME = "Khóa manifest";
    const root = newRoot();
    write(root, {
      [`${P(NAME)}/README.md`]: "# Tiêu đề từ README\n\nKhóa học dùng tệp courseflow.yaml để ghi đè thông tin hiển thị.\n",
      [`${P(NAME)}/courseflow.yaml`]: [
        "title: Tiêu đề từ manifest",
        "level: advanced",
        "modules:",
        "  - dir: 02-Hai",
        "    order: 1",
        "    title: Hai lên đầu",
        "  - dir: 03-Ẩn",
        "    hidden: true",
        "lessons:",
        '  "02-Hai/b.md":',
        "    order: 1",
        '  "02-Hai/a.md":',
        "    order: 2",
        "",
      ].join("\n"),
      [`${P(NAME)}/01-Một/x.md`]: lesson("Bài x"),
      [`${P(NAME)}/02-Hai/a.md`]: lesson("Bài a"),
      [`${P(NAME)}/02-Hai/b.md`]: lesson("Bài b"),
      [`${P(NAME)}/03-Ẩn/h.md`]: lesson("Bài ẩn"),
      [`${P("Khóa ẩn")}/courseflow.yaml`]: "hidden: true\n",
      [`${P("Khóa ẩn")}/01-a.md`]: lesson("Ẩn"),
    });
    const c = await scan(root);
    const course = courseNamed(c, NAME);
    expect(course.title).toBe("Tiêu đề từ manifest");
    expect(course.level).toBe("advanced");
    expect(modulesOf(c, course).map((m) => m.title)).toEqual(["Hai lên đầu", "Một"]);
    expect(realLessons(c, course).map((l) => l.title)).toEqual(["Bài b", "Bài a", "Bài x"]);
    expect(c.courses.some((x) => x.id === slugify("Khóa ẩn"))).toBe(false);
    expect(c.skipped).toContainEqual({ path: P("Khóa ẩn"), reason: "manifest hidden" });
  });
});
