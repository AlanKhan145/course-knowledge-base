import { NextResponse, type NextRequest } from "next/server";
import { questionsForCards } from "@/lib/assessment/pool";

export const dynamic = "force-dynamic";

/** POST { keys: string[] } → the questions behind spaced-repetition cards that are due. */
export async function POST(req: NextRequest) {
  const b = (await req.json().catch(() => ({}))) as { keys?: unknown };
  const keys = Array.isArray(b.keys) ? b.keys.filter((x): x is string => typeof x === "string") : [];
  return NextResponse.json(await questionsForCards(keys));
}
