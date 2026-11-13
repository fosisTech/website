"""Join real visible browser frames, omitting duplicate sticky navigation."""
import json
import sys
from pathlib import Path
from PIL import Image

manifest = Path(sys.argv[1])
data = json.loads(manifest.read_text())
frames = data["frames"]
assert len(frames) > 1, "Capture must span the document"
last = frames[-1]
height = round(last["content"]["height"])
width = round(frames[0]["layout"]["clientWidth"])
assert last["y"] + last["layout"]["clientHeight"] >= height - 2, "Capture did not reach the document bottom"
result = Image.new("RGB", (width, height), "white")
end = 0
for index, frame in enumerate(frames):
    image = Image.open(frame["path"]).convert("RGB")
    viewport_height = round(frame["layout"]["clientHeight"])
    if image.size != (width, viewport_height):
        image = image.resize((width, viewport_height))
    start = max(end, frame["y"] + (125 if width >= 1200 else 92)) if index else 0
    assert start <= end, f"Uncovered document interval before frame {index}"
    crop_top = max(0, start - frame["y"])
    crop_bottom = min(image.height, height - frame["y"])
    if crop_bottom > crop_top:
        result.paste(image.crop((0, crop_top, width, crop_bottom)), (0, frame["y"] + crop_top))
        end = frame["y"] + crop_bottom
assert end >= height, "Incomplete stitched image"
result.save(data["output"])
for path in manifest.parent.glob("*.png"):
    assert path.stem.isdigit(), "Unexpected file in owned frame directory"
    path.unlink()
manifest.unlink()
manifest.parent.rmdir()
print(f"Captured {width}x{height} from {len(frames)} overlapping frames")
