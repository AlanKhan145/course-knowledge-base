// Incremental scanner: only files whose mtime/size changed are re-read and re-indexed.
// The catalog view is rebuilt from the cache each run (fast; no disk reads).
import fsp from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";
import type { DatabaseSync } from "node:sqlite";
import { getContentRoots, getDbPath, getManifestsDir, type ContentRoot } from "./config.ts";
import { migrate, openDatabase, setMeta } from "./db.ts";
import { buildCatalog, iterMd, limiter, walkDir, type CatalogBuild, type DocInfo, type DirNode } from "./discovery.ts";
import { extractDocMeta } from "./lesson-meta.ts";
import { foldVi } from "./text.ts";

export interface ScanStats {
  root: string;
  mdFiles: number;
  parsed: number;
  removed: number;
  domains: number;
  categories: number;
  courses: number;
  modules: number;
  lessons: number;
  resources: number;
  questions: number;
  gradable: number;
  byStatus: Record<string, number>;
  issues: Record<string, number>;
  skipped: number;
  ms: { walk: number; parse: number; build: number; total: number };
}

type Log = (msg: string) => void;

interface DocRowRaw {
  rowid: number;
  path: string;
  mtime: number;
  size: number;
  h1: string | null;
  description: string | null;
  fm: string | null;
  headings: string | null;
  words: number;
  questions: number;
  gradable: number;
  has_mermaid: number;
  has_math: number;
  has_images: number;
  has_code: number;
  links: string | null;
  lang: string;
  objectives: string | null;
  prerequisites: string | null;
  source_url: string | null;
  hash: string | null;
}

function toDocInfo(r: DocRowRaw): DocInfo {
  const j = <T,>(s: string | null, d: T): T => {
    if (!s) return d;
    try {
      return JSON.parse(s) as T;
    } catch {
      return d;
    }
  };
  return {
    rowid: r.rowid,
    path: r.path,
    h1: r.h1,
    description: r.description,
    fm: j(r.fm, {}),
    headings: j(r.headings, []),
    words: r.words,
    questions: r.questions,
    gradable: r.gradable,
    hasMermaid: !!r.has_mermaid,
    hasMath: !!r.has_math,
    hasImages: !!r.has_images,
    hasCode: !!r.has_code,
    links: j(r.links, []),
    lang: r.lang,
    objectives: j(r.objectives, []),
    prerequisites: j(r.prerequisites, []),
    sourceUrl: r.source_url,
    mtime: r.mtime,
    hash: r.hash,
  };
}

async function parseChanged(db: DatabaseSync, root: ContentRoot, tree: DirNode, log: Log, force: boolean) {
  const existing = new Map<string, { rowid: number; mtime: number; size: number }>();
  for (const r of db.prepare("SELECT rowid, path, mtime, size FROM docs WHERE root_id = ?").all(root.id) as unknown as { rowid: number; path: string; mtime: number; size: number }[]) {
    existing.set(r.path, r);
  }
  const all = [...iterMd(tree)];
  const changed = force ? all : all.filter((f) => {
    const e = existing.get(f.rel);
    return !e || e.mtime !== f.mtime || e.size !== f.size;
  });
  const seen = new Set(all.map((f) => f.rel));
  const removed = [...existing.entries()].filter(([p]) => !seen.has(p));

  const upsert = db.prepare(`INSERT INTO docs (root_id, path, mtime, size, h1, description, fm, headings, words, questions, gradable,
      has_mermaid, has_math, has_images, has_code, links, lang, objectives, prerequisites, source_url, hash)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
    ON CONFLICT(root_id, path) DO UPDATE SET mtime=excluded.mtime, size=excluded.size, h1=excluded.h1, description=excluded.description,
      fm=excluded.fm, headings=excluded.headings, words=excluded.words, questions=excluded.questions, gradable=excluded.gradable,
      has_mermaid=excluded.has_mermaid, has_math=excluded.has_math, has_images=excluded.has_images, has_code=excluded.has_code,
      links=excluded.links, lang=excluded.lang, objectives=excluded.objectives, prerequisites=excluded.prerequisites,
      source_url=excluded.source_url, hash=excluded.hash
    RETURNING rowid`);
  const ftsDel = db.prepare("DELETE FROM docs_fts WHERE rowid = ?");
  const ftsIns = db.prepare("INSERT INTO docs_fts (rowid, title, headings, body) VALUES (?, ?, ?, ?)");
  const docDel = db.prepare("DELETE FROM docs WHERE rowid = ?");

  db.exec("BEGIN");
  for (const [, r] of removed) {
    ftsDel.run(r.rowid);
    docDel.run(r.rowid);
  }
  db.exec("COMMIT");

  const read = limiter(16);
  let done = 0;
  const batch: { rel: string; mtime: number; size: number; text: string }[] = [];
  const flush = () => {
    if (!batch.length) return;
    db.exec("BEGIN");
    for (const item of batch) {
      const m = extractDocMeta(item.text);
      const hash = createHash("sha1").update(item.text).digest("hex");
      const res = upsert.get(
        root.id, item.rel, item.mtime, item.size, m.h1, m.description, JSON.stringify(m.fm), JSON.stringify(m.headings),
        m.words, m.questions, m.gradable, +m.hasMermaid, +m.hasMath, +m.hasImages, +m.hasCode, JSON.stringify(m.links),
        m.lang, JSON.stringify(m.objectives), JSON.stringify(m.prerequisites), m.sourceUrl, hash,
      ) as { rowid: number };
      const title = foldVi([m.fm.title, m.h1, path.posix.basename(item.rel)].filter(Boolean).join(" "));
      const heads = foldVi(m.headings.map((h) => h.text).join(" · "));
      if (existing.has(item.rel)) ftsDel.run(res.rowid);
      ftsIns.run(res.rowid, title, heads, m.searchText);
    }
    db.exec("COMMIT");
    batch.length = 0;
  };
  const started = Date.now();
  await Promise.all(
    changed.map((f) =>
      read(async () => {
        let text = "";
        try {
          text = await fsp.readFile(path.join(root.abs, f.rel), "utf8");
        } catch {
          text = "";
        }
        batch.push({ rel: f.rel, mtime: f.mtime, size: f.size, text });
        if (batch.length >= 400) flush();
        done++;
        if (done % 5000 === 0) log(`  parsed ${done}/${changed.length} (${Math.round((Date.now() - started) / 1000)}s)`);
      }),
    ),
  );
  flush();
  return { mdFiles: all.length, parsed: changed.length, removed: removed.length };
}

function writeCatalog(db: DatabaseSync, rootId: string, b: CatalogBuild) {
  db.exec("BEGIN");
  for (const t of ["domains", "categories", "courses", "modules", "lessons", "issues"]) {
    if (t === "domains" || t === "courses" || t === "lessons") db.prepare(`DELETE FROM ${t} WHERE root_id = ?`).run(rootId);
  }
  // categories/modules/issues are keyed by ids derived from domains/courses of this root.
  const courseIds = b.courses.map((c) => c.id);
  const domainIds = b.domains.map((d) => d.id);
  const delIn = (table: string, col: string, ids: string[]) => {
    for (let i = 0; i < ids.length; i += 500) {
      const chunk = ids.slice(i, i + 500);
      db.prepare(`DELETE FROM ${table} WHERE ${col} IN (${chunk.map(() => "?").join(",")})`).run(...chunk);
    }
  };
  delIn("categories", "domain_id", domainIds);
  delIn("modules", "course_id", courseIds);
  delIn("issues", "course_id", [...new Set([...courseIds, ...b.issues.map((i) => i.courseId)])]);

  const insDomain = db.prepare("INSERT OR REPLACE INTO domains (id, title, ord, dir, root_id, course_count, lesson_count) VALUES (?,?,?,?,?,?,?)");
  for (const d of b.domains) {
    const cs = b.courses.filter((c) => c.domainId === d.id);
    insDomain.run(d.id, d.title, d.ord, d.dir, d.rootId, cs.length, cs.reduce((s, c) => s + c.lessonCount, 0));
  }
  const insCat = db.prepare("INSERT OR REPLACE INTO categories (id, domain_id, parent_id, title, ord, dir, course_count, level) VALUES (?,?,?,?,?,?,?,?)");
  for (const c of b.categories) {
    const n = b.courses.filter((x) => x.categoryId === c.id || x.subcategoryId === c.id).length;
    insCat.run(c.id, c.domainId, c.parentId, c.title, c.ord, c.dir, n, c.level);
  }
  const insCourse = db.prepare(`INSERT OR REPLACE INTO courses (id, slug, root_id, dir, domain_id, category_id, subcategory_id, title, description, language, level,
      tags, objectives, prerequisites, source_url, overview_path, structure, module_count, lesson_count, resource_count, question_count, gradable_count,
      word_count, est_minutes, media, updated_at, status, ord) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`);
  for (const c of b.courses) {
    insCourse.run(c.id, c.slug, c.rootId, c.dir, c.domainId, c.categoryId, c.subcategoryId, c.title, c.description, c.language, c.level,
      JSON.stringify(c.tags), JSON.stringify(c.objectives), JSON.stringify(c.prerequisites), c.sourceUrl, c.overviewPath, c.structure,
      c.moduleCount, c.lessonCount, c.resourceCount, c.questionCount, c.gradableCount, c.wordCount, c.estMinutes, JSON.stringify(c.media),
      c.updatedAt, c.status, c.ord);
  }
  const insModule = db.prepare("INSERT OR REPLACE INTO modules (id, course_id, ord, title, dir, overview_path, lesson_count, question_count, kind) VALUES (?,?,?,?,?,?,?,?,?)");
  for (const m of b.modules) insModule.run(m.id, m.courseId, m.ord, m.title, m.dir, m.overviewPath, m.lessonCount, m.questionCount, m.kind);
  const insLesson = db.prepare(`INSERT OR REPLACE INTO lessons (id, slug, course_id, module_id, ord, group_label, title, description, root_id, path, kind, doc_rowid,
      words, questions, gradable, minutes, has_mermaid, has_math, has_images, has_code, tags, lang, mtime) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`);
  for (const l of b.lessons) {
    insLesson.run(l.id, l.slug, l.courseId, l.moduleId, l.ord, l.groupLabel, l.title, l.description, l.rootId, l.path, l.kind, l.docRowid,
      l.words, l.questions, l.gradable, l.minutes, +l.hasMermaid, +l.hasMath, +l.hasImages, +l.hasCode, JSON.stringify(l.tags), l.lang, l.mtime);
  }
  const insIssue = db.prepare("INSERT INTO issues (course_id, lesson_id, severity, code, message, detail) VALUES (?,?,?,?,?,?)");
  for (const i of b.issues) insIssue.run(i.courseId, i.lessonId, i.severity, i.code, i.message, i.detail);
  db.exec("COMMIT");
}

export async function runScan(opts: { force?: boolean; log?: Log } = {}): Promise<ScanStats[]> {
  const log = opts.log ?? ((m: string) => console.log(m));
  const db = openDatabase(getDbPath());
  migrate(db);
  const results: ScanStats[] = [];
  try {
    for (const root of getContentRoots()) {
      const t0 = Date.now();
      log(`▶ Quét ${root.abs}`);
      const tree = await walkDir(root.abs, "");
      const t1 = Date.now();
      log(`  cây thư mục: ${((t1 - t0) / 1000).toFixed(1)}s`);
      const p = await parseChanged(db, root, tree, log, !!opts.force);
      const t2 = Date.now();
      log(`  đọc lại ${p.parsed} file thay đổi, xoá ${p.removed}: ${((t2 - t1) / 1000).toFixed(1)}s`);
      const docs = new Map<string, DocInfo>();
      for (const r of db.prepare("SELECT * FROM docs WHERE root_id = ?").all(root.id) as unknown as DocRowRaw[]) docs.set(r.path, toDocInfo(r));
      const build = buildCatalog(tree, (rel) => docs.get(rel), { rootId: root.id, rootAbs: root.abs, manifestsDir: getManifestsDir() });
      writeCatalog(db, root.id, build);
      const t3 = Date.now();
      const byStatus: Record<string, number> = {};
      for (const c of build.courses) byStatus[c.status] = (byStatus[c.status] ?? 0) + 1;
      const issues: Record<string, number> = {};
      for (const i of build.issues) issues[i.code] = (issues[i.code] ?? 0) + 1;
      const stats: ScanStats = {
        root: root.id,
        mdFiles: p.mdFiles,
        parsed: p.parsed,
        removed: p.removed,
        domains: build.domains.length,
        categories: build.categories.length,
        courses: build.courses.length,
        modules: build.modules.length,
        lessons: build.lessons.filter((l) => l.kind === "lesson").length,
        resources: build.lessons.filter((l) => l.kind !== "lesson").length,
        questions: build.courses.reduce((s, c) => s + c.questionCount, 0),
        gradable: build.courses.reduce((s, c) => s + c.gradableCount, 0),
        byStatus,
        issues,
        skipped: build.skipped.length,
        ms: { walk: t1 - t0, parse: t2 - t1, build: t3 - t2, total: t3 - t0 },
      };
      results.push(stats);
      log(`  catalog: ${stats.domains} lĩnh vực, ${stats.categories} chuyên ngành, ${stats.courses} khóa, ${stats.modules} module, ${stats.lessons} bài (${((t3 - t2) / 1000).toFixed(1)}s)`);
    }
    setMeta(db, "last_scan", new Date().toISOString());
    setMeta(db, "last_scan_stats", JSON.stringify(results));
    db.exec("PRAGMA wal_checkpoint(TRUNCATE)");
  } finally {
    db.close();
  }
  return results;
}
