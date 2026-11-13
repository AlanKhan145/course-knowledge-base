import { describe, expect, it } from "vitest";
import {
  emptyResponse,
  grade,
  isAnswered,
  isSelfGraded,
  normalizeAnswer,
  scoreQuiz,
  seededShuffle,
  type Response,
} from "../../src/lib/assessment/grade.ts";
import type { Question } from "../../src/lib/assessment/schema.ts";

type Of<T extends Question["type"]> = Extract<Question, { type: T }>;

const opts = (n: number) => "ABCDEFGH".slice(0, n).split("").map((id) => ({ id, text: `Lựa chọn ${id}` }));

const single = (answer = "B"): Of<"single"> => ({ id: "s", type: "single", prompt: "p", options: opts(4), answer });
const trueFalse = (answer = true): Of<"true_false"> => ({ id: "tf", type: "true_false", prompt: "p", answer });
const multiple = (answer: string[] = ["A", "C", "D"], scoring?: "partial" | "all-or-nothing"): Of<"multiple"> => ({
  id: "m",
  type: "multiple",
  prompt: "p",
  options: opts(5),
  answer,
  ...(scoring ? { scoring } : {}),
});
const fill = (blanks: string[][], caseSensitive?: boolean): Of<"fill_blank"> => ({
  id: "f",
  type: "fill_blank",
  prompt: "___ là thủ đô, ___ chảy qua nó",
  blanks,
  ...(caseSensitive !== undefined ? { caseSensitive } : {}),
});
const short = (extra: Partial<Of<"short_answer">> = {}): Of<"short_answer"> => ({ id: "sa", type: "short_answer", prompt: "p", ...extra });
const ordering = (items = ["a", "b", "c", "d"]): Of<"ordering"> => ({ id: "o", type: "ordering", prompt: "p", items });
const matching = (): Of<"matching"> => ({
  id: "mt",
  type: "matching",
  prompt: "p",
  pairs: [
    { left: "HTTP", right: "80" },
    { left: "HTTPS", right: "443" },
    { left: "SSH", right: "22" },
    { left: "DNS", right: "53" },
  ],
});

describe("normalizeAnswer", () => {
  it("trims, collapses whitespace, lowercases and drops trailing punctuation", () => {
    expect(normalizeAnswer("  Hà   Nội. ")).toBe("hà nội");
    expect(normalizeAnswer("Xin chào!?")).toBe("xin chào");
    expect(normalizeAnswer("a;,:")).toBe("a");
  });

  it("keeps case when case-sensitive and normalises Unicode to NFC", () => {
    expect(normalizeAnswer("Hello", true)).toBe("Hello");
    expect(normalizeAnswer("Hà".normalize("NFD"))).toBe("hà".normalize("NFC"));
  });
});

describe("grade — single / true_false", () => {
  it("single: right = 1, wrong = 0, unanswered = 0", () => {
    const q = single("B");
    expect(grade(q, { type: "single", value: "B" })).toMatchObject({ score: 1, correct: true, counted: true, answered: true, needsSelfGrade: false });
    expect(grade(q, { type: "single", value: "A" })).toMatchObject({ score: 0, correct: false, counted: true, answered: true });
    expect(grade(q, { type: "single", value: null })).toMatchObject({ score: 0, correct: false, counted: true, answered: false });
  });

  it("true_false: compares the boolean, false is a valid answer", () => {
    expect(grade(trueFalse(true), { type: "true_false", value: true }).correct).toBe(true);
    expect(grade(trueFalse(true), { type: "true_false", value: false })).toMatchObject({ score: 0, answered: true });
    expect(grade(trueFalse(false), { type: "true_false", value: false })).toMatchObject({ score: 1, correct: true });
    expect(grade(trueFalse(false), { type: "true_false", value: null })).toMatchObject({ score: 0, answered: false });
  });

  it("a response of the wrong type scores 0 but is still counted", () => {
    const g = grade(single(), { type: "multiple", value: ["B"] });
    expect(g).toMatchObject({ score: 0, correct: false, counted: true });
  });
});

describe("grade — multiple", () => {
  const q = multiple(["A", "C", "D"]);
  const resp = (value: string[]): Response => ({ type: "multiple", value });

  it("exact match = 1 regardless of order", () => {
    expect(grade(q, resp(["D", "A", "C"]))).toMatchObject({ score: 1, correct: true });
  });

  it("partial credit = (hits − wrong) / correctCount", () => {
    expect(grade(q, resp(["A", "C"])).score).toBeCloseTo(2 / 3, 10); // 2 hits, 0 wrong
    expect(grade(q, resp(["A"])).score).toBeCloseTo(1 / 3, 10);
    expect(grade(q, resp(["A", "C", "D", "B"])).score).toBeCloseTo(2 / 3, 10); // 3 hits, 1 wrong
    expect(grade(q, resp(["A", "C", "B"])).score).toBeCloseTo(1 / 3, 10); // 2 hits, 1 wrong
    expect(grade(q, resp(["A", "C"])).correct).toBe(false);
  });

  it("never goes below zero", () => {
    expect(grade(q, resp(["B", "E"])).score).toBe(0);
    expect(grade(q, resp(["A", "B", "E"])).score).toBe(0); // 1 hit − 2 wrong
  });

  it("empty selection = 0 and unanswered; duplicates in the response are ignored", () => {
    expect(grade(q, resp([]))).toMatchObject({ score: 0, answered: false, counted: true });
    expect(grade(q, resp(["A", "A", "C", "C", "D"])).score).toBe(1);
  });

  it("partial is the default scoring; 'partial' set explicitly behaves the same", () => {
    expect(grade(multiple(["A", "C", "D"], "partial"), resp(["A", "C"])).score).toBeCloseTo(2 / 3, 10);
  });

  it("scoring 'all-or-nothing' gives 1 only for an exact match", () => {
    const strict = multiple(["A", "C", "D"], "all-or-nothing");
    expect(grade(strict, resp(["A", "C", "D"]))).toMatchObject({ score: 1, correct: true });
    expect(grade(strict, resp(["A", "C"])).score).toBe(0);
    expect(grade(strict, resp(["A", "C", "D", "B"])).score).toBe(0);
    expect(grade(strict, resp([])).score).toBe(0);
  });
});

describe("grade — fill_blank", () => {
  const q = fill([["Hà Nội", "Ha Noi"], ["sông Hồng"]]);
  const resp = (...value: string[]): Response => ({ type: "fill_blank", value });

  it("is case- and diacritic-insensitive by default", () => {
    expect(grade(q, resp("hà nội", "sông hồng")).score).toBe(1);
    expect(grade(q, resp("HA NOI", "SONG HONG")).score).toBe(1);
    expect(grade(q, resp("Ha Noi", "song hong"))).toMatchObject({ score: 1, correct: true });
  });

  it("ignores surrounding whitespace and trailing punctuation", () => {
    expect(grade(q, resp("  Hà   Nội. ", "sông Hồng!")).score).toBe(1);
    expect(grade(q, resp("Hà Nội,", "sông Hồng;")).score).toBe(1);
  });

  it("treats đ/Đ as d when folding (typing without a Vietnamese keyboard)", () => {
    const d = fill([["Đà Nẵng"]]);
    expect(grade(d, resp("da nang")).score).toBe(1);
    expect(grade(d, resp("ĐÀ NẴNG")).score).toBe(1);
  });

  it("scores each blank independently (fraction of blanks right)", () => {
    expect(grade(q, resp("Hà Nội", "sai")).score).toBe(0.5);
    expect(grade(q, resp("sai", "sông Hồng")).score).toBe(0.5);
    expect(grade(q, resp("sai", "sai")).score).toBe(0);
    expect(grade(q, resp("Hà Nội", "sai")).correct).toBe(false);
  });

  it("empty / missing entries never match", () => {
    expect(grade(q, resp("", "")).score).toBe(0);
    expect(grade(q, resp("Hà Nội")).score).toBe(0.5); // second blank missing
    expect(grade(q, resp("   ", "  ")).answered).toBe(false);
  });

  it("caseSensitive: true requires the exact case and keeps diacritics significant", () => {
    const cs = fill([["Hà Nội", "HTTP"]], true);
    expect(grade(cs, resp("Hà Nội")).score).toBe(1);
    expect(grade(cs, resp("HTTP")).score).toBe(1);
    expect(grade(cs, resp("hà nội")).score).toBe(0);
    expect(grade(cs, resp("Ha Noi")).score).toBe(0);
    expect(grade(cs, resp("http")).score).toBe(0);
    // whitespace and trailing punctuation are still normalised
    expect(grade(cs, resp(" HTTP. ")).score).toBe(1);
  });
});

describe("grade — short_answer", () => {
  it("with an accept list: normalised exact match against any accepted answer", () => {
    const q = short({ accept: ["HTTP", "Hyper Text Transfer Protocol"], modelAnswer: "HTTP" });
    const resp = (value: string): Response => ({ type: "short_answer", value });
    expect(grade(q, resp("http"))).toMatchObject({ score: 1, correct: true, counted: true, needsSelfGrade: false });
    expect(grade(q, resp("  hyper   text transfer protocol. ")).score).toBe(1);
    expect(grade(q, resp("ftp"))).toMatchObject({ score: 0, correct: false, counted: true, needsSelfGrade: false });
    expect(grade(q, resp(""))).toMatchObject({ score: 0, counted: true, answered: false });
  });

  it("with an accept list the selfGrade flag is ignored", () => {
    const q = short({ accept: ["yes"] });
    expect(grade(q, { type: "short_answer", value: "no", selfGrade: "correct" }).score).toBe(0);
  });

  it("accept matching also ignores diacritics", () => {
    const q = short({ accept: ["Đường đi"] });
    expect(grade(q, { type: "short_answer", value: "duong di" }).score).toBe(1);
  });

  it("without any key (no accept, no modelAnswer): not counted and never needs self-grading", () => {
    const q = short();
    expect(isSelfGraded(q)).toBe(true);
    expect(grade(q, { type: "short_answer", value: "bất kỳ" })).toMatchObject({
      score: 0,
      correct: false,
      counted: false,
      needsSelfGrade: false,
      answered: true,
    });
    expect(grade(q, { type: "short_answer", value: "x", selfGrade: "correct" }).counted).toBe(false);
  });

  it("an empty accept list counts as 'no key'", () => {
    const q = short({ accept: [], modelAnswer: "Đáp án mẫu" });
    expect(isSelfGraded(q)).toBe(true);
    expect(grade(q, { type: "short_answer", value: "x" }).needsSelfGrade).toBe(true);
  });

  it("with only a modelAnswer: waits for self-grade, then counts the learner's verdict", () => {
    const q = short({ modelAnswer: "Đáp án mẫu" });
    expect(grade(q, { type: "short_answer", value: "câu trả lời", selfGrade: null })).toMatchObject({
      score: 0,
      counted: false,
      needsSelfGrade: true,
      correct: false,
    });
    expect(grade(q, { type: "short_answer", value: "câu trả lời", selfGrade: "correct" })).toMatchObject({
      score: 1,
      correct: true,
      counted: true,
      needsSelfGrade: false,
    });
    expect(grade(q, { type: "short_answer", value: "câu trả lời", selfGrade: "incorrect" })).toMatchObject({
      score: 0,
      correct: false,
      counted: true,
      needsSelfGrade: false,
    });
    expect(grade(q, { type: "short_answer", value: "câu trả lời" }).needsSelfGrade).toBe(true); // selfGrade omitted
  });

  it("isSelfGraded is false only for short answers with a non-empty accept list", () => {
    expect(isSelfGraded(short({ accept: ["x"] }))).toBe(false);
    expect(isSelfGraded(single())).toBe(false);
  });
});

describe("grade — ordering", () => {
  const q = ordering(["a", "b", "c", "d"]);
  const resp = (value: string[]): Response => ({ type: "ordering", value });

  it("exact order = 1", () => {
    expect(grade(q, resp(["a", "b", "c", "d"]))).toMatchObject({ score: 1, correct: true });
  });

  it("partial credit = fraction of items in the right position", () => {
    expect(grade(q, resp(["a", "b", "d", "c"])).score).toBe(0.5);
    expect(grade(q, resp(["b", "a", "c", "d"])).score).toBe(0.5);
    expect(grade(q, resp(["d", "c", "b", "a"])).score).toBe(0);
    expect(grade(q, resp(["a", "b", "d", "c"])).correct).toBe(false);
  });

  it("a response of the wrong length (including empty) scores 0", () => {
    expect(grade(q, resp(["a", "b", "c"])).score).toBe(0);
    expect(grade(q, resp([]))).toMatchObject({ score: 0, answered: false, counted: true });
    expect(grade(q, resp(["a", "b", "c", "d", "e"])).score).toBe(0);
  });
});

describe("grade — matching", () => {
  const q = matching();
  const resp = (value: Record<string, string>): Response => ({ type: "matching", value });

  it("all pairs right = 1", () => {
    expect(grade(q, resp({ HTTP: "80", HTTPS: "443", SSH: "22", DNS: "53" }))).toMatchObject({ score: 1, correct: true });
  });

  it("partial credit = fraction of pairs right; unmatched left items count as wrong", () => {
    expect(grade(q, resp({ HTTP: "80", HTTPS: "443", SSH: "53", DNS: "22" })).score).toBe(0.5);
    expect(grade(q, resp({ HTTP: "80" })).score).toBe(0.25);
    expect(grade(q, resp({ HTTP: "443" })).score).toBe(0);
    expect(grade(q, resp({}))).toMatchObject({ score: 0, answered: false });
  });
});

describe("emptyResponse / isAnswered", () => {
  it("builds a correctly shaped blank response for each question type", () => {
    expect(emptyResponse(single())).toEqual({ type: "single", value: null });
    expect(emptyResponse(multiple())).toEqual({ type: "multiple", value: [] });
    expect(emptyResponse(trueFalse())).toEqual({ type: "true_false", value: null });
    expect(emptyResponse(fill([["a"], ["b"], ["c"]]))).toEqual({ type: "fill_blank", value: ["", "", ""] });
    expect(emptyResponse(short())).toEqual({ type: "short_answer", value: "", selfGrade: null });
    expect(emptyResponse(ordering())).toEqual({ type: "ordering", value: [] });
    expect(emptyResponse(matching())).toEqual({ type: "matching", value: {} });
  });

  it("an empty response is never answered, a filled one is", () => {
    for (const q of [single(), multiple(), trueFalse(), fill([["a"]]), short(), ordering(), matching()]) {
      expect(isAnswered(emptyResponse(q)), q.type).toBe(false);
    }
    expect(isAnswered({ type: "single", value: "A" })).toBe(true);
    expect(isAnswered({ type: "true_false", value: false })).toBe(true);
    expect(isAnswered({ type: "multiple", value: ["A"] })).toBe(true);
    expect(isAnswered({ type: "fill_blank", value: ["", "x"] })).toBe(true);
    expect(isAnswered({ type: "short_answer", value: "  " })).toBe(false);
    expect(isAnswered({ type: "short_answer", value: "x" })).toBe(true);
    expect(isAnswered({ type: "ordering", value: ["a"] })).toBe(true);
    expect(isAnswered({ type: "matching", value: { a: "b" } })).toBe(true);
  });
});

describe("scoreQuiz", () => {
  const q1 = { ...single("A"), id: "q1" };
  const q2 = { ...trueFalse(true), id: "q2" };
  const q3 = { ...multiple(["A", "C"]), id: "q3" };
  const q4 = { ...short({ modelAnswer: "mẫu" }), id: "q4" };
  const q5 = { ...short(), id: "q5" }; // no key at all
  const all: Question[] = [q1, q2, q3, q4, q5];

  it("aggregates earned/possible, rounds the percent and lists wrong ids", () => {
    const score = scoreQuiz(all, {
      q1: { type: "single", value: "A" }, // 1
      q2: { type: "true_false", value: false }, // 0 (wrong)
      q3: { type: "multiple", value: ["A"] }, // 0.5
      // q4 / q5 unanswered
    });
    // q4 needs self-grade (not counted yet), q5 has no key (never counted)
    expect(score.countedCount).toBe(3);
    expect(score.possible).toBe(3);
    expect(score.earned).toBeCloseTo(1.5, 10);
    expect(score.percent).toBe(50);
    expect(score.correctCount).toBe(1);
    expect(score.wrongIds).toEqual(["q2", "q3"]);
    expect(score.pendingSelfGrade).toBe(1);
  });

  it("an unanswered gradable question is counted and listed as wrong", () => {
    const score = scoreQuiz([q1, q2], {});
    expect(score).toMatchObject({ earned: 0, possible: 2, percent: 0, correctCount: 0, wrongIds: ["q1", "q2"] });
  });

  it("includes self-graded short answers once the learner has graded them", () => {
    const score = scoreQuiz(all, {
      q1: { type: "single", value: "A" },
      q2: { type: "true_false", value: true },
      q3: { type: "multiple", value: ["A", "C"] },
      q4: { type: "short_answer", value: "tự luận", selfGrade: "correct" },
      q5: { type: "short_answer", value: "ghi chú" },
    });
    expect(score).toMatchObject({ possible: 4, earned: 4, percent: 100, correctCount: 4, countedCount: 4, pendingSelfGrade: 0, wrongIds: [] });
    const half = scoreQuiz([q1, q4], {
      q1: { type: "single", value: "B" },
      q4: { type: "short_answer", value: "x", selfGrade: "incorrect" },
    });
    expect(half).toMatchObject({ possible: 2, earned: 0, percent: 0, wrongIds: ["q1", "q4"] });
  });

  it("rounds to the nearest whole percent", () => {
    const qs = ["a", "b", "c"].map((id) => ({ ...single("A"), id }));
    const one = scoreQuiz(qs, { a: { type: "single", value: "A" } });
    expect(one.percent).toBe(33);
    const two = scoreQuiz(qs, { a: { type: "single", value: "A" }, b: { type: "single", value: "A" } });
    expect(two.percent).toBe(67);
  });

  it("a quiz with nothing gradable has percent 0 and no division by zero", () => {
    expect(scoreQuiz([], {})).toMatchObject({ earned: 0, possible: 0, percent: 0, wrongIds: [] });
    const onlyReflective = scoreQuiz([q5], {});
    expect(onlyReflective).toMatchObject({ possible: 0, percent: 0, countedCount: 0, pendingSelfGrade: 0 });
  });

  it("ignores responses for questions that are not in the quiz", () => {
    const score = scoreQuiz([q1], { q1: { type: "single", value: "A" }, ghost: { type: "single", value: "A" } });
    expect(score).toMatchObject({ possible: 1, earned: 1, percent: 100 });
  });
});

describe("seededShuffle", () => {
  const src = Array.from({ length: 12 }, (_, i) => i + 1);

  it("is deterministic for the same seed", () => {
    expect(seededShuffle(src, 42)).toEqual(seededShuffle(src, 42));
    expect(seededShuffle(["a", "b", "c"], 7)).toEqual(seededShuffle(["a", "b", "c"], 7));
  });

  it("returns a permutation and never mutates the input", () => {
    const copy = [...src];
    const out = seededShuffle(src, 123);
    expect(src).toEqual(copy);
    expect(out).not.toBe(src);
    expect([...out].sort((a, b) => a - b)).toEqual(src);
  });

  it("different seeds give different orders (so a retake can reshuffle)", () => {
    const orders = new Set([1, 2, 3, 4, 5, 6].map((s) => seededShuffle(src, s).join(",")));
    expect(orders.size).toBeGreaterThan(1);
    expect(seededShuffle(src, 1)).not.toEqual(src); // actually shuffles
  });

  it("actually moves things around for typical seeds", () => {
    const moved = seededShuffle(src, 2024).filter((v, i) => v !== src[i]).length;
    expect(moved).toBeGreaterThan(4);
  });

  it("handles seed 0, huge and negative seeds, and tiny arrays", () => {
    expect(seededShuffle(src, 0)).toEqual(seededShuffle(src, 0));
    expect([...seededShuffle(src, 0)].sort((a, b) => a - b)).toEqual(src);
    expect([...seededShuffle(src, 2 ** 40 + 5)].sort((a, b) => a - b)).toEqual(src);
    expect([...seededShuffle(src, -17)].sort((a, b) => a - b)).toEqual(src);
    expect(seededShuffle([], 5)).toEqual([]);
    expect(seededShuffle(["x"], 5)).toEqual(["x"]);
  });

  it("works on readonly arrays and keeps duplicates", () => {
    const ro: readonly string[] = ["a", "a", "b"];
    expect(seededShuffle(ro, 9).sort()).toEqual(["a", "a", "b"]);
  });
});
