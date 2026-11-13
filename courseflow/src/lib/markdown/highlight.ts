// Shiki highlighter singleton (server only). Languages load lazily on first use.
import { bundledLanguages, createHighlighter, type Highlighter } from "shiki";

let highlighterPromise: Promise<Highlighter> | null = null;
const loaded = new Set<string>(["text"]);

const ALIASES: Record<string, string> = {
  js: "javascript", ts: "typescript", py: "python", sh: "bash", shell: "bash", zsh: "bash", ps: "powershell", ps1: "powershell",
  yml: "yaml", md: "markdown", cs: "csharp", "c#": "csharp", "c++": "cpp", rb: "ruby", kt: "kotlin", rs: "rust", golang: "go",
  dockerfile: "docker", gd: "gdscript", gdscript: "gdscript", hlsl: "hlsl", glsl: "glsl", jsonc: "jsonc", console: "bash",
  plaintext: "text", txt: "text", "": "text", output: "text", log: "log", env: "dotenv", vue: "vue", svelte: "svelte",
};

function getHighlighter(): Promise<Highlighter> {
  highlighterPromise ??= createHighlighter({ themes: ["github-light", "github-dark-dimmed"], langs: [] });
  return highlighterPromise;
}

export function normalizeLang(lang: string): string {
  const l = lang.toLowerCase().trim();
  const a = ALIASES[l] ?? l;
  return a in bundledLanguages || a === "text" ? a : "text";
}

export async function highlight(code: string, lang: string): Promise<string | null> {
  if (code.length > 120_000) return null;
  try {
    const hl = await getHighlighter();
    const l = normalizeLang(lang);
    if (!loaded.has(l)) {
      await hl.loadLanguage(l as Parameters<Highlighter["loadLanguage"]>[0]);
      loaded.add(l);
    }
    return hl.codeToHtml(code, {
      lang: l,
      themes: { light: "github-light", dark: "github-dark-dimmed" },
      defaultColor: false,
    });
  } catch {
    return null;
  }
}
