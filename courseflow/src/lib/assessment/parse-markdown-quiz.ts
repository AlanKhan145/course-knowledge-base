// Parses the review-question sections that already exist in the course notes
// (e.g. "## 6. Câu hỏi ôn tập" → "### Câu 1" → "A. …" → "**Đáp án:** B. **Giải thích:** …")
// into structured questions WITHOUT modifying the source file.
//
// Supported variants (all observed in the real corpus):
//   ### Câu 1 / ### Question 2 / **Câu 3.** prompt / **Câu 4:** prompt / 1. prompt
//   A. text | A) text | - A. text | **A.** text | "A. x. B. y. C. z." on one line
//   - [ ] text / - [x] text (checked = correct, allows multiple answers)
//   **Đáp án:** B. **Giải thích:** … | **Đáp án: A.** … | **Đáp án:** A, C | **Answer:** free text
//   <details><summary>Đáp án</summary> B … </details>
//   a trailing "## Đáp án" section with "1. B", "Câu 2: C" lines
import type { Question } from "./schema.ts";
import { foldVi } from "../content/text.ts";
import { shortHash } from "../content/hash.ts";

export const QUIZ_SECTION_TITLE =
  /(câu hỏi\s*(trắc nghiệm\s*)?(ôn tập|tự kiểm tra|trắc nghiệm|kiểm tra|củng cố|luyện tập|tự luyện|ôn bài)|trắc nghiệm|\bquiz(zes)?\b|knowledge check|review questions?|self[- ]?(check|assessment|test|quiz)|check your understanding|test your knowledge|kiểm tra (nhanh|kiến thức|hiểu bài|cuối bài)|bài kiểm tra|ôn tập (nhanh|cuối bài|kiến thức))/i;

const ANSWER_KEY_TITLE = /^(đáp án|answer key|answers|lời giải)(\s|$|:)/i;

const HEADING = /^(#{1,6})\s+(.*?)\s*#*\s*$/;
const FENCE = /^\s*(```|~~~)/;
const Q_HEADING = /^#{2,6}\s+(?:\*\*)?(?:câu(?:\s*hỏi)?|question|q|bài|exercise)\s*(\d+)\s*(?:\*\*)?\s*[.:)\-–—]?\s*(.*)$/i;
const Q_BOLD = /^\s*\*\*(?:câu(?:\s*hỏi)?|question|q)\s*(\d+)\s*[.:)]?\s*\*\*\s*[.:)\-–—]?\s*(.*)$/i;
const Q_BOLD_INNER = /^\s*\*\*(?:câu(?:\s*hỏi)?|question|q)\s*(\d+)\s*[.:)]\s*(?!\*)(.+?)\*\*\s*(.*)$/i;
const Q_NUMBERED = /^(\d{1,3})[.)]\s+(.+)$/;
const OPTION = /^\s*(?:[-*+]\s+)?(?:\*\*)?\(?([A-Ha-h])(?:[.):]|\s[-–—])(?:\*\*)?\s+(.+?)\s*$/;
const TASK_OPTION = /^\s*[-*+]\s+\[( |x|X)\]\s+(.+?)\s*$/;
const ANSWER_LABEL =
  /^\s*(?:[-*+>]\s+)?(?:đáp án(?:\s*(?:đúng|gợi ý|mẫu|tham khảo))?|answer|correct answer|correct|suggested answer|model answer|lời giải|key)\s*(?:[:.]|$)\s*(.*)$/i;
const EXPLAIN_LABEL = /^\s*(?:giải thích|explanation|vì sao|why|lý do)\s*[:.]\s*/i;

export interface ParsedQuizSection {
  /** Line index (0-based) of the section heading. */
  start: number;
  /** Exclusive end line index (covers a consumed answer-key section too). */
  end: number;
  title: string;
  level: number;
  questions: Question[];
}

interface Line {
  text: string;
  inFence: boolean;
}

function markLines(md: string): Line[] {
  const out: Line[] = [];
  let fence: string | null = null;
  for (const text of md.split(/\r?\n/)) {
    const m = text.match(FENCE);
    if (m) {
      if (fence === null) {
        fence = m[1];
        out.push({ text, inFence: true });
        continue;
      }
      if (text.trim().startsWith(fence)) {
        fence = null;
        out.push({ text, inFence: true });
        continue;
      }
    }
    out.push({ text, inFence: fence !== null });
  }
  return out;
}

function headingOf(line: Line): { level: number; title: string } | null {
  if (line.inFence) return null;
  const m = line.text.match(HEADING);
  if (!m) return null;
  return { level: m[1].length, title: m[2].replace(/\*\*/g, "").trim() };
}

function stripTitleNumber(t: string): string {
  return t.replace(/^(?:[\dIVXivx]+(?:\.\d+)*[.):]?\s+)/, "").trim();
}

function stripEmphasis(s: string): string {
  return s.replace(/\*\*|__/g, "").replace(/<\/?(strong|b|em)>/gi, "");
}

function cleanText(s: string): string {
  return s.replace(/\s{2,}$/g, "").replace(/\\$/, "").trim();
}

/** Split "A. SQLite. B. CORS. C. LangGraph. D. Pydantic." into options. */
function splitInlineOptions(line: string, first = "A"): { id: string; text: string }[] | null {
  const plain = line.trim().replace(/^[-*+]\s+/, "").replace(/\*\*([A-H][.)])\*\*/g, "$1");
  if (!new RegExp(`^\\(?${first}[.)]\\s`).test(plain)) return null;
  const parts: { id: string; text: string }[] = [];
  const re = /(?:^|\s)\(?([A-H])[.)]\s+/g;
  const marks: { id: string; idx: number; len: number }[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(plain))) marks.push({ id: m[1], idx: m.index, len: m[0].length });
  if (marks.length < 2) return null;
  for (let i = 0; i < marks.length; i++) {
    const expected = String.fromCharCode(first.charCodeAt(0) + i);
    if (marks[i].id !== expected) return null;
  }
  for (let i = 0; i < marks.length; i++) {
    const from = marks[i].idx + marks[i].len;
    const to = i + 1 < marks.length ? marks[i + 1].idx : plain.length;
    parts.push({ id: marks[i].id, text: cleanText(plain.slice(from, to)).replace(/[.;]\s*$/, "") });
  }
  return parts;
}

interface Block {
  num: number | null;
  head: string;
  lines: string[];
}

function parseLetters(rest: string, optionIds: Set<string>): { letters: string[]; tail: string } | null {
  const m = rest.match(/^\(?\s*([A-Ha-h](?:\s*(?:,|;|và|and|&|\+|\/)\s*[A-Ha-h])*)\s*\)?(?=$|[\s.,;:)\-–—])[\s.,;:)\-–—]*([\s\S]*)$/);
  if (!m) return null;
  const letters = m[1].toUpperCase().match(/[A-H]/g) ?? [];
  if (!letters.length) return null;
  if (optionIds.size && letters.some((l) => !optionIds.has(l))) return null;
  return { letters: [...new Set(letters)], tail: m[2] };
}

function matchOptionByText(text: string, options: { id: string; text: string }[]): string | null {
  const t = foldVi(stripEmphasis(text)).replace(/[.\s]+$/, "").trim();
  if (!t) return null;
  for (const o of options) {
    const ot = foldVi(stripEmphasis(o.text)).replace(/[.\s]+$/, "").trim();
    if (ot && (t === ot || t.startsWith(ot + " ") || t.startsWith(ot + "."))) return o.id;
  }
  return null;
}

function blockToQuestion(block: Block, idPrefix: string, index: number, keyed: Map<number, string[]>): Question | null {
  // Expand <details> answers: treat inner content as an answer line.
  const raw: string[] = [];
  let inDetails = false;
  for (const l of block.lines) {
    if (/<details[\s>]/i.test(l)) {
      inDetails = true;
      const after = l.replace(/.*<details[^>]*>/i, "").replace(/<summary>[\s\S]*?<\/summary>/i, "").replace(/<\/details>.*/i, "");
      if (after.trim()) {
        // One-line form `<details><summary>Đáp án</summary>B. …</details>`: same as the multi-line form.
        const plainAfter = stripEmphasis(after).trim();
        raw.push(ANSWER_LABEL.test(plainAfter) ? after : `Đáp án: ${plainAfter}`);
      }
      if (/<\/details>/i.test(l)) inDetails = false;
      continue;
    }
    if (inDetails) {
      if (/<summary>/i.test(l)) {
        const s = l.replace(/<\/?summary>/gi, "").trim();
        if (s && !/^(đáp án|answer|xem đáp án|show answer|lời giải|gợi ý)\b/i.test(stripEmphasis(s))) raw.push(s);
        continue;
      }
      if (/<\/details>/i.test(l)) {
        const before = l.replace(/<\/details>.*/i, "");
        if (before.trim()) raw.push(before);
        inDetails = false;
        continue;
      }
      const plain = stripEmphasis(l).trim();
      raw.push(plain && !ANSWER_LABEL.test(plain) && !raw.some((r) => ANSWER_LABEL.test(stripEmphasis(r))) ? `Đáp án: ${plain}` : l);
      continue;
    }
    raw.push(l);
  }

  const promptLines: string[] = block.head ? [block.head] : [];
  const options: { id: string; text: string }[] = [];
  const checked: string[] = [];
  let answerRest: string | null = null;
  const after: string[] = [];
  let phase: "prompt" | "options" | "answer" = "prompt";
  let codeOpen = false;

  for (const line of raw) {
    const fence = FENCE.test(line);
    if (phase === "answer") {
      after.push(line);
      continue;
    }
    if (codeOpen || fence) {
      if (fence) codeOpen = !codeOpen;
      if (phase === "prompt") promptLines.push(line);
      else if (options.length) options[options.length - 1].text += "\n" + line;
      continue;
    }
    const plain = stripEmphasis(line);
    const ans = plain.match(ANSWER_LABEL);
    if (ans && /^\s*(?:[-*+>]\s+)?(?:\*\*|__)?\s*(đáp án|answer|correct|suggested|model|lời giải|key)/i.test(line)) {
      answerRest = ans[1] ?? "";
      phase = "answer";
      continue;
    }
    const task = line.match(TASK_OPTION);
    if (task) {
      const id = String.fromCharCode(65 + options.length);
      options.push({ id, text: cleanText(task[2]) });
      if (task[1].toLowerCase() === "x") checked.push(id);
      phase = "options";
      continue;
    }
    const inline = splitInlineOptions(line, String.fromCharCode(65 + options.length));
    if (inline) {
      options.push(...inline);
      phase = "options";
      continue;
    }
    const opt = line.match(OPTION);
    if (opt) {
      const id = opt[1].toUpperCase();
      const expected = String.fromCharCode(65 + options.length);
      if (id === expected) {
        options.push({ id, text: cleanText(opt[2]) });
        phase = "options";
        continue;
      }
    }
    if (phase === "prompt") promptLines.push(line);
    else if (line.trim() && options.length && /^\s{2,}\S/.test(line)) options[options.length - 1].text += " " + line.trim();
    else if (line.trim()) after.push(line); // stray text after options, treat as explanation
  }

  let prompt = promptLines.join("\n").replace(/\s+$/g, "");
  prompt = prompt.split("\n").map(cleanText).join("\n").trim();
  if (!prompt) return null;

  // Pull a fenced code block out of the prompt for nicer rendering.
  let code: string | undefined;
  let codeLanguage: string | undefined;
  const cm = prompt.match(/```([\w+#.-]*)\n([\s\S]*?)\n```/);
  if (cm) {
    codeLanguage = cm[1] || undefined;
    code = cm[2];
    prompt = (prompt.slice(0, cm.index) + prompt.slice((cm.index ?? 0) + cm[0].length)).trim() || "Đoạn code sau cho kết quả gì?";
  }

  const ids = new Set(options.map((o) => o.id));
  let letters: string[] = [...checked];
  let explanation = "";
  let modelAnswer = "";

  if (answerRest !== null) {
    const rest = stripEmphasis(answerRest).trim();
    const pl = options.length ? parseLetters(rest, ids) : null;
    if (pl) {
      letters = pl.letters;
      explanation = pl.tail;
    } else if (options.length) {
      const byText = matchOptionByText(rest, options);
      if (byText) {
        letters = [byText];
        explanation = rest.replace(/^[^.]*\.\s*/, "");
      } else explanation = rest;
    } else {
      modelAnswer = rest;
    }
    const tail = after.join("\n").trim();
    if (options.length) explanation = [explanation, tail].filter(Boolean).join("\n");
    else modelAnswer = [modelAnswer, tail].filter(Boolean).join("\n");
  } else if (after.length) {
    explanation = after.join("\n").trim();
  }
  if (!letters.length && block.num !== null && keyed.has(block.num)) letters = keyed.get(block.num)!.filter((l) => ids.has(l));

  explanation = stripEmphasis(explanation).replace(EXPLAIN_LABEL, "").trim();
  modelAnswer = modelAnswer.replace(EXPLAIN_LABEL, "").trim();
  const id = `${idPrefix}:q${index + 1}:${shortHash(prompt, 6)}`;
  const common = { id, prompt, source: "lesson-section", ...(code ? { code, codeLanguage } : {}) };

  if (options.length >= 2 && letters.length === 1) {
    const isTF =
      options.length === 2 &&
      options.every((o) => /^(đúng|sai|true|false)\.?$/i.test(foldVi(stripEmphasis(o.text)).trim().replace("dung", "đúng")));
    if (isTF) {
      const correct = options.find((o) => o.id === letters[0])!;
      return { ...common, type: "true_false", answer: /^(đ|d|t)/i.test(foldVi(stripEmphasis(correct.text)).trim()), explanation: explanation || undefined };
    }
    return { ...common, type: "single", options, answer: letters[0], explanation: explanation || undefined };
  }
  if (options.length >= 2 && letters.length > 1) {
    return { ...common, type: "multiple", options, answer: letters, explanation: explanation || undefined };
  }
  if (options.length >= 2) {
    // Options without a usable key: keep as a reflective question, options listed in the prompt.
    const listed = options.map((o) => `- ${o.id}. ${o.text}`).join("\n");
    return { ...common, type: "short_answer", prompt: `${prompt}\n\n${listed}`, modelAnswer: explanation || undefined };
  }
  return { ...common, type: "short_answer", modelAnswer: modelAnswer || explanation || undefined };
}

function parseAnswerKey(lines: string[]): Map<number, string[]> {
  const map = new Map<number, string[]>();
  for (const l of lines) {
    const plain = stripEmphasis(l);
    const re = /(?:câu|question|q)?\s*(\d{1,3})\s*[.:)\-–—]\s*\(?([A-H](?:\s*,\s*[A-H])*)\)?(?=$|[\s.,;)])/gi;
    let m: RegExpExecArray | null;
    while ((m = re.exec(plain))) map.set(Number(m[1]), m[2].toUpperCase().match(/[A-H]/g) ?? []);
  }
  return map;
}

function splitBlocks(body: Line[]): Block[] {
  const starts: { i: number; num: number | null; head: string; skipLine: boolean }[] = [];
  const pushStart = (i: number, num: number | null, head: string) => starts.push({ i, num, head, skipLine: true });
  body.forEach((l, i) => {
    if (l.inFence) return;
    let m = l.text.match(Q_HEADING);
    if (m) return pushStart(i, Number(m[1]), cleanText(stripEmphasis(m[2] ?? "")));
    m = l.text.match(Q_BOLD_INNER);
    if (m) return pushStart(i, Number(m[1]), cleanText([m[2], m[3]].filter(Boolean).join(" ")));
    m = l.text.match(Q_BOLD);
    if (m) return pushStart(i, Number(m[1]), cleanText(m[2] ?? ""));
  });
  if (!starts.length) {
    body.forEach((l, i) => {
      if (l.inFence) return;
      const m = l.text.match(Q_NUMBERED);
      if (m) pushStart(i, Number(m[1]), cleanText(m[2]));
    });
  }
  const blocks: Block[] = [];
  starts.forEach((s, k) => {
    const end = k + 1 < starts.length ? starts[k + 1].i : body.length;
    const lines = body.slice(s.i + 1, end).map((l) => l.text);
    // Drop trailing horizontal rules / blank lines.
    while (lines.length && /^\s*(---+|\*\*\*+|___+)?\s*$/.test(lines[lines.length - 1])) lines.pop();
    blocks.push({ num: s.num, head: s.head, lines });
  });
  return blocks;
}

/**
 * Find every review-question section in a markdown body (frontmatter already removed).
 * Sections that yield no question are not returned, so the original markdown stays visible.
 */
export function parseQuizSections(md: string, idPrefix: string): ParsedQuizSection[] {
  const lines = markLines(md);
  const sections: ParsedQuizSection[] = [];
  let qIndex = 0;
  for (let i = 0; i < lines.length; i++) {
    const h = headingOf(lines[i]);
    if (!h || h.level > 4) continue;
    const title = stripTitleNumber(h.title);
    if (!QUIZ_SECTION_TITLE.test(title) || Q_HEADING.test(lines[i].text)) continue;
    let end = lines.length;
    for (let j = i + 1; j < lines.length; j++) {
      const hj = headingOf(lines[j]);
      // "### Câu 1" at the same level as "### Câu hỏi ôn tập" belongs to the quiz, not a new section.
      if (hj && hj.level <= h.level && !(hj.level === h.level && Q_HEADING.test(lines[j].text))) {
        end = j;
        break;
      }
    }
    // Optional answer-key section right after the quiz.
    let keyed = new Map<number, string[]>();
    let consumedEnd = end;
    const hk = end < lines.length ? headingOf(lines[end]) : null;
    if (hk && ANSWER_KEY_TITLE.test(stripTitleNumber(hk.title))) {
      let kEnd = lines.length;
      for (let j = end + 1; j < lines.length; j++) {
        const hj = headingOf(lines[j]);
        if (hj && hj.level <= hk.level) {
          kEnd = j;
          break;
        }
      }
      keyed = parseAnswerKey(lines.slice(end + 1, kEnd).map((l) => l.text));
      if (keyed.size) consumedEnd = kEnd;
    }
    const blocks = splitBlocks(lines.slice(i + 1, end));
    const questions: Question[] = [];
    for (const b of blocks) {
      const q = blockToQuestion(b, idPrefix, qIndex, keyed);
      if (q) {
        questions.push(q);
        qIndex++;
      }
    }
    if (questions.length) {
      sections.push({ start: i, end: questions.some((q) => q.type !== "short_answer") || keyed.size ? consumedEnd : end, title, level: h.level, questions });
      i = end - 1;
    }
  }
  return sections;
}

/** Number of questions with an answer key (auto-gradable). */
export function countGradable(questions: Question[]): number {
  return questions.filter((q) => q.type !== "short_answer" || (q.accept && q.accept.length > 0)).length;
}
