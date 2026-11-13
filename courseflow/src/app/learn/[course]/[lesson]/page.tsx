import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { editHrefFor, getLesson, readLessonSource, relatedLessons } from "@/lib/content/repository";
import { renderLesson } from "@/lib/markdown/render";
import { ReaderShell } from "@/features/lessons/ReaderShell";
import { countWords } from "@/lib/content/text";

export const dynamic = "force-dynamic";

type Params = { course: string; lesson: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { course, lesson } = await params;
  const data = getLesson(decodeURIComponent(course), decodeURIComponent(lesson));
  return { title: data ? `${data.lesson.title} — ${data.course.title}` : "Không tìm thấy bài học" };
}

export default async function LessonPage({ params }: { params: Promise<Params> }) {
  const { course: c, lesson: l } = await params;
  const data = getLesson(decodeURIComponent(c), decodeURIComponent(l));
  if (!data) notFound();
  const { course, lesson } = data;
  const source = await readLessonSource(lesson.rootId, lesson.path);
  const rendered = source
    ? await renderLesson(source, { lessonId: lesson.id, lessonTitle: lesson.title, rootId: lesson.rootId, lessonPath: lesson.path, courseId: course.id, courseSlug: course.slug })
    : null;

  const flat = course.modules.flatMap((m) => m.lessons.map((x) => ({ ...x, moduleTitle: m.title })));
  const idx = flat.findIndex((x) => x.id === lesson.id);
  const prev = idx > 0 ? flat[idx - 1] : null;
  const next = idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : null;
  const related = lesson.kind === "lesson" ? relatedLessons(lesson, 5) : [];
  const questionCount = rendered?.quizzes.reduce((s, q) => s + q.questions.length, 0) ?? 0;

  return (
    <ReaderShell
      course={{ id: course.id, slug: course.slug, title: course.title, domainTitle: course.domainTitle, categoryTitle: course.categoryTitle, modules: course.modules, resources: course.resources, lessonCount: course.lessonCount, gradableCount: course.gradableCount }}
      lesson={{ ...lesson, words: source ? countWords(source) : lesson.words }}
      toc={rendered?.toc ?? []}
      prev={prev ? { slug: prev.slug, title: prev.title } : null}
      next={next ? { slug: next.slug, title: next.title } : null}
      position={idx >= 0 ? { index: idx + 1, total: flat.length } : null}
      related={related}
      questionCount={questionCount}
      editHref={editHrefFor(lesson.rootId, lesson.path)}
      relPath={lesson.path}
    >
      {rendered ? (
        rendered.body
      ) : (
        <div className="rounded-2xl border border-danger/40 bg-danger-soft p-6 text-danger">
          Không đọc được file bài học. File có thể đã bị đổi tên hoặc xóa — hãy chạy lại <code>npm run scan</code>.
        </div>
      )}
    </ReaderShell>
  );
}
