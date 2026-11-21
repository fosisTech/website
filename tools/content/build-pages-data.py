"""Build src/content/{jobs,khutbahs,history}.json from the FOSIS scrape.

Run from the repo root: python3 tools/content/build-pages-data.py
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CONTENT = ROOT / "docs/fosis-site/content"
OUT = ROOT / "src/content"
ARABIC = re.compile(r"[؀-ۿ]")


def write(name: str, data) -> None:
    (OUT / name).write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")


def blocks(text: str) -> list[str]:
    return [b.strip() for b in re.split(r"\n\s*\n", text) if b.strip()]


def build_jobs() -> None:
    text = (CONTENT / "join-team-fosis.md").read_text()
    groups = []
    for chunk in re.split(r"^\*\*(?=(?:Regional Teams|Operations|Projects|SEAD Team)\*\*)", text, flags=re.M)[1:]:
        group_name = re.match(r"(.+?)\*\* \(\d+ roles?\)", chunk).group(1)
        roles = []
        for card in re.split(r"^\*\*Job card: ", chunk, flags=re.M)[1:]:
            title = re.match(r"(.+?)\*\* \(card", card).group(1)
            meta = dict(re.findall(r"^- (Team|Type|Commitment|Hours|Apply): (.+)$", card, re.M))
            body = card.split("attribute):", 1)[1]
            body = re.split(r"\n---\n|^Ways to Get Involved", body, flags=re.M)[0]
            read_more = re.search(r"^Read more: (\S+)$", body, re.M)
            paragraphs = [p for p in blocks(body) if not p.startswith("Read more:") and not p.startswith("**Job card")]
            roles.append(
                {
                    "title": title.strip(),
                    "team": meta["Team"],
                    "type": meta["Type"],
                    "commitment": meta["Commitment"],
                    "hours": meta["Hours"],
                    "apply": meta["Apply"],
                    "readMore": read_more.group(1) if read_more else None,
                    "description": paragraphs,
                }
            )
        groups.append({"name": group_name, "roles": roles})
    assert sum(len(g["roles"]) for g in groups) == 15
    write("jobs.json", groups)


def build_khutbahs() -> None:
    text = (CONTENT / "khutbah-library.md").read_text()
    body = text.split("\n## Khutbahs\n", 1)[1]
    packs = []
    for pack_chunk in re.split(r"^### Pack ", body, flags=re.M)[1:]:
        head, rest = pack_chunk.split("\n", 1)
        numeral, theme = head.split(" \u2014 ")
        khutbahs = []
        for k in re.split(r"^#### Pack \S+ / Khutbah ", rest, flags=re.M)[1:]:
            title_line, kbody = k.split("\n", 1)
            number, title = title_line.split(" \u2014 ", 1)
            first_part, second_part = kbody.split("Second khutbah (English):")
            first_part = first_part.split("First khutbah (English):", 1)[1]
            khutbahs.append({"n": int(number), "title": title.strip(), "first": paragraphs(first_part), "second": paragraphs(second_part)})
        packs.append({"id": numeral, "theme": theme.strip(), "khutbahs": khutbahs})
    assert [len(p["khutbahs"]) for p in packs] == [10, 10, 6, 10]
    write("khutbahs.json", packs)


def paragraphs(text: str) -> list[dict]:
    out = []
    for line in text.splitlines():
        line = line.strip()
        if not line or line == "---":
            continue
        quote = line.startswith(">")
        line = line.lstrip("> ").strip()
        if not line:
            continue
        arabic = len(ARABIC.findall(line)) > len(line) / 2
        out.append({"kind": "arabic" if arabic else "quote" if quote else "p", "text": line})
    return out


YEAR = re.compile(r"^(\d{4}s?|\d{4}[\u2013-]\d{2,4}|Present|Ongoing)$")


def build_history() -> None:
    text = (CONTENT / "fosis-history.md").read_text()
    timeline = text.split("## The FOSIS Timeline\n", 1)[1].split("\nDefining Moments\n", 1)[0]
    entries, labels = [], []
    pending = blocks(timeline)
    for index, block in enumerate(pending):
        if len(block) > 120 and labels:
            title = labels.pop()
            date = " · ".join(dict.fromkeys(label for label in labels if not (YEAR.match(label) and any(label in other for other in labels if other != label))))
            entries.append({"date": date, "title": title, "body": block})
            labels = []
        else:
            labels.append(block)
    assert not labels, labels
    chapters = []
    chapter_text = text.split("## Chapters that Shaped History\n", 1)[1].split("\nThe Founders & Pioneers\n", 1)[0]
    for number, date, title, body in re.findall(r"^(\d\d)\n\n(.+?)\n\n### (.+?)\n\n(.+?)(?=\n\n\d\d\n|\Z)", chapter_text.split("\n\n", 2)[2] if False else chapter_text, re.S | re.M):
        chapters.append({"date": date.strip(), "title": title.strip(), "body": body.strip()})
    people = []
    people_text = text.split("## People Who Built FOSIS\n", 1)[1].split("\nA Global Legacy\n", 1)[0]
    for initials, name, role, body in re.findall(r"^([A-Z]{2})\n\n### (.+?)\n\n(.+?)\n\n(.+?)(?=\n\n[A-Z]{2}\n|\Z)", people_text, re.S | re.M):
        people.append({"initials": initials, "name": name.strip(), "role": role.strip(), "body": body.strip()})
    assert len(chapters) == 6 and len(people) == 3, (len(chapters), len(people))
    write("history.json", {"timeline": entries, "chapters": chapters, "people": people})


OUT.mkdir(parents=True, exist_ok=True)
build_jobs()
build_khutbahs()
build_history()
print("ok")
