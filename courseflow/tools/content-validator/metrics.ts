// Automatically checkable (objective) metrics, each scored 0–100, from catalog data only.
// Human-judgement items are deliberately NOT scored here (see suggest.ts → buildReviewChecklist).
import path from "node:path";
import { humanizeName } from "../../src/lib/content/text.ts";
import type { CourseRec, LessonRec, ModuleRec } from "./load.ts";
import { clamp, fmtNum, fmtPct, looksLikeFileOrCode, median, pct, round1 } from "./util.ts";

// ---------------------------------------------------------------- scoring configuration

export type AreaKey = "metadata" | "structure" | "titles" | "exercises" | "examples" | "links" | "readability";

export interface AreaDef {
  key: AreaKey;
  label: string;
  weight: number;
  /** One-line description used in the method section. */
  what: string;
}

/** Weights add up to 100. */
export const AREAS: AreaDef[] = [
  { key: "metadata", label: "Metadata", weight: 15, what: "tiêu đề khóa không suy ra từ tên thư mục, mô tả, mục tiêu, điều kiện tiên quyết, README/mục lục, ngôn ngữ, cấp độ" },
  { key: "structure", label: "Cấu trúc", weight: 20, what: "độ dài bài (trung vị, % bài < 150 từ), module chỉ có 1 bài, bài thiếu H1, thứ tự file không rõ, thư mục module rỗng" },
  { key: "titles", label: "Tiêu đề", weight: 10, what: "tiêu đề bài trùng trong cùng module, tiêu đề chỉ là tên file/mã" },
  { key: "exercises", label: "Bài tập & câu hỏi", weight: 20, what: "% bài có ≥ 1 câu hỏi chấm tự động được, % bài có mục bài tập/thực hành" },
  { key: "examples", label: "Ví dụ", weight: 10, what: "% bài có mục ví dụ/minh họa/demo hoặc có khối mã" },
  { key: "links", label: "Liên kết & trùng lặp", weight: 10, what: "liên kết/tài nguyên hỏng, nội dung trùng hoàn toàn" },
  { key: "readability", label: "Khả năng đọc", weight: 15, what: "số tiêu đề mục trên 1000 từ, % bài có mục Tóm tắt/Tổng kết" },
];

/** Targets: reaching the target gives the full sub-score, below it scales linearly. */
export const TARGETS = {
  shortWords: 150, // a lesson shorter than this is "short"
  medianWords: 300, // median lesson length that earns full marks
  gradablePct: 90, // % lessons with >= 1 auto-gradable question
  practicePct: 30, // % lessons with an exercise / practice heading
  examplePct: 60, // % lessons with an example heading or a code block
  headingsPer1000: 6, // section headings per 1000 words
  summaryPct: 50, // % lessons with a summary heading
  fragmentFactor: 1.5, // titles: share of problem titles is multiplied by this before it hits the score
  linkFactor: 3, // links: share of lessons with a problem is multiplied by this
  longFlatCourse: 15, // a course with one module and more lessons than this counts as "flat"
};

export interface Part {
  key: string;
  label: string;
  /** 0–100 */
  score: number;
  /** Weight inside the area. */
  weight: number;
  /** Raw numbers shown next to the score. */
  raw: string;
  /** Excluded from scoring (systemic gap in the catalog, reported once globally). */
  skipped?: boolean;
}

export interface AreaResult {
  key: AreaKey;
  label: string;
  weight: number;
  score: number;
  parts: Part[];
}

export interface Ref {
  id: string;
  title: string;
  /** Relative to the course folder (falls back to the content-root path). */
  path: string;
  note?: string;
}

export interface Findings {
  short: LessonRec[];
  noGradable: LessonRec[];
  noPractice: LessonRec[];
  noExample: LessonRec[];
  noSummary: LessonRec[];
  noTitle: LessonRec[];
  fileLike: LessonRec[];
  dupTitleGroups: LessonRec[][];
  dupContentGroups: LessonRec[][];
  broken: { lesson: LessonRec | null; target: string }[];
  singleModules: { module: ModuleRec; lesson: LessonRec | null }[];
  orderUnclear: string[];
  emptyFolders: string[];
  lowHeadings: LessonRec[];
  ungradable: LessonRec[];
}

export interface Raw {
  lessons: number;
  modules: number;
  words: number;
  medianWords: number;
  shortLessons: number;
  shortPct: number;
  lengthBuckets: { label: string; count: number }[];
  singleLessonModules: number;
  noTitleLessons: number;
  orderUnclearModules: number;
  emptyModuleFolders: number;
  dupTitleLessons: number;
  fileLikeTitles: number;
  questions: number;
  gradableQuestions: number;
  gradableLessons: number;
  gradablePct: number;
  practiceLessons: number;
  practicePct: number;
  exampleLessons: number;
  exampleHeadingLessons: number;
  codeLessons: number;
  examplePct: number;
  brokenLinks: number;
  brokenLinkLessons: number;
  dupContentLessons: number;
  headings: number;
  headingsPer1000: number;
  summaryLessons: number;
  summaryPct: number;
}

export interface Analysis {
  course: CourseRec;
  score: number;
  label: string;
  areas: AreaResult[];
  raw: Raw;
  findings: Findings;
}

export interface AnalyzeOptions {
  /** True when (almost) no course in the catalog has a level → exclude it from scoring. */
  levelSystemic: boolean;
}

export function scoreLabel(score: number): string {
  if (score >= 80) return "Tốt";
  if (score >= 65) return "Khá";
  if (score >= 50) return "Cần cải thiện";
  return "Yếu";
}

export function areaDef(key: AreaKey): AreaDef {
  return AREAS.find((a) => a.key === key) as AreaDef;
}

/** Ratio of `value` to `target`, capped at 1, as a 0–100 score. */
function toTarget(value: number, target: number): number {
  return target <= 0 ? 100 : clamp((value / target) * 100);
}

function finishArea(key: AreaKey, parts: Part[]): AreaResult {
  const def = areaDef(key);
  const active = parts.filter((p) => !p.skipped);
  const wsum = active.reduce((s, p) => s + p.weight, 0);
  const score = wsum ? active.reduce((s, p) => s + p.score * p.weight, 0) / wsum : 0;
  return { key, label: def.label, weight: def.weight, score: round1(score), parts };
}

function relToCourse(course: CourseRec, p: string): string {
  const prefix = course.dir ? `${course.dir}/` : "";
  return prefix && p.startsWith(prefix) ? p.slice(prefix.length) : p;
}

export function toRef(course: CourseRec, l: LessonRec, note?: string): Ref {
  const ref: Ref = { id: l.id, title: l.title, path: relToCourse(course, l.path) };
  if (note) ref.note = note;
  return ref;
}

// ---------------------------------------------------------------- per-course analysis

export function analyzeCourse(course: CourseRec, opts: AnalyzeOptions): Analysis {
  const lessons = course.lessons;
  const n = lessons.length;
  const byPath = new Map<string, LessonRec>();
  const byId = new Map<string, LessonRec>();
  const byModule = new Map<string, LessonRec[]>();
  for (const l of lessons) {
    byPath.set(l.path, l);
    byId.set(l.id, l);
    if (l.moduleId) {
      const arr = byModule.get(l.moduleId);
      if (arr) arr.push(l);
      else byModule.set(l.moduleId, [l]);
    }
  }

  // ---- issue-derived findings (the scanner already stored these codes)
  const noTitleIds = new Set<string>();
  const brokenLessonIds = new Set<string>();
  const broken: Findings["broken"] = [];
  const dupTitleGroups: LessonRec[][] = [];
  const dupContentGroups: LessonRec[][] = [];
  const orderUnclear: string[] = [];
  const emptyFolders: string[] = [];
  const groupOf = (detail: string | null): LessonRec[] =>
    (detail ?? "")
      .split("\n")
      .map((p) => byPath.get(p.trim()))
      .filter((x): x is LessonRec => !!x);
  for (const is of course.issues) {
    switch (is.code) {
      case "lesson-no-title":
        if (is.lessonId) noTitleIds.add(is.lessonId);
        break;
      case "broken-link": {
        const lesson = is.lessonId ? (byId.get(is.lessonId) ?? null) : null;
        if (is.lessonId) brokenLessonIds.add(is.lessonId);
        broken.push({ lesson, target: is.message.replace(/^[^:]*:\s*/, "") });
        break;
      }
      case "duplicate-title": {
        const g = groupOf(is.detail);
        if (g.length > 1) dupTitleGroups.push(g);
        break;
      }
      case "duplicate-content": {
        const g = groupOf(is.detail);
        if (g.length > 1) dupContentGroups.push(g);
        break;
      }
      case "order-unclear":
        orderUnclear.push(is.message.match(/“(.*?)”/)?.[1] ?? is.message);
        break;
      case "empty-module-folder":
        emptyFolders.push(is.detail ? relToCourse(course, is.detail) : is.message);
        break;
      default:
        break;
    }
  }

  // ---- lesson-level aggregates (single pass)
  const words = lessons.map((l) => l.words);
  const totalWords = words.reduce((s, w) => s + w, 0);
  const med = median(words);
  const short: LessonRec[] = [];
  const noGradable: LessonRec[] = [];
  const noPractice: LessonRec[] = [];
  const noExample: LessonRec[] = [];
  const noSummary: LessonRec[] = [];
  const noTitle: LessonRec[] = [];
  const fileLike: LessonRec[] = [];
  const lowHeadings: LessonRec[] = [];
  const ungradable: LessonRec[] = [];
  let exampleHeading = 0;
  let codeLessons = 0;
  let headings = 0;
  let questions = 0;
  let gradableQuestions = 0;
  const buckets = [0, 0, 0, 0, 0];
  for (const l of lessons) {
    if (l.words < TARGETS.shortWords) short.push(l);
    if (l.gradable < 1) noGradable.push(l);
    if (!l.hasPractice) noPractice.push(l);
    if (!(l.hasExample || l.hasCode)) noExample.push(l);
    if (!l.hasSummary) noSummary.push(l);
    if (noTitleIds.has(l.id)) noTitle.push(l);
    else if (looksLikeFileOrCode(l.title)) fileLike.push(l);
    if (l.words >= 600 && l.headingCount <= 1) lowHeadings.push(l);
    if (l.questions > l.gradable) ungradable.push(l);
    if (l.hasExample) exampleHeading++;
    if (l.hasCode) codeLessons++;
    headings += l.headingCount;
    questions += l.questions;
    gradableQuestions += l.gradable;
    buckets[l.words < 150 ? 0 : l.words < 500 ? 1 : l.words < 1000 ? 2 : l.words < 2000 ? 3 : 4]++;
  }
  const gradableLessons = n - noGradable.length;
  const practiceLessons = n - noPractice.length;
  const exampleLessons = n - noExample.length;
  const summaryLessons = n - noSummary.length;

  const dupTitleSet = new Set<string>();
  for (const g of dupTitleGroups) for (const l of g) dupTitleSet.add(l.id);
  const dupContentSet = new Set<string>();
  for (const g of dupContentGroups) for (const l of g) dupContentSet.add(l.id);

  const regular = course.modules.filter((m) => m.kind === "module");
  const singleModules = regular
    .filter((m) => m.lessonCount <= 1)
    .map((m) => ({ module: m, lesson: byModule.get(m.id)?.[0] ?? null }));
  const flat = regular.length <= 1 && n > TARGETS.longFlatCourse;
  const hpk = totalWords > 0 ? (headings / totalWords) * 1000 : 0;

  const raw: Raw = {
    lessons: n,
    modules: course.moduleCount,
    words: totalWords,
    medianWords: Math.round(med),
    shortLessons: short.length,
    shortPct: round1(pct(short.length, n)),
    lengthBuckets: [
      { label: "< 150 từ", count: buckets[0] },
      { label: "150–499", count: buckets[1] },
      { label: "500–999", count: buckets[2] },
      { label: "1000–1999", count: buckets[3] },
      { label: "≥ 2000", count: buckets[4] },
    ],
    singleLessonModules: singleModules.length,
    noTitleLessons: noTitle.length,
    orderUnclearModules: orderUnclear.length,
    emptyModuleFolders: emptyFolders.length,
    dupTitleLessons: dupTitleSet.size,
    fileLikeTitles: fileLike.length,
    questions,
    gradableQuestions,
    gradableLessons,
    gradablePct: round1(pct(gradableLessons, n)),
    practiceLessons,
    practicePct: round1(pct(practiceLessons, n)),
    exampleLessons,
    exampleHeadingLessons: exampleHeading,
    codeLessons,
    examplePct: round1(pct(exampleLessons, n)),
    brokenLinks: broken.length,
    brokenLinkLessons: brokenLessonIds.size,
    dupContentLessons: dupContentSet.size,
    headings,
    headingsPer1000: round1(hpk),
    summaryLessons,
    summaryPct: round1(pct(summaryLessons, n)),
  };

  // ---- A1 metadata completeness
  // "Derived from the folder slug": the folder name has no spaces (kebab/snake case, i.e. a slug, not a readable
  // title like "17-Complete Modern C++") and the course title is just that slug, humanized or not.
  const folderName = path.posix.basename(course.dir);
  const squash = (x: string) => x.replace(/\s+/g, " ").trim().toLowerCase();
  const titleFromFolder =
    !course.title.trim() ||
    (!/\s/.test(folderName) && (squash(course.title) === squash(folderName) || squash(course.title) === squash(humanizeName(folderName))));
  const yes = (b: boolean) => (b ? 100 : 0);
  const metaParts: Part[] = [
    { key: "title", label: "Tiêu đề không suy ra từ tên thư mục", weight: 15, score: yes(!titleFromFolder), raw: titleFromFolder ? `đang dùng tên thư mục: ${folderName}` : "có tiêu đề riêng" },
    { key: "description", label: "Mô tả khóa học", weight: 20, score: yes(!!course.description), raw: course.description ? `${fmtNum(course.description.length)} ký tự` : "thiếu" },
    { key: "objectives", label: "Mục tiêu học tập", weight: 25, score: yes(course.objectives.length > 0), raw: course.objectives.length ? `${course.objectives.length} mục tiêu` : "thiếu" },
    { key: "prerequisites", label: "Điều kiện tiên quyết", weight: 15, score: yes(course.prerequisites.length > 0), raw: course.prerequisites.length ? `${course.prerequisites.length} mục` : "thiếu" },
    { key: "overview", label: "README / mục lục khóa học", weight: 15, score: yes(!!course.overviewPath), raw: course.overviewPath ? relToCourse(course, course.overviewPath) : "thiếu" },
    { key: "language", label: "Ngôn ngữ", weight: 5, score: yes(!!course.language), raw: course.language ?? "thiếu" },
    {
      key: "level",
      label: "Cấp độ",
      weight: 5,
      score: yes(!!course.level),
      raw: course.level ?? (opts.levelSystemic ? "thiếu ở hầu hết khóa → không tính điểm" : "thiếu"),
      skipped: opts.levelSystemic,
    },
  ];

  // ---- A2 structure
  const lengthScore = n ? 0.6 * (100 - pct(short.length, n)) + 0.4 * toTarget(med, TARGETS.medianWords) : 0;
  const singleFrac = regular.length ? singleModules.length / regular.length : 0;
  let modScore = 100 * (1 - singleFrac);
  if (flat) modScore = Math.min(modScore, 60);
  const emptyScore = Math.max(0, 100 - 34 * emptyFolders.length);
  const structParts: Part[] = [
    {
      key: "length",
      label: "Độ dài bài học",
      weight: 40,
      score: lengthScore,
      raw: `trung vị ${fmtNum(med)} từ; ${short.length}/${n} bài < ${TARGETS.shortWords} từ (${fmtPct(pct(short.length, n))})`,
    },
    {
      key: "modules",
      label: "Cân đối module",
      weight: 20,
      score: modScore,
      raw: `${course.moduleCount} module; ${singleModules.length} module chỉ có 1 bài${flat ? `; chỉ 1 module cho ${n} bài (cấu trúc phẳng)` : ""}`,
    },
    {
      key: "no-title",
      label: "Bài có tiêu đề H1/frontmatter",
      weight: 15,
      score: n ? 100 - pct(noTitle.length, n) : 0,
      raw: `${noTitle.length}/${n} bài không có H1 (dùng tên file)`,
    },
    {
      key: "order",
      label: "Thứ tự file rõ ràng",
      weight: 15,
      score: course.modules.length ? 100 * (1 - orderUnclear.length / course.modules.length) : 100,
      raw: `${orderUnclear.length}/${course.modules.length} module không đánh số thứ tự`,
    },
    {
      key: "empty-folders",
      label: "Không có thư mục module rỗng",
      weight: 10,
      score: emptyScore,
      raw: `${emptyFolders.length} thư mục module không có bài`,
    },
  ];

  // ---- A3 title consistency
  const dupFrac = n ? dupTitleSet.size / n : 0;
  const fileFrac = n ? fileLike.length / n : 0;
  const titleParts: Part[] = [
    {
      key: "duplicate",
      label: "Tiêu đề bài không trùng trong module",
      weight: 50,
      score: n ? 100 * (1 - Math.min(1, TARGETS.fragmentFactor * dupFrac)) : 0,
      raw: `${dupTitleSet.size}/${n} bài thuộc ${dupTitleGroups.length} nhóm trùng tiêu đề`,
    },
    {
      key: "filename",
      label: "Tiêu đề không chỉ là tên file/mã",
      weight: 50,
      score: n ? 100 * (1 - Math.min(1, TARGETS.fragmentFactor * fileFrac)) : 0,
      raw: `${fileLike.length}/${n} bài có tiêu đề dạng tên file/mã (bài thiếu H1 tính riêng ở mục Cấu trúc)`,
    },
  ];

  // ---- A4 exercises / questions
  const exParts: Part[] = [
    {
      key: "gradable",
      label: "Bài có câu hỏi chấm tự động",
      weight: 60,
      score: n ? toTarget(pct(gradableLessons, n), TARGETS.gradablePct) : 0,
      raw: `${gradableLessons}/${n} bài (${fmtPct(pct(gradableLessons, n))}, mục tiêu ≥ ${TARGETS.gradablePct}%); ${fmtNum(gradableQuestions)}/${fmtNum(questions)} câu hỏi chấm được`,
    },
    {
      key: "practice",
      label: "Bài có mục bài tập/thực hành",
      weight: 40,
      score: n ? toTarget(pct(practiceLessons, n), TARGETS.practicePct) : 0,
      raw: `${practiceLessons}/${n} bài (${fmtPct(pct(practiceLessons, n))}, mục tiêu ≥ ${TARGETS.practicePct}%)`,
    },
  ];

  // ---- A5 examples
  const exampleParts: Part[] = [
    {
      key: "examples",
      label: "Bài có ví dụ hoặc khối mã",
      weight: 100,
      score: n ? toTarget(pct(exampleLessons, n), TARGETS.examplePct) : 0,
      raw: `${exampleLessons}/${n} bài (${fmtPct(pct(exampleLessons, n))}, mục tiêu ≥ ${TARGETS.examplePct}%): ${exampleHeading} có mục ví dụ, ${codeLessons} có khối mã`,
    },
  ];

  // ---- A6 broken links / duplicate content
  const brokenFrac = n ? brokenLessonIds.size / n : 0;
  const dupContentFrac = n ? dupContentSet.size / n : 0;
  const linkParts: Part[] = [
    {
      key: "broken",
      label: "Liên kết/tài nguyên không hỏng",
      weight: 60,
      score: n ? 100 * (1 - Math.min(1, TARGETS.linkFactor * brokenFrac)) : 0,
      raw: `${broken.length} liên kết hỏng trong ${brokenLessonIds.size} bài`,
    },
    {
      key: "dup-content",
      label: "Không trùng nội dung hoàn toàn",
      weight: 40,
      score: n ? 100 * (1 - Math.min(1, TARGETS.linkFactor * dupContentFrac)) : 0,
      raw: `${dupContentSet.size} bài nằm trong ${dupContentGroups.length} nhóm file giống hệt`,
    },
  ];

  // ---- A7 readability proxy
  const readParts: Part[] = [
    {
      key: "headings",
      label: "Mật độ tiêu đề mục",
      weight: 50,
      score: n ? toTarget(hpk, TARGETS.headingsPer1000) : 0,
      raw: `${round1(hpk)} tiêu đề/1000 từ (${fmtNum(headings)} tiêu đề, ${fmtNum(totalWords)} từ; mục tiêu ≥ ${TARGETS.headingsPer1000})`,
    },
    {
      key: "summary",
      label: "Bài có mục Tóm tắt/Tổng kết",
      weight: 50,
      score: n ? toTarget(pct(summaryLessons, n), TARGETS.summaryPct) : 0,
      raw: `${summaryLessons}/${n} bài (${fmtPct(pct(summaryLessons, n))}, mục tiêu ≥ ${TARGETS.summaryPct}%)`,
    },
  ];

  const areas: AreaResult[] = [
    finishArea("metadata", metaParts),
    finishArea("structure", structParts),
    finishArea("titles", titleParts),
    finishArea("exercises", exParts),
    finishArea("examples", exampleParts),
    finishArea("links", linkParts),
    finishArea("readability", readParts),
  ];
  const score = round1(areas.reduce((s, a) => s + (a.score * a.weight) / 100, 0));

  return {
    course,
    score,
    label: scoreLabel(score),
    areas,
    raw,
    findings: {
      short,
      noGradable,
      noPractice,
      noExample,
      noSummary,
      noTitle,
      fileLike,
      dupTitleGroups,
      dupContentGroups,
      broken,
      singleModules,
      orderUnclear,
      emptyFolders,
      lowHeadings,
      ungradable,
    },
  };
}
