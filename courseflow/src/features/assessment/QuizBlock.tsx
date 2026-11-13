"use client";
import { ClipboardCheck } from "lucide-react";
import type { Quiz } from "@/lib/assessment/schema";
import { QuizRunner } from "./QuizRunner";

/** Review quiz embedded in a lesson (practice mode: answers revealed only after "Nộp bài"). */
export function QuizBlock({ quiz, lessonId, courseId, heading = "h2" }: { quiz: Quiz; lessonId: string; courseId: string; heading?: "h2" | "h3" }) {
  const H = heading;
  return (
    <div className="not-prose my-10 font-sans" data-quiz={quiz.id}>
      <H className="mb-3 flex items-center gap-2 text-[1.35rem] font-bold tracking-tight text-text">
        <span className="flex size-8 items-center justify-center rounded-xl bg-accent-soft text-accent">
          <ClipboardCheck className="size-4.5" />
        </span>
        {quiz.title}
      </H>
      <QuizRunner quiz={quiz} courseId={courseId} lessonId={lessonId} scope="lesson" mode="practice" />
    </div>
  );
}
