import type { Metadata } from "next";
import { listCourses, listDomains } from "@/lib/content/repository";
import { Explore } from "@/features/catalog/Explore";
import { EmptyCatalog } from "@/components/EmptyCatalog";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Khám phá khóa học" };

export default function ExplorePage() {
  const courses = listCourses();
  if (!courses.length) return <EmptyCatalog />;
  return <Explore courses={courses} domains={listDomains()} />;
}
