import { NextResponse, type NextRequest } from "next/server";
import { getCourseLessonIds, getCourseSummaries } from "@/lib/content/repository";

export const dynamic = "force-dynamic";

/** GET /api/courses?ids=a,b → summaries + real lesson ids (for exact progress on the dashboard). */
export function GET(req: NextRequest) {
  const ids = (req.nextUrl.searchParams.get("ids") ?? "").split(",").map((s) => s.trim()).filter(Boolean).slice(0, 100);
  return NextResponse.json({ courses: getCourseSummaries(ids), lessonIds: getCourseLessonIds(ids) });
}
