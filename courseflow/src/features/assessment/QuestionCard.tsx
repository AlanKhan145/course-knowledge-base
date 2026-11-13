"use client";
import { ArrowDown, ArrowUp, Check, CircleHelp, X } from "lucide-react";
import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { grade, seededShuffle, type GradeResult, type Response } from "@/lib/assessment/grade";
import { QUESTION_TYPE_LABEL, type Question } from "@/lib/assessment/schema";
import { InlineMd } from "./InlineMd";

interface Props {
  q: Question;
  index: number;
  response: Response;
  onChange: (r: Response) => void;
  submitted: boolean;
  seed: number;
  shuffleOptions?: boolean;
  showFeedback: boolean;
  origin?: { title: string; href: string; sub?: string };
  confidence?: 1 | 2 | 3;
  onConfidence?: (c: 1 | 2 | 3) => void;
}

const DIFF: Record<string, string> = { easy: "Dễ", medium: "Trung bình", hard: "Khó" };
const CONF: [1 | 2 | 3, string][] = [
  [1, "Đoán"],
  [2, "Khá chắc"],
  [3, "Chắc chắn"],
];

export function QuestionCard({ q, index, response, onChange, submitted, seed, shuffleOptions, showFeedback, origin, confidence, onConfidence }: Props) {
  const result: GradeResult | null = submitted ? grade(q, response) : null;
  const gradable = q.type !== "short_answer" || !!q.accept?.length;
  const confidentlyWrong = submitted && showFeedback && confidence === 3 && result?.counted && !result.correct;
  const status = !result || !showFeedback ? null : result.needsSelfGrade ? "pending" : !result.counted ? "ungraded" : result.correct ? "correct" : result.score > 0 ? "partial" : "wrong";
  return (
    <article
      className={cn(
        "rounded-2xl border bg-surface p-4 transition-colors sm:p-5",
        status === "correct" && "border-success/50",
        status === "wrong" && "border-danger/45",
        status === "partial" && "border-amber/55",
        (!status || status === "pending" || status === "ungraded") && "border-border",
      )}
      aria-labelledby={`${q.id}-title`}
    >
      <header className="mb-3 flex flex-wrap items-center gap-2 text-xs">
        <span className="inline-flex size-6 items-center justify-center rounded-full bg-surface-2 font-semibold text-text tabular-nums">{index + 1}</span>
        <span className="text-muted">{q.type === "single" && q.code ? "Đọc code" : QUESTION_TYPE_LABEL[q.type]}</span>
        {q.difficulty ? <span className="rounded-full bg-surface-2 px-2 py-0.5 text-muted">{DIFF[q.difficulty]}</span> : null}
        {status ? <StatusPill status={status} score={result?.score ?? 0} /> : null}
      </header>
      <div id={`${q.id}-title`} className="font-sans text-[1rem] leading-relaxed font-medium text-text">
        {q.type === "fill_blank" ? <FillPrompt q={q} response={response} onChange={onChange} disabled={submitted} showFeedback={showFeedback} /> : <InlineMd text={q.prompt} />}
      </div>
      {q.code ? (
        <pre className="mt-3 overflow-x-auto rounded-xl border border-border bg-[var(--code-bg)] p-3 font-mono text-[0.82rem] leading-relaxed text-text-2">
          <code>{q.code}</code>
        </pre>
      ) : null}
      <div className="mt-4">
        <Inputs q={q} response={response} onChange={onChange} submitted={submitted} seed={seed} shuffleOptions={shuffleOptions} showFeedback={showFeedback} />
      </div>
      {onConfidence && gradable && !submitted ? (
        <div className="mt-3 flex flex-wrap items-center gap-1.5 text-xs" role="radiogroup" aria-label="Mức tự tin">
          <span className="mr-1 text-muted">Mức tự tin:</span>
          {CONF.map(([c, label]) => (
            <button
              key={c}
              type="button"
              role="radio"
              aria-checked={confidence === c}
              onClick={() => onConfidence(c)}
              className={cn("rounded-full border px-2.5 py-1 transition", confidence === c ? "border-accent bg-accent-soft font-semibold text-accent-ink" : "border-border text-muted hover:border-border-strong")}
            >
              {label}
            </button>
          ))}
        </div>
      ) : null}
      {confidentlyWrong ? (
        <p className="mt-3 rounded-lg bg-danger-soft px-3 py-2 text-xs font-medium text-danger">Sai mà chắc chắn — đây là chỗ hiểu nhầm đáng xem lại nhất. Câu này sẽ được hỏi lại sớm.</p>
      ) : null}
      {submitted && showFeedback ? <Feedback q={q} response={response} onChange={onChange} result={result!} /> : null}
      {origin ? (
        <p className="mt-3 truncate border-t border-border pt-2 text-xs text-muted">
          Từ bài:{" "}
          <a href={origin.href} className="font-medium text-accent hover:underline">
            {origin.title}
          </a>
          {origin.sub ? <span> · {origin.sub}</span> : null}
        </p>
      ) : null}
    </article>
  );
}

function StatusPill({ status, score }: { status: string; score: number }) {
  const map: Record<string, [string, string]> = {
    correct: ["Đúng", "bg-success-soft text-success"],
    wrong: ["Sai", "bg-danger-soft text-danger"],
    partial: [`Đúng một phần (${Math.round(score * 100)}%)`, "bg-amber-soft text-amber"],
    pending: ["Tự đánh giá", "bg-info-soft text-info"],
    ungraded: ["Không chấm điểm", "bg-surface-2 text-muted"],
  };
  const [label, cls] = map[status];
  return <span className={cn("ml-auto rounded-full px-2.5 py-0.5 font-semibold", cls)}>{label}</span>;
}

function optionState(selected: boolean, isCorrect: boolean, submitted: boolean, showFeedback: boolean) {
  if (!submitted || !showFeedback) return selected ? "selected" : "idle";
  if (isCorrect) return selected ? "correct" : "missed";
  return selected ? "wrong" : "idle";
}

const OPTION_CLS: Record<string, string> = {
  idle: "border-border hover:border-border-strong hover:bg-surface-2/60",
  selected: "border-accent bg-accent-soft/70 ring-1 ring-accent/40",
  correct: "border-success bg-success-soft",
  missed: "border-success/60 border-dashed",
  wrong: "border-danger bg-danger-soft",
};

function Inputs({ q, response, onChange, submitted, seed, shuffleOptions, showFeedback }: Omit<Props, "index">) {
  const options = useMemo(() => {
    if (q.type !== "single" && q.type !== "multiple") return [];
    return shuffleOptions ? seededShuffle(q.options, seed + q.id.length) : q.options;
  }, [q, seed, shuffleOptions]);

  if (q.type === "single" || q.type === "multiple") {
    const multi = q.type === "multiple";
    const picked = new Set(response.type === "multiple" ? response.value : response.type === "single" && response.value ? [response.value] : []);
    const correct = new Set(q.type === "multiple" ? q.answer : [q.answer]);
    return (
      <fieldset disabled={submitted} className="space-y-2">
        <legend className="sr-only">{multi ? "Chọn tất cả đáp án đúng" : "Chọn một đáp án"}</legend>
        {multi ? <p className="mb-1 text-xs text-muted">Chọn tất cả đáp án đúng.</p> : null}
        {options.map((o, i) => {
          const sel = picked.has(o.id);
          const st = optionState(sel, correct.has(o.id), submitted, showFeedback);
          const letter = String.fromCharCode(65 + i);
          return (
            <label key={o.id} className={cn("flex cursor-pointer items-start gap-3 rounded-xl border px-3 py-2.5 text-[0.95rem] transition", OPTION_CLS[st], submitted && "cursor-default")}>
              <input
                type={multi ? "checkbox" : "radio"}
                name={q.id}
                className="sr-only"
                checked={sel}
                onChange={() => {
                  if (multi) {
                    const next = new Set(picked);
                    if (next.has(o.id)) next.delete(o.id);
                    else next.add(o.id);
                    onChange({ type: "multiple", value: [...next] });
                  } else onChange({ type: "single", value: o.id });
                }}
              />
              <span
                className={cn(
                  "mt-0.5 flex size-6 shrink-0 items-center justify-center border text-xs font-semibold",
                  multi ? "rounded-md" : "rounded-full",
                  st === "selected" && "border-accent bg-accent text-white dark:text-bg",
                  st === "correct" && "border-success bg-success text-white dark:text-bg",
                  st === "wrong" && "border-danger bg-danger text-white dark:text-bg",
                  (st === "idle" || st === "missed") && "border-border-strong text-muted",
                )}
                aria-hidden
              >
                {st === "correct" ? <Check className="size-3.5" /> : st === "wrong" ? <X className="size-3.5" /> : letter}
              </span>
              <InlineMd text={o.text} className="min-w-0 flex-1 text-text-2" />
            </label>
          );
        })}
      </fieldset>
    );
  }

  if (q.type === "true_false") {
    const v = response.type === "true_false" ? response.value : null;
    return (
      <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-label="Đúng hay sai">
        {[true, false].map((b) => {
          const st = optionState(v === b, q.answer === b, submitted, showFeedback);
          return (
            <button
              key={String(b)}
              type="button"
              role="radio"
              aria-checked={v === b}
              disabled={submitted}
              onClick={() => onChange({ type: "true_false", value: b })}
              className={cn("rounded-xl border px-4 py-3 text-sm font-semibold transition", OPTION_CLS[st])}
            >
              {b ? "Đúng" : "Sai"}
            </button>
          );
        })}
      </div>
    );
  }

  if (q.type === "short_answer") {
    const v = response.type === "short_answer" ? response.value : "";
    return (
      <textarea
        value={v}
        disabled={submitted}
        onChange={(e) => onChange({ type: "short_answer", value: e.target.value, selfGrade: null })}
        rows={3}
        placeholder={q.accept?.length ? "Nhập câu trả lời…" : "Viết câu trả lời của bạn rồi so với đáp án gợi ý sau khi nộp…"}
        className="w-full rounded-xl border border-border bg-bg-elevated px-3 py-2 text-[0.95rem] text-text outline-none placeholder:text-muted focus:border-accent disabled:opacity-80"
      />
    );
  }

  if (q.type === "ordering") {
    const initial = seededShuffle(q.items, seed + 7);
    const order = response.type === "ordering" && response.value.length === q.items.length ? response.value : initial;
    const move = (i: number, d: -1 | 1) => {
      const next = order.slice();
      const j = i + d;
      if (j < 0 || j >= next.length) return;
      [next[i], next[j]] = [next[j], next[i]];
      onChange({ type: "ordering", value: next });
    };
    return (
      <ol className="space-y-2">
        {order.map((item, i) => {
          const ok = submitted && showFeedback ? q.items[i] === item : null;
          return (
            <li key={item} className={cn("flex items-center gap-2 rounded-xl border px-3 py-2 text-[0.95rem]", ok === true ? "border-success bg-success-soft" : ok === false ? "border-danger bg-danger-soft" : "border-border")}>
              <span className="w-5 text-center text-xs font-semibold text-muted tabular-nums">{i + 1}</span>
              <InlineMd text={item} className="flex-1" />
              {!submitted ? (
                <span className="flex gap-1">
                  <button type="button" onClick={() => move(i, -1)} disabled={i === 0} className="rounded-md p-1.5 hover:bg-surface-2 disabled:opacity-30" aria-label={`Đưa “${item}” lên`}>
                    <ArrowUp className="size-4" />
                  </button>
                  <button type="button" onClick={() => move(i, 1)} disabled={i === order.length - 1} className="rounded-md p-1.5 hover:bg-surface-2 disabled:opacity-30" aria-label={`Đưa “${item}” xuống`}>
                    <ArrowDown className="size-4" />
                  </button>
                </span>
              ) : null}
            </li>
          );
        })}
        {!submitted && response.type === "ordering" && response.value.length === 0 ? (
          <li className="text-xs text-muted">Dùng nút mũi tên để sắp xếp. Thứ tự hiện tại sẽ được tính khi bạn nộp bài.</li>
        ) : null}
      </ol>
    );
  }

  if (q.type === "matching") {
    const rights = seededShuffle(
      q.pairs.map((p) => p.right),
      seed + 13,
    );
    const v = response.type === "matching" ? response.value : {};
    return (
      <div className="space-y-2">
        {q.pairs.map((p) => {
          const ok = submitted && showFeedback ? v[p.left] === p.right : null;
          return (
            <div key={p.left} className={cn("grid gap-2 rounded-xl border px-3 py-2 sm:grid-cols-[1fr_1.2fr] sm:items-center", ok === true ? "border-success bg-success-soft" : ok === false ? "border-danger bg-danger-soft" : "border-border")}>
              <InlineMd text={p.left} className="text-[0.95rem] font-medium" />
              <select
                value={v[p.left] ?? ""}
                disabled={submitted}
                onChange={(e) => onChange({ type: "matching", value: { ...v, [p.left]: e.target.value } })}
                className="w-full rounded-lg border border-border bg-bg-elevated px-2 py-2 text-sm text-text"
                aria-label={`Ghép với “${p.left}”`}
              >
                <option value="">— Chọn —</option>
                {rights.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              {ok === false ? <p className="text-xs text-success sm:col-span-2">Đáp án: {p.right}</p> : null}
            </div>
          );
        })}
      </div>
    );
  }
  return null;
}

function FillPrompt({ q, response, onChange, disabled, showFeedback }: { q: Extract<Question, { type: "fill_blank" }>; response: Response; onChange: (r: Response) => void; disabled: boolean; showFeedback: boolean }) {
  const parts = q.prompt.split(/_{3,}|\{\{\s*blank\s*\}\}/);
  const v = response.type === "fill_blank" ? response.value : q.blanks.map(() => "");
  return (
    <div className="leading-[2.2]">
      {parts.map((p, i) => (
        <span key={i}>
          <InlineMd text={p} inline />
          {i < parts.length - 1 && i < q.blanks.length ? (
            <input
              value={v[i] ?? ""}
              disabled={disabled}
              onChange={(e) => {
                const next = v.slice();
                next[i] = e.target.value;
                onChange({ type: "fill_blank", value: next });
              }}
              className={cn(
                "mx-1 inline-block w-36 rounded-lg border bg-bg-elevated px-2 py-0.5 text-center align-baseline text-[0.95rem]",
                disabled && showFeedback ? (q.blanks[i].some((a) => a.trim().toLowerCase() === (v[i] ?? "").trim().toLowerCase()) ? "border-success" : "border-danger") : "border-border-strong",
              )}
              aria-label={`Chỗ trống ${i + 1}`}
            />
          ) : null}
        </span>
      ))}
    </div>
  );
}

function Feedback({ q, response, onChange, result }: { q: Question; response: Response; onChange: (r: Response) => void; result: GradeResult }) {
  let answerText: string | null = null;
  if (q.type === "single") answerText = `${q.answer}. ${q.options.find((o) => o.id === q.answer)?.text ?? ""}`;
  if (q.type === "multiple") answerText = q.answer.map((a) => `${a}. ${q.options.find((o) => o.id === a)?.text ?? ""}`).join("\n");
  if (q.type === "true_false") answerText = q.answer ? "Đúng" : "Sai";
  if (q.type === "fill_blank") answerText = q.blanks.map((b, i) => `(${i + 1}) ${b.join(" / ")}`).join("   ");
  if (q.type === "ordering") answerText = q.items.map((x, i) => `${i + 1}. ${x}`).join("\n");
  if (q.type === "short_answer" && q.accept?.length) answerText = q.accept.join(" / ");
  const model = q.type === "short_answer" ? q.modelAnswer : undefined;
  const showAnswer = !result.correct && answerText && q.type !== "matching";
  return (
    <div className="mt-4 space-y-3 border-t border-border pt-3 text-[0.93rem]">
      {showAnswer ? (
        <div>
          <p className="text-xs font-semibold tracking-wide text-success uppercase">Đáp án đúng</p>
          <InlineMd text={answerText!} className="mt-1 text-text-2" />
        </div>
      ) : null}
      {model ? (
        <div className="rounded-xl bg-info-soft/70 px-3 py-2">
          <p className="text-xs font-semibold tracking-wide text-info uppercase">Đáp án gợi ý</p>
          <InlineMd text={model} className="mt-1 text-text-2" />
        </div>
      ) : null}
      {q.type === "short_answer" && !q.accept?.length && model ? (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-muted">So với đáp án gợi ý, câu trả lời của bạn:</span>
          {(["correct", "incorrect"] as const).map((g) => {
            const on = response.type === "short_answer" && response.selfGrade === g;
            return (
              <button
                key={g}
                type="button"
                onClick={() => onChange({ type: "short_answer", value: response.type === "short_answer" ? response.value : "", selfGrade: g })}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs font-semibold transition",
                  on && g === "correct" && "border-success bg-success-soft text-success",
                  on && g === "incorrect" && "border-danger bg-danger-soft text-danger",
                  !on && "border-border text-muted hover:border-border-strong",
                )}
              >
                {g === "correct" ? "Đã đúng ý" : "Chưa đúng"}
              </button>
            );
          })}
        </div>
      ) : null}
      {q.type === "short_answer" && !q.accept?.length && !model ? (
        <p className="flex items-center gap-1.5 text-xs text-muted">
          <CircleHelp className="size-3.5" /> Câu hỏi suy ngẫm — không có đáp án mẫu nên không tính điểm.
        </p>
      ) : null}
      {q.explanation ? (
        <div>
          <p className="text-xs font-semibold tracking-wide text-muted uppercase">Giải thích</p>
          <InlineMd text={q.explanation} className="mt-1 text-text-2" />
        </div>
      ) : null}
    </div>
  );
}
