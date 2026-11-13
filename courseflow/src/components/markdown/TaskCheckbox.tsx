"use client";
import { setChecklist, useLearner } from "@/features/progress/store";

/** GFM task-list checkbox that the learner can tick; state is kept per lesson. */
export function TaskCheckbox({ lessonId, index, defaultChecked }: { lessonId: string; index: number; defaultChecked: boolean }) {
  const saved = useLearner((s) => s.checklist[lessonId]?.[index]);
  const checked = saved ?? defaultChecked;
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => setChecklist(lessonId, index, e.target.checked)}
      className="mt-[0.45em] size-4 shrink-0 cursor-pointer rounded accent-[var(--accent)]"
      aria-label="Đánh dấu mục đã làm"
    />
  );
}
