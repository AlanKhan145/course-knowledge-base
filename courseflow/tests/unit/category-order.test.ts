import { describe, expect, it } from "vitest";
import { hierarchical } from "../../src/lib/content/repository.ts";

type Row = { id: string; parent_id: string | null; ord: number };

describe("hierarchical category order", () => {
  it("keeps each language's sub-categories under that language (ord restarts at 1 per parent)", () => {
    // Same shape the scanner writes: sub-category ord restarts at 1 inside every parent.
    const rows: Row[] = [
      { id: "en", parent_id: null, ord: 1 },
      { id: "en-so-cap", parent_id: "en", ord: 1 },
      { id: "zh-so-cap", parent_id: "zh", ord: 1 },
      { id: "ja-so-cap", parent_id: "ja", ord: 1 },
      { id: "en-trung-cap", parent_id: "en", ord: 2 },
      { id: "zh", parent_id: null, ord: 2 },
      { id: "zh-trung-cap", parent_id: "zh", ord: 2 },
      { id: "ja", parent_id: null, ord: 3 },
    ];
    expect(hierarchical(rows).map((r) => r.id)).toEqual(["en", "en-so-cap", "en-trung-cap", "zh", "zh-so-cap", "zh-trung-cap", "ja", "ja-so-cap"]);
  });

  it("does not drop sub-categories whose parent is missing", () => {
    const rows: Row[] = [
      { id: "a", parent_id: null, ord: 1 },
      { id: "x", parent_id: "gone", ord: 1 },
    ];
    expect(hierarchical(rows).map((r) => r.id)).toEqual(["a", "x"]);
  });
});
