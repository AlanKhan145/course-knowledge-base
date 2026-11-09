#!/usr/bin/env bash
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
UA="Mozilla/5.0 (language-learning-research-course; personal research use)"

download() {
  local url="$1"; local out="$2"
  echo "[download] $out"
  curl -L --fail --retry 3 --retry-delay 2 -A "$UA" "$url" -o "$HERE/$out" || {
    echo "[WARN] Could not download $out. Open its URL from papers_manifest.csv manually."
    rm -f "$HERE/$out"
  }
}

download 'https://link.springer.com/content/pdf/10.1007/s10648-025-10068-6.pdf' 'en_extensive_reading_2025.pdf'
download 'https://research.birmingham.ac.uk/files/173411132/effects_of_distributed_practice_on_the_acquisition_of_verb_noun_collocations.pdf' 'en_spaced_collocations.pdf'
download 'https://onlinelibrary.wiley.com/doi/pdf/10.1111/lang.12697' 'en_captioned_viewing_2025.pdf'
download 'https://researchmap.jp/takumiuchihara/published_papers/50374212/attachment_file.pdf' 'hvpt_meta_2025.pdf'
download 'https://files.eric.ed.gov/fulltext/EJ1425175.pdf' 'hvpt_meta_2024_eric.pdf'
download 'https://link.springer.com/content/pdf/10.1186/s40862-025-00379-0.pdf' 'ja_kanji_strategies_2026.pdf'
download 'https://ira.lib.polyu.edu.hk/bitstream/10397/116249/1/s11145-025-10739-4.pdf' 'zh_orthographic_meta_2025.pdf'

echo 'Done. Run: python3 scripts/extract_pdf_images.py'
