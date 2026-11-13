// Minimal POSIX path helpers usable in the browser.
export function dirname(p: string): string {
  const i = p.lastIndexOf("/");
  return i <= 0 ? (i === 0 ? "/" : ".") : p.slice(0, i);
}

export function normalize(p: string): string {
  const out: string[] = [];
  for (const seg of p.split("/")) {
    if (!seg || seg === ".") continue;
    if (seg === "..") {
      if (out.length && out[out.length - 1] !== "..") out.pop();
      else out.push("..");
    } else out.push(seg);
  }
  return out.join("/");
}

export function join(...parts: string[]): string {
  return normalize(parts.filter(Boolean).join("/"));
}
