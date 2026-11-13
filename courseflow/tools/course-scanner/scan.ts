// Usage:
//   npm run scan                       incremental scan of every content root (slow on big libraries)
//   npm run scan -- --force            re-read every file
//   npm run scan -- --course <slug>    re-scan ONE course only (seconds), e.g. after editing it
import { runCourseScan, runScan } from "../../src/lib/content/scanner.ts";
import { writeSurveyReport } from "./survey.ts";

const force = process.argv.includes("--force");
const i = process.argv.indexOf("--course");
const t0 = Date.now();
if (i !== -1 && process.argv[i + 1]) {
  await runCourseScan(process.argv[i + 1], { force });
} else {
  const stats = await runScan({ force });
  const file = writeSurveyReport(stats);
  console.log(`✔ Xong sau ${((Date.now() - t0) / 1000).toFixed(1)}s. Báo cáo khảo sát: ${file}`);
}
