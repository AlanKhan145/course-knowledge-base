// Runtime configuration. Content roots come from environment variables, never hard-coded.
//   COURSEFLOW_CONTENT_ROOTS  one or more folders separated by ";" (Windows) or the OS path delimiter
//   COURSEFLOW_CONTENT_ROOT   single folder (fallback)
//   COURSEFLOW_DATA_DIR       where catalog.db lives (default: ./.data)
//   COURSEFLOW_MANIFESTS_DIR  central manifest overrides (default: ./manifests)
// Default content root: "../Khóa học" next to this app (Git Repository Mode / local clone).
import path from "node:path";
import fs from "node:fs";
import { slugify } from "./text.ts";

export interface ContentRoot {
  id: string;
  abs: string;
}

function appRoot(): string {
  return process.env.COURSEFLOW_APP_ROOT ?? process.cwd();
}

export function getContentRoots(): ContentRoot[] {
  const raw = process.env.COURSEFLOW_CONTENT_ROOTS ?? process.env.COURSEFLOW_CONTENT_ROOT ?? "";
  const list = raw
    .split(/;|\n/)
    .map((s) => s.trim())
    .filter(Boolean);
  const dirs = list.length ? list : [path.resolve(appRoot(), "..", "Khóa học")];
  const used = new Set<string>();
  return dirs.map((d) => {
    const abs = path.resolve(appRoot(), d);
    let id = slugify(path.basename(abs)) || "root";
    let n = 2;
    while (used.has(id)) id = `${slugify(path.basename(abs))}-${n++}`;
    used.add(id);
    return { id, abs };
  });
}

export function getDataDir(): string {
  const d = path.resolve(appRoot(), process.env.COURSEFLOW_DATA_DIR ?? ".data");
  fs.mkdirSync(d, { recursive: true });
  return d;
}

export function getManifestsDir(): string {
  return path.resolve(appRoot(), process.env.COURSEFLOW_MANIFESTS_DIR ?? "manifests");
}

export function getDbPath(): string {
  return path.join(getDataDir(), "catalog.db");
}

/**
 * Resolve a path inside a content root, refusing anything that escapes it
 * (path traversal, absolute paths, drive letters, NUL bytes).
 */
export function resolveInside(rootAbs: string, rel: string): string | null {
  if (!rel || rel.includes("\0")) return null;
  const cleaned = rel.replace(/\\/g, "/");
  if (/^[a-zA-Z]:/.test(cleaned) || cleaned.startsWith("/")) return null;
  const abs = path.resolve(rootAbs, cleaned);
  const relBack = path.relative(rootAbs, abs);
  if (relBack === "" || relBack.startsWith("..") || path.isAbsolute(relBack)) return relBack === "" ? abs : null;
  return abs;
}
