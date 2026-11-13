"use client";
import { useRouter } from "next/navigation";
import type { Question } from "@/lib/assessment/schema";
import type { QuizAttempt } from "@/features/progress/store";
import { QuizRunner } from "./QuizRunner";

export function CourseExam(p: {
  quizId: string;
  title: string;
  courseId: string;
  moduleId?: string;
  scope: QuizAttempt["scope"];
  mode: "practice" | "exam";
  timeLimit?: number;
  items: { question: Question; origin: { title: string; href: string } }[];
  seed: number;
}) {
  const router = useRouter();
  return (
    <div className="mt-6">
      <QuizRunner
        key={p.seed}
        quiz={{ id: p.quizId, title: p.title, questions: p.items.map((i) => i.question), timeLimit: p.timeLimit, shuffleQuestions: true }}
        courseId={p.courseId}
        moduleId={p.moduleId}
        scope={p.scope}
        mode={p.mode}
        timeLimit={p.timeLimit}
        origins={Object.fromEntries(p.items.map((i) => [i.question.id, i.origin]))}
        onRetake={() => router.push(`?seed=${Math.floor(Math.random() * 1e9)}`)}
      />
    </div>
  );
}
