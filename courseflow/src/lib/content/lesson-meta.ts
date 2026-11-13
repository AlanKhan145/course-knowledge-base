// Extracts everything the catalog needs from one markdown file in a single pass.
import { parse as parseYaml } from "yaml";
import { parseQuizSections, countGradable } from "../assessment/parse-markdown-quiz.ts";
import { countWords, detectLanguage, foldVi } from "./text.ts";

export interface Frontmatter {
  id?: string;
  title?: string;
  description?: string;
  order?: number;
  duration?: number | string;
  difficulty?: string;
  language?: string;
  tags?: string[];
  objectives?: string[];
  prerequisites?: string[];
  kind?: "lesson" | "overview" | "resource";
  draft?: boolean;
  slug?: string;
  [key: string]: unknown;
}

export interface HeadingInfo {
  depth: number;
  text: string;
}

export interface DocMeta {
  fm: Frontmatter;
  h1: string | null;
  description: string | null;
  headings: HeadingInfo[];
  words: number;
  questions: number;
  gradable: number;
  hasMermaid: boolean;
  hasMath: boolean;
  hasImages: boolean;
  hasCode: boolean;
  /** Relative link/image targets (for the quality analyzer). */
  links: string[];
  lang: "vi" | "en" | "mixed";
  /** Section lists useful for course overviews. */
  objectives: string[];
  prerequisites: string[];
  sourceUrl: string | null;
  /** Diacritic-folded plain text for the full-text index. */
  searchText: string;
}

const FM = /^﻿?---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

export function splitFrontmatter(text: string): { fm: Frontmatter; body: string; fmLines: number } {
  const m = text.match(FM);
  if (!m) return { fm: {}, body: text.replace(/^﻿/, ""), fmLines: 0 };
  let fm: Frontmatter = {};
  try {
    const parsed = parseYaml(m[1]);
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) fm = parsed as Frontmatter;
  } catch {
    fm = {};
  }
  return { fm: sanitizeFrontmatter(fm), body: text.slice(m[0].length), fmLines: m[0].split("\n").length - 1 };
}

function strList(v: unknown): string[] | undefined {
  if (Array.isArray(v)) return v.map((x) => String(x)).filter(Boolean);
  if (typeof v === "string" && v.trim()) return v.split(/\s*,\s*/).filter(Boolean);
  return undefined;
}

function sanitizeFrontmatter(fm: Frontmatter): Frontmatter {
  const out: Frontmatter = { ...fm };
  for (const k of ["id", "title", "description", "difficulty", "language", "slug"] as const) {
    if (out[k] !== undefined && typeof out[k] !== "string") out[k] = String(out[k]);
  }
  if (out.order !== undefined) {
    const n = Number(out.order);
    out.order = Number.isFinite(n) ? n : undefined;
  }
  out.tags = strList(out.tags);
  out.objectives = strList(out.objectives);
  out.prerequisites = strList(out.prerequisites);
  const kind = (fm.kind ?? fm.type) as unknown;
  out.kind = kind === "lesson" || kind === "overview" || kind === "resource" ? kind : undefined;
  return out;
}

/** Inline markdown → plain text (keeps link text, drops syntax). */
export function inlineToPlain(s: string): string {
  return s
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/[*_`~]+/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

const OBJECTIVES_TITLE = /(mục tiêu|bạn sẽ học|sẽ học được|what you('|’)?ll learn|learning (objectives|outcomes)|objectives|kết quả (đầu ra|học tập)|sau khóa học|sau khi học)/i;
const PREREQ_TITLE = /(yêu cầu|kiến thức (cần|nền|tiên quyết)|điều kiện tiên quyết|tiên quyết|prerequisites?|requirements|cần chuẩn bị|chuẩn bị trước|đầu vào)/i;

export function extractDocMeta(text: string, maxSearchChars = 60000): DocMeta {
  const { fm, body } = splitFrontmatter(text);
  const lines = body.split(/\r?\n/);
  const headings: HeadingInfo[] = [];
  const links: string[] = [];
  let h1: string | null = null;
  let description: string | null = null;
  let inFence = false;
  let fenceLang = "";
  let hasMermaid = false;
  let hasCode = false;
  let hasMath = false;
  let hasImages = false;
  let sourceUrl: string | null = null;
  let current: "objectives" | "prereq" | null = null;
  let currentDepth = 0;
  const objectives: string[] = [];
  const prerequisites: string[] = [];
  let paragraph: string[] = [];
  let seenHeading = false;

  const flushParagraph = () => {
    if (!description && paragraph.length) {
      const p = inlineToPlain(paragraph.join(" "));
      if (p.length >= 40) description = p.length > 280 ? p.slice(0, 277).replace(/\s+\S*$/, "") + "…" : p;
    }
    paragraph = [];
  };

  for (const line of lines) {
    const fence = line.match(/^\s*(```|~~~)\s*([\w+#.-]*)/);
    if (fence) {
      if (!inFence) {
        inFence = true;
        fenceLang = fence[2].toLowerCase();
        if (fenceLang === "mermaid") hasMermaid = true;
        else if (fenceLang === "math" || fenceLang === "latex") hasMath = true;
        else hasCode = true;
      } else inFence = false;
      flushParagraph();
      continue;
    }
    if (inFence) continue;
    const h = line.match(/^(#{1,6})\s+(.*?)\s*#*\s*$/);
    if (h) {
      flushParagraph();
      const depth = h[1].length;
      const t = inlineToPlain(h[2]);
      if (depth === 1 && !h1) h1 = t;
      else if (depth <= 3 && headings.length < 80) headings.push({ depth, text: t });
      seenHeading = true;
      if (current && depth <= currentDepth) current = null;
      if (depth >= 2 && depth <= 3) {
        if (OBJECTIVES_TITLE.test(t)) (current = "objectives"), (currentDepth = depth);
        else if (PREREQ_TITLE.test(t)) (current = "prereq"), (currentDepth = depth);
      }
      continue;
    }
    if (!sourceUrl) {
      const u = line.match(/\*\*(?:Udemy|Nguồn|Source|Link khóa học|Trang khóa học)[^*]*:\*\*\s*<?(https?:\/\/[^\s>)]+)/i);
      if (u) sourceUrl = u[1];
    }
    if (/\$\$|\\\(|\\\[|(^|[^\\$])\$[^$\s][^$\n]*[^$\s\\]\$(?!\d)/.test(line)) hasMath = true;
    for (const m of line.matchAll(/!?\[[^\]]*\]\(\s*<?([^)\s>]+)>?(?:\s+"[^"]*")?\s*\)/g)) {
      if (m[0].startsWith("!")) hasImages = true;
      const target = m[1];
      if (!/^(https?:|mailto:|tel:|#|data:)/i.test(target) && links.length < 200) links.push(target);
    }
    if (/<img\s/i.test(line)) hasImages = true;
    const item = line.match(/^\s*(?:[-*+]|\d+[.)])\s+(.*)$/);
    if (current && item && item[1].trim()) {
      const t = inlineToPlain(item[1]);
      if (t && t.length < 300) (current === "objectives" ? objectives : prerequisites).length < 10 && (current === "objectives" ? objectives : prerequisites).push(t);
    }
    // Description: first real paragraph (skip metadata lines like "**Khóa học:** …", tables, quotes).
    const trimmed = line.trim();
    if (!trimmed) flushParagraph();
    else if (/^(\*\*[^*]{1,40}:\*\*|\||>|[-*+]\s|\d+[.)]\s|!\[|<|\[!|---|===)/.test(trimmed)) flushParagraph();
    else if (seenHeading || h1 === null) paragraph.push(trimmed);
  }
  flushParagraph();

  const sections = parseQuizSections(body, "x");
  const allQ = sections.flatMap((s) => s.questions);

  const plain = (fm.title ? fm.title + "\n" : "") + body;
  const searchText = foldVi(
    plain
      .slice(0, maxSearchChars)
      .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
      .replace(/\]\([^)]*\)/g, "]")
      .replace(/[#*_`>|~[\]-]+/g, " ")
      .replace(/\s+/g, " "),
  );

  return {
    fm,
    h1,
    description: fm.description ?? description,
    headings,
    words: countWords(body),
    questions: allQ.length,
    gradable: countGradable(allQ),
    hasMermaid,
    hasMath,
    hasImages,
    hasCode,
    links,
    lang: fm.language === "vi" || fm.language === "en" ? fm.language : detectLanguage(body.slice(0, 6000)),
    objectives: fm.objectives ?? objectives,
    prerequisites: fm.prerequisites ?? prerequisites,
    sourceUrl,
    searchText,
  };
}
