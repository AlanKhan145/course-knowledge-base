$ErrorActionPreference = "Continue"
$OutDir = Join-Path $PSScriptRoot "images"
New-Item -ItemType Directory -Force -Path $OutDir | Out-Null

$files = @{
  "001-snapcode.png" = "https://arbootcamp.com/images/tutorials/snapchat-intermediate/potato-boss/snapcode.png"
  "002-rig.jpg" = "https://arbootcamp.com/images/tutorials/snapchat-intermediate/potato-boss/rig.jpg"
  "003-adding-model.jpg" = "https://arbootcamp.com/images/tutorials/snapchat-intermediate/potato-boss/adding-model.jpg"
  "004-face-insets.jpg" = "https://arbootcamp.com/images/tutorials/snapchat-intermediate/potato-boss/face-insets.jpg"
  "005-bone-hierarchy.jpg" = "https://arbootcamp.com/images/tutorials/snapchat-intermediate/potato-boss/bone-hierarchy.jpg"
  "006-camera-settings.jpg" = "https://arbootcamp.com/images/tutorials/snapchat-intermediate/potato-boss/camera-settings.jpg"
  "007-background-toggle.jpg" = "https://arbootcamp.com/images/tutorials/snapchat-intermediate/potato-boss/background-toggle.jpg"
  "008-video-thumbnail.jpg" = "https://img.youtube.com/vi/FGOfYiV3OSM/0.jpg"
}

foreach ($name in $files.Keys) {
  $dest = Join-Path $OutDir $name
  Write-Host "Downloading $name ..."
  try {
    Invoke-WebRequest -Uri $files[$name] -OutFile $dest -UseBasicParsing
    Write-Host "  OK -> $dest"
  } catch {
    Write-Warning "  FAILED: $($_.Exception.Message)"
  }
}
