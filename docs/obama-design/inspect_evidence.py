"""Create reference contact sheets and derived token evidence without asset extraction."""
import json
import re
from pathlib import Path
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent
pages = ["home", "programs", "story", "donate"]
board = Image.new("RGB", (1560, 1800), "white")
draw = ImageDraw.Draw(board)
for i, page in enumerate(pages):
    for device in ["desktop", "mobile"]:
        image = Image.open(ROOT / f"{page}-{device}.png")
        print(page, device, image.size)
        if device == "desktop":
            thumb = image.crop((0, 0, min(image.width, 1440), 900)).resize((780, 488))
            x, y = (i % 2) * 780, (i // 2) * 510
        else:
            thumb = image.crop((0, 0, 390, 744))
            x, y = i * 390, 1040
        board.paste(thumb.convert("RGB"), (x, y + 20))
        draw.text((x + 5, y + 3), f"{page} {device}", fill="black")
board.save(ROOT / "overview.png")

for page in pages:
    data = json.loads((ROOT / f"{page}-desktop.json").read_text())
    print("\nPAGE", page)
    for row in data["rows"]:
        if row["tag"] in ["H1", "H2", "H3", "SECTION", "NAV", "FOOTER", "P"]:
            print(row["tag"], row["class"], {k: row["style"][k] for k in ["fontSize", "lineHeight", "padding", "color", "backgroundColor", "gap"]})

source = "\n".join(p.read_text() for p in ROOT.glob("*.json"))
rgb_values = sorted(set(re.findall(r"rgb\((\d+), (\d+), (\d+)\)", source)))
colors = {"#" + "".join(f"{int(c):02x}" for c in rgb): list(map(int, rgb)) for rgb in rgb_values}
rem_values = sorted(set(float(v) for v in re.findall(r"(?<![\w.-])(-?(?:\d*\.)?\d+)rem", source)))
conversions = [f"{v:g}rem = {v * 16:g}px" for v in rem_values]
def lum(value):
    rgb = [int(value[i:i+2], 16) / 255 for i in [1, 3, 5]]
    linear = [c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4 for c in rgb]
    return sum(c * w for c, w in zip(linear, [0.2126, 0.7152, 0.0722]))
contrast = []
for fg, bg in [("#000000", "#ffffff"), ("#000000", "#f3f3ee"), ("#ffffff", "#0064f0"), ("#000000", "#0064f0"), ("#ffffff", "#081f5d"), ("#000000", "#8eddff"), ("#000000", "#d3ffb8"), ("#000000", "#ffbd12"), ("#000000", "#ffc0d6"), ("#000000", "#d2faff"), ("#000000", "#ffeb9c"), ("#ffffff", "#494d51")]:
    a, b = sorted([lum(fg), lum(bg)])
    contrast.append({"foreground": fg, "background": bg, "ratio": round((b + 0.05) / (a + 0.05), 2)})
derived = {"method": "RGB to hexadecimal and rem to px at the observed 16px root. WCAG relative luminance for opaque colors. No image contrast claim.", "colors": colors, "rem_conversions": conversions, "contrast": contrast}
(ROOT / "derived-values.json").write_text(json.dumps(derived, indent=2) + "\n")
print("\nCONTRAST", json.dumps(contrast))
