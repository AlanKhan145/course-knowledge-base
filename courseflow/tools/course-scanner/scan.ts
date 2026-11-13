// Usage: npm run scan [-- --force]
// Scans every content root (COURSEFLOW_CONTENT_ROOTS) into .data/catalog.db.
import { runScan } from "../../src/lib/content/scanner.ts";
import { writeSurveyReport } from "./survey.ts";

const force = process.argv.includes("--force");
const t0 = Date.now();
const stats = await runScan({ force });
const file = writeSurveyReport(stats);
console.log(`✔ Xong sau ${((Date.now() - t0) / 1000).toFixed(1)}s. Báo cáo khảo sát: ${file}`);
