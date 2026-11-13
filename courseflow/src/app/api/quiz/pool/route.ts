import { NextResponse, type NextRequest } from "next/server";
import { buildPool } from "@/lib/assessment/pool";

export const dynamic = "force-dynamic";

/** POST { lessonIds, count, seed, includeSelfGraded } → random questions drawn from those lessons. */
export async function POST(req: NextRequest) {
  const b = (await req.json().catch(() => ({}))) as Record<string, unknown>;
  const lessonIds = Array.isArray(b.lessonIds) ? b.lessonIds.filter((x): x is string => typeof x === "string") : [];
  const res = await buildPool({
    lessonIds,
    count: Number(b.count) || 10,
    seed: Number(b.seed) || Date.now() % 1e9,
    includeSelfGraded: b.includeSelfGraded === true,
  });
  return NextResponse.json(res);
}
