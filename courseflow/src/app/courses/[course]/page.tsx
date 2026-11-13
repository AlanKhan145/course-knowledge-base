import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCourse } from "@/lib/content/repository";
import { CourseDetailView } from "@/features/courses/CourseDetailView";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ course: string }> }): Promise<Metadata> {
  const { course } = await params;
  const c = getCourse(decodeURIComponent(course));
  return c ? { title: c.title, description: c.description ?? undefined } : { title: "Không tìm thấy khóa học" };
}

export default async function CoursePage({ params }: { params: Promise<{ course: string }> }) {
  const { course: slug } = await params;
  const course = getCourse(decodeURIComponent(slug));
  if (!course) notFound();
  return <CourseDetailView course={course} />;
}
