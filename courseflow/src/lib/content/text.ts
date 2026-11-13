// Text helpers shared by the scanner (plain Node) and the Next.js app.
// Keep this file free of path aliases and TS-only runtime syntax so that
// `node tools/course-scanner/scan.ts` can run it with native type stripping.

/** Lowercase, strip Vietnamese/Latin diacritics, map đ→d. Used for search keys. */
export function foldVi(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();
}

/** URL-safe ASCII slug. Empty input yields "". */
export function slugify(input: string, maxLength = 80): string {
  const s = foldVi(input)
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  if (s.length <= maxLength) return s;
  return s.slice(0, maxLength).replace(/-+[^-]*$/, "") || s.slice(0, maxLength);
}

const collator = new Intl.Collator("vi", { numeric: true, sensitivity: "base" });

/** Natural ordering: "2 - x" < "10 - x", case/diacritic-insensitive. */
export function naturalCompare(a: string, b: string): number {
  return collator.compare(a, b);
}

/** Normalise a relative path: forward slashes, NFC, no leading "./". */
export function normRel(p: string): string {
  return p.normalize("NFC").replace(/\\/g, "/").replace(/^\.\//, "");
}

/**
 * Turn a folder or file name into a readable title:
 * "01 - Tuan 1 - Gioi Thieu" → "Tuan 1 - Gioi Thieu"
 * "UD687-S01-L001-0-20-Health-Fitness-Guide.md" → "0 20 Health Fitness Guide"
 * "MODULE_02_Routing" → "Routing"
 */
export function humanizeName(name: string): string {
  let s = name.replace(/\.(md|markdown|mdx)$/i, "");
  const udCoded = /^[A-Z]{1,4}\d+-S\d+-L\d+-/i.test(s);
  s = s.replace(/^[A-Z]{1,4}\d+-S\d+-L\d+-/i, "");
  s = s.replace(/^(module|chuong|chương|chapter|section|phan|phần|part|week|tuan|tuần|bai|bài|lesson)[\s_-]*\d+[\s_.:-]*/i, "");
  // After a UD code the leading number belongs to the lecture title ("0-20 Health…"): keep it.
  if (!udCoded) s = s.replace(/^\d+(\.\d+)*[\s_.)-]+(?=\S)/, "");
  s = s.replace(/^-\s*/, "");
  if (!/\s/.test(s)) s = s.replace(/[_-]+/g, " ");
  else s = s.replace(/_+/g, " ");
  s = s.replace(/\s+/g, " ").trim();
  return s || name;
}

/** Leading order number of a name ("03-foo" → 3, "MODULE_12_x" → 12), else null. */
export function leadingNumber(name: string): number | null {
  const m =
    name.match(/^(?:[A-Z]{1,4}\d+-S(\d+)-L(\d+))/i) ??
    name.match(/^(?:module|chuong|chương|chapter|section|phan|phần|part|week|tuan|tuần|bai|bài|lesson)?[\s_-]*(\d+)/i);
  if (!m) return null;
  if (m[2]) return Number(m[2]);
  return Number(m[1]);
}

/** Rough word count that works for Vietnamese and English (CJK counted per char). */
export function countWords(text: string): number {
  const cjk = text.match(/[぀-ヿ㐀-鿿가-힯]/g)?.length ?? 0;
  const words = text.replace(/[぀-ヿ㐀-鿿가-힯]/g, " ").match(/[\p{L}\p{N}]+/gu)?.length ?? 0;
  return words + Math.round(cjk / 2);
}

/** Minutes of reading at ~200 wpm (Vietnamese prose), at least 1. */
export function readingMinutes(words: number): number {
  return Math.max(1, Math.round(words / 200));
}

const VI_CHARS = /[ăâđêôơưạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]/gi;

/** Very small language detector: "vi" if Vietnamese-only letters are frequent, else "en". */
export function detectLanguage(sample: string): "vi" | "en" | "mixed" {
  const letters = sample.match(/\p{L}/gu)?.length ?? 0;
  if (letters < 40) return "en";
  const vi = sample.match(VI_CHARS)?.length ?? 0;
  const ratio = vi / letters;
  if (ratio > 0.035) return "vi";
  if (ratio > 0.008) return "mixed";
  return "en";
}
