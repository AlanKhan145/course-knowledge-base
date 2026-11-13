// Content Quality Analyzer — reads the CourseFlow SQLite catalog (never the course files) and writes
//   reports/QUALITY.md            summary across all courses (worst 50, per-domain counts, method)
//   reports/quality/<id>.md       one report per course (the N lowest-scoring ones, or --course <id>)
//   reports/quality.json          machine-readable metrics + suggestions (for a future /quality page)
//
// Usage: node --no-warnings tools/content-validator/analyze.ts [--course <courseId>] [--json] [--reports N] [--no-write]
//   --course <id>   analyze one course and write only reports/quality/<id>.md
//   --json          print the JSON to stdout (everything else goes to stderr)
//   --reports N     how many lowest-scoring courses get their own report (default 30)
//   --no-write      compute and print only, write no files
// Read-only with respect to the content library; suggestions are text, Markdown is never rewritten.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getDbPath } from "../../src/lib/content/config.ts";
import { findCourseIds, loadCatalog } from "./load.ts";
import type { Catalog } from "./load.ts";
import { analyzeCourse } from "./metrics.ts";
import { MARKER, buildJson, renderCourseReport, renderSummary, sortWorstFirst, summarize } from "./report.ts";
import type { Item, RenderContext } from "./report.ts";
import { buildReviewSamples, buildSuggestions } from "./suggest.ts";
import { fmtNum, fmtPct, pct } from "./util.ts";

const APP_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
process.env.COURSEFLOW_APP_ROOT ??= APP_ROOT;

interface Args {
  course: string | null;
  json: boolean;
  noWrite: boolean;
  reports: number;
  help: boolean;
}

function parseArgs(argv: string[]): Args {
  const args: Args = { course: null, json: false, noWrite: false, reports: 30, help: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--json") args.json = true;
    else if (a === "--no-write") args.noWrite = true;
    else if (a === "--help" || a === "-h") args.help = true;
    else if (a === "--course") args.course = argv[++i] ?? "";
    else if (a.startsWith("--course=")) args.course = a.slice("--course=".length);
    else if (a === "--reports") args.reports = Math.max(0, Number(argv[++i]) || 0);
    else if (a.startsWith("--reports=")) args.reports = Math.max(0, Number(a.slice("--reports=".length)) || 0);
    else throw new Error(`Tham số không hợp lệ: ${a}`);
  }
  if (args.course !== null && !args.course.trim()) throw new Error("--course cần một mã khóa học (ví dụ --course ai-agent-long-term-memory)");
  return args;
}

const HELP = `Content Quality Analyzer
  node --no-warnings tools/content-validator/analyze.ts [--course <courseId>] [--json] [--reports N] [--no-write]
  npm run quality [-- --course <courseId>] [-- --json]`;

function safeFileName(id: string): string {
  return id.replace(/[^\w.-]+/g, "_");
}

function writeFile(file: string, text: string): void {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, text, "utf8");
}

/** Remove report files this tool generated earlier that are no longer in the current set. */
function pruneStale(dir: string, keep: Set<string>): number {
  let removed = 0;
  if (!fs.existsSync(dir)) return 0;
  for (const name of fs.readdirSync(dir)) {
    if (!name.endsWith(".md") || keep.has(name)) continue;
    const file = path.join(dir, name);
    try {
      if (fs.readFileSync(file, "utf8").startsWith(MARKER)) {
        fs.unlinkSync(file);
        removed++;
      }
    } catch {
      /* ignore */
    }
  }
  return removed;
}

function sec(ms: number): string {
  return `${(ms / 1000).toLocaleString("vi-VN", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}s`;
}

const t0 = Date.now();
let args: Args;
try {
  args = parseArgs(process.argv.slice(2));
} catch (e) {
  console.error((e as Error).message);
  console.error(HELP);
  process.exit(2);
}
if (args.help) {
  console.log(HELP);
  process.exit(0);
}
// With --json, stdout carries only the JSON document.
const log = (msg = "") => (args.json ? console.error(msg) : console.log(msg));

const dbPath = getDbPath();
let catalog: Catalog;
try {
  catalog = loadCatalog(dbPath, args.course ?? undefined);
} catch (e) {
  console.error((e as Error).message);
  process.exit(1);
}
const tLoad = Date.now();

if (args.course && !catalog.courses.length) {
  const hint = findCourseIds(dbPath, args.course);
  console.error(`Không có khóa học với mã “${args.course}”.${hint.length ? ` Có thể bạn muốn: ${hint.join(", ")}` : ""}`);
  process.exit(1);
}

const levelSystemic = catalog.levelCoverage.total > 0 && catalog.levelCoverage.filled / catalog.levelCoverage.total < 0.05;
const ctx: RenderContext = {
  generatedAt: new Date().toISOString(),
  lastScan: catalog.lastScan,
  levelSystemic,
  levelCoverage: catalog.levelCoverage,
};

const items: Item[] = catalog.courses.map((course) => {
  const a = analyzeCourse(course, { levelSystemic });
  return { a, suggestions: buildSuggestions(a) };
});
const tAnalyze = Date.now();

const worst = sortWorstFirst(items);
const reportsDir = path.join(APP_ROOT, "reports");
const qualityDir = path.join(reportsDir, "quality");
const written: string[] = [];
let pruned = 0;
const json = buildJson(items, ctx, catalog.domains);

if (!args.noWrite) {
  if (args.course) {
    const item = items[0];
    const file = path.join(qualityDir, `${safeFileName(item.a.course.id)}.md`);
    writeFile(file, renderCourseReport(item, buildReviewSamples(item.a), ctx));
    written.push(file);
  } else {
    const picked = worst.slice(0, args.reports);
    const keep = new Set<string>();
    const courseFiles: string[] = [];
    for (const item of picked) {
      const name = `${safeFileName(item.a.course.id)}.md`;
      keep.add(name);
      const file = path.join(qualityDir, name);
      writeFile(file, renderCourseReport(item, buildReviewSamples(item.a), ctx));
      courseFiles.push(file);
    }
    pruned = pruneStale(qualityDir, keep);
    const summaryFile = path.join(reportsDir, "QUALITY.md");
    writeFile(summaryFile, renderSummary(items, worst.slice(0, 50), new Set(picked.map((p) => p.a.course.id)), ctx));
    const jsonFile = path.join(reportsDir, "quality.json");
    writeFile(jsonFile, `${JSON.stringify(json)}\n`);
    written.push(summaryFile, jsonFile, ...courseFiles);
  }
}
const tEnd = Date.now();

if (args.json) {
  process.stdout.write(`${JSON.stringify(json)}\n`);
}

// ---- console summary
const s = summarize(items);
log(`✔ Đã phân tích ${fmtNum(s.courses)} khóa / ${fmtNum(s.lessons)} bài trong ${sec(tEnd - t0)} (đọc catalog ${sec(tLoad - t0)} · tính điểm ${sec(tAnalyze - tLoad)} · ghi file ${sec(tEnd - tAnalyze)}).`);
log(`  Điểm tự động: TB ${fmtNum(s.avgScore, 1)} · trung vị ${fmtNum(s.medianScore, 1)} · min ${fmtNum(s.min, 1)} · max ${fmtNum(s.max, 1)}`);
log(`  Tốt ${s.bands.good} · Khá ${s.bands.fair} · Cần cải thiện ${s.bands.needs} · Yếu ${s.bands.poor}`);
if (!args.course) {
  log(`  Thiếu mô tả ${s.withoutDescription} (${fmtPct(pct(s.withoutDescription, s.courses))}) · thiếu mục tiêu ${s.withoutObjectives} (${fmtPct(pct(s.withoutObjectives, s.courses))}) · chưa có câu hỏi ${s.withoutQuiz}`);
  log("  Gợi ý phổ biến nhất:");
  for (const g of s.suggestionCodes.slice(0, 5)) log(`    - ${g.label}: ${fmtNum(g.courses)} khóa`);
  log("  5 khóa điểm thấp nhất:");
  for (const w of worst.slice(0, 5)) log(`    - ${w.a.course.id}: ${fmtNum(w.a.score, 1)}`);
} else {
  const it = items[0];
  log(`  ${it.a.course.title}: ${fmtNum(it.a.score, 1)}/100 (${it.a.label})`);
  for (const sug of it.suggestions.slice(0, 5)) log(`    - ${sug.text}`);
}
if (args.noWrite) log("  (--no-write: không ghi file)");
else {
  log("  File:");
  for (const f of written.slice(0, 6)) log(`    ${path.relative(APP_ROOT, f).replace(/\\/g, "/")}`);
  if (written.length > 6) log(`    … và ${written.length - 6} file nữa trong reports/quality/`);
  if (pruned) log(`  Đã xóa ${pruned} báo cáo cũ không còn trong danh sách.`);
}
