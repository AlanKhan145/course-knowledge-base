import { describe, expect, it } from "vitest";
import {
  countWords,
  detectLanguage,
  foldVi,
  humanizeName,
  leadingNumber,
  naturalCompare,
  normRel,
  readingMinutes,
  slugify,
} from "../../src/lib/content/text.ts";
import {
  classifyMarkdownFile,
  isAppendixName,
  isCodeProject,
  isIgnoredDir,
  isResourceDirName,
  isTaxonomyName,
  isWrapperDirName,
  levelFromTaxonomy,
  overviewPriority,
  stem,
  taxonomyTitle,
} from "../../src/lib/content/classify.ts";

describe("foldVi", () => {
  it("strips Vietnamese diacritics, maps đ→d and lowercases", () => {
    expect(foldVi("Đường đi")).toBe("duong di");
    expect(foldVi("ĐƯỜNG ĐI")).toBe("duong di");
    expect(foldVi("Nguyễn Thị Hồng Ánh")).toBe("nguyen thi hong anh");
    expect(foldVi("Phần 3: Ngôn ngữ lập trình")).toBe("phan 3: ngon ngu lap trinh");
  });

  it("works on already-decomposed (NFD) input and other Latin accents", () => {
    expect(foldVi("Đường".normalize("NFD"))).toBe("duong");
    expect(foldVi("Café Müller")).toBe("cafe muller");
  });

  it("leaves ASCII untouched apart from lowercasing, and handles empty input", () => {
    expect(foldVi("Hello World 123")).toBe("hello world 123");
    expect(foldVi("")).toBe("");
  });
});

describe("slugify", () => {
  it("makes URL-safe ASCII slugs from Vietnamese titles", () => {
    expect(slugify("Đường đi")).toBe("duong-di");
    expect(slugify("01 - Sơ cấp (A1-A2)")).toBe("01-so-cap-a1-a2");
    expect(slugify("Lập trình Python & Dữ liệu")).toBe("lap-trinh-python-and-du-lieu");
  });

  it("collapses separators and trims dashes", () => {
    expect(slugify("  --Hello,,,   World!!  ")).toBe("hello-world");
    expect(slugify("a___b")).toBe("a-b");
  });

  it("returns an empty string when nothing slug-worthy remains", () => {
    expect(slugify("")).toBe("");
    expect(slugify("???")).toBe("");
    expect(slugify("日本語")).toBe("");
  });

  it("truncates at a word boundary when too long", () => {
    const s = slugify("one two three four five six seven", 15);
    expect(s.length).toBeLessThanOrEqual(15);
    expect(s).toBe("one-two-three");
    expect(slugify("x".repeat(100), 10)).toBe("x".repeat(10)); // no dash to cut at → hard cut
  });

  it("is idempotent", () => {
    const once = slugify("Khóa học: Đường đi & Hạ tầng");
    expect(slugify(once)).toBe(once);
  });
});

describe("humanizeName", () => {
  it("strips the 'UDnnn-Snn-Lnnn-' prefix and the .md extension", () => {
    expect(humanizeName("UD687-S01-L001-0-20-Health-Fitness-Guide.md")).toBe("0 20 Health Fitness Guide");
    expect(humanizeName("UD22-S07-L005-Setup-Continuous-state-spaces.md")).toBe("Setup Continuous state spaces");
  });

  it("strips 'MODULE_nn_' style prefixes", () => {
    expect(humanizeName("MODULE_02_Routing")).toBe("Routing");
    expect(humanizeName("Chương 3 - Mạng máy tính")).toBe("Mạng máy tính");
    expect(humanizeName("Week 4: Testing")).toBe("Testing");
  });

  it("strips a leading order number but keeps the rest of the title", () => {
    expect(humanizeName("01 - Tuan 1 - Gioi Thieu")).toBe("Tuan 1 - Gioi Thieu");
    expect(humanizeName("03-foo")).toBe("foo");
    expect(humanizeName("1.2 Intro to X")).toBe("Intro to X");
    expect(humanizeName("12) Kết luận")).toBe("Kết luận");
  });

  it("turns separators into spaces only for names without spaces", () => {
    expect(humanizeName("setup_environment")).toBe("setup environment");
    expect(humanizeName("setup-environment.md")).toBe("setup environment");
    expect(humanizeName("Cài đặt_môi trường")).toBe("Cài đặt môi trường");
    expect(humanizeName("a - b - c")).toBe("a - b - c");
  });

  it("falls back to the original name when stripping leaves nothing", () => {
    expect(humanizeName("Chapter 1")).toBe("Chapter 1");
    expect(humanizeName("01")).toBe("01");
    expect(humanizeName("2024")).toBe("2024");
  });

  it("collapses repeated whitespace", () => {
    expect(humanizeName("Hello    World.md")).toBe("Hello World");
  });
});

describe("leadingNumber", () => {
  it("reads the order number from the usual folder/file prefixes", () => {
    expect(leadingNumber("03-foo")).toBe(3);
    expect(leadingNumber("MODULE_12_x")).toBe(12);
    expect(leadingNumber("Tuần 4 - Mạng")).toBe(4);
    expect(leadingNumber("007")).toBe(7);
  });

  it("uses the lesson number of UD-coded files", () => {
    expect(leadingNumber("UD687-S01-L005-Foo.md")).toBe(5);
    expect(leadingNumber("UD12-S03-L010-Bar.md")).toBe(10);
  });

  it("returns null when the name has no leading number", () => {
    expect(leadingNumber("introduction.md")).toBeNull();
    expect(leadingNumber("")).toBeNull();
  });
});

describe("naturalCompare", () => {
  it("orders numbers by value, not lexicographically", () => {
    expect(naturalCompare("2", "10")).toBeLessThan(0);
    expect(naturalCompare("10", "2")).toBeGreaterThan(0);
    expect(naturalCompare("2 - x", "10 - x")).toBeLessThan(0);
    expect(naturalCompare("lesson9", "lesson10")).toBeLessThan(0);
    expect(naturalCompare("5", "5")).toBe(0);
  });

  it("sorts a mixed list naturally", () => {
    const sorted = ["10-b", "2-a", "1-z", "20-c", "3-q"].sort(naturalCompare);
    expect(sorted).toEqual(["1-z", "2-a", "3-q", "10-b", "20-c"]);
  });

  it("is case- and tone-mark-insensitive", () => {
    expect(naturalCompare("a", "A")).toBe(0);
    expect(naturalCompare("Đường", "đường")).toBe(0);
    expect(naturalCompare("Hòa", "hoa")).toBe(0); // tone marks ignored
    expect(naturalCompare("e", "é")).toBe(0);
  });

  it("orders Vietnamese names alphabetically", () => {
    expect(["Zebra", "Ăn", "Ba"].sort(naturalCompare)).toEqual(["Ăn", "Ba", "Zebra"]);
  });
});

describe("normRel", () => {
  it("normalises separators, NFC and a leading './'", () => {
    expect(normRel(".\\Module 1\\bài 1.md")).toBe("Module 1/bài 1.md");
    expect(normRel("./a/b")).toBe("a/b");
    expect(normRel("Bài".normalize("NFD"))).toBe("Bài".normalize("NFC"));
    expect(normRel("a/b")).toBe("a/b");
  });
});

describe("detectLanguage", () => {
  const letters = (n: number) => "abcdefghij ".repeat(Math.ceil(n / 10)).slice(0, n);

  it("calls short samples 'en' (too little evidence)", () => {
    expect(detectLanguage("")).toBe("en");
    expect(detectLanguage("Xin chào các bạn")).toBe("en");
  });

  it("detects Vietnamese prose", () => {
    const vi =
      "Trong bài học này chúng ta sẽ tìm hiểu cách xây dựng một ứng dụng web hoàn chỉnh, từ việc thiết kế cơ sở dữ liệu đến triển khai lên máy chủ.";
    expect(detectLanguage(vi)).toBe("vi");
  });

  it("detects English prose", () => {
    const en =
      "In this lesson we will build a complete web application, starting from the database design and ending with a deployment to a production server.";
    expect(detectLanguage(en)).toBe("en");
  });

  it("reports 'mixed' for mostly-English text with some Vietnamese letters", () => {
    // ~400 letters, 8 Vietnamese-only letters → ratio ≈ 2 %
    const text = letters(400) + "ệệệệệệệệ";
    expect(detectLanguage(text)).toBe("mixed");
  });

  it("thresholds: ≥ 3.5 % Vietnamese letters is 'vi', < 0.8 % is 'en'", () => {
    expect(detectLanguage(letters(400) + "ệ".repeat(20))).toBe("vi");
    expect(detectLanguage(letters(400) + "ệ")).toBe("en");
  });
});

describe("countWords / readingMinutes", () => {
  it("counts Latin/Vietnamese words and ignores punctuation", () => {
    expect(countWords("Xin chào, thế giới! 2024")).toBe(5);
    expect(countWords("")).toBe(0);
  });

  it("counts CJK per two characters", () => {
    expect(countWords("日本語のテスト")).toBe(Math.round(7 / 2));
  });

  it("reads at ~200 wpm with a floor of one minute", () => {
    expect(readingMinutes(0)).toBe(1);
    expect(readingMinutes(150)).toBe(1);
    expect(readingMinutes(1000)).toBe(5);
    expect(readingMinutes(2600)).toBe(13);
  });
});

describe("classifyMarkdownFile", () => {
  it("course/module overview and index files are 'overview'", () => {
    for (const f of [
      "README.md",
      "readme.md",
      "00-MUC-LUC-KHOA-HOC.md",
      "00-MUC-LUC-MODULE.md",
      "COURSE_INDEX.md",
      "Mục lục.md",
      "00-README.md",
      "index.md",
      "Overview.md",
      "Tổng quan.md",
      "00-LO-TRINH-TONG-HOP-5-KY-NANG.md",
      "SYLLABUS.md",
    ]) {
      expect(classifyMarkdownFile(f), f).toBe("overview");
    }
  });

  it("supporting documents are 'resource'", () => {
    for (const f of [
      "COVERAGE_REPORT.md",
      "VIDEO_TRANSCRIPT_ORIGINAL.md",
      "IMAGE_SOURCES.md",
      "CHANGELOG.md",
      "LICENSE.md",
      "References.md",
      "Tài liệu tham khảo.md",
      "agent_brief_v2.md",
      "lecture-transcript.md",
      "Progress-Log.md",
      "CLAUDE.md",
    ]) {
      expect(classifyMarkdownFile(f), f).toBe("resource");
    }
  });

  it("ordinary files are lessons", () => {
    for (const f of [
      "01-Introduction.md",
      "UD687-S01-L001-0-20-Health-Fitness-Guide.md",
      "Bài 3 - Vòng lặp.md",
      "overview-of-python-types.md", // not an exact "overview"
      "Final-Project.md",
      "notes.md",
      "13-lab-tong-hop.md",
      "readme-first-steps.md",
    ]) {
      expect(classifyMarkdownFile(f), f).toBe("lesson");
    }
  });

  it("matches by stem so extensions (.md/.markdown/.mdx) and case do not matter", () => {
    expect(classifyMarkdownFile("readme.markdown")).toBe("overview");
    expect(classifyMarkdownFile("README.MD")).toBe("overview");
    expect(classifyMarkdownFile("coverage_report.mdx")).toBe("resource");
  });

  it("an explicit frontmatter kind overrides the file name", () => {
    expect(classifyMarkdownFile("README.md", "lesson")).toBe("lesson");
    expect(classifyMarkdownFile("01-Intro.md", "overview")).toBe("overview");
    expect(classifyMarkdownFile("01-Intro.md", "resource")).toBe("resource");
    expect(classifyMarkdownFile("COVERAGE_REPORT.md", "lesson")).toBe("lesson");
  });

  it("ignores an invalid frontmatter kind", () => {
    expect(classifyMarkdownFile("README.md", "bogus")).toBe("overview");
    expect(classifyMarkdownFile("01-Intro.md", 42)).toBe("lesson");
    expect(classifyMarkdownFile("01-Intro.md", undefined)).toBe("lesson");
    expect(classifyMarkdownFile("01-Intro.md", null)).toBe("lesson");
  });
});

describe("overviewPriority / isAppendixName / stem", () => {
  it("ranks overview files so the best description source wins", () => {
    const p = (f: string) => overviewPriority(f);
    expect(p("00-MUC-LUC-KHOA-HOC.md")).toBe(0);
    expect(p("00-MUC-LUC-MODULE.md")).toBe(0);
    expect(p("README.md")).toBe(1);
    expect(p("COURSE_INDEX.md")).toBe(2);
    expect(p("Overview.md")).toBe(2);
    expect(p("00-LO-TRINH-TONG-HOP.md")).toBe(3);
    expect(p("index.md")).toBe(5);
  });

  it("appendix-like root documents are recognised", () => {
    for (const f of ["CHEATSHEET.md", "Cheat-Sheet.md", "GLOSSARY.md", "Phu-luc-A.md", "Thuật ngữ.md", "FAQ.md", "Capstone-Project.md", "Tong-ket.md"]) {
      expect(isAppendixName(f), f).toBe(true);
    }
    for (const f of ["01-Introduction.md", "Routing.md", "Bài 5 - Hàm.md"]) {
      expect(isAppendixName(f), f).toBe(false);
    }
  });

  it("stem drops only markdown extensions", () => {
    expect(stem("a.b.md")).toBe("a.b");
    expect(stem("notes.markdown")).toBe("notes");
    expect(stem("data.csv")).toBe("data.csv");
  });
});

describe("isResourceDirName", () => {
  it("supporting-material folders are resources", () => {
    for (const d of [
      "assets",
      "images",
      "Resources",
      "AI_AGENT_365_TXT_GOC",
      "ASSETS",
      "_assets",
      "img",
      "Screenshots",
      "Tài nguyên",
      "source-code",
      "Source Code",
      "slides",
      "Transcripts",
      "tools",
      "scripts",
      "code",
    ]) {
      expect(isResourceDirName(d), d).toBe(true);
    }
  });

  it("module-like folders are not resources", () => {
    for (const d of ["01 - Tuan 1", "02-Routing", "Module 3", "Chương 1 - Giới thiệu", "Python Basics", "images-and-text-lessons", "bai_hoc"]) {
      expect(isResourceDirName(d), d).toBe(false);
    }
  });

  it("ignores surrounding whitespace", () => {
    expect(isResourceDirName("  images ")).toBe(true);
  });
});

describe("isWrapperDirName", () => {
  it("transparent wrapper folders", () => {
    for (const d of ["modules", "Module", "lessons", "chapters", "bai_hoc", "Bài học", "content", "Nội dung", "course", "Khóa học", "curriculum"]) {
      expect(isWrapperDirName(d), d).toBe(true);
    }
  });

  it("real module folders are not wrappers", () => {
    for (const d of ["01_x", "Module 1", "01 - modules", "Week 1", "Python", "Resources"]) {
      expect(isWrapperDirName(d), d).toBe(false);
    }
  });
});

describe("levelFromTaxonomy", () => {
  it("reads the level from explicit taxonomy names", () => {
    expect(levelFromTaxonomy("01 - Sơ cấp (A1-A2)")).toBe("beginner");
    expect(levelFromTaxonomy("02 - Trung cấp (B1-B2)")).toBe("intermediate");
    expect(levelFromTaxonomy("03 - Cao cấp (C1-C2)")).toBe("advanced");
    expect(levelFromTaxonomy("Beginner")).toBe("beginner");
    expect(levelFromTaxonomy("INTERMEDIATE track")).toBe("intermediate");
    expect(levelFromTaxonomy("Advanced")).toBe("advanced");
  });

  it("never guesses a level from ordinary titles", () => {
    expect(levelFromTaxonomy("Python cơ bản")).toBeNull();
    expect(levelFromTaxonomy("Lập trình nâng cao")).toBeNull();
    expect(levelFromTaxonomy("01 - Web & Backend")).toBeNull();
    expect(levelFromTaxonomy("")).toBeNull();
  });
});

describe("taxonomy names", () => {
  it("numbered 'NN - Title' folders are taxonomy folders", () => {
    expect(isTaxonomyName("08 - Điêu khắc & Nhân vật 3D")).toBe(true);
    expect(isTaxonomyName("1 - A")).toBe(true);
    expect(isTaxonomyName("08-Không có khoảng trắng")).toBe(false);
    expect(isTaxonomyName("README")).toBe(false);
    expect(isTaxonomyName("Khóa-1")).toBe(false);
  });

  it("taxonomyTitle drops the numeric prefix", () => {
    expect(taxonomyTitle("08 - Điêu khắc & Nhân vật 3D")).toBe("Điêu khắc & Nhân vật 3D");
    expect(taxonomyTitle("No prefix")).toBe("No prefix");
  });
});

describe("isIgnoredDir / isCodeProject", () => {
  it("ignores tooling, VCS and hidden folders", () => {
    for (const d of ["node_modules", ".git", "__pycache__", ".venv", "Library", "$RECYCLE.BIN", ".hidden", "DIST", "vendor"]) {
      expect(isIgnoredDir(d), d).toBe(true);
    }
    for (const d of ["01 - Module", "assets", "Resources", "src"]) {
      expect(isIgnoredDir(d), d).toBe(false);
    }
  });

  it("detects code projects by marker file or folder", () => {
    expect(isCodeProject(["package.json", "README.md"], [])).toBe(true);
    expect(isCodeProject(["PACKAGE.JSON"], [])).toBe(true);
    expect(isCodeProject(["pyproject.toml"], [])).toBe(true);
    expect(isCodeProject(["App.csproj"], [])).toBe(true);
    expect(isCodeProject(["Game.sln"], [])).toBe(true);
    expect(isCodeProject(["lesson.md"], [".git"])).toBe(true);
    expect(isCodeProject(["x.md"], ["ProjectSettings"])).toBe(true);
    expect(isCodeProject(["lesson.md", "notes.txt", "diagram.png"], ["images"])).toBe(false);
  });
});
