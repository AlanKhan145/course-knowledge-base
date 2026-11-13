import { highlight, normalizeLang } from "@/lib/markdown/highlight";
import { CopyButton } from "./CopyButton";
import { MermaidDiagram } from "./MermaidDiagram";

const LABEL: Record<string, string> = {
  javascript: "JavaScript", typescript: "TypeScript", tsx: "TSX", jsx: "JSX", python: "Python", bash: "Terminal", powershell: "PowerShell",
  json: "JSON", yaml: "YAML", html: "HTML", css: "CSS", sql: "SQL", csharp: "C#", cpp: "C++", c: "C", java: "Java", go: "Go", rust: "Rust",
  kotlin: "Kotlin", swift: "Swift", dart: "Dart", php: "PHP", ruby: "Ruby", markdown: "Markdown", text: "Văn bản", gdscript: "GDScript",
  glsl: "GLSL", hlsl: "HLSL", docker: "Dockerfile", toml: "TOML", xml: "XML", lua: "Lua", r: "R", scss: "SCSS", vue: "Vue",
};

/** Server component: Shiki-highlighted code with language label, copy button and line numbers. */
export async function CodeBlock({ lang, code, error }: { lang: string; code: string; error?: string }) {
  if (lang === "mermaid") return <MermaidDiagram code={code} />;
  const norm = normalizeLang(lang);
  const html = await highlight(code, norm);
  const lines = code.split("\n").length;
  const label = LABEL[norm] ?? (lang ? lang.toUpperCase() : "Code");
  return (
    <figure className="code-shell not-prose group relative my-6 overflow-hidden rounded-xl border border-border bg-[var(--code-bg)] numbered" data-lines={lines}>
      <figcaption className="flex items-center justify-between gap-2 border-b border-border px-4 py-1.5 font-sans text-xs text-muted">
        <span className="font-medium tracking-wide">{label}</span>
        <CopyButton text={code} />
      </figcaption>
      {error ? <p className="border-b border-border bg-danger-soft px-4 py-2 font-sans text-xs text-danger">{error}</p> : null}
      {html ? (
        <div dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <pre className="shiki overflow-x-auto">
          <code>
            {code.split("\n").map((l, i) => (
              <span key={i} className="line">
                {l}
                {"\n"}
              </span>
            ))}
          </code>
        </pre>
      )}
    </figure>
  );
}
