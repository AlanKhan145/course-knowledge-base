// In-app Markdown editing (Local Mode only).
// Safety: optimistic concurrency (base hash), a timestamped backup of the previous version before
// every write, atomic write (temp file + rename), and instant re-index of that one file.
import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";
import { getDataDir, getDbPath, resolveInside } from "./config.ts";
import { migrate, openDatabase } from "./db.ts";
import { sha1Hex } from "./hash.ts";
import { extractDocMeta } from "./lesson-meta.ts";
import { foldVi, readingMinutes } from "./text.ts";
import { localEditingEnabled, rootAbs } from "./repository.ts";

export interface EditableFile {
  rootId: string;
  path: string;
  content: string;
  hash: string;
  mtime: number;
}

export interface BackupEntry {
  id: string; // file name inside the backup folder
  at: number;
  size: number;
}

function absFor(rootId: string, rel: string): string {
  if (!localEditingEnabled()) throw new EditError(403, "Chỉnh sửa chỉ bật ở Local Mode");
  const root = rootAbs(rootId);
  const abs = root ? resolveInside(root, rel) : null;
  if (!abs || !/\.(md|markdown)$/i.test(abs)) throw new EditError(400, "Đường dẫn không hợp lệ");
  return abs;
}

export class EditError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
  }
}

function backupDir(rootId: string, rel: string): string {
  return path.join(getDataDir(), "backups", rootId, ...rel.split("/"));
}

export async function readForEdit(rootId: string, rel: string): Promise<EditableFile> {
  const abs = absFor(rootId, rel);
  const content = await fsp.readFile(abs, "utf8");
  const st = await fsp.stat(abs);
  return { rootId, path: rel, content, hash: sha1Hex(content), mtime: Math.floor(st.mtimeMs) };
}

export async function saveFile(rootId: string, rel: string, content: string, baseHash: string | null): Promise<EditableFile & { backup: string | null }> {
  const abs = absFor(rootId, rel);
  if (content.length > 5_000_000) throw new EditError(413, "File quá lớn");
  let current: string | null = null;
  try {
    current = await fsp.readFile(abs, "utf8");
  } catch {
    current = null;
  }
  if (current !== null && baseHash && sha1Hex(current) !== baseHash) {
    throw new EditError(409, "File đã bị thay đổi ở nơi khác kể từ lúc bạn mở. Hãy tải lại hoặc xem khác biệt trước khi lưu đè.");
  }
  let backup: string | null = null;
  if (current !== null) {
    if (current === content) return { ...(await readForEdit(rootId, rel)), backup: null };
    const dir = backupDir(rootId, rel);
    await fsp.mkdir(dir, { recursive: true });
    backup = `${new Date().toISOString().replace(/[:.]/g, "-")}.md`;
    await fsp.writeFile(path.join(dir, backup), current, "utf8");
  }
  // Keep the original line-ending style.
  const eol = current && current.includes("\r\n") ? "\r\n" : "\n";
  const out = eol === "\r\n" ? content.replace(/\r?\n/g, "\r\n") : content.replace(/\r\n/g, "\n");
  const tmp = `${abs}.courseflow-tmp`;
  await fsp.writeFile(tmp, out, "utf8");
  await fsp.rename(tmp, abs);
  await reindexFile(rootId, rel, out);
  return { ...(await readForEdit(rootId, rel)), backup };
}

export async function listBackups(rootId: string, rel: string): Promise<BackupEntry[]> {
  absFor(rootId, rel);
  const dir = backupDir(rootId, rel);
  let names: string[] = [];
  try {
    names = await fsp.readdir(dir);
  } catch {
    return [];
  }
  const out: BackupEntry[] = [];
  for (const n of names.filter((x) => x.endsWith(".md"))) {
    const st = await fsp.stat(path.join(dir, n));
    out.push({ id: n, at: Math.floor(st.mtimeMs), size: st.size });
  }
  return out.sort((a, b) => b.at - a.at);
}

export async function readBackup(rootId: string, rel: string, id: string): Promise<string> {
  absFor(rootId, rel);
  if (!/^[\w-]+\.md$/.test(id)) throw new EditError(400, "Bản sao lưu không hợp lệ");
  return fsp.readFile(path.join(backupDir(rootId, rel), id), "utf8");
}

/** Update the catalog for one file right away (no full rescan needed). */
export async function reindexFile(rootId: string, rel: string, text: string): Promise<void> {
  const db = openDatabase(getDbPath());
  migrate(db);
  try {
    const abs = absFor(rootId, rel);
    const st = fs.statSync(abs);
    const m = extractDocMeta(text);
    const row = db.prepare("SELECT rowid FROM docs WHERE root_id = ? AND path = ?").get(rootId, rel) as { rowid: number } | undefined;
    if (!row) return; // new file: picked up by the next `npm run scan`
    db.exec("BEGIN");
    db.prepare(
      `UPDATE docs SET mtime=?, size=?, h1=?, description=?, fm=?, headings=?, words=?, questions=?, gradable=?, has_mermaid=?, has_math=?,
       has_images=?, has_code=?, links=?, lang=?, objectives=?, prerequisites=?, source_url=?, hash=? WHERE rowid=?`,
    ).run(
      Math.floor(st.mtimeMs), st.size, m.h1, m.description, JSON.stringify(m.fm), JSON.stringify(m.headings), m.words, m.questions, m.gradable,
      +m.hasMermaid, +m.hasMath, +m.hasImages, +m.hasCode, JSON.stringify(m.links), m.lang, JSON.stringify(m.objectives),
      JSON.stringify(m.prerequisites), m.sourceUrl, sha1Hex(text), row.rowid,
    );
    db.prepare("DELETE FROM docs_fts WHERE rowid = ?").run(row.rowid);
    db.prepare("INSERT INTO docs_fts (rowid, title, headings, body) VALUES (?, ?, ?, ?)").run(
      row.rowid,
      foldVi([m.fm.title, m.h1, path.posix.basename(rel)].filter(Boolean).join(" ")),
      foldVi(m.headings.map((h) => h.text).join(" · ")),
      m.searchText,
    );
    const title = m.fm.title ?? m.h1;
    db.prepare(
      `UPDATE lessons SET ${title ? "title = ?," : ""} description = ?, words = ?, questions = ?, gradable = ?, minutes = ?, has_mermaid = ?, has_math = ?,
       has_images = ?, has_code = ?, mtime = ? WHERE doc_rowid = ?`,
    ).run(
      ...((title ? [title] : []) as string[]),
      m.description,
      m.words,
      m.questions,
      m.gradable,
      typeof m.fm.duration === "number" ? m.fm.duration : readingMinutes(m.words),
      +m.hasMermaid,
      +m.hasMath,
      +m.hasImages,
      +m.hasCode,
      Math.floor(st.mtimeMs),
      row.rowid,
    );
    db.exec("COMMIT");
  } catch (e) {
    try {
      db.exec("ROLLBACK");
    } catch {
      /* not in a transaction */
    }
    throw e;
  } finally {
    db.close();
  }
}
