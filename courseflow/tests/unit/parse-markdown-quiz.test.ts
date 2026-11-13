import { describe, expect, it } from "vitest";
import { countGradable, parseQuizSections, QUIZ_SECTION_TITLE } from "../../src/lib/assessment/parse-markdown-quiz.ts";
import type { Question } from "../../src/lib/assessment/schema.ts";

/** Join lines the way the corpus is written (LF, trailing newline). */
const md = (...lines: string[]) => lines.join("\n") + "\n";

/** Index of the first line that starts with `prefix`. */
const lineOf = (text: string, prefix: string) => {
  const i = text.split(/\r?\n/).findIndex((l) => l.startsWith(prefix));
  if (i < 0) throw new Error(`no line starts with ${JSON.stringify(prefix)}`);
  return i;
};

const parse = (text: string) => parseQuizSections(text, "t");

/** Parse and return the only section's questions (asserting exactly one section). */
const questionsOf = (text: string): Question[] => {
  const sections = parse(text);
  expect(sections).toHaveLength(1);
  return sections[0].questions;
};

/** Narrow a question to a type so the assertions below stay typed. */
function as<T extends Question["type"]>(q: Question, type: T): Extract<Question, { type: T }> {
  expect(q.type).toBe(type);
  return q as Extract<Question, { type: T }>;
}

describe("parseQuizSections — '### Câu N' format (the dominant corpus layout)", () => {
  const text = md(
    "# Bài 12 - Cổng mạng",
    "",
    "Nội dung bài học.",
    "",
    "## 6. Câu hỏi ôn tập",
    "",
    "### Câu 1",
    "",
    "Cổng mặc định của HTTP là gì?",
    "",
    "A. 21  ",
    "B. 80  ",
    "C. 443  ",
    "D. 8080  ",
    "",
    "**Đáp án:** B. **Giải thích:** HTTP dùng cổng 80, còn HTTPS dùng 443.",
    "",
    "### Câu 2",
    "",
    "Giao thức nào mã hóa kết nối?",
    "",
    "A. HTTP  ",
    "B. HTTPS  ",
    "",
    "**Đáp án:** B",
    "",
    "## 7. Tài liệu tham khảo",
    "",
    "Xem thêm.",
  );

  it("parses a single-answer question with explanation", () => {
    const [sec] = parse(text);
    const q = as(sec.questions[0], "single");
    expect(q.prompt).toBe("Cổng mặc định của HTTP là gì?");
    expect(q.answer).toBe("B");
    expect(q.explanation).toBe("HTTP dùng cổng 80, còn HTTPS dùng 443.");
    expect(q.options.map((o) => o.id)).toEqual(["A", "B", "C", "D"]);
    // trailing two-space line breaks are stripped
    expect(q.options.map((o) => o.text)).toEqual(["21", "80", "443", "8080"]);
    expect(q.source).toBe("lesson-section");
  });

  it("handles a question without an explanation", () => {
    const q = as(questionsOf(text)[1], "single");
    expect(q.answer).toBe("B");
    expect(q.explanation).toBeUndefined();
  });

  it("reports title, level and 0-based start/end line indexes", () => {
    const [sec] = parse(text);
    expect(sec.title).toBe("Câu hỏi ôn tập"); // leading "6." stripped
    expect(sec.level).toBe(2);
    expect(sec.start).toBe(lineOf(text, "## 6."));
    expect(sec.end).toBe(lineOf(text, "## 7."));
  });

  it("lets the renderer splice the section out cleanly", () => {
    const [sec] = parse(text);
    const lines = text.split("\n");
    const rest = [...lines.slice(0, sec.start), ...lines.slice(sec.end)].join("\n");
    expect(rest).toContain("Nội dung bài học.");
    expect(rest).toContain("## 7. Tài liệu tham khảo");
    expect(rest).not.toContain("Câu hỏi ôn tập");
    expect(rest).not.toContain("Đáp án");
    expect(rest).not.toContain("HTTPS");
  });

  it("gives deterministic, unique, prefix-scoped ids", () => {
    const a = parseQuizSections(text, "lesson-1")[0].questions.map((q) => q.id);
    const b = parseQuizSections(text, "lesson-1")[0].questions.map((q) => q.id);
    expect(a).toEqual(b);
    expect(new Set(a).size).toBe(2);
    expect(a[0]).toMatch(/^lesson-1:q1:[0-9a-f]{6}$/);
    expect(a[1]).toMatch(/^lesson-1:q2:[0-9a-f]{6}$/);
    expect(parseQuizSections(text, "other")[0].questions[0].id).toMatch(/^other:q1:/);
  });

  it("copes with CRLF line endings", () => {
    const crlf = text.replace(/\n/g, "\r\n");
    const [sec] = parse(crlf);
    const q = as(sec.questions[0], "single");
    expect(q.answer).toBe("B");
    expect(q.options[3].text).toBe("8080");
    expect(sec.start).toBe(lineOf(text, "## 6."));
    expect(sec.end).toBe(lineOf(text, "## 7."));
  });

  it("accepts the explanation on its own line after '**Đáp án:** C'", () => {
    const q = as(
      questionsOf(
        md(
          "## 7. Câu hỏi ôn tập",
          "",
          "### Câu 1",
          "",
          "Bước chẩn đoán nào hợp lý nhất?",
          "",
          "A. Tăng độ phân giải render.  ",
          "B. Thêm âm thanh.  ",
          "C. Kiểm tra Mirror, origin và vị trí đỉnh biên.  ",
          "D. Thêm UV Sphere.",
          "",
          "**Đáp án:** C",
          "",
          "**Giải thích:** Khe giữa thường liên quan mặt phẳng đối xứng.",
        ),
      )[0],
      "single",
    );
    expect(q.answer).toBe("C");
    expect(q.explanation).toBe("Khe giữa thường liên quan mặt phẳng đối xứng.");
  });

  it("keeps every question when blocks are separated by horizontal rules", () => {
    const qs = questionsOf(
      md(
        "## Câu hỏi ôn tập",
        "",
        "### Câu 1",
        "Một cộng một?",
        "A. 1",
        "B. 2",
        "**Đáp án:** B",
        "",
        "---",
        "",
        "### Câu 2",
        "Hai cộng hai?",
        "A. 4",
        "B. 5",
        "**Đáp án:** A",
      ),
    );
    expect(qs.map((q) => (q as { answer: string }).answer)).toEqual(["B", "A"]);
  });
});

describe("parseQuizSections — '**Câu N.**' inline-label format", () => {
  const text = md(
    "## Câu hỏi ôn tập",
    "",
    "**Câu 1.** Đâu là hệ quản trị CSDL nhúng?",
    "A. SQLite",
    "B. CORS",
    "C. LangGraph",
    "D. Pydantic",
    "",
    "**Đáp án: A.** SQLite lưu dữ liệu trong một file duy nhất.",
    "",
    "**Câu 2:** Ngôn ngữ nào chạy trong trình duyệt?",
    "A. JavaScript",
    "B. COBOL",
    "",
    "**Đáp án: A**",
  );

  it("takes the prompt from the same line and options from the following lines", () => {
    const [q1, q2] = questionsOf(text);
    const a = as(q1, "single");
    expect(a.prompt).toBe("Đâu là hệ quản trị CSDL nhúng?");
    expect(a.options.map((o) => o.text)).toEqual(["SQLite", "CORS", "LangGraph", "Pydantic"]);
    expect(a.answer).toBe("A");
    expect(a.explanation).toBe("SQLite lưu dữ liệu trong một file duy nhất.");
    expect(as(q2, "single").prompt).toBe("Ngôn ngữ nào chạy trong trình duyệt?");
    expect(as(q2, "single").answer).toBe("A");
  });

  it("supports the label wrapped around the whole prompt: '**Câu 3. Prompt?**'", () => {
    const q = as(
      questionsOf(md("## Câu hỏi ôn tập", "", "**Câu 3. Git là gì?**", "A. Công cụ quản lý phiên bản", "B. Hệ điều hành", "", "**Đáp án:** A"))[0],
      "single",
    );
    expect(q.prompt).toBe("Git là gì?");
    expect(q.answer).toBe("A");
  });

  it("keeps bold text inside the prompt when the label is closed first (regression)", () => {
    // `**Câu 1.** Lệnh **git** là gì?` used to be mis-split at the second `**`,
    // yielding the prompt "** Lệnh  git** là gì?".
    const q = as(
      questionsOf(md("## Câu hỏi ôn tập", "", "**Câu 1.** Lệnh **git** là gì?", "A. Công cụ", "B. Ngôn ngữ", "", "**Đáp án: A.** Git là công cụ."))[0],
      "single",
    );
    expect(q.prompt).toBe("Lệnh **git** là gì?");
    expect(q.answer).toBe("A");
    expect(q.explanation).toBe("Git là công cụ.");
  });

  it("parses English '### Question N' + '**Answer:** B' with a trailing explanation", () => {
    const q = as(
      questionsOf(
        md("## Review Questions", "", "### Question 1", "", "Which HTTP verb is idempotent?", "", "A. POST", "B. PUT", "C. PATCH", "", "**Answer:** B. **Explanation:** PUT replaces the resource."),
      )[0],
      "single",
    );
    expect(q.answer).toBe("B");
    expect(q.explanation).toBe("PUT replaces the resource.");
  });
});

describe("parseQuizSections — option layouts", () => {
  it("splits options written on one line: 'A. SQLite. B. CORS. C. LangGraph. D. Pydantic.'", () => {
    const q = as(
      questionsOf(
        md("## Câu hỏi ôn tập", "", "**Câu 1.** Đâu là cơ sở dữ liệu?", "A. SQLite. B. CORS. C. LangGraph. D. Pydantic.", "", "**Đáp án: A.** SQLite là CSDL."),
      )[0],
      "single",
    );
    expect(q.options).toEqual([
      { id: "A", text: "SQLite" },
      { id: "B", text: "CORS" },
      { id: "C", text: "LangGraph" },
      { id: "D", text: "Pydantic" },
    ]);
    expect(q.answer).toBe("A");
  });

  it("handles the mixed case: line 1 'A. long text', line 2 'B. x. C. y. D. z.'", () => {
    const q = as(
      questionsOf(
        md(
          "## Câu hỏi ôn tập",
          "",
          "**Câu 1.** Phát biểu nào đúng?",
          "A. Đây là một lựa chọn rất dài, có nhiều từ và dấu phẩy.",
          "B. x. C. y. D. z.",
          "",
          "**Đáp án: C.** vì y.",
        ),
      )[0],
      "single",
    );
    expect(q.options.map((o) => o.text)).toEqual(["Đây là một lựa chọn rất dài, có nhiều từ và dấu phẩy.", "x", "y", "z"]);
    expect(q.answer).toBe("C");
    expect(q.explanation).toBe("vì y.");
  });

  it("accepts 'A)', '- A.', '**A.**' and lowercase-bold option markers", () => {
    const variants = [
      ["A) Một", "B) Hai"],
      ["- A. Một", "- B. Hai"],
      ["**A.** Một", "**B.** Hai"],
      ["(A) Một", "(B) Hai"],
    ];
    for (const opts of variants) {
      const q = as(questionsOf(md("## Câu hỏi ôn tập", "", "### Câu 1", "Chọn đáp án?", ...opts, "", "**Đáp án:** B"))[0], "single");
      expect(q.options.map((o) => o.text), opts.join(" | ")).toEqual(["Một", "Hai"]);
      expect(q.answer).toBe("B");
    }
  });

  it("joins an indented continuation line onto the previous option", () => {
    const q = as(
      questionsOf(md("## Câu hỏi ôn tập", "", "### Câu 1", "Chọn?", "A. Dòng đầu", "   tiếp tục dòng", "B. Khác", "", "**Đáp án:** A"))[0],
      "single",
    );
    expect(q.options[0].text).toBe("Dòng đầu tiếp tục dòng");
  });

  it("resolves an answer that gives the option text instead of a letter", () => {
    const q = as(
      questionsOf(md("## Câu hỏi ôn tập", "", "### Câu 1", "Đâu là CSDL nhúng?", "A. SQLite", "B. CORS", "", "**Đáp án:** SQLite. Nó nhúng trong ứng dụng."))[0],
      "single",
    );
    expect(q.answer).toBe("A");
    expect(q.explanation).toBe("Nó nhúng trong ứng dụng.");
  });

  it("downgrades options without a usable key to a reflective short_answer (options kept in the prompt)", () => {
    const q = as(questionsOf(md("## Câu hỏi ôn tập", "", "### Câu 1", "Bạn chọn gì?", "A. Phương án một", "B. Phương án hai"))[0], "short_answer");
    expect(q.prompt).toContain("Bạn chọn gì?");
    expect(q.prompt).toContain("- A. Phương án một");
    expect(q.prompt).toContain("- B. Phương án hai");
    expect(q.accept).toBeUndefined();
  });

  it("ignores an answer letter that is not one of the options", () => {
    const qs = questionsOf(md("## Câu hỏi ôn tập", "", "### Câu 1", "Chọn?", "A. Một", "B. Hai", "", "**Đáp án:** F"));
    // F is not an option → cannot be graded → falls back to a reflective question
    expect(qs[0].type).toBe("short_answer");
  });
});

describe("parseQuizSections — multiple answers", () => {
  it("'**Đáp án:** A, C' yields type multiple", () => {
    const q = as(
      questionsOf(
        md("## Câu hỏi ôn tập", "", "**Câu 1.** Chọn các số chẵn.", "A. 2", "B. 3", "C. 4", "D. 5", "", "**Đáp án:** A, C"),
      )[0],
      "multiple",
    );
    expect(q.answer).toEqual(["A", "C"]);
    expect(q.options).toHaveLength(4);
  });

  it("keeps the explanation after the letters ('B, C. **Giải thích:** …')", () => {
    const q = as(
      questionsOf(
        md("## Câu hỏi ôn tập", "", "### Câu 1", "", "Chọn các số chẵn.", "", "A. 1", "B. 2", "C. 4", "D. 5", "", "**Đáp án:** B, C. **Giải thích:** 2 và 4 là số chẵn."),
      )[0],
      "multiple",
    );
    expect(q.answer).toEqual(["B", "C"]);
    expect(q.explanation).toBe("2 và 4 là số chẵn.");
  });

  it("accepts 'A và C' and 'A; C' separators and de-duplicates", () => {
    for (const key of ["A và C", "A; C", "A, C, A"]) {
      const q = as(questionsOf(md("## Câu hỏi ôn tập", "", "### Câu 1", "Chọn?", "A. a", "B. b", "C. c", "", `**Đáp án:** ${key}`))[0], "multiple");
      expect(q.answer, key).toEqual(["A", "C"]);
    }
  });
});

describe("parseQuizSections — task-list options", () => {
  it("derives the answers from the checked boxes", () => {
    const q = as(
      questionsOf(
        md("## Câu hỏi ôn tập", "", "### Câu 1", "Chọn những điều đúng:", "- [ ] sai một", "- [x] đúng một", "- [ ] sai hai", "- [X] đúng hai"),
      )[0],
      "multiple",
    );
    expect(q.options.map((o) => o.text)).toEqual(["sai một", "đúng một", "sai hai", "đúng hai"]);
    expect(q.options.map((o) => o.id)).toEqual(["A", "B", "C", "D"]);
    expect(q.answer).toEqual(["B", "D"]);
  });

  it("a single checked box gives a single-answer question", () => {
    const q = as(questionsOf(md("## Câu hỏi ôn tập", "", "### Câu 1", "Chọn phương án phù hợp:", "- [ ] phương án sai", "- [x] phương án đúng", "", "Giải thích: vì đúng."))[0], "single");
    expect(q.answer).toBe("B");
    expect(q.explanation).toBe("vì đúng.");
  });
});

describe("parseQuizSections — true/false", () => {
  const text = md(
    "## Câu hỏi ôn tập",
    "",
    "### Câu 1",
    "Trái đất hình cầu.",
    "A. Đúng",
    "B. Sai",
    "",
    "**Đáp án:** A. Vì nó tròn.",
    "",
    "### Câu 2",
    "Mặt trời quay quanh trái đất.",
    "A. Đúng",
    "B. Sai",
    "",
    "**Đáp án:** B.",
  );

  it("maps Đúng/Sai options to true_false with the right boolean", () => {
    const [q1, q2] = questionsOf(text);
    expect(as(q1, "true_false").answer).toBe(true);
    expect(as(q1, "true_false").explanation).toBe("Vì nó tròn.");
    expect(as(q2, "true_false").answer).toBe(false);
  });

  it("also recognises True/False options and a swapped order", () => {
    const q = as(questionsOf(md("## Quiz", "", "### Question 1", "Water boils at 100C.", "A. False", "B. True", "", "**Answer:** B"))[0], "true_false");
    expect(q.answer).toBe(true);
  });
});

describe("parseQuizSections — open questions", () => {
  it("'## 17. Knowledge Check' with '**Answer:**' on its own line gives short_answer + modelAnswer", () => {
    const qs = questionsOf(
      md(
        "## 17. Knowledge Check",
        "",
        "### Question 1",
        "",
        "What is a closure?",
        "",
        "**Answer:**",
        "A closure is a function bundled with its lexical environment.",
        "",
        "### Question 2",
        "",
        "Why write tests?",
        "",
        "**Answer:** To catch regressions early.",
      ),
    );
    const q1 = as(qs[0], "short_answer");
    expect(q1.prompt).toBe("What is a closure?");
    expect(q1.modelAnswer).toBe("A closure is a function bundled with its lexical environment.");
    expect(q1.accept).toBeUndefined();
    expect(as(qs[1], "short_answer").modelAnswer).toBe("To catch regressions early.");
  });

  it("an open question without any answer has no modelAnswer", () => {
    const q = as(questionsOf(md("## Câu hỏi ôn tập", "", "### Câu 1", "Hãy giải thích bằng lời của bạn."))[0], "short_answer");
    expect(q.modelAnswer).toBeUndefined();
  });

  it("does not consume the section when it only holds open questions (no key, nothing to splice)", () => {
    const text = md("## Câu hỏi ôn tập", "", "### Câu 1", "Mở?", "**Đáp án:** Có.", "", "## Hết");
    const [sec] = parse(text);
    expect(sec.end).toBe(lineOf(text, "## Hết"));
  });
});

describe("parseQuizSections — <details> answers", () => {
  it("multi-line <details> block: inner text becomes the answer", () => {
    const q = as(
      questionsOf(
        md(
          "## Câu hỏi ôn tập",
          "",
          "### Câu 1",
          "2 + 2 = ?",
          "A. 3",
          "B. 4",
          "C. 5",
          "",
          "<details>",
          "<summary>Đáp án</summary>",
          "",
          "B. vì 2 + 2 = 4",
          "",
          "</details>",
        ),
      )[0],
      "single",
    );
    expect(q.answer).toBe("B");
    expect(q.explanation).toBe("vì 2 + 2 = 4");
  });

  it("one-line <details><summary>Đáp án</summary>B. vì …</details>", () => {
    const q = as(
      questionsOf(
        md("## Câu hỏi ôn tập", "", "### Câu 1", "3 + 3 = ?", "A. 6", "B. 7", "", "<details><summary>Đáp án</summary>A. vì 3 + 3 = 6</details>"),
      )[0],
      "single",
    );
    expect(q.answer).toBe("A");
    expect(q.explanation).toBe("vì 3 + 3 = 6");
  });

  it("the summary text itself does not leak into the prompt or explanation", () => {
    const q = as(
      questionsOf(
        md("## Câu hỏi ôn tập", "", "### Câu 1", "1 + 1 = ?", "A. 2", "B. 3", "", "<details><summary>Xem đáp án</summary>", "", "A.", "", "</details>"),
      )[0],
      "single",
    );
    expect(q.prompt).toBe("1 + 1 = ?");
    expect(q.answer).toBe("A");
  });
});

describe("parseQuizSections — trailing '## Đáp án' answer-key section", () => {
  const text = md(
    "# Bài học",
    "",
    "## Câu hỏi ôn tập",
    "",
    "1. Cổng của HTTP là gì?",
    "A. 21",
    "B. 80",
    "C. 443",
    "",
    "2. Cổng của HTTPS là gì?",
    "A. 21",
    "B. 80",
    "C. 443",
    "",
    "## Đáp án",
    "",
    "1. B",
    "2. C",
    "",
    "## Phần khác",
    "",
    "Nội dung còn lại.",
  );

  it("applies the keyed answers to the numbered questions", () => {
    const [q1, q2] = questionsOf(text);
    expect(as(q1, "single").answer).toBe("B");
    expect(as(q2, "single").answer).toBe("C");
    expect(as(q1, "single").prompt).toBe("Cổng của HTTP là gì?");
  });

  it("includes the answer-key section in the consumed range", () => {
    const [sec] = parse(text);
    expect(sec.start).toBe(lineOf(text, "## Câu hỏi ôn tập"));
    expect(sec.end).toBe(lineOf(text, "## Phần khác"));
    const lines = text.split("\n");
    const rest = [...lines.slice(0, sec.start), ...lines.slice(sec.end)].join("\n");
    expect(rest).not.toContain("## Đáp án");
    expect(rest).toContain("Nội dung còn lại.");
  });

  it("understands 'Câu 2: C' style keys with bold and multi-letter answers", () => {
    const qs = questionsOf(
      md(
        "## Quiz",
        "",
        "### Câu 1",
        "Chọn?",
        "A. a",
        "B. b",
        "",
        "### Câu 2",
        "Chọn nhiều?",
        "A. a",
        "B. b",
        "C. c",
        "",
        "## Đáp án",
        "",
        "- **Câu 1:** B",
        "- **Câu 2:** A, C",
      ),
    );
    expect(as(qs[0], "single").answer).toBe("B");
    expect(as(qs[1], "multiple").answer).toEqual(["A", "C"]);
  });

  it("does not swallow an answer-key section whose lines it cannot parse", () => {
    const t = md("## Câu hỏi ôn tập", "", "### Câu 1", "Mở?", "", "## Đáp án", "", "Tự suy nghĩ nhé.", "", "## Hết");
    const [sec] = parse(t);
    expect(sec.end).toBe(lineOf(t, "## Đáp án"));
  });

  it("an inline answer wins over the key for the same question", () => {
    const qs = questionsOf(
      md("## Câu hỏi ôn tập", "", "### Câu 1", "Chọn?", "A. a", "B. b", "", "**Đáp án:** A", "", "## Đáp án", "", "1. B"),
    );
    expect(as(qs[0], "single").answer).toBe("A");
  });
});

describe("parseQuizSections — code in prompts", () => {
  it("extracts a fenced block from the prompt into code/codeLanguage", () => {
    const q = as(
      questionsOf(
        md(
          "## Câu hỏi ôn tập",
          "",
          "### Câu 1",
          "Đoạn code sau in ra gì?",
          "",
          "```python",
          "print(1 + 1)",
          "## đây không phải heading",
          "```",
          "",
          "A. 1",
          "B. 2",
          "",
          "**Đáp án:** B. In ra 2.",
        ),
      )[0],
      "single",
    );
    expect(q.code).toBe("print(1 + 1)\n## đây không phải heading");
    expect(q.codeLanguage).toBe("python");
    expect(q.prompt).toBe("Đoạn code sau in ra gì?");
    expect(q.answer).toBe("B");
    expect(q.explanation).toBe("In ra 2.");
  });

  it("falls back to a generic prompt when the prompt was only code", () => {
    const q = questionsOf(md("## Câu hỏi ôn tập", "", "### Câu 1", "```js", "console.log(1)", "```", "A. 1", "B. 2", "", "**Đáp án:** A"))[0];
    expect(q.code).toBe("console.log(1)");
    expect(q.codeLanguage).toBe("js");
    expect(q.prompt).toBe("Đoạn code sau cho kết quả gì?");
  });

  it("leaves no code fields on plain prompts", () => {
    const q = questionsOf(md("## Câu hỏi ôn tập", "", "### Câu 1", "Chọn?", "A. a", "B. b", "", "**Đáp án:** A"))[0];
    expect(q.code).toBeUndefined();
    expect(q.codeLanguage).toBeUndefined();
  });
});

describe("parseQuizSections — what is (not) a quiz section", () => {
  it("ignores headings inside fenced code blocks", () => {
    const text = md(
      "# Bài",
      "",
      "```md",
      "## Câu hỏi ôn tập",
      "### Câu 1",
      "foo",
      "A. x",
      "B. y",
      "**Đáp án:** A",
      "```",
      "",
      "Hết bài.",
    );
    expect(parse(text)).toEqual([]);
  });

  it("ignores '~~~' fences too, and resumes after the fence closes", () => {
    const text = md("~~~", "## Câu hỏi ôn tập", "~~~", "", "## Câu hỏi ôn tập", "", "### Câu 1", "Thật?", "A. Đúng", "B. Sai", "", "**Đáp án:** A");
    const sections = parse(text);
    expect(sections).toHaveLength(1);
    expect(sections[0].start).toBe(4);
  });

  it("a heading inside a code fence does not end the quiz section", () => {
    const text = md(
      "## Câu hỏi ôn tập",
      "",
      "### Câu 1",
      "Đoạn sau in gì?",
      "```py",
      "# comment",
      "## fake heading",
      "print('x')",
      "```",
      "A. x",
      "B. y",
      "",
      "**Đáp án:** A",
      "",
      "## Kết thúc",
    );
    const [sec] = parse(text);
    expect(sec.end).toBe(lineOf(text, "## Kết thúc"));
    expect(sec.questions).toHaveLength(1);
  });

  it("'Kiểm tra trước khi render' is NOT a quiz section", () => {
    const text = md("## Kiểm tra trước khi render", "", "### Câu 1", "Bước nào trước?", "A. Preview", "B. Render", "", "**Đáp án:** A");
    expect(QUIZ_SECTION_TITLE.test("Kiểm tra trước khi render")).toBe(false);
    expect(parse(text)).toEqual([]);
  });

  it("other everyday section titles are not quizzes", () => {
    for (const title of ["Tổng kết", "Bài tập thực hành", "Câu chuyện của tôi", "Kiểm tra môi trường", "Đáp án"]) {
      expect(QUIZ_SECTION_TITLE.test(title), title).toBe(false);
    }
  });

  it("recognises the common quiz titles", () => {
    for (const title of [
      "Câu hỏi ôn tập",
      "Câu hỏi trắc nghiệm",
      "Câu hỏi tự kiểm tra",
      "Trắc nghiệm",
      "Quiz",
      "Knowledge Check",
      "Review Questions",
      "Self-check",
      "Check your understanding",
      "Kiểm tra nhanh",
      "Bài kiểm tra",
    ]) {
      expect(QUIZ_SECTION_TITLE.test(title), title).toBe(true);
    }
  });

  it("a quiz section without any parsable question returns no section", () => {
    expect(parse(md("## Câu hỏi ôn tập", "", "Chưa có câu hỏi nào, hãy tự đặt câu hỏi cho mình."))).toEqual([]);
    expect(parse(md("## Câu hỏi ôn tập", "", "## Phần sau", "", "Text"))).toEqual([]);
    expect(parse("")).toEqual([]);
  });

  it("only headings up to level 4 can start a quiz section", () => {
    const body = ["Q?", "A. a", "B. b", "", "**Đáp án:** A"];
    expect(parse(md("##### Câu hỏi ôn tập", "", "### Câu 1", ...body))).toEqual([]);
    expect(parse(md("#### Câu hỏi ôn tập", "", "##### Câu 1", ...body))).toHaveLength(1);
  });

  it("a '### Câu 1' heading is a question, never a section title", () => {
    // "Câu hỏi ôn tập" would match QUIZ_SECTION_TITLE, but a heading that is itself "Câu N" must not open a section
    const text = md("### Câu 1: Câu hỏi ôn tập là gì?", "A. x", "B. y", "**Đáp án:** A");
    expect(parse(text)).toEqual([]);
  });

  it("a level-3 quiz section ends at the next heading of level ≤ 3", () => {
    const text = md(
      "## Chương",
      "",
      "### Trắc nghiệm",
      "",
      "**Câu 1.** Một?",
      "A. a",
      "B. b",
      "",
      "**Đáp án: A.**",
      "",
      "#### Ghi chú nhỏ",
      "",
      "### Khác",
      "",
      "Hết.",
    );
    const [sec] = parse(text);
    expect(sec.level).toBe(3);
    expect(sec.start).toBe(lineOf(text, "### Trắc nghiệm"));
    expect(sec.end).toBe(lineOf(text, "### Khác"));
  });
});

describe("parseQuizSections — several sections in one document", () => {
  const text = md(
    "# Bài",
    "",
    "## Quiz nhanh",
    "",
    "**Câu 1.** Một?",
    "A. a",
    "B. b",
    "",
    "**Đáp án: A.**",
    "",
    "## Nội dung giữa",
    "",
    "Văn bản.",
    "",
    "## Câu hỏi ôn tập",
    "",
    "**Câu 1.** Hai?",
    "A. c",
    "B. d",
    "",
    "**Đáp án: B.**",
  );

  it("returns each section with correct bounds and a running question index in the ids", () => {
    const sections = parse(text);
    expect(sections).toHaveLength(2);
    expect(sections[0].start).toBe(lineOf(text, "## Quiz nhanh"));
    expect(sections[0].end).toBe(lineOf(text, "## Nội dung giữa"));
    expect(sections[1].start).toBe(lineOf(text, "## Câu hỏi ôn tập"));
    expect(sections[0].questions[0].id).toMatch(/^t:q1:/);
    expect(sections[1].questions[0].id).toMatch(/^t:q2:/);
  });

  it("the last section runs to the end of the document", () => {
    const sections = parse(text);
    expect(sections[1].end).toBe(text.split(/\r?\n/).length);
  });
});

describe("countGradable", () => {
  it("counts every question except short answers without an accept list", () => {
    const qs: Question[] = [
      { id: "1", prompt: "a", type: "single", options: [{ id: "A", text: "x" }, { id: "B", text: "y" }], answer: "A" },
      { id: "2", prompt: "b", type: "true_false", answer: true },
      { id: "3", prompt: "c", type: "short_answer", modelAnswer: "m" },
      { id: "4", prompt: "d", type: "short_answer", accept: ["ok"] },
      { id: "5", prompt: "e", type: "short_answer", accept: [] },
    ];
    expect(countGradable(qs)).toBe(3);
  });

  it("is consistent with what the parser produces", () => {
    const qs = questionsOf(
      md(
        "## Câu hỏi ôn tập",
        "",
        "### Câu 1",
        "Chọn?",
        "A. a",
        "B. b",
        "",
        "**Đáp án:** A",
        "",
        "### Câu 2",
        "Mở?",
        "",
        "**Đáp án:** Tùy.",
      ),
    );
    expect(qs).toHaveLength(2);
    expect(countGradable(qs)).toBe(1);
  });
});
