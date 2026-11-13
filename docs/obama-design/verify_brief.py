"""Verify reference-document structure and trace numeric design values to evidence."""
import json
import re
import subprocess
from collections import Counter
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent
BRIEF = ROOT.parent.parent / "DESIGN.md"
text = BRIEF.read_text()
assert text.startswith("---\n"), "Missing YAML front matter"
yaml_result = subprocess.run(
    ["ruby", "-rjson", "-ryaml", "-e", "s=File.read(ARGV[0]).split(/^---\\s*$/)[1]; puts JSON.generate(YAML.safe_load(s))", str(BRIEF)],
    capture_output=True, text=True, check=True,
)
front = json.loads(yaml_result.stdout)
assert all(key in front for key in ["colors", "typography", "spacing", "rounded"])
expected = ["Overview", "Colors", "Typography", "Layout", "Elevation & Depth", "Shapes", "Components", "Do's and Don'ts"]
assert re.findall(r"^## (.+)$", text, re.M) == expected, "Section order differs"
evidence = "\n".join(p.read_text() for p in ROOT.glob("*.json")) + "\n" + (ROOT / "evidence.md").read_text()
hexes = set(re.findall(r"#[0-9a-fA-F]{6}\b", text))
assert all(value.lower() in evidence.lower() for value in hexes), "Hex without evidence"
unit_pattern = r"(?<![\w.])(-?(?:\d*\.)?\d+)(px|rem|vw|svh)\b"
def dimensions(source):
    found = set()
    for number, unit in re.findall(unit_pattern, source):
        value = float(number)
        found.add((round(value, 5), unit))
        if unit == "rem":
            found.add((round(value * 16, 5), "px"))
        if unit == "px":
            found.add((round(value / 16, 5), "rem"))
    return found
missing = dimensions(text) - dimensions(evidence)
assert not missing, f"Dimensions without evidence: {missing}"
fonts = ["Gotham Condensed", "Gotham-Fallback", "Gotham", "Chronicle Text G1", "Arial Narrow Bold", "Georgia", "system-ui", "sans-serif", "serif", "Inter"]
assert all(font in evidence for font in fonts), "Font without evidence"

css = json.loads((ROOT / "css-observations.json").read_text()) + json.loads((ROOT / "label-css.json").read_text())
checked_roles = 0
for line in text.splitlines():
    cells = [cell.strip() for cell in line.strip("|").split("|")]
    if not cells or not re.fullmatch(r"(?:heading|body|cta)-(?:xxl|xl|lg|md|sm|xs|xxs)|label", cells[0]):
        continue
    role = cells[0]
    for column, breakpoint in enumerate([390, 680, 1200, 1920], start=1):
        active = None
        for record in css:
            if not record["css"].startswith("." + role + " {"):
                continue
            media = record["media"]
            widths = [int(match) for condition in media for match in re.findall(r"min-width: (\d+)px", condition)]
            if any(width > breakpoint for width in widths):
                continue
            match = re.search(r"font-size: ([\d.]+)rem", record["css"])
            if match:
                active = float(match.group(1))
        px, rem = [float(part.strip()) for part in cells[column].split("/")]
        assert active == rem and abs(px - rem * 16) < 0.0001, (role, breakpoint, cells[column], active)
    checked_roles += 1
assert checked_roles == 14

screens = []
metrics = {}
for line in (ROOT / "capture-metrics.jsonl").read_text().splitlines():
    record = json.loads(line)
    if record.get("frames"):
        metrics[Path(record["output"]).name] = record
for page in ["home", "programs", "story", "donate"]:
    for device, width in [("desktop", 1440), ("mobile", 390)]:
        path = ROOT / f"{page}-{device}.png"
        with Image.open(path) as image:
            image.verify()
        with Image.open(path) as image:
            assert image.width >= width and image.height > 900
            assert path.name in metrics, "Missing final visible-frame capture metrics"
            frames = metrics[path.name]["frames"]
            last = frames[-1]
            assert image.height == round(last["content"]["height"])
            assert last["y"] + last["layout"]["clientHeight"] >= image.height - 2
            bottom = image.convert("RGB").crop((0, image.height - 30, image.width, image.height))
            dominant = Counter(bottom.getdata()).most_common(1)[0][0]
            assert dominant == (0, 100, 240), f"Actual cobalt footer missing: {path.name}"
            screens.append(f"{path.name}: {image.width}x{image.height}")
for path in [BRIEF, *ROOT.glob("*.md"), *ROOT.glob("*.py"), *ROOT.glob("*.mjs"), *ROOT.glob("*.json")]:
    source = path.read_text()
    assert "\u2014" not in source and "\u2013" not in source, f"Forbidden dash: {path}"
print("PASS: YAML front matter parses using Ruby YAML.safe_load")
print("PASS: required token groups and exact eight-section order")
print(f"PASS: {len(hexes)} hex values, explicit dimensions, and all named fonts traced to evidence")
print(f"PASS: {checked_roles} responsive type roles match source CSS at all four breakpoints")
print("PASS: eight PNG files decode, reach the real footer, and have complete visible-frame metrics")
print("PASS: no forbidden Unicode dashes")
print("\n".join(screens))
