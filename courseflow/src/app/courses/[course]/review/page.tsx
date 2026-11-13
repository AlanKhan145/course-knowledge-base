import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCourse, getCourseReviewRows } from "@/lib/content/repository";
import { CourseReviewTable } from "@/features/review/CourseReviewTable";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ course: string }> }): Promise<Metadata> {
  const { course } = await params;
  return { title: `Biên tập — ${getCourse(decodeURIComponent(course))?.title ?? "Khóa học"}` };
}

export default async function CourseReviewPage({ params }: { params: Promise<{ course: string }> }) {
  const { course: slug } = await params;
  const course = getCourse(decodeURIComponent(slug));
  if (!course) notFound();
  return <CourseReviewTable course={{ id: course.id, slug: course.slug, title: course.title }} rows={getCourseReviewRows(course.id)} />;
}
