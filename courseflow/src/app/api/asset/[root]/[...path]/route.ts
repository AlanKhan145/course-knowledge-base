// Serves images/media referenced by lessons, strictly inside a configured content root.
import fs from "node:fs";
import path from "node:path";
import { Readable } from "node:stream";
import type { NextRequest } from "next/server";
import { resolveInside } from "@/lib/content/config";
import { rootAbs } from "@/lib/content/repository";

export const dynamic = "force-dynamic";

const TYPES: Record<string, string> = {
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".gif": "image/gif", ".webp": "image/webp", ".avif": "image/avif",
  ".svg": "image/svg+xml", ".bmp": "image/bmp", ".ico": "image/x-icon",
  ".mp4": "video/mp4", ".webm": "video/webm", ".ogv": "video/ogg", ".mov": "video/quicktime",
  ".mp3": "audio/mpeg", ".wav": "audio/wav", ".ogg": "audio/ogg", ".m4a": "audio/mp4", ".flac": "audio/flac",
  ".pdf": "application/pdf", ".txt": "text/plain; charset=utf-8", ".csv": "text/csv; charset=utf-8", ".json": "application/json; charset=utf-8",
  ".ipynb": "application/json; charset=utf-8", ".py": "text/plain; charset=utf-8", ".js": "text/plain; charset=utf-8", ".ts": "text/plain; charset=utf-8",
  ".mmd": "text/plain; charset=utf-8", ".md": "text/plain; charset=utf-8", ".yaml": "text/plain; charset=utf-8", ".yml": "text/plain; charset=utf-8", ".zip": "application/zip",
};

export async function GET(req: NextRequest, ctx: { params: Promise<{ root: string; path: string[] }> }) {
  const { root, path: parts } = await ctx.params;
  const base = rootAbs(decodeURIComponent(root));
  if (!base) return new Response("Not found", { status: 404 });
  const rel = parts.map((p) => decodeURIComponent(p)).join("/");
  const abs = resolveInside(base, rel);
  const type = TYPES[path.extname(rel).toLowerCase()];
  if (!abs || !type) return new Response("Forbidden", { status: 403 });
  let st: fs.Stats;
  try {
    st = fs.statSync(abs);
    if (!st.isFile()) throw new Error("not a file");
  } catch {
    return new Response("Not found", { status: 404 });
  }
  const headers: Record<string, string> = {
    "Content-Type": type,
    "Cache-Control": "private, max-age=3600",
    "Accept-Ranges": "bytes",
    // SVGs from notes must never run scripts.
    "Content-Security-Policy": "default-src 'none'; img-src 'self' data:; style-src 'unsafe-inline'; sandbox",
  };
  const range = req.headers.get("range");
  if (range && /^bytes=\d*-\d*$/.test(range)) {
    const [s, e] = range.slice(6).split("-");
    const start = s ? Number(s) : 0;
    const end = e ? Math.min(Number(e), st.size - 1) : st.size - 1;
    if (start > end || start >= st.size) return new Response(null, { status: 416, headers: { "Content-Range": `bytes */${st.size}` } });
    const stream = Readable.toWeb(fs.createReadStream(abs, { start, end })) as ReadableStream;
    return new Response(stream, { status: 206, headers: { ...headers, "Content-Range": `bytes ${start}-${end}/${st.size}`, "Content-Length": String(end - start + 1) } });
  }
  const stream = Readable.toWeb(fs.createReadStream(abs)) as ReadableStream;
  return new Response(stream, { headers: { ...headers, "Content-Length": String(st.size) } });
}
