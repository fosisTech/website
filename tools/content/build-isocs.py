"""Build src/content/isocs.json and public/images/isocs/ from the FOSIS scrape.

Run from the repo root: python3 tools/content/build-isocs.py
"""
import json
import re
import subprocess
from pathlib import Path
from urllib.parse import unquote, urlparse

ROOT = Path(__file__).resolve().parents[2]
CONTENT = ROOT / "docs/fosis-site/content"
IMAGES = ROOT / "docs/fosis-site/images/pages"
OUT_JSON = ROOT / "src/content/isocs.json"
OUT_IMG = ROOT / "public/images/isocs"
LOGO_MAX = 320
# Logos the scrape lacks, saved by hand in public/images/isocs/.
EXTRA_LOGOS = {
    # Sheffield Islamic Circle, from the favicon at usicsheffield.com.
    "university-of-sheffield-islamic-society": "USIC.png",
}


def front(text: str, key: str) -> str:
    match = re.search(rf'^{key}: "?(.*?)"?$', text, re.M)
    return match.group(1) if match else ""


def logo_name(url: str) -> str:
    return unquote(Path(urlparse(url).path).name)


def parse_directory() -> dict[str, str]:
    """Map ISoc name to the directory filter group shown on /find-your-isoc/."""
    groups = {}
    for line in (CONTENT / "find-your-isoc.md").read_text().splitlines():
        match = re.match(r"\*\*(.+?)\*\* · (.+?) · (.+?)(?: · !\[| \u2014 |$)", line)
        if match:
            groups[match.group(1)] = match.group(3).strip()
    return groups


def parse_profile(path: Path, groups: dict[str, str]) -> dict:
    text = path.read_text()
    slug = front(text, "url").rstrip("/").rsplit("/", 1)[-1]
    name = re.search(r"^# (.+)$", text, re.M).group(1).strip()
    institution = re.search(r"^# .+\n\n(.+)$", text, re.M).group(1).strip()
    logo = re.search(r"!\[[^\]]*\]\((https://[^)\s]+)\)", text)
    links = []
    for label, href in re.findall(r"^- \[([^\]]+)\]\((https?://[^)]+)\)$", text, re.M):
        links.append({"label": label, "href": href})
    region = re.search(r"^Region\n\n(.+)$", text, re.M)
    return {
        "slug": slug,
        "name": name,
        "institution": institution,
        "group": groups.get(name, ""),
        "region": region.group(1).strip() if region else "",
        "logo": logo_name(logo.group(1)) if logo else None,
        "links": links,
    }


def main() -> None:
    groups = parse_directory()
    profiles = sorted(
        (parse_profile(p, groups) for p in CONTENT.glob("isoc-*.md") if front(p.read_text(), "type") == "isoc"),
        key=lambda isoc: isoc["name"].lower(),
    )
    missing = [isoc["name"] for isoc in profiles if not isoc["group"]]
    assert not missing, f"no directory group for {missing}"

    OUT_IMG.mkdir(parents=True, exist_ok=True)
    for isoc in profiles:
        if isoc["slug"] in EXTRA_LOGOS:
            isoc["logo"] = f"/images/isocs/{EXTRA_LOGOS[isoc['slug']]}"
            continue
        if not isoc["logo"]:
            continue
        source = IMAGES / isoc["logo"]
        if not source.exists():
            isoc["logo"] = None
            continue
        target = OUT_IMG / source.name
        if not target.exists():
            width = subprocess.run(["sips", "-g", "pixelWidth", str(source)], check=True, capture_output=True, text=True).stdout
            size = int(width.rsplit(":", 1)[1])
            if size > LOGO_MAX:
                subprocess.run(["sips", "-Z", str(LOGO_MAX), str(source), "--out", str(target)], check=True, capture_output=True)
            else:
                target.write_bytes(source.read_bytes())
        isoc["logo"] = f"/images/isocs/{source.name}"

    OUT_JSON.write_text(json.dumps(profiles, indent=2, ensure_ascii=False) + "\n")
    print(f"{len(profiles)} ISocs, {sum(1 for i in profiles if i['logo'])} logos")


main()
