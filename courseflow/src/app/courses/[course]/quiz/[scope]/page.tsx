import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { getCourse } from "@/lib/content/repository";
import { buildPool } from "@/lib/assessment/pool";
import { CourseExam } from "@/features/assessment/CourseExam";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Bài kiểm tra" };

/** Module review (practice) or final exam (timed) drawn from the course's own questions. */
export default async function CourseQuizPage({ params, searchParams }: { params: Promise<{ course: string; scope: string }>; searchParams: Promise<{ seed?: string }> }) {
  const { course: slug, scope } = await params;
  const { seed: seedParam } = await searchParams;
  const course = getCourse(decodeURIComponent(slug));
  if (!course) notFound();
  const isFinal = scope === "final";
  const mod = isFinal ? null : course.modules.find((m) => m.id === decodeURIComponent(scope));
  if (!isFinal && !mod) notFound();
  const lessons = isFinal ? course.modules.flatMap((m) => m.lessons) : mod!.lessons;
  const seed = Number(seedParam) || 1;
  const count = isFinal ? 20 : 10;
  const pool = await buildPool({ lessonIds: lessons.filter((l) => l.gradable).map((l) => l.id), count, seed });
  const title = isFinal ? `Kiểm tra cuối khóa — ${course.title}` : `Ôn tập module: ${mod!.title}`;
  return (
    <main id="main" className="mx-auto max-w-3xl px-4 pt-6 pb-20 sm:px-6">
      <Link href={`/courses/${course.slug}`} className="inline-flex items-center gap-1 text-sm text-muted hover:text-text"><ChevronLeft className="size-4" /> {course.title}</Link>
      <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h1>
      <p className="mt-1 text-sm text-muted">
        {pool.questions.length} câu chọn ngẫu nhiên từ {pool.available.toLocaleString("vi-VN")} câu có đáp án trong {isFinal ? "khóa" : "module"}.
        {isFinal ? " Chế độ kiểm tra: có giới hạn thời gian, xáo câu, chỉ hiện đáp án sau khi nộp." : " Chế độ luyện tập."}
      </p>
      {pool.questions.length ? (
        <CourseExam
          quizId={`${course.id}:${isFinal ? "final" : mod!.id}`}
          title={title}
          courseId={course.id}
          moduleId={mod?.id}
          scope={isFinal ? "course" : "module"}
          mode={isFinal ? "exam" : "practice"}
          timeLimit={isFinal ? Math.max(5, pool.questions.length) * 60 : undefined}
          items={pool.questions.map((q) => ({ question: q.question, origin: { title: q.lessonTitle, href: q.href } }))}
          seed={seed}
        />
      ) : (
        <p className="mt-8 rounded-2xl border border-dashed border-border-strong p-8 text-center text-muted">Phần này chưa có câu hỏi có đáp án.</p>
      )}
    </main>
  );
}
