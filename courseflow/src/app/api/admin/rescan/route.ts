// Local Mode: re-scan the library.
//   POST                 → full incremental scan in a background process (slow on big libraries)
//   POST ?course=<slug>  → re-scan one course in-process (seconds) and return its new counts
import { spawn } from "node:child_process";
import path from "node:path";
import { NextResponse, type NextRequest } from "next/server";
import { getCatalogStats, localEditingEnabled } from "@/lib/content/repository";
import { runCourseScan } from "@/lib/content/scanner";

export const dynamic = "force-dynamic";

let running: { startedAt: number } | null = null;

export function GET() {
  return NextResponse.json({ running: !!running, startedAt: running?.startedAt ?? null, lastScan: getCatalogStats().lastScan });
}

export async function POST(req: NextRequest) {
  if (!localEditingEnabled()) return NextResponse.json({ error: "Chỉ dùng ở Local Mode" }, { status: 403 });
  const course = req.nextUrl.searchParams.get("course");
  if (course) {
    try {
      const r = await runCourseScan(course, { log: () => undefined });
      return NextResponse.json({ ok: true, ...r });
    } catch (e) {
      return NextResponse.json({ error: (e as Error).message }, { status: 404 });
    }
  }
  if (running) return NextResponse.json({ running: true, startedAt: running.startedAt });
  running = { startedAt: Date.now() };
  const child = spawn(process.execPath, ["--no-warnings", path.join(process.cwd(), "tools", "course-scanner", "scan.ts")], {
    cwd: process.cwd(),
    env: process.env,
    stdio: "ignore",
    windowsHide: true,
  });
  child.on("exit", () => (running = null));
  child.on("error", () => (running = null));
  return NextResponse.json({ running: true, startedAt: running.startedAt });
}
