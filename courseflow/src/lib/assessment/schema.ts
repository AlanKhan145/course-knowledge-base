// Question & quiz schema. Data lives apart from the UI: questions come from
// (1) the "Câu hỏi ôn tập" section of a lesson, (2) ```quiz fenced blocks,
// (3) sidecar `<lesson>.quiz.json|yaml` files. All are validated here.
import { z } from "zod";

export const difficultySchema = z.enum(["easy", "medium", "hard"]);

const base = {
  id: z.string().min(1),
  prompt: z.string().min(1),
  explanation: z.string().optional(),
  difficulty: difficultySchema.optional(),
  /** Optional code shown with the prompt (code questions). */
  code: z.string().optional(),
  codeLanguage: z.string().optional(),
  /** Where the question came from, e.g. "lesson-section" | "quiz-block" | "sidecar". */
  source: z.string().optional(),
};

export const optionSchema = z.object({ id: z.string().min(1), text: z.string() });

export const singleSchema = z.object({
  ...base,
  type: z.literal("single"),
  options: z.array(optionSchema).min(2),
  answer: z.string().min(1),
});

export const multipleSchema = z.object({
  ...base,
  type: z.literal("multiple"),
  options: z.array(optionSchema).min(2),
  answer: z.array(z.string().min(1)).min(1),
  /** "partial" (default): (đúng chọn − sai chọn) / số đáp án đúng, không âm. "all-or-nothing": chỉ tính khi khớp hoàn toàn. */
  scoring: z.enum(["partial", "all-or-nothing"]).optional(),
});

export const trueFalseSchema = z.object({ ...base, type: z.literal("true_false"), answer: z.boolean() });

export const fillBlankSchema = z.object({
  ...base,
  type: z.literal("fill_blank"),
  /** One entry per blank (`___` in prompt); each entry lists accepted answers. */
  blanks: z.array(z.array(z.string().min(1)).min(1)).min(1),
  caseSensitive: z.boolean().optional(),
});

export const shortAnswerSchema = z.object({
  ...base,
  type: z.literal("short_answer"),
  /** Accepted answers for normalised exact match. Empty → learner self-grades against modelAnswer. */
  accept: z.array(z.string()).optional(),
  modelAnswer: z.string().optional(),
});

export const orderingSchema = z.object({
  ...base,
  type: z.literal("ordering"),
  /** Items in the CORRECT order; the UI shuffles them. */
  items: z.array(z.string().min(1)).min(2),
});

export const matchingSchema = z.object({
  ...base,
  type: z.literal("matching"),
  pairs: z.array(z.object({ left: z.string().min(1), right: z.string().min(1) })).min(2),
});

export const questionSchema = z.discriminatedUnion("type", [
  singleSchema,
  multipleSchema,
  trueFalseSchema,
  fillBlankSchema,
  shortAnswerSchema,
  orderingSchema,
  matchingSchema,
]);

export type Question = z.infer<typeof questionSchema>;
export type QuestionType = Question["type"];

/** Authoring format (quiz.json / ```quiz). `id` optional; generated if missing. */
export const authoredQuestionSchema = z.preprocess((raw) => {
  if (raw && typeof raw === "object" && !("id" in raw)) return { ...raw, id: "__auto" };
  return raw;
}, questionSchema);

export const quizFileSchema = z.object({
  id: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  /** Seconds; only used in exam mode. */
  timeLimit: z.number().int().positive().optional(),
  passScore: z.number().min(0).max(1).optional(),
  shuffleQuestions: z.boolean().optional(),
  shuffleOptions: z.boolean().optional(),
  questions: z.array(authoredQuestionSchema).min(1),
});

export type QuizFile = z.infer<typeof quizFileSchema>;

export interface Quiz {
  id: string;
  title: string;
  questions: Question[];
  timeLimit?: number;
  passScore?: number;
  shuffleQuestions?: boolean;
  shuffleOptions?: boolean;
}

export const QUESTION_TYPE_LABEL: Record<QuestionType, string> = {
  single: "Chọn một đáp án",
  multiple: "Chọn nhiều đáp án",
  true_false: "Đúng / Sai",
  fill_blank: "Điền vào chỗ trống",
  short_answer: "Trả lời ngắn",
  ordering: "Sắp xếp thứ tự",
  matching: "Ghép cặp",
};
