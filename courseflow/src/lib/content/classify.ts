// Pure classification rules for the Course Discovery Engine.
// Every rule here is driven by names only so it can be unit-tested with fixtures.
import { foldVi } from "./text.ts";

/** Directories never descended into. */
export const IGNORED_DIRS = new Set(
  [
    "node_modules", ".git", "__pycache__", ".venv", "venv", "env", ".env", "dist", "build", ".next", ".cache",
    "target", "bin", "obj", ".idea", ".vscode", "site-packages", ".ipynb_checkpoints", ".pytest_cache",
    ".mypy_cache", ".gradle", "Library", "Temp", "Logs", ".godot", ".import", "DerivedDataCache", "Intermediate",
    "Saved", "Binaries", "coverage", ".turbo", ".parcel-cache", ".svelte-kit", ".nuxt", ".output", "vendor",
    ".delete-blocked", "$RECYCLE.BIN",
  ].map((s) => s.toLowerCase()),
);

/** Folders that hold supporting material, never modules. */
const RESOURCE_DIR =
  /^(_?assets?|images?|imgs?|img_?src|pictures?|pics?|photos?|media|static|figures?|figs?|gifs?|icons?|screenshots?|diagrams?|resources?|attachments?|files?|downloads?|data|datasets?|code|codes|src|source|sources|sourcecode|source[-_ ]?code|scripts?|tools?|public|videos?|audios?|sounds?|slides?|pdfs?|notebooks?|starter[-_ ]?files?|solutions?|exercise[-_ ]?files?|project[-_ ]?files?|tai[-_ ]?nguyen|tai[-_ ]?lieu[-_ ]?goc|txt[-_ ]?goc|.*_txt_goc|transcripts?|subtitles?|captions?|raw|backup|tmp|temp|out|output|outputs|renders?|exports?|blend|textures?|models?_files)$/i;

/** Transparent wrapper folders: their children are the real modules. */
const WRAPPER_DIR = /^(modules?|lessons?|chapters?|sections?|parts?|units?|bai[-_ ]?hoc|noi[-_ ]?dung|content|contents|course|khoa[-_ ]?hoc|curriculum|syllabus)$/i;

/** Marker files that turn a folder into a code project (resource, not module). */
const CODE_PROJECT_MARKERS = new Set(
  [
    "package.json", "pyproject.toml", "requirements.txt", "setup.py", "cargo.toml", "go.mod", "pom.xml",
    "build.gradle", "build.gradle.kts", "composer.json", "gemfile", "project.godot", "pubspec.yaml",
    "docker-compose.yml", "docker-compose.yaml", "dockerfile", "makefile", "cmakelists.txt", "angular.json",
    "vite.config.ts", "vite.config.js", "next.config.js", "next.config.ts", "tsconfig.json",
  ].map((s) => s.toLowerCase()),
);
const CODE_PROJECT_EXT = /\.(csproj|sln|uproject|xcodeproj|vcxproj)$/i;

export function isIgnoredDir(name: string): boolean {
  return name.startsWith(".") || name.startsWith("$") || IGNORED_DIRS.has(name.toLowerCase());
}

export function isResourceDirName(name: string): boolean {
  return RESOURCE_DIR.test(foldVi(name).trim());
}

export function isWrapperDirName(name: string): boolean {
  return WRAPPER_DIR.test(foldVi(name).trim());
}

export function isCodeProject(fileNames: string[], dirNames: string[]): boolean {
  if (dirNames.includes(".git") || dirNames.includes("ProjectSettings")) return true;
  return fileNames.some((f) => CODE_PROJECT_MARKERS.has(f.toLowerCase()) || CODE_PROJECT_EXT.test(f));
}

/** Course-level or module-level overview/index files (not lessons). */
const OVERVIEW_FILE =
  /^(readme|index|_index|overview|tong[-_ ]?quan|gioi[-_ ]?thieu[-_ ]?khoa[-_ ]?hoc|00[-_ ]?readme|0+[-_ ]?muc[-_ ]?luc.*|muc[-_ ]?luc.*|course[-_ ]?index|course[-_ ]?overview|module[-_ ]?index|00[-_ ]?lo[-_ ]?trinh.*|lo[-_ ]?trinh[-_ ]?khoa[-_ ]?hoc.*|syllabus|outline|curriculum|table[-_ ]?of[-_ ]?contents|toc|00[-_ ]?index|00[-_ ]?overview|00[-_ ]?gioi[-_ ]?thieu[-_ ]?khoa[-_ ]?hoc)$/i;

/** Supporting documents: readable but excluded from progress. */
const RESOURCE_FILE =
  /^(coverage[-_ ]?report|image[-_ ]?sources?|sources?|references?|tai[-_ ]?lieu[-_ ]?tham[-_ ]?khao|changelog|change[-_ ]?log|license|licence|contributing|code[-_ ]?of[-_ ]?conduct|security|todo|agents?|claude|brief.*|agent[-_ ]?brief.*|.*transcript.*|.*[-_ ]original|ban[-_ ]?ghi[-_ ]?loi.*|credits?|attributions?|notes?[-_ ]?internal|progress[-_ ]?log|checkpoint[-_ ]?log|qa[-_ ]?report|review[-_ ]?report|build[-_ ]?log)$/i;

/** Root-level docs that belong at the END of a course (appendix-like). */
const APPENDIX_FILE = /(cheat[-_ ]?sheet|glossary|thuat[-_ ]?ngu|capstone|final|appendix|phu[-_ ]?luc|tong[-_ ]?ket|summary|on[-_ ]?tap[-_ ]?tong|faq|hoi[-_ ]?dap|interview|bai[-_ ]?tap[-_ ]?tong)/i;

export type DocKind = "lesson" | "overview" | "resource";

export function stem(fileName: string): string {
  return fileName.replace(/\.(md|markdown|mdx)$/i, "");
}

export function classifyMarkdownFile(fileName: string, frontmatterKind?: unknown): DocKind {
  if (frontmatterKind === "lesson" || frontmatterKind === "overview" || frontmatterKind === "resource") return frontmatterKind;
  const s = foldVi(stem(fileName)).trim();
  if (OVERVIEW_FILE.test(s)) return "overview";
  if (RESOURCE_FILE.test(s)) return "resource";
  return "lesson";
}

export function isAppendixName(fileName: string): boolean {
  return APPENDIX_FILE.test(foldVi(stem(fileName)));
}

/** Priority of an overview file when choosing the course/module description source (lower = better). */
export function overviewPriority(fileName: string): number {
  const s = foldVi(stem(fileName));
  if (/^0*[-_ ]?muc[-_ ]?luc[-_ ]?khoa[-_ ]?hoc/.test(s)) return 0;
  if (/^0*[-_ ]?muc[-_ ]?luc[-_ ]?module/.test(s)) return 0;
  if (s === "readme" || s === "00_readme" || s === "00-readme") return 1;
  if (/course[-_ ]?(index|overview)|overview|tong[-_ ]?quan/.test(s)) return 2;
  if (/lo[-_ ]?trinh/.test(s)) return 3;
  return 5;
}

const NUMBERED = /^\d+\s*-\s+/;

/** "08 - Điêu khắc & Nhân vật 3D" → taxonomy folder (domain/category/sub-category). */
export function isTaxonomyName(name: string): boolean {
  return NUMBERED.test(name);
}

export function taxonomyTitle(name: string): string {
  return name.replace(NUMBERED, "").trim();
}

/** Level only from explicit taxonomy names (e.g. "01 - Sơ cấp (A1-A2)") — never guessed from titles. */
export function levelFromTaxonomy(text: string): "beginner" | "intermediate" | "advanced" | null {
  const s = foldVi(text);
  if (/\b(so cap|beginner)\b/.test(s)) return "beginner";
  if (/\b(trung cap|intermediate)\b/.test(s)) return "intermediate";
  if (/\b(cao cap|advanced)\b/.test(s)) return "advanced";
  return null;
}
