// SQLite catalog (node:sqlite, no native addon). Two layers:
//   docs + docs_fts  → per-file parse cache and full-text index (incremental by mtime/size)
//   domains … lessons → the catalog view, rebuilt from the cache on every scan (cheap)
import { DatabaseSync } from "node:sqlite";

export const SCHEMA_VERSION = 3;

export function openDatabase(file: string, opts: { readOnly?: boolean } = {}): DatabaseSync {
  const db = new DatabaseSync(file, { readOnly: opts.readOnly ?? false });
  if (!opts.readOnly) {
    db.exec("PRAGMA journal_mode = WAL; PRAGMA synchronous = NORMAL; PRAGMA foreign_keys = OFF;");
  }
  db.exec("PRAGMA busy_timeout = 5000;");
  return db;
}

export function migrate(db: DatabaseSync): void {
  db.exec(`CREATE TABLE IF NOT EXISTS meta (key TEXT PRIMARY KEY, value TEXT)`);
  const row = db.prepare("SELECT value FROM meta WHERE key = 'schema_version'").get() as { value?: string } | undefined;
  if (row?.value && Number(row.value) !== SCHEMA_VERSION) {
    db.exec(`DROP TABLE IF EXISTS docs; DROP TABLE IF EXISTS docs_fts; DROP TABLE IF EXISTS domains; DROP TABLE IF EXISTS categories;
             DROP TABLE IF EXISTS courses; DROP TABLE IF EXISTS modules; DROP TABLE IF EXISTS lessons; DROP TABLE IF EXISTS issues;`);
  }
  db.exec(`
    CREATE TABLE IF NOT EXISTS docs (
      rowid INTEGER PRIMARY KEY,
      root_id TEXT NOT NULL,
      path TEXT NOT NULL,            -- relative to the content root, forward slashes
      mtime INTEGER NOT NULL,
      size INTEGER NOT NULL,
      h1 TEXT, description TEXT,
      fm TEXT,                       -- JSON frontmatter
      headings TEXT,                 -- JSON [{depth,text}]
      words INTEGER, questions INTEGER, gradable INTEGER,
      has_mermaid INTEGER, has_math INTEGER, has_images INTEGER, has_code INTEGER,
      links TEXT, lang TEXT, objectives TEXT, prerequisites TEXT, source_url TEXT,
      hash TEXT,
      seen INTEGER DEFAULT 0,
      UNIQUE(root_id, path)
    );
    CREATE VIRTUAL TABLE IF NOT EXISTS docs_fts USING fts5(
      title, headings, body,
      content='', contentless_delete=1, tokenize="unicode61 remove_diacritics 2"
    );
    CREATE TABLE IF NOT EXISTS domains (
      id TEXT PRIMARY KEY, title TEXT, ord INTEGER, dir TEXT, root_id TEXT,
      course_count INTEGER, lesson_count INTEGER
    );
    CREATE TABLE IF NOT EXISTS categories (
      id TEXT PRIMARY KEY, domain_id TEXT, parent_id TEXT, title TEXT, ord INTEGER, dir TEXT,
      course_count INTEGER, level TEXT
    );
    CREATE TABLE IF NOT EXISTS courses (
      id TEXT PRIMARY KEY, slug TEXT UNIQUE, root_id TEXT, dir TEXT,
      domain_id TEXT, category_id TEXT, subcategory_id TEXT,
      title TEXT, description TEXT, language TEXT, level TEXT,
      tags TEXT, objectives TEXT, prerequisites TEXT, source_url TEXT,
      overview_path TEXT, structure TEXT,
      module_count INTEGER, lesson_count INTEGER, resource_count INTEGER,
      question_count INTEGER, gradable_count INTEGER, word_count INTEGER, est_minutes INTEGER,
      media TEXT,                    -- JSON {mermaid,math,images,code} lesson counts
      updated_at INTEGER, status TEXT, ord INTEGER
    );
    CREATE TABLE IF NOT EXISTS modules (
      id TEXT PRIMARY KEY, course_id TEXT, ord INTEGER, title TEXT, dir TEXT, overview_path TEXT,
      lesson_count INTEGER, question_count INTEGER, kind TEXT
    );
    CREATE TABLE IF NOT EXISTS lessons (
      id TEXT PRIMARY KEY, slug TEXT, course_id TEXT, module_id TEXT, ord INTEGER, group_label TEXT,
      title TEXT, description TEXT, root_id TEXT, path TEXT, kind TEXT, doc_rowid INTEGER,
      words INTEGER, questions INTEGER, gradable INTEGER, minutes INTEGER,
      has_mermaid INTEGER, has_math INTEGER, has_images INTEGER, has_code INTEGER,
      tags TEXT, lang TEXT, mtime INTEGER,
      UNIQUE(course_id, slug)
    );
    -- covering index: the incremental scan compares mtime/size without touching the wide docs rows
    CREATE INDEX IF NOT EXISTS docs_stat ON docs(root_id, path, mtime, size);
    CREATE INDEX IF NOT EXISTS lessons_course ON lessons(course_id, ord);
    CREATE INDEX IF NOT EXISTS lessons_doc ON lessons(doc_rowid);
    CREATE INDEX IF NOT EXISTS lessons_path ON lessons(root_id, path);
    CREATE INDEX IF NOT EXISTS courses_cat ON courses(category_id);
    CREATE TABLE IF NOT EXISTS issues (
      course_id TEXT, lesson_id TEXT, severity TEXT, code TEXT, message TEXT, detail TEXT
    );
    CREATE INDEX IF NOT EXISTS issues_course ON issues(course_id);
  `);
  db.prepare("INSERT OR REPLACE INTO meta(key, value) VALUES ('schema_version', ?)").run(String(SCHEMA_VERSION));
}

export function setMeta(db: DatabaseSync, key: string, value: string): void {
  db.prepare("INSERT OR REPLACE INTO meta(key, value) VALUES (?, ?)").run(key, value);
}

export function getMeta(db: DatabaseSync, key: string): string | null {
  const r = db.prepare("SELECT value FROM meta WHERE key = ?").get(key) as { value?: string } | undefined;
  return r?.value ?? null;
}
