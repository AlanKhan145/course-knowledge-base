import { NextResponse, type NextRequest } from "next/server";
import { EditError, listBackups, readBackup, readForEdit, saveFile } from "@/lib/content/editor";

export const dynamic = "force-dynamic";

function fail(e: unknown) {
  if (e instanceof EditError) return NextResponse.json({ error: e.message }, { status: e.status });
  return NextResponse.json({ error: (e as Error).message ?? "Lỗi không xác định" }, { status: 500 });
}

/** GET ?root&path → file; &backups=1 → backup list; &backup=<id> → backup content */
export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams;
  const root = sp.get("root") ?? "";
  const rel = sp.get("path") ?? "";
  try {
    if (sp.get("backups")) return NextResponse.json(await listBackups(root, rel));
    const b = sp.get("backup");
    if (b) return NextResponse.json({ content: await readBackup(root, rel, b) });
    return NextResponse.json(await readForEdit(root, rel));
  } catch (e) {
    return fail(e);
  }
}

/** PUT { root, path, content, baseHash } → saved file (+ backup id) */
export async function PUT(req: NextRequest) {
  const b = (await req.json().catch(() => ({}))) as { root?: string; path?: string; content?: unknown; baseHash?: string | null };
  if (typeof b.content !== "string") return NextResponse.json({ error: "Thiếu nội dung" }, { status: 400 });
  try {
    return NextResponse.json(await saveFile(b.root ?? "", b.path ?? "", b.content, b.baseHash ?? null));
  } catch (e) {
    return fail(e);
  }
}
