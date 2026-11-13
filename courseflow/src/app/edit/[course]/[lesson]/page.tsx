import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { editHrefFor, getLesson, localEditingEnabled } from "@/lib/content/repository";
import { MarkdownEditor } from "@/features/editor/MarkdownEditor";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Soạn bài" };

export default async function EditPage({ params }: { params: Promise<{ course: string; lesson: string }> }) {
  const { course: c, lesson: l } = await params;
  if (!localEditingEnabled()) notFound();
  const data = getLesson(decodeURIComponent(c), decodeURIComponent(l));
  if (!data) notFound();
  const { course, lesson } = data;
  return (
    <MarkdownEditor
      rootId={lesson.rootId}
      path={lesson.path}
      lessonId={lesson.id}
      lessonSlug={lesson.slug}
      lessonTitle={lesson.title}
      courseId={course.id}
      courseSlug={course.slug}
      courseTitle={course.title}
      editHref={editHrefFor(lesson.rootId, lesson.path)}
    />
  );
}
