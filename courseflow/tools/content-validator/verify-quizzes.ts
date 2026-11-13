// Verify that every Markdown lesson in a folder renders its questions as CourseFlow quizzes.
// Usage: node --no-warnings tools/content-validator/verify-quizzes.ts "<folder>" [--min 4]
// Reports per file: questions parsed from "Câu hỏi ôn tập" sections, auto-gradable count,
// and validation errors of ```quiz blocks (YAML/JSON + schema). Exit code 1 if any problem.
import fs from "node:fs";
import path from "node:path";
import { parse as parseYaml } from "yaml";
import { splitFrontmatter } from "../../src/lib/content/lesson-meta.ts";
import { parseQuizSections, countGradable } from "../../src/lib/assessment/parse-markdown-quiz.ts";
import { quizFileSchema } from "../../src/lib/assessment/schema.ts";

const dir = process.argv[2];
const min = process.argv.includes("--min") ? Number(process.argv[process.argv.indexOf("--min") + 1]) : 1;
if (!dir) {
  console.error("usage: verify-quizzes.ts <folder> [--min N]");
  process.exit(2);
}

function* walk(d: string): Generator<string> {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (e.isDirectory()) yield* walk(path.join(d, e.name));
    else if (e.name.endsWith(".md") && !/^(README|COURSE-MAP|SOURCE-NOTES)\.md$/i.test(e.name)) yield path.join(d, e.name);
  }
}

let problems = 0;
let files = 0;
let totalQ = 0;
let totalBlocks = 0;
for (const f of walk(dir)) {
  files++;
  const { body } = splitFrontmatter(fs.readFileSync(f, "utf8"));
  const qs = parseQuizSections(body, "v").flatMap((s) => s.questions);
  const gradable = countGradable(qs);
  const issues: string[] = [];
  if (gradable < min) issues.push(`only ${gradable} gradable question(s)`);
  const wrongType = qs.filter((q) => q.type === "short_answer" && /\n- [A-D]\. /.test(q.prompt));
  if (wrongType.length) issues.push(`${wrongType.length} question(s) with options but no usable answer key`);
  for (const m of body.matchAll(/^(```|~~~)quiz[^\n]*\n([\s\S]*?)\n\1\s*$/gm)) {
    totalBlocks++;
    try {
      let raw: unknown = parseYaml(m[2]);
      if (Array.isArray(raw)) raw = { questions: raw };
      const r = quizFileSchema.safeParse(raw);
      if (!r.success) issues.push(`quiz block: ${r.error.issues[0]?.path.join(".")} ${r.error.issues[0]?.message}`);
      else totalQ += r.data.questions.length;
    } catch (e) {
      issues.push(`quiz block YAML: ${(e as Error).message.split("\n")[0]}`);
    }
  }
  totalQ += gradable;
  if (issues.length) {
    problems++;
    console.log(`${path.relative(dir, f)} | ${issues.join("; ")}`);
  }
}
console.log(`files ${files}, problems ${problems}, gradable questions ${totalQ}, quiz blocks ${totalBlocks}`);
process.exit(problems ? 1 : 0);
