import { foldVi } from "@/lib/content/text";

/** Wrap occurrences of search terms (accent-insensitive) in <mark>; returns the first mark. */
export function highlightTerms(root: HTMLElement, terms: string[]): HTMLElement | null {
  const folded = terms.map((t) => foldVi(t)).filter((t) => t.length >= 2);
  if (!folded.length) return null;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) => (n.parentElement?.closest("pre, code, script, style, mark, .katex, svg, button, input, textarea") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
  });
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  let first: HTMLElement | null = null;
  let count = 0;
  for (const node of nodes) {
    const text = node.data;
    // char-by-char fold keeps index alignment for Vietnamese (each precomposed char folds to one letter)
    const f = [...text].map((ch) => foldVi(ch)[0] ?? ch).join("");
    if (f.length !== text.length) continue;
    const ranges: [number, number][] = [];
    for (const t of folded) {
      let i = 0;
      while ((i = f.indexOf(t, i)) !== -1) {
        ranges.push([i, i + t.length]);
        i += t.length;
      }
    }
    if (!ranges.length) continue;
    ranges.sort((a, b) => a[0] - b[0]);
    const frag = document.createDocumentFragment();
    let pos = 0;
    for (const [a, b] of ranges) {
      if (a < pos) continue;
      frag.append(text.slice(pos, a));
      const m = document.createElement("mark");
      m.className = "search-hit";
      m.textContent = text.slice(a, b);
      frag.append(m);
      first ??= m;
      pos = b;
      if (++count > 300) break;
    }
    frag.append(text.slice(pos));
    node.replaceWith(frag);
    if (count > 300) break;
  }
  return first;
}
