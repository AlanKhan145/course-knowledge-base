import { NextResponse, type NextRequest } from "next/server";
import { lessonMtimes } from "@/lib/content/repository";

export const dynamic = "force-dynamic";

/** POST { ids: string[] } → current file mtime + titles, to flag files changed since a review mark. */
export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => ({}))) as { ids?: unknown };
  const ids = Array.isArray(body.ids) ? body.ids.filter((x): x is string => typeof x === "string").slice(0, 5000) : [];
  return NextResponse.json(lessonMtimes(ids));
}
