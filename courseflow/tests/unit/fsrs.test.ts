import { describe, expect, it } from "vitest";
import { gradeFrom, nextIntervalDays, retrievability, schedule, W } from "../../src/lib/assessment/fsrs.ts";

const DAY = 86_400_000;
const base = { key: "l::h", courseId: "c", lessonId: "l" };

describe("FSRS-lite scheduler", () => {
  it("R(S,S) = 0.9 and interval(S) ≈ S at 90% retention", () => {
    expect(retrievability(10, 10)).toBeCloseTo(0.9, 5);
    expect(nextIntervalDays(10)).toBe(10);
  });
  it("first review uses initial stability per grade", () => {
    const c = schedule(null, 3, 0, base);
    expect(c.stability).toBeCloseTo(W[2]);
    expect(c.reps).toBe(1);
    expect(schedule(null, 1, 0, base).state).toBe("relearning");
  });
  it("Good ×4 on time grows intervals (2 → 11 → 46 → 163 days, per spec)", () => {
    let t = 0;
    let c = schedule(null, 3, t, base);
    const out: number[] = [];
    for (let i = 0; i < 4; i++) {
      out.push(Math.round((c.due - t) / DAY));
      t = c.due;
      c = schedule(c, 3, t, base);
    }
    expect(out).toEqual([2, 11, 46, 163]);
  });
  it("a lapse shrinks stability and counts once", () => {
    let c = schedule(null, 3, 0, base);
    c = schedule(c, 3, c.due, base);
    const before = c.stability;
    c = schedule(c, 1, c.due, base);
    expect(c.stability).toBeLessThan(before);
    expect(c.lapses).toBe(1);
  });
  it("maps score + confidence to grades", () => {
    expect(gradeFrom(0, 3, { recallType: false, reps: 0, firstSeenRecently: false })).toBe(1);
    expect(gradeFrom(1, 1, { recallType: false, reps: 0, firstSeenRecently: false })).toBe(2);
    expect(gradeFrom(1, 2, { recallType: false, reps: 0, firstSeenRecently: false })).toBe(3);
    expect(gradeFrom(1, 3, { recallType: true, reps: 2, firstSeenRecently: false })).toBe(4);
    expect(gradeFrom(1, 3, { recallType: true, reps: 2, firstSeenRecently: true })).toBe(3);
    expect(gradeFrom(0.6, 3, { recallType: false, reps: 5, firstSeenRecently: false })).toBe(2);
  });
});
