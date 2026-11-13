"""Capture reference pages through the approved instance-scoped Helium bridge."""
import json
import os
import subprocess
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parent
TAB = "9BD82179C611461E3775E58CF4D1847A"
SERVER = "http://127.0.0.1:9894"
URLS = {
    "home": "https://www.obama.org/",
    "programs": "https://www.obama.org/programs/",
    "story": "https://www.obama.org/stories/jahnavi-rao-empowering-next-generation-voters/",
    "donate": "https://www.obama.org/donate/",
}
def run(*args):
    result = subprocess.run(["pinchtab", *args, "--tab", TAB, "--server", SERVER], capture_output=True, text=True, timeout=20)
    if result.returncode:
        raise RuntimeError(result.stderr or result.stdout)
    return result.stdout.strip()

for page in sys.argv[1:]:
    for device, width, height in [("desktop", 1440, 900), ("mobile", 390, 844)]:
        if os.environ.get("CAPTURE_DEVICE") not in (None, device):
            continue
        viewport = ["set", "viewport", str(width), str(height)]
        if device == "mobile":
            viewport.append("--mobile")
        run(*viewport)
        run("nav", URLS[page])
        time.sleep(0.7)
        for _ in range(22 if device == "mobile" else 16):
            run("scroll", "800")
            time.sleep(0.1)
        run("scroll", "--dy", "-50000")
        time.sleep(2.7)
        result = subprocess.run(["bun", str(ROOT / "capture_cdp.mjs"), str(ROOT / f"{page}-{device}.png")], capture_output=True, text=True, timeout=65)
        if result.returncode:
            raise RuntimeError(result.stderr or result.stdout)
        with (ROOT / "capture-metrics.jsonl").open("a") as log:
            log.write(result.stdout)
        print(result.stdout.strip(), flush=True)
