// Loads everything the analyzer needs from the SQLite catalog with a handful of set-based queries
// (one scan of docs, one of lessons, one of modules, one of issues). Read-only: the DB is opened with
// readOnly and no file under the content root is touched.
import fs from "node:fs";
import { DatabaseSync } from "node:sqlite";
import { classifyHeadings, safeJson } from "./util.ts";
import type { HeadingFlags } from "./util.ts";

export interface LessonRec {
  id: string;
  moduleId: string | null;
  ord: number;
  title: string;
  /** Path relative to the content root (forward slashes). */
  path: string;
  words: number;
  questions: number;
  gradable: number;
  hasCode: boolean;
  headingCount: number;
  hasPractice: boolean;
  hasExample: boolean;
  hasSummary: boolean;
}

export interface ModuleRec {
  id: string;
  ord: number;
  title: string;
  dir: string;
  lessonCount: number;
  questionCount: number;
  kind: string;
}

export interface IssueRec {
  lessonId: string | null;
  severity: string;
  code: string;
  message: string;
  detail: string | null;
}

export interface CourseRec {
  id: string;
  dir: string;
  title: string;
  description: string | null;
  language: string | null;
  level: string | null;
  objectives: string[];
  prerequisites: string[];
  overviewPath: string | null;
  status: string;
  moduleCount: number;
  lessonCount: number;
  questionCount: number;
  gradableCount: number;
  wordCount: number;
  domainId: string;
  domainTitle: string;
  categoryTitle: string;
  media: { mermaid: number; math: number; images: number; code: number };
  modules: ModuleRec[];
  lessons: LessonRec[];
  issues: IssueRec[];
}

export interface Catalog {
  dbPath: string;
  lastScan: string | null;
  courses: CourseRec[];
  domains: { id: string; title: string; ord: number }[];
  totals: { courses: number; lessons: number; modules: number };
  /** Whole-catalog coverage of the `level` field (independent of --course), to detect a systemic gap. */
  levelCoverage: { filled: number; total: number };
  /** Issue rows whose course has no course row (e.g. folders without markdown). */
  orphanIssues: IssueRec[];
}

type Row = Record<string, unknown>;

export function loadCatalog(dbPath: string, onlyCourse?: string): Catalog {
  if (!fs.existsSync(dbPath)) {
    throw new Error(`Không tìm thấy catalog: ${dbPath}. Chạy "npm run scan" trước.`);
  }
  const db = new DatabaseSync(dbPath, { readOnly: true });
  try {
    db.exec("PRAGMA busy_timeout = 5000;");
    const courseWhere = onlyCourse ? "WHERE c.id = ?" : "";
    const args = onlyCourse ? [onlyCourse] : [];

    const metaRow = db.prepare("SELECT value FROM meta WHERE key = 'last_scan'").get() as Row | undefined;
    const cov = db.prepare("SELECT COUNT(*) AS total, SUM(CASE WHEN level IS NOT NULL AND TRIM(level) <> '' THEN 1 ELSE 0 END) AS filled FROM courses").get() as Row | undefined;
    const domainRows = db.prepare("SELECT id, title, ord FROM domains ORDER BY ord").all() as Row[];

    // ---- courses (+ domain / category titles)
    const courseRows = db
      .prepare(
        `SELECT c.id, c.dir, c.title, c.description, c.language, c.level, c.objectives, c.prerequisites, c.overview_path,
                c.status, c.module_count, c.lesson_count, c.question_count, c.gradable_count, c.word_count, c.media,
                c.domain_id, COALESCE(d.title, c.domain_id) AS domain_title, COALESCE(k.title, c.category_id) AS category_title
           FROM courses c
           LEFT JOIN domains d ON d.id = c.domain_id
           LEFT JOIN categories k ON k.id = c.category_id
           ${courseWhere}
          ORDER BY c.ord`,
      )
      .all(...args) as Row[];

    const byId = new Map<string, CourseRec>();
    const courses: CourseRec[] = [];
    for (const r of courseRows) {
      const rec: CourseRec = {
        id: String(r.id),
        dir: String(r.dir ?? ""),
        title: String(r.title ?? r.id),
        description: (r.description as string | null) ?? null,
        language: (r.language as string | null) ?? null,
        level: (r.level as string | null) ?? null,
        objectives: safeJson<string[]>(r.objectives as string, []),
        prerequisites: safeJson<string[]>(r.prerequisites as string, []),
        overviewPath: (r.overview_path as string | null) ?? null,
        status: String(r.status ?? ""),
        moduleCount: Number(r.module_count ?? 0),
        lessonCount: Number(r.lesson_count ?? 0),
        questionCount: Number(r.question_count ?? 0),
        gradableCount: Number(r.gradable_count ?? 0),
        wordCount: Number(r.word_count ?? 0),
        domainId: String(r.domain_id ?? ""),
        domainTitle: String(r.domain_title ?? ""),
        categoryTitle: String(r.category_title ?? ""),
        media: safeJson(r.media as string, { mermaid: 0, math: 0, images: 0, code: 0 }),
        modules: [],
        lessons: [],
        issues: [],
      };
      byId.set(rec.id, rec);
      courses.push(rec);
    }

    // ---- modules
    const moduleRows = db
      .prepare(
        `SELECT m.id, m.course_id, m.ord, m.title, m.dir, m.lesson_count, m.question_count, m.kind
           FROM modules m ${onlyCourse ? "WHERE m.course_id = ?" : ""} ORDER BY m.course_id, m.ord`,
      )
      .all(...args) as Row[];
    let moduleTotal = 0;
    for (const r of moduleRows) {
      const c = byId.get(String(r.course_id));
      if (!c) continue;
      moduleTotal++;
      c.modules.push({
        id: String(r.id),
        ord: Number(r.ord ?? 0),
        title: String(r.title ?? ""),
        dir: String(r.dir ?? ""),
        lessonCount: Number(r.lesson_count ?? 0),
        questionCount: Number(r.question_count ?? 0),
        kind: String(r.kind ?? "module"),
      });
    }

    // ---- lessons + heading flags (headings only; no document body is ever read)
    // Whole catalog: two sequential table scans (docs, then lessons) joined in memory — far kinder to a cold,
    // slow disk than ~109k random docs lookups. Single course: an indexed join over a few hundred rows.
    let lessonTotal = 0;
    const toLesson = (r: Row, hf: HeadingFlags): LessonRec => ({
      id: String(r.id),
      moduleId: (r.module_id as string | null) ?? null,
      ord: Number(r.ord ?? 0),
      title: String(r.title ?? ""),
      path: String(r.path ?? ""),
      words: Number(r.words ?? 0),
      questions: Number(r.questions ?? 0),
      gradable: Number(r.gradable ?? 0),
      hasCode: Number(r.has_code ?? 0) > 0,
      headingCount: hf.count,
      hasPractice: hf.practice,
      hasExample: hf.example,
      hasSummary: hf.summary,
    });
    if (onlyCourse) {
      const stmt = db.prepare(
        `SELECT l.id, l.module_id, l.ord, l.title, l.path, l.words, l.questions, l.gradable, l.has_code, d.headings
           FROM lessons l LEFT JOIN docs d ON d.rowid = l.doc_rowid
          WHERE l.kind = 'lesson' AND l.course_id = ? ORDER BY l.ord`,
      );
      const c = courses[0];
      if (c) {
        for (const r of stmt.iterate(onlyCourse) as Iterable<Row>) {
          lessonTotal++;
          c.lessons.push(toLesson(r, classifyHeadings((r.headings as string | null) ?? null)));
        }
      }
    } else {
      const maxRow = db.prepare("SELECT COALESCE(MAX(rowid), 0) AS m FROM docs").get() as Row;
      const packed = new Int32Array(Number(maxRow.m) + 1); // (headingCount << 3) | practice | example << 1 | summary << 2
      for (const r of db.prepare("SELECT rowid AS rid, headings FROM docs").iterate() as Iterable<Row>) {
        const h = r.headings as string | null;
        if (!h || h === "[]") continue;
        const hf = classifyHeadings(h);
        packed[Number(r.rid)] = (hf.count << 3) | (hf.practice ? 1 : 0) | (hf.example ? 2 : 0) | (hf.summary ? 4 : 0);
      }
      const stmt = db.prepare(
        "SELECT id, course_id, module_id, ord, title, path, words, questions, gradable, has_code, doc_rowid FROM lessons WHERE kind = 'lesson'",
      );
      for (const r of stmt.iterate() as Iterable<Row>) {
        const c = byId.get(String(r.course_id));
        if (!c) continue;
        const p = packed[Number(r.doc_rowid)] ?? 0;
        lessonTotal++;
        c.lessons.push(toLesson(r, { count: p >> 3, practice: (p & 1) !== 0, example: (p & 2) !== 0, summary: (p & 4) !== 0 }));
      }
      for (const c of courses) c.lessons.sort((x, y) => x.ord - y.ord);
    }

    // ---- issues
    const issueRows = db
      .prepare(`SELECT course_id, lesson_id, severity, code, message, detail FROM issues ${onlyCourse ? "WHERE course_id = ?" : ""}`)
      .all(...args) as Row[];
    const orphanIssues: IssueRec[] = [];
    for (const r of issueRows) {
      const rec: IssueRec = {
        lessonId: (r.lesson_id as string | null) ?? null,
        severity: String(r.severity ?? "info"),
        code: String(r.code ?? ""),
        message: String(r.message ?? ""),
        detail: (r.detail as string | null) ?? null,
      };
      const c = byId.get(String(r.course_id));
      if (c) c.issues.push(rec);
      else orphanIssues.push(rec);
    }

    return {
      dbPath,
      lastScan: (metaRow?.value as string | undefined) ?? null,
      courses,
      domains: domainRows.map((d) => ({ id: String(d.id), title: String(d.title), ord: Number(d.ord) })),
      totals: { courses: courses.length, lessons: lessonTotal, modules: moduleTotal },
      levelCoverage: { filled: Number(cov?.filled ?? 0), total: Number(cov?.total ?? 0) },
      orphanIssues,
    };
  } finally {
    db.close();
  }
}

/** Course ids containing `term` (case-insensitive), for "did you mean" hints. */
export function findCourseIds(dbPath: string, term: string, limit = 8): string[] {
  const db = new DatabaseSync(dbPath, { readOnly: true });
  try {
    const like = `%${term.replace(/[%_\\]/g, (m) => `\\${m}`)}%`;
    const rows = db.prepare("SELECT id FROM courses WHERE id LIKE ? ESCAPE '\\' ORDER BY id LIMIT ?").all(like, limit) as Row[];
    return rows.map((r) => String(r.id));
  } finally {
    db.close();
  }
}
