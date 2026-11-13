// Server-side content repository: the single interface the UI reads through.
// Backed by the SQLite catalog built by the scanner (Local Mode and Git Repository Mode alike).
import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";
import type { DatabaseSync } from "node:sqlite";
import MiniSearch from "minisearch";
import { getContentRoots, getDbPath, resolveInside } from "./config.ts";
import { openDatabase, getMeta } from "./db.ts";
import { foldVi } from "./text.ts";
import { checkTemplate, type TemplateReport } from "./template-check.ts";
import type {
  CategorySummary,
  CourseDetail,
  CourseSummary,
  DomainSummary,
  IssueSummary,
  LessonDetail,
  LessonOutline,
  ModuleOutline,
  SearchHitCourse,
  SearchHitLesson,
  SearchResult,
  SearchSnippetPart,
} from "./types.ts";

// ------------------------------------------------------------- connection

let cached: { db: DatabaseSync; mtime: number } | null = null;

export function getDb(): DatabaseSync | null {
  const file = getDbPath();
  let mtime = 0;
  try {
    mtime = fs.statSync(file).mtimeMs;
  } catch {
    return null;
  }
  if (cached) return cached.db;
  try {
    const db = openDatabase(file, { readOnly: true });
    db.prepare("SELECT 1 FROM courses LIMIT 1").get();
    cached = { db, mtime };
    return db;
  } catch {
    return null;
  }
}

export function catalogVersion(): string {
  const db = getDb();
  return (db && getMeta(db, "last_scan")) ?? "none";
}

function all<T>(sql: string, ...args: (string | number | null)[]): T[] {
  const db = getDb();
  if (!db) return [];
  return db.prepare(sql).all(...args) as unknown as T[];
}

function one<T>(sql: string, ...args: (string | number | null)[]): T | undefined {
  const db = getDb();
  if (!db) return undefined;
  return db.prepare(sql).get(...args) as unknown as T | undefined;
}

function json<T>(s: string | null | undefined, d: T): T {
  if (!s) return d;
  try {
    return JSON.parse(s) as T;
  } catch {
    return d;
  }
}

// ------------------------------------------------------------- catalog

interface CourseRowDb {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  domain_id: string;
  domain_title: string;
  category_id: string;
  category_title: string;
  subcategory_id: string | null;
  subcategory_title: string | null;
  language: string;
  level: string | null;
  tags: string;
  module_count: number;
  lesson_count: number;
  question_count: number;
  gradable_count: number;
  est_minutes: number;
  updated_at: number;
  status: CourseSummary["status"];
  media: string;
  objectives: string;
  prerequisites: string;
  source_url: string | null;
  overview_path: string | null;
  word_count: number;
  resource_count: number;
  root_id: string;
}

const COURSE_SELECT = `SELECT c.*, d.title AS domain_title, cat.title AS category_title, sub.title AS subcategory_title
  FROM courses c JOIN domains d ON d.id = c.domain_id JOIN categories cat ON cat.id = c.category_id
  LEFT JOIN categories sub ON sub.id = c.subcategory_id`;

function toSummary(r: CourseRowDb): CourseSummary {
  return {
    id: r.id,
    slug: r.slug,
    title: r.title,
    description: r.description,
    domainId: r.domain_id,
    domainTitle: r.domain_title,
    categoryId: r.category_id,
    categoryTitle: r.category_title,
    subcategoryId: r.subcategory_id,
    subcategoryTitle: r.subcategory_title,
    language: r.language,
    level: r.level,
    tags: json(r.tags, []),
    moduleCount: r.module_count,
    lessonCount: r.lesson_count,
    questionCount: r.question_count,
    gradableCount: r.gradable_count,
    estMinutes: r.est_minutes,
    updatedAt: r.updated_at,
    status: r.status,
    media: json(r.media, { mermaid: 0, math: 0, images: 0, code: 0 }),
  };
}

export function listDomains(): DomainSummary[] {
  const cats = all<{ id: string; domain_id: string; parent_id: string | null; title: string; course_count: number; level: string | null }>(
    "SELECT * FROM categories ORDER BY ord",
  );
  return all<{ id: string; title: string; ord: number; course_count: number; lesson_count: number }>("SELECT * FROM domains ORDER BY ord").map((d) => ({
    id: d.id,
    title: d.title,
    ord: d.ord,
    courseCount: d.course_count,
    lessonCount: d.lesson_count,
    categories: cats
      .filter((c) => c.domain_id === d.id)
      .map<CategorySummary>((c) => ({ id: c.id, domainId: c.domain_id, parentId: c.parent_id, title: c.title, courseCount: c.course_count, level: c.level })),
  }));
}

let coursesCache: { version: string; list: CourseSummary[] } | null = null;

/** All visible courses (those with at least one readable lesson). Cached per scan. */
export function listCourses(): CourseSummary[] {
  const version = catalogVersion();
  if (coursesCache?.version === version) return coursesCache.list;
  const list = all<CourseRowDb>(`${COURSE_SELECT} WHERE c.status != 'empty' ORDER BY d.ord, cat.ord, c.ord`).map(toSummary);
  coursesCache = { version, list };
  return list;
}

export function getCourseSummaries(ids: string[]): CourseSummary[] {
  if (!ids.length) return [];
  const chunk = ids.slice(0, 200);
  return all<CourseRowDb>(`${COURSE_SELECT} WHERE c.id IN (${chunk.map(() => "?").join(",")})`, ...chunk).map(toSummary);
}

export function getCatalogStats() {
  const s = one<{ courses: number; lessons: number; questions: number; gradable: number }>(
    "SELECT count(*) courses, sum(lesson_count) lessons, sum(question_count) questions, sum(gradable_count) gradable FROM courses WHERE status != 'empty'",
  );
  const db = getDb();
  return {
    courses: s?.courses ?? 0,
    lessons: s?.lessons ?? 0,
    questions: s?.questions ?? 0,
    gradable: s?.gradable ?? 0,
    lastScan: db ? getMeta(db, "last_scan") : null,
  };
}

interface LessonRowDb {
  id: string;
  slug: string;
  course_id: string;
  module_id: string | null;
  ord: number;
  group_label: string | null;
  title: string;
  description: string | null;
  root_id: string;
  path: string;
  kind: LessonOutline["kind"];
  words: number;
  questions: number;
  gradable: number;
  minutes: number;
  tags: string;
  lang: string;
  mtime: number;
}

function toOutline(l: LessonRowDb): LessonOutline {
  return { id: l.id, slug: l.slug, title: l.title, ord: l.ord, groupLabel: l.group_label, minutes: l.minutes, questions: l.questions, gradable: l.gradable, kind: l.kind };
}

export function getCourse(slug: string): CourseDetail | null {
  const r = one<CourseRowDb>(`${COURSE_SELECT} WHERE c.slug = ?`, slug);
  if (!r || r.status === "empty") return null;
  const mods = all<{ id: string; ord: number; title: string; kind: string; lesson_count: number; question_count: number }>(
    "SELECT * FROM modules WHERE course_id = ? ORDER BY ord",
    r.id,
  );
  const lessons = all<LessonRowDb>("SELECT * FROM lessons WHERE course_id = ? ORDER BY ord", r.id);
  const modules: ModuleOutline[] = mods.map((m) => ({
    id: m.id,
    ord: m.ord,
    title: m.title,
    kind: m.kind,
    lessonCount: m.lesson_count,
    questionCount: m.question_count,
    lessons: lessons.filter((l) => l.module_id === m.id && l.kind === "lesson").map(toOutline),
  }));
  const overview = r.overview_path ? lessons.find((l) => l.path === r.overview_path) : undefined;
  return {
    ...toSummary(r),
    objectives: json(r.objectives, []),
    prerequisites: json(r.prerequisites, []),
    sourceUrl: r.source_url,
    overviewSlug: overview?.slug ?? null,
    modules,
    resources: lessons.filter((l) => l.kind !== "lesson").map(toOutline),
    wordCount: r.word_count,
    resourceFileCount: r.resource_count,
  };
}

export function getLesson(courseSlug: string, lessonSlug: string): { course: CourseDetail; lesson: LessonDetail } | null {
  const course = getCourse(courseSlug);
  if (!course) return null;
  const l = one<LessonRowDb>("SELECT * FROM lessons WHERE course_id = ? AND slug = ?", course.id, lessonSlug);
  if (!l) return null;
  const mod = course.modules.find((m) => m.id === l.module_id) ?? null;
  return {
    course,
    lesson: {
      id: l.id,
      slug: l.slug,
      title: l.title,
      description: l.description,
      kind: l.kind,
      rootId: l.root_id,
      path: l.path,
      courseId: l.course_id,
      moduleId: l.module_id,
      moduleTitle: mod?.title ?? null,
      moduleOrd: mod?.ord ?? null,
      groupLabel: l.group_label,
      ord: l.ord,
      minutes: l.minutes,
      words: l.words,
      questions: l.questions,
      tags: json(l.tags, []),
      lang: l.lang,
      mtime: l.mtime,
    },
  };
}

export function getCourseLessonIds(courseIds: string[]): Record<string, string[]> {
  const out: Record<string, string[]> = {};
  for (const id of courseIds.slice(0, 100)) {
    out[id] = all<{ id: string }>("SELECT id FROM lessons WHERE course_id = ? AND kind = 'lesson' ORDER BY ord", id).map((r) => r.id);
  }
  return out;
}

/** Resolve a lesson by its path relative to a content root (for in-markdown links). */
export function lessonByPath(rootId: string, rel: string): { courseSlug: string; lessonSlug: string } | null {
  const r = one<{ course_slug: string; slug: string }>(
    "SELECT c.slug AS course_slug, l.slug FROM lessons l JOIN courses c ON c.id = l.course_id WHERE l.root_id = ? AND l.path = ? LIMIT 1",
    rootId,
    rel,
  );
  return r ? { courseSlug: r.course_slug, lessonSlug: r.slug } : null;
}

export function getCourseIssues(courseId: string): IssueSummary[] {
  return all<IssueSummary>("SELECT severity, code, message, lesson_id AS lessonId, detail FROM issues WHERE course_id = ? ORDER BY severity, code", courseId);
}

// ------------------------------------------------------------- files

/** Read-only pseudo root that serves the app's own templates/ folder (template preview page). */
export const TEMPLATES_ROOT = "__templates";

export function rootAbs(rootId: string): string | null {
  if (rootId === TEMPLATES_ROOT) return path.resolve(process.env.COURSEFLOW_APP_ROOT ?? process.cwd(), "templates");
  return getContentRoots().find((r) => r.id === rootId)?.abs ?? null;
}

export async function readLessonSource(rootId: string, rel: string): Promise<string | null> {
  const root = rootAbs(rootId);
  if (!root) return null;
  const abs = resolveInside(root, rel);
  if (!abs) return null;
  try {
    return await fsp.readFile(abs, "utf8");
  } catch {
    return null;
  }
}

export function fileExists(rootId: string, rel: string): boolean {
  const root = rootAbs(rootId);
  const abs = root ? resolveInside(root, rel) : null;
  return !!abs && fs.existsSync(abs);
}

// ------------------------------------------------------------- search

export function searchTerms(q: string): string[] {
  return [...new Set(foldVi(q).split(/[^\p{L}\p{N}]+/u).filter((t) => t.length >= 2 || /\d/.test(t)))].slice(0, 8);
}

let courseIndex: { version: string; ms: MiniSearch } | null = null;

function getCourseIndex(): MiniSearch {
  const version = catalogVersion();
  if (courseIndex && courseIndex.version === version) return courseIndex.ms;
  const ms = new MiniSearch({
    fields: ["title", "extra"],
    storeFields: ["slug", "title", "domainTitle", "categoryTitle", "lessonCount", "kind", "moduleTitle"],
    processTerm: (t) => foldVi(t),
    searchOptions: { boost: { title: 3 }, fuzzy: 0.2, prefix: true, combineWith: "AND" },
  });
  const courses = listCourses();
  const docs: Record<string, unknown>[] = [];
  for (const c of courses) {
    docs.push({ id: `c:${c.id}`, slug: c.slug, title: c.title, extra: `${c.categoryTitle} ${c.subcategoryTitle ?? ""} ${c.tags.join(" ")} ${c.slug.replace(/-/g, " ")}`, domainTitle: c.domainTitle, categoryTitle: c.categoryTitle, lessonCount: c.lessonCount, kind: "course" });
  }
  for (const m of all<{ id: string; title: string; course_id: string }>("SELECT id, title, course_id FROM modules")) {
    const c = courses.find((x) => x.id === m.course_id);
    if (c) docs.push({ id: `m:${m.id}`, slug: c.slug, title: m.title, extra: c.title, domainTitle: c.domainTitle, categoryTitle: c.categoryTitle, lessonCount: c.lessonCount, kind: "module", moduleTitle: m.title });
  }
  ms.addAll(docs);
  courseIndex = { version, ms };
  return ms;
}

/** Fold a string while keeping an index map back into the original (for highlighting). */
function foldWithMap(s: string): { folded: string; map: number[] } {
  let folded = "";
  const map: number[] = [];
  for (let i = 0; i < s.length; i++) {
    const f = foldVi(s[i]);
    for (let k = 0; k < f.length; k++) {
      folded += f[k];
      map.push(i);
    }
  }
  return { folded, map };
}

export function makeSnippet(text: string, terms: string[], radius = 90): SearchSnippetPart[] | null {
  if (!terms.length) return null;
  const plain = text
    .replace(/^---[\s\S]*?\n---\n/, "")
    .replace(/```[\s\S]*?```/g, (m) => m.replace(/```\w*/g, " "))
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#*_`>|]+/g, " ")
    .replace(/\s+/g, " ");
  const { folded, map } = foldWithMap(plain);
  let first = -1;
  for (const t of terms) {
    const re = new RegExp(`(^|[^\\p{L}\\p{N}])${t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, "u");
    const m = re.exec(folded);
    if (m && (first === -1 || m.index < first)) first = m.index + m[1].length;
  }
  if (first === -1) return null;
  const startF = Math.max(0, first - radius);
  const start = map[startF] ?? 0;
  const endF = Math.min(folded.length - 1, first + radius * 2);
  const end = (map[endF] ?? plain.length - 1) + 1;
  const piece = plain.slice(start, end);
  const pf = foldWithMap(piece);
  const marks: [number, number][] = [];
  for (const t of terms) {
    let idx = 0;
    while ((idx = pf.folded.indexOf(t, idx)) !== -1) {
      marks.push([pf.map[idx], pf.map[idx + t.length - 1] + 1]);
      idx += t.length;
    }
  }
  marks.sort((a, b) => a[0] - b[0]);
  const parts: SearchSnippetPart[] = [];
  let pos = 0;
  for (const [a, b] of marks) {
    if (a < pos) continue;
    if (a > pos) parts.push({ text: piece.slice(pos, a), hit: false });
    parts.push({ text: piece.slice(a, b), hit: true });
    pos = b;
  }
  if (pos < piece.length) parts.push({ text: piece.slice(pos), hit: false });
  if (start > 0) parts.unshift({ text: "…", hit: false });
  if (end < plain.length) parts.push({ text: "…", hit: false });
  return parts;
}

export interface SearchOptions {
  limit?: number;
  courseId?: string;
  domainId?: string;
  snippets?: boolean;
}

export async function search(q: string, opts: SearchOptions = {}): Promise<SearchResult> {
  const t0 = Date.now();
  const terms = searchTerms(q);
  const limit = Math.min(opts.limit ?? 20, 50);
  const empty: SearchResult = { query: q, terms, courses: [], lessons: [], tookMs: 0 };
  const db = getDb();
  if (!db || !terms.length) return empty;

  // Courses & modules: fuzzy (typo tolerant, accent-insensitive).
  let courses: SearchHitCourse[] = [];
  if (!opts.courseId) {
    const seen = new Set<string>();
    for (const h of getCourseIndex().search(q)) {
      const slug = h.slug as string;
      if (seen.has(slug)) continue;
      if (opts.domainId && !listCourses().some((c) => c.slug === slug && c.domainId === opts.domainId)) continue;
      seen.add(slug);
      courses.push({
        slug,
        title: h.kind === "module" ? (h.extra as string) ?? (h.title as string) : (h.title as string),
        domainTitle: h.domainTitle as string,
        categoryTitle: h.categoryTitle as string,
        lessonCount: h.lessonCount as number,
        matchedIn: h.kind === "module" ? "module" : "title",
        moduleTitle: h.kind === "module" ? (h.moduleTitle as string) : undefined,
      });
      if (courses.length >= 8) break;
    }
    // module hits store the course title in `extra`; MiniSearch only returns stored fields
    courses = courses.map((c) => (c.matchedIn === "module" ? { ...c, title: listCourses().find((x) => x.slug === c.slug)?.title ?? c.title } : c));
  }

  // Lessons: full-text over title, headings and body.
  const expr = (op: string) => terms.map((t) => `"${t.replace(/"/g, "")}"*`).join(` ${op} `);
  const where = [opts.courseId ? "l.course_id = ?" : null, opts.domainId ? "c.domain_id = ?" : null].filter(Boolean).join(" AND ");
  const params = [opts.courseId, opts.domainId].filter((x): x is string => !!x);
  const sql = `SELECT l.id, l.slug, l.title, l.kind, l.root_id, l.path, c.slug AS course_slug, c.title AS course_title, m.title AS module_title, d.title AS domain_title,
      bm25(docs_fts, 10.0, 4.0, 1.0) AS rank
    FROM docs_fts JOIN lessons l ON l.doc_rowid = docs_fts.rowid JOIN courses c ON c.id = l.course_id JOIN domains d ON d.id = c.domain_id
    LEFT JOIN modules m ON m.id = l.module_id
    WHERE docs_fts MATCH ? ${where ? "AND " + where : ""}
    ORDER BY (l.kind = 'lesson') DESC, rank LIMIT ?`;
  type Row = { id: string; slug: string; title: string; kind: string; root_id: string; path: string; course_slug: string; course_title: string; module_title: string | null; domain_title: string };
  let rows: Row[] = [];
  try {
    rows = db.prepare(sql).all(expr("AND"), ...params, limit) as unknown as Row[];
    if (rows.length < 3 && terms.length > 1) {
      const more = db.prepare(sql).all(expr("OR"), ...params, limit) as unknown as Row[];
      const ids = new Set(rows.map((r) => r.id));
      rows = [...rows, ...more.filter((r) => !ids.has(r.id))].slice(0, limit);
    }
  } catch {
    rows = [];
  }
  const lessons: SearchHitLesson[] = await Promise.all(
    rows.map(async (r, i) => {
      let snippet: SearchSnippetPart[] | null = null;
      if (opts.snippets !== false && i < 20) {
        const text = await readLessonSource(r.root_id, r.path);
        if (text) snippet = makeSnippet(text, terms);
      }
      return {
        lessonId: r.id,
        lessonSlug: r.slug,
        lessonTitle: r.title,
        kind: r.kind,
        courseSlug: r.course_slug,
        courseTitle: r.course_title,
        moduleTitle: r.module_title,
        domainTitle: r.domain_title,
        snippet,
      };
    }),
  );
  return { query: q, terms, courses, lessons, tookMs: Date.now() - t0 };
}

/** Lessons in other courses whose text matches this lesson's title (content-based, no guessing). */
export function relatedLessons(lesson: LessonDetail, limit = 5): { courseSlug: string; courseTitle: string; slug: string; title: string }[] {
  const db = getDb();
  if (!db) return [];
  const stop = new Set(["va", "cua", "cho", "voi", "cac", "nhung", "trong", "mot", "la", "the", "and", "for", "with", "how", "to", "of", "in", "bai", "hoc", "phan", "gioi", "thieu", "tong", "quan", "introduction", "lesson", "part"]);
  const terms = searchTerms(lesson.title).filter((t) => !stop.has(t) && t.length >= 3).slice(0, 5);
  if (!terms.length) return [];
  try {
    return (
      db
      .prepare(
        `SELECT c.slug AS courseSlug, c.title AS courseTitle, l.slug, l.title FROM docs_fts JOIN lessons l ON l.doc_rowid = docs_fts.rowid
         JOIN courses c ON c.id = l.course_id WHERE docs_fts MATCH ? AND l.kind = 'lesson' AND l.course_id != ?
         ORDER BY bm25(docs_fts, 10.0, 4.0, 0.5) LIMIT ?`,
      )
      .all(terms.map((t) => `title:"${t}"`).join(" AND "), lesson.courseId, limit) as unknown as { courseSlug: string; courseTitle: string; slug: string; title: string }[]
    ).map((r) => ({ courseSlug: r.courseSlug, courseTitle: r.courseTitle, slug: r.slug, title: r.title }));
  } catch {
    return [];
  }
}

export function contentRootExists(): boolean {
  return getContentRoots().some((r) => fs.existsSync(r.abs));
}

export function relFromLesson(lessonPath: string, target: string): string {
  return path.posix.normalize(path.posix.join(path.posix.dirname(lessonPath), target));
}

// ------------------------------------------------------------- editorial review

export interface ReviewRow {
  id: string;
  slug: string;
  title: string;
  moduleTitle: string | null;
  moduleOrd: number | null;
  ord: number;
  words: number;
  gradable: number;
  questions: number;
  mtime: number;
  relPath: string;
  editHref: string | null;
  template: TemplateReport;
  issues: { severity: string; message: string }[];
}

/** Local Mode only: lets the author jump from a lesson to the file in VS Code. Off when COURSEFLOW_MODE=public. */
export function localEditingEnabled(): boolean {
  return process.env.COURSEFLOW_MODE !== "public";
}

export function editHrefFor(rootId: string, rel: string): string | null {
  if (!localEditingEnabled()) return null;
  const root = rootAbs(rootId);
  const abs = root ? resolveInside(root, rel) : null;
  return abs ? `vscode://file/${abs.split(path.sep).join("/").split("/").map(encodeURIComponent).join("/").replace(/^([A-Za-z])%3A/, "$1:")}` : null;
}

export function getCourseReviewRows(courseId: string): ReviewRow[] {
  type R = { id: string; slug: string; title: string; ord: number; words: number; gradable: number; questions: number; mtime: number; path: string; root_id: string; module_title: string | null; module_ord: number | null; headings: string | null; fm: string | null };
  const rows = all<R>(
    `SELECT l.id, l.slug, l.title, l.ord, l.words, l.gradable, l.questions, l.mtime, l.path, l.root_id, m.title AS module_title, m.ord AS module_ord, d.headings, d.fm
     FROM lessons l LEFT JOIN modules m ON m.id = l.module_id LEFT JOIN docs d ON d.rowid = l.doc_rowid
     WHERE l.course_id = ? AND l.kind = 'lesson' ORDER BY l.ord`,
    courseId,
  );
  const issues = all<{ lesson_id: string; severity: string; message: string }>("SELECT lesson_id, severity, message FROM issues WHERE course_id = ? AND lesson_id IS NOT NULL", courseId);
  const byLesson = new Map<string, { severity: string; message: string }[]>();
  for (const i of issues) byLesson.set(i.lesson_id, [...(byLesson.get(i.lesson_id) ?? []), { severity: i.severity, message: i.message }]);
  const course = one<{ dir: string }>("SELECT dir FROM courses WHERE id = ?", courseId);
  return rows.map((r) => ({
    id: r.id,
    slug: r.slug,
    title: r.title,
    moduleTitle: r.module_title,
    moduleOrd: r.module_ord,
    ord: r.ord,
    words: r.words,
    gradable: r.gradable,
    questions: r.questions,
    mtime: r.mtime,
    relPath: course ? path.posix.relative(course.dir, r.path) : r.path,
    editHref: editHrefFor(r.root_id, r.path),
    template: checkTemplate(json(r.headings, []), json(r.fm, {}), r.gradable),
    issues: byLesson.get(r.id) ?? [],
  }));
}

/** Current file mtimes for a set of lessons (to flag "file changed since you marked it"). */
export function lessonMtimes(ids: string[]): Record<string, { mtime: number; courseSlug: string; slug: string; title: string; courseTitle: string }> {
  const out: Record<string, { mtime: number; courseSlug: string; slug: string; title: string; courseTitle: string }> = {};
  for (let i = 0; i < ids.length; i += 400) {
    const chunk = ids.slice(i, i + 400);
    for (const r of all<{ id: string; mtime: number; course_slug: string; slug: string; title: string; course_title: string }>(
      `SELECT l.id, l.mtime, c.slug AS course_slug, l.slug, l.title, c.title AS course_title FROM lessons l JOIN courses c ON c.id = l.course_id WHERE l.id IN (${chunk.map(() => "?").join(",")})`,
      ...chunk,
    ))
      out[r.id] = { mtime: r.mtime, courseSlug: r.course_slug, slug: r.slug, title: r.title, courseTitle: r.course_title };
  }
  return out;
}
