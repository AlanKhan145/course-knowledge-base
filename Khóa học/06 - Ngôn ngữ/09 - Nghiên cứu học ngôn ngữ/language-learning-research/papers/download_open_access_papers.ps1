$ErrorActionPreference = "Continue"
$Here = Split-Path -Parent $MyInvocation.MyCommand.Path
$Headers = @{"User-Agent"="Mozilla/5.0 (language-learning-research-course; personal research use)"}

$items = @(
  @("https://link.springer.com/content/pdf/10.1007/s10648-025-10068-6.pdf", "en_extensive_reading_2025.pdf"),
  @("https://research.birmingham.ac.uk/files/173411132/effects_of_distributed_practice_on_the_acquisition_of_verb_noun_collocations.pdf", "en_spaced_collocations.pdf"),
  @("https://onlinelibrary.wiley.com/doi/pdf/10.1111/lang.12697", "en_captioned_viewing_2025.pdf"),
  @("https://researchmap.jp/takumiuchihara/published_papers/50374212/attachment_file.pdf", "hvpt_meta_2025.pdf"),
  @("https://files.eric.ed.gov/fulltext/EJ1425175.pdf", "hvpt_meta_2024_eric.pdf"),
  @("https://link.springer.com/content/pdf/10.1186/s40862-025-00379-0.pdf", "ja_kanji_strategies_2026.pdf"),
  @("https://ira.lib.polyu.edu.hk/bitstream/10397/116249/1/s11145-025-10739-4.pdf", "zh_orthographic_meta_2025.pdf")
)

foreach ($item in $items) {
  $url = $item[0]; $name = $item[1]; $dest = Join-Path $Here $name
  Write-Host "[download] $name"
  try {
    Invoke-WebRequest -Uri $url -OutFile $dest -Headers $Headers -MaximumRedirection 10
  } catch {
    Write-Warning "Could not download $name. Open its URL from papers_manifest.csv manually."
    if (Test-Path $dest) { Remove-Item $dest -Force }
  }
}
Write-Host "Done. Next: python .\scripts\extract_pdf_images.py"
