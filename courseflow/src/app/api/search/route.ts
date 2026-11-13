import { NextResponse, type NextRequest } from "next/server";
import { search } from "@/lib/content/repository";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams;
  const q = (sp.get("q") ?? "").slice(0, 200);
  const res = await search(q, {
    limit: Number(sp.get("limit") ?? 20) || 20,
    courseId: sp.get("course") ?? undefined,
    domainId: sp.get("domain") ?? undefined,
    snippets: sp.get("snippets") !== "0",
  });
  return NextResponse.json(res);
}
