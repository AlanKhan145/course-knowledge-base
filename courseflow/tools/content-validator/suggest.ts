// Improvement suggestions (text only — the tool never rewrites Markdown) and the human-review checklist.
import path from "node:path";
import type { LessonRec } from "./load.ts";
import { TARGETS, toRef } from "./metrics.ts";
import type { Analysis, AreaKey, Ref } from "./metrics.ts";
import { fmtNum, fmtPct, pct, round1, truncate } from "./util.ts";

export const MAX_REFS = 10;

export interface Suggestion {
  /** Stable code, usable as a key in the web app. */
  code: string;
  area: AreaKey;
  /** Estimated overall-score points gained if fully fixed (used for ordering). */
  gain: number;
  severity: "high" | "medium" | "low";
  text: string;
  /** Affected items (lessons, modules or 1 for course-level suggestions). */
  count: number;
  total: number;
  refs: Ref[];
  /** Refs that exist but are not listed. */
  more: number;
}

function severityOf(gain: number): Suggestion["severity"] {
  return gain >= 3 ? "high" : gain >= 1 ? "medium" : "low";
}

/** Points of the overall score still on the table for one sub-metric. */
function gainOf(a: Analysis, area: AreaKey, part: string): number {
  const ar = a.areas.find((x) => x.key === area);
  const p = ar?.parts.find((x) => x.key === part);
  if (!ar || !p || p.skipped) return 0;
  const wsum = ar.parts.filter((x) => !x.skipped).reduce((s, x) => s + x.weight, 0);
  return round1((ar.weight * (p.weight / wsum) * (100 - p.score)) / 100);
}

export function buildSuggestions(a: Analysis): Suggestion[] {
  const c = a.course;
  const f = a.findings;
  const r = a.raw;
  const n = r.lessons;
  const out: Suggestion[] = [];

  const add = (code: string, area: AreaKey, part: string, text: string, count: number, total: number, items: { l: LessonRec; note?: string }[] = []) => {
    const gain = gainOf(a, area, part);
    if (gain <= 0) return;
    const seen = new Set<string>();
    const refs: Ref[] = [];
    for (const it of items) {
      if (seen.has(it.l.id)) continue;
      seen.add(it.l.id);
      refs.push(toRef(c, it.l, it.note));
    }
    out.push({ code, area, gain, severity: severityOf(gain), text, count, total, refs: refs.slice(0, MAX_REFS), more: Math.max(0, refs.length - MAX_REFS) });
  };
  const lessonsOf = (ls: LessonRec[]) => ls.map((l) => ({ l }));

  // ---- metadata (course-level: no lesson refs)
  const meta = a.areas.find((x) => x.key === "metadata");
  const failed = (key: string) => meta?.parts.find((p) => p.key === key && !p.skipped && p.score === 0);
  if (failed("title")) add("meta-title", "metadata", "title", `Tiêu đề khóa học đang lấy từ tên thư mục (“${path.posix.basename(c.dir)}”): thêm H1 vào README hoặc \`title\` vào courseflow.yaml.`, 1, 1);
  if (failed("description")) add("meta-description", "metadata", "description", "Thêm mô tả khóa học (2–3 câu) vào README hoặc `description` trong courseflow.yaml.", 1, 1);
  if (failed("objectives")) add("meta-objectives", "metadata", "objectives", "Thêm mục tiêu học tập vào README (mục “Mục tiêu học tập”) hoặc `objectives` trong courseflow.yaml.", 1, 1);
  if (failed("prerequisites")) add("meta-prerequisites", "metadata", "prerequisites", "Khai báo điều kiện tiên quyết (kiến thức/công cụ cần có) trong README hoặc `prerequisites` trong courseflow.yaml.", 1, 1);
  if (failed("overview")) add("meta-overview", "metadata", "overview", "Thêm README / mục lục cho khóa học (tên file README.md hoặc 00_README.md).", 1, 1);
  if (failed("language")) add("meta-language", "metadata", "language", "Khai báo ngôn ngữ khóa học (`language` trong courseflow.yaml).", 1, 1);
  if (failed("level")) add("meta-level", "metadata", "level", "Khai báo cấp độ (`level` trong courseflow.yaml): beginner / intermediate / advanced.", 1, 1);

  // ---- structure
  if (f.short.length) {
    const sorted = [...f.short].sort((x, y) => x.words - y.words);
    add("short-lessons", "structure", "length", `${f.short.length}/${n} bài dưới ${TARGETS.shortWords} từ (trung vị cả khóa ${fmtNum(r.medianWords)} từ) — mở rộng nội dung hoặc gộp vào bài liền kề.`, f.short.length, n, sorted.map((l) => ({ l, note: `${l.words} từ` })));
  } else if (r.medianWords < TARGETS.medianWords && n) {
    add("short-lessons", "structure", "length", `Trung vị độ dài bài chỉ ${fmtNum(r.medianWords)} từ (mục tiêu ≥ ${TARGETS.medianWords}) — bài còn mỏng, cân nhắc bổ sung giải thích và ví dụ.`, n, n);
  }
  if (f.singleModules.length) {
    const names = f.singleModules.slice(0, 3).map((s) => `“${truncate(s.module.title, 40)}”`).join(", ");
    add(
      "single-lesson-modules",
      "structure",
      "modules",
      `${f.singleModules.length}/${c.modules.filter((m) => m.kind === "module").length} module chỉ có 1 bài (${names}${f.singleModules.length > 3 ? ", …" : ""}) — gộp với module liền kề hoặc bổ sung bài.`,
      f.singleModules.length,
      c.modules.filter((m) => m.kind === "module").length,
      f.singleModules.filter((s) => s.lesson).map((s) => ({ l: s.lesson as LessonRec, note: `module “${truncate(s.module.title, 50)}”` })),
    );
  } else if (n > TARGETS.longFlatCourse && c.modules.filter((m) => m.kind === "module").length <= 1) {
    add("flat-structure", "structure", "modules", `Khóa có ${n} bài nhưng chỉ 1 module — chia theo chủ đề thành các thư mục module có số thứ tự (01-…, 02-…).`, n, n);
  }
  if (f.noTitle.length) add("lesson-no-title", "structure", "no-title", `${f.noTitle.length}/${n} bài không có tiêu đề H1 — thêm dòng “# Tiêu đề” ở đầu file (hiện đang dùng tên file).`, f.noTitle.length, n, lessonsOf(f.noTitle));
  if (f.orderUnclear.length) {
    const names = f.orderUnclear.slice(0, 5).map((m) => `“${truncate(m, 40)}”`).join(", ");
    add("order-unclear", "structure", "order", `${f.orderUnclear.length} module có tên file không đánh số thứ tự nên bị sắp theo bảng chữ cái: ${names}${f.orderUnclear.length > 5 ? ", …" : ""} — đặt tiền tố 01-, 02-… cho tên file.`, f.orderUnclear.length, c.modules.length);
  }
  if (f.emptyFolders.length) {
    add("empty-module-folders", "structure", "empty-folders", `${f.emptyFolders.length} thư mục trông như module nhưng không có bài Markdown: ${f.emptyFolders.slice(0, 4).map((p) => `\`${truncate(p, 70)}\``).join(", ")}${f.emptyFolders.length > 4 ? ", …" : ""} — thêm bài hoặc xóa thư mục.`, f.emptyFolders.length, f.emptyFolders.length);
  }

  // ---- titles
  if (f.dupTitleGroups.length) {
    const items: { l: LessonRec; note?: string }[] = [];
    for (const g of f.dupTitleGroups) for (const l of g) items.push({ l, note: `trùng tiêu đề với ${g.length - 1} bài khác` });
    add("duplicate-titles", "titles", "duplicate", `${r.dupTitleLessons}/${n} bài (${f.dupTitleGroups.length} nhóm) trùng tiêu đề trong cùng module — đổi tiêu đề để phân biệt nội dung từng bài.`, r.dupTitleLessons, n, items);
  }
  if (f.fileLike.length) {
    add("filename-titles", "titles", "filename", `${f.fileLike.length}/${n} bài có tiêu đề chỉ là tên file/mã (ví dụ “${truncate(f.fileLike[0].title, 40)}”) — đặt tiêu đề mô tả nội dung.`, f.fileLike.length, n, lessonsOf(f.fileLike));
  }

  // ---- exercises
  if (n && r.gradableLessons === 0) {
    add("no-quiz", "exercises", "gradable", "Khóa chưa có câu hỏi trắc nghiệm có đáp án nào — thêm mục “Câu hỏi ôn tập” (có đáp án) ở cuối mỗi bài.", n, n, lessonsOf(f.noGradable));
  } else if (f.noGradable.length) {
    add("no-gradable", "exercises", "gradable", `${f.noGradable.length}/${n} bài chưa có câu hỏi chấm tự động — thêm câu hỏi ôn tập có đáp án vào các bài này.`, f.noGradable.length, n, lessonsOf(f.noGradable));
  }
  if (f.noPractice.length && pct(r.practiceLessons, n) < TARGETS.practicePct) {
    add("no-practice", "exercises", "practice", `${f.noPractice.length}/${n} bài chưa có mục Bài tập / Thực hành (hiện ${fmtPct(r.practicePct)}, mục tiêu ≥ ${TARGETS.practicePct}%) — thêm bài tập vận dụng cuối bài.`, f.noPractice.length, n, lessonsOf(f.noPractice));
  }

  // ---- examples
  if (f.noExample.length && pct(r.exampleLessons, n) < TARGETS.examplePct) {
    add("no-example", "examples", "examples", `${f.noExample.length}/${n} bài chưa có mục Ví dụ/Minh họa hoặc khối mã (hiện ${fmtPct(r.examplePct)}, mục tiêu ≥ ${TARGETS.examplePct}%) — thêm ví dụ cụ thể.`, f.noExample.length, n, lessonsOf(f.noExample));
  }

  // ---- links
  if (f.broken.length) {
    add("broken-links", "links", "broken", `${r.brokenLinks} liên kết/tài nguyên không tồn tại trong ${r.brokenLinkLessons} bài — sửa đường dẫn hoặc bổ sung file còn thiếu.`, r.brokenLinks, n, f.broken.filter((b) => b.lesson).map((b) => ({ l: b.lesson as LessonRec, note: `thiếu: ${truncate(b.target, 60)}` })));
  }
  if (f.dupContentGroups.length) {
    const items: { l: LessonRec; note?: string }[] = [];
    for (const g of f.dupContentGroups) for (const l of g) items.push({ l, note: `giống hệt ${g.length - 1} file khác` });
    add("duplicate-content", "links", "dup-content", `${r.dupContentLessons} bài (${f.dupContentGroups.length} nhóm) có nội dung giống hệt nhau — xóa hoặc viết lại bản trùng.`, r.dupContentLessons, n, items);
  }

  // ---- readability
  if (n && r.headingsPer1000 < TARGETS.headingsPer1000) {
    const sorted = [...f.lowHeadings].sort((x, y) => y.words - x.words);
    add("low-headings", "readability", "headings", `Chỉ ${r.headingsPer1000} tiêu đề mục trên 1000 từ (mục tiêu ≥ ${TARGETS.headingsPer1000}) — chia các bài dài thành mục có tiêu đề.`, f.lowHeadings.length || n, n, sorted.map((l) => ({ l, note: `${fmtNum(l.words)} từ, ${l.headingCount} tiêu đề` })));
  }
  if (f.noSummary.length && pct(r.summaryLessons, n) < TARGETS.summaryPct) {
    add("no-summary", "readability", "summary", `${f.noSummary.length}/${n} bài thiếu mục Tóm tắt / Tổng kết — thêm mục “Tóm tắt” ở cuối bài.`, f.noSummary.length, n, lessonsOf(f.noSummary));
  }

  out.sort((x, y) => y.gain - x.gain || x.code.localeCompare(y.code));
  return out;
}

// ---------------------------------------------------------------- human review (never scored)

export interface ReviewSample {
  reason: string;
  ref: Ref;
}

/** Deterministic sample of lessons a reviewer should open first (chosen from catalog data only; no file is read). */
export function buildReviewSamples(a: Analysis): ReviewSample[] {
  const c = a.course;
  const ls = c.lessons;
  if (!ls.length) return [];
  const picks: { reason: string; l: LessonRec }[] = [];
  const longest = ls.reduce((best, l) => (l.words > best.words ? l : best), ls[0]);
  picks.push({ reason: `bài dài nhất (${fmtNum(longest.words)} từ) — nhiều khả năng chứa nhiều khẳng định kỹ thuật`, l: longest });
  const code = ls.filter((l) => l.hasCode);
  if (code.length) picks.push({ reason: "bài có khối mã dài nhất — kiểm tra mã chạy được, phiên bản thư viện còn hiện hành", l: code.reduce((best, l) => (l.words > best.words ? l : best), code[0]) });
  const quiz = ls.reduce((best, l) => (l.questions > best.questions ? l : best), ls[0]);
  if (quiz.questions > 0) picks.push({ reason: `bài có nhiều câu hỏi nhất (${quiz.questions} câu) — kiểm tra đáp án`, l: quiz });
  picks.push({ reason: "bài ở giữa khóa — kiểm tra mạch kiến thức", l: ls[ls.length >> 1] });
  const seen = new Set<string>();
  const out: ReviewSample[] = [];
  for (const p of picks) {
    if (seen.has(p.l.id)) continue;
    seen.add(p.l.id);
    out.push({ reason: p.reason, ref: toRef(c, p.l) });
  }
  return out;
}

/** The four judgement-only questions, identical for every course (rendered as a checklist). */
export const REVIEW_QUESTIONS: { key: string; title: string; questions: string[] }[] = [
  {
    key: "accuracy",
    title: "Độ chính xác của nội dung kỹ thuật",
    questions: [
      "Khái niệm, thuật ngữ, công thức, số liệu có đúng và còn hiện hành không?",
      "Đoạn mã / lệnh có chạy được với phiên bản công cụ nêu trong bài không?",
      "Có khẳng định tuyệt đối hoặc lỗi thời cần chỉnh lại không?",
    ],
  },
  {
    key: "alignment",
    title: "Mức độ bám sát mục tiêu học tập",
    questions: [
      "Mỗi mục tiêu có ít nhất một module/bài dạy trực tiếp (xem bảng module bên cạnh mục tiêu)?",
      "Có module nào không phục vụ mục tiêu nào (thừa) hoặc mục tiêu nào chưa được dạy (thiếu)?",
      "Mức độ sâu của bài có khớp cấp độ người học mục tiêu không?",
    ],
  },
  {
    key: "order",
    title: "Thứ tự sư phạm",
    questions: [
      "Kiến thức nền có đi trước kiến thức nâng cao; có bài dùng khái niệm chưa được giới thiệu không?",
      "Nhịp độ tăng độ khó có hợp lý; có chỗ nhảy cóc giữa các module không?",
      "Bài tổng hợp / dự án có nằm sau các bài cần thiết không?",
    ],
  },
  {
    key: "quiz",
    title: "Đáp án câu hỏi có đúng không",
    questions: [
      "Đáp án được đánh dấu có thật sự đúng (công cụ chỉ đếm câu hỏi, không kiểm tra đúng/sai)?",
      "Các phương án nhiễu có hợp lý, không có hai đáp án cùng đúng?",
      "Lời giải thích có khớp với đáp án và nội dung bài?",
    ],
  },
];
