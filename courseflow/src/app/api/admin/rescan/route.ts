// Local Mode: start an incremental scan in a background process (never blocks the web server).
import { spawn } from "node:child_process";
import path from "node:path";
import { NextResponse } from "next/server";
import { getCatalogStats, localEditingEnabled } from "@/lib/content/repository";

export const dynamic = "force-dynamic";

let running: { startedAt: number } | null = null;

export function GET() {
  return NextResponse.json({ running: !!running, startedAt: running?.startedAt ?? null, lastScan: getCatalogStats().lastScan });
}

export function POST() {
  if (!localEditingEnabled()) return NextResponse.json({ error: "Chỉ dùng ở Local Mode" }, { status: 403 });
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
