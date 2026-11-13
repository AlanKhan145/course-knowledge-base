import { getCatalogStats, listCourses, listDomains } from "@/lib/content/repository";
import { Dashboard } from "@/features/dashboard/Dashboard";
import { EmptyCatalog } from "@/components/EmptyCatalog";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const stats = getCatalogStats();
  if (!stats.courses) return <EmptyCatalog />;
  const courses = listCourses();
  const domains = listDomains().map((d) => ({ id: d.id, title: d.title, courseCount: d.courseCount, lessonCount: d.lessonCount }));
  const recent = [...courses].sort((a, b) => b.updatedAt - a.updatedAt).slice(0, 8);
  // Richest courses per domain (most gradable questions) — used for "gợi ý theo lĩnh vực".
  const byDomain: Record<string, typeof courses> = {};
  for (const c of courses) (byDomain[c.domainId] ??= []).push(c);
  const featured = Object.fromEntries(
    Object.entries(byDomain).map(([k, list]) => [k, [...list].sort((a, b) => b.gradableCount - a.gradableCount || b.lessonCount - a.lessonCount).slice(0, 4)]),
  );
  return <Dashboard stats={stats} domains={domains} recent={recent} featured={featured} />;
}
