// Small shared helpers for the Content Quality Analyzer (plain Node, native type stripping:
// no enums / parameter properties, explicit ".ts" extensions in relative imports).
import { foldVi } from "../../src/lib/content/text.ts";

// ---------------------------------------------------------------- heading classifiers
// Tested against the *folded* heading text (lower-case, no diacritics, đ→d) so that
// "Ví dụ", "VÍ DỤ" and the ASCII-only "Vi du" used by some imported courses all match.

/** Practice / exercise section: bài tập | thực hành | luyện tập | exercise | practice | lab. */
const RE_PRACTICE = /(bai tap|thuc hanh|luyen tap|\bexercises?\b|\bpractice\b|\blabs?\b)/;
const RE_NOT_PRACTICE = /(best|good|common|recommended) practices?/;
/** Example section: ví dụ | example | minh họa | demo. */
const RE_EXAMPLE = /(vi du|example|minh hoa|\bdemos?\b)/;
/** Summary section: tóm tắt | tổng kết | summary | recap | kết luận. */
const RE_SUMMARY = /(tom tat|tong ket|summary|recap|ket luan)/;

export interface HeadingFlags {
  practice: boolean;
  example: boolean;
  summary: boolean;
  /** depth 2–3 headings (the H1 is the lesson title, deeper levels are not stored by the scanner). */
  count: number;
}

// foldVi() (NFD + regex) is far too slow for ~1.3M headings, so: precomposed Vietnamese letters go through a
// lookup table, decomposed text falls back to foldVi, and the verdict per distinct heading text is memoized
// (headings like "1. Tóm tắt" repeat across thousands of lessons).
const VI_FOLD = new Map<string, string>();
for (const ch of "àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ") VI_FOLD.set(ch, foldVi(ch));
const NON_ASCII = /[^\x00-\x7f]/g;
const COMBINING = /[̀-ͯ]/;

function fastFold(s: string): string {
  const low = s.toLowerCase();
  if (COMBINING.test(low)) return foldVi(low);
  return low.replace(NON_ASCII, (ch) => VI_FOLD.get(ch) ?? foldVi(ch));
}

const PRACTICE = 1;
const EXAMPLE = 2;
const SUMMARY = 4;
const verdictCache = new Map<string, number>();

function headingVerdict(text: string): number {
  let v = verdictCache.get(text);
  if (v !== undefined) return v;
  const t = fastFold(text);
  v = 0;
  if (RE_PRACTICE.test(t) && !RE_NOT_PRACTICE.test(t)) v |= PRACTICE;
  if (RE_EXAMPLE.test(t)) v |= EXAMPLE;
  if (RE_SUMMARY.test(t)) v |= SUMMARY;
  if (verdictCache.size > 200_000) verdictCache.clear();
  verdictCache.set(text, v);
  return v;
}

export function classifyHeadings(headingsJson: string | null): HeadingFlags {
  const out: HeadingFlags = { practice: false, example: false, summary: false, count: 0 };
  if (!headingsJson || headingsJson === "[]") return out;
  let list: { depth?: number; text?: string }[];
  try {
    list = JSON.parse(headingsJson);
  } catch {
    return out;
  }
  if (!Array.isArray(list)) return out;
  let bits = 0;
  for (const h of list) {
    if (!h || typeof h.text !== "string") continue;
    if (h.depth === 1) continue;
    out.count++;
    bits |= headingVerdict(h.text);
  }
  out.practice = (bits & PRACTICE) !== 0;
  out.example = (bits & EXAMPLE) !== 0;
  out.summary = (bits & SUMMARY) !== 0;
  return out;
}

/** True for lesson titles that are only a file name / code (e.g. "intro_part_2", "UD123-S01-L004", "Bài 3", "x.md"). */
export function looksLikeFileOrCode(title: string): boolean {
  const t = title.trim();
  if (!t) return true;
  if (/^\S+\.(md|markdown|txt|mdx)$/i.test(t)) return true;
  if (/^[\d\s._\-–—]+$/.test(t)) return true;
  if (/^(?:ud\d+[-_ ]?)?(?:[cs]\d+[-_ ]?)*(?:l\d+)$/i.test(t) || /^ud\d+(?:-s\d+)?(?:-l\d+)?$/i.test(t)) return true;
  if (/^(lesson|bai|bài|part|phan|phần|chapter|chuong|chương|section|module|unit|video|lecture|untitled|readme|index)[\s_.-]*\d*$/i.test(t)) return true;
  if (!/\s/.test(t)) {
    if (t.includes("_")) return true;
    if (t === t.toLowerCase() && (t.match(/-/g)?.length ?? 0) >= 2) return true;
  }
  return false;
}

// ---------------------------------------------------------------- numbers

export function median(values: number[]): number {
  if (!values.length) return 0;
  const s = [...values].sort((a, b) => a - b);
  const m = s.length >> 1;
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}

export function clamp(n: number, lo = 0, hi = 100): number {
  return Math.min(hi, Math.max(lo, n));
}

export function round1(n: number): number {
  return Math.round(n * 10) / 10;
}

export function pct(part: number, total: number): number {
  return total > 0 ? (part / total) * 100 : 0;
}

export function fmtNum(n: number, digits = 0): string {
  return n.toLocaleString("vi-VN", { maximumFractionDigits: digits, minimumFractionDigits: 0 });
}

export function fmtPct(n: number): string {
  return `${fmtNum(n, 1)}%`;
}

// ---------------------------------------------------------------- text

/** Escape a value for use inside a Markdown table cell. */
export function mdCell(s: string | number | null | undefined): string {
  return String(s ?? "")
    .replace(/\r?\n/g, " ")
    .replace(/\|/g, "\\|")
    .trim();
}

export function truncate(s: string, max: number): string {
  const t = s.replace(/\s+/g, " ").trim();
  return t.length <= max ? t : `${t.slice(0, max - 1).trimEnd()}…`;
}

/** Inline code span that survives backticks in the content. */
export function code(s: string): string {
  return s.includes("`") ? `\`\` ${s} \`\`` : `\`${s}\``;
}

export function normKey(s: string): string {
  return foldVi(s).replace(/[^a-z0-9]+/g, "");
}

export function safeJson<T>(raw: string | null | undefined, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}
