from pathlib import Path
from urllib.request import Request, urlopen

BASE = Path(__file__).resolve().parent
OUT = BASE / "images"
OUT.mkdir(exist_ok=True)

FILES = {
    "001-snapcode.png": "https://arbootcamp.com/images/tutorials/snapchat-intermediate/potato-boss/snapcode.png",
    "002-rig.jpg": "https://arbootcamp.com/images/tutorials/snapchat-intermediate/potato-boss/rig.jpg",
    "003-adding-model.jpg": "https://arbootcamp.com/images/tutorials/snapchat-intermediate/potato-boss/adding-model.jpg",
    "004-face-insets.jpg": "https://arbootcamp.com/images/tutorials/snapchat-intermediate/potato-boss/face-insets.jpg",
    "005-bone-hierarchy.jpg": "https://arbootcamp.com/images/tutorials/snapchat-intermediate/potato-boss/bone-hierarchy.jpg",
    "006-camera-settings.jpg": "https://arbootcamp.com/images/tutorials/snapchat-intermediate/potato-boss/camera-settings.jpg",
    "007-background-toggle.jpg": "https://arbootcamp.com/images/tutorials/snapchat-intermediate/potato-boss/background-toggle.jpg",
    "008-video-thumbnail.jpg": "https://img.youtube.com/vi/FGOfYiV3OSM/0.jpg",
}

for name, url in FILES.items():
    target = OUT / name
    print(f"Downloading {name} ...")
    req = Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        with urlopen(req, timeout=30) as r:
            target.write_bytes(r.read())
        print(f"  OK -> {target}")
    except Exception as exc:
        print(f"  FAILED: {exc}")
