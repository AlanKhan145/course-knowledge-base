"""Render cover + evidence pages from downloaded research PDFs.

Dependencies: PyMuPDF (`pip install pymupdf`)
Output: assets/pdf_extracts/<paper-id>/
"""
from pathlib import Path
import re
try:
    import fitz
except ImportError:
    raise SystemExit("PyMuPDF is required. Install with: pip install pymupdf")

ROOT = Path(__file__).resolve().parents[1]
PAPERS = ROOT / "papers"
OUT = ROOT / "assets" / "pdf_extracts"
OUT.mkdir(parents=True, exist_ok=True)

TARGETS = {
    "en_extensive_reading_2025.pdf": [
        "80 (98%)", "80 interventions", "Fig. 3", "Figure 3", "forest plot"
    ],
    "en_spaced_collocations.pdf": [
        "collocation-spaced", "distributed practice", "Results"
    ],
    "en_captioned_viewing_2025.pdf": [
        "Figure 3", "overall effect", "0.56", "forest plot"
    ],
    "hvpt_meta_2025.pdf": [
        "0.92", "0.67", "forest plot", "Figure"
    ],
    "hvpt_meta_2024_eric.pdf": [
        "0.77", "forest plot", "Figure"
    ],
    "ja_kanji_strategies_2026.pdf": [
        "mnemonic", "analytic", "rote", "Table"
    ],
    "zh_orthographic_meta_2025.pdf": [
        "Fig. 1", "Figure 1", "26 independent", "1,403", "phonetic radicals", "semantic radicals"
    ],
    "s10648-025-10068-6.pdf": [
        "80 (98%)", "80 interventions", "Fig. 3", "Figure 3", "accountability"
    ],
    "Effects_of_captioning_on_video_comprehension_and_i.pdf": [
        "Table 7", "Table 10", "captioning significantly affected vocabulary learning", "comprehension scores"
    ],
    "how-effective-is-second-language-incidental-vocabulary-learning-a-meta-analysis.pdf": [
        "Twenty-four primary studies", "2,771 participants", "reading while listening", "Figure", "Table"
    ],
    "the-effects-of-audiovisual-input-on-second-language-learning-a-meta-analysis.pdf": [
        "75 effect sizes", "56 experiments", "g = .89", "entertainment-focused", "Figure", "Table"
    ],
}

def clean(s):
    return re.sub(r"[^a-zA-Z0-9._-]+", "_", s).strip("_")[:64]

def render_page(doc, pno, path, zoom=1.8):
    page = doc[pno]
    pix = page.get_pixmap(matrix=fitz.Matrix(zoom, zoom), alpha=False)
    pix.save(path)

for pdf_name, needles in TARGETS.items():
    pdf = PAPERS / pdf_name
    if not pdf.exists():
        print(f"[skip] {pdf_name}: not downloaded")
        continue
    try:
        doc = fitz.open(pdf)
    except Exception as e:
        print(f"[skip] {pdf_name}: cannot open ({e})")
        continue
    paper_id = pdf.stem
    d = OUT / paper_id
    d.mkdir(parents=True, exist_ok=True)
    render_page(doc, 0, d / "cover.png")
    hits=[]
    seen=set()
    for pno in range(len(doc)):
        text = doc[pno].get_text("text") or ""
        low = text.lower()
        matched=[n for n in needles if n.lower() in low]
        if matched and pno not in seen:
            seen.add(pno); hits.append((pno, matched))
        if len(hits) >= 4:
            break
    for idx,(pno,matched) in enumerate(hits, start=1):
        tag=clean(matched[0])
        render_page(doc, pno, d / f"evidence_{idx:02d}_page_{pno+1}_{tag}.png")
    note = d / "SOURCE.md"
    note.write_text(
        f"# Image extraction source\n\nPDF: `{pdf_name}`\n\nPages rendered: cover + " +
        (", ".join(str(p+1) for p,_ in hits) if hits else "no evidence-page match") + "\n",
        encoding="utf-8"
    )
    print(f"[ok] {pdf_name}: {1+len(hits)} image(s)")
