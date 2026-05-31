#!/usr/bin/env python3
"""
Grab full-resolution photos off burdettcustomconcrete.com (WordPress/Elementor)
and sort them into category folders for the new site build.

WordPress serves resized thumbnails on the page (e.g. ...-225x300.jpg) but keeps
the full-size original at the same path with the dimension suffix removed
(e.g. ...jpg). This script finds the thumbnails, resolves each to the best
available original, dedupes, and downloads into ./burdett_photos/<category>/.

Usage:
    pip install requests beautifulsoup4
    python grab_burdett_photos.py

Optional WebP conversion for the new site (recommended):
    pip install pillow
    python grab_burdett_photos.py --webp
"""

import argparse
import os
import re
import sys
import time
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup

BASE = "https://burdettcustomconcrete.com"

# Pages worth crawling for images. Add more if you find others.
PAGES = [
    "/",
    "/portfolio1/",
    "/about-us/",
    "/post-falls-concrete-services/",
    "/best-residential-concrete-contractor-in-post-falls-id/",
    "/commercial-concrete-services-post-falls/",
    "/get-a-free-quote/",
    "/contact/",
]

# Map filename keywords -> destination folder.
CATEGORY_RULES = [
    ("broomed", "broomed"),
    ("patio", "patios"),
    ("driveway", "driveways"),
    ("stamped", "stamped"),
    ("decorative", "stamped"),
    ("sidewalk", "walkways"),
    ("walkway", "walkways"),
    ("stairs", "walkways"),
    ("staining", "staining-sealing"),
    ("sealing", "staining-sealing"),
    ("logo", "_brand"),
    ("favicon", "_brand"),
    ("checkbox", "_skip"),  # UI sprite, not a project photo
]

OUT_DIR = "burdett_photos"
SESSION = requests.Session()
SESSION.headers.update({"User-Agent": "Mozilla/5.0 (photo-migration script)"})

# Strip a trailing -WIDTHxHEIGHT before the extension.
DIM_RE = re.compile(r"-\d+x\d+(?=\.\w+$)")


def categorize(filename: str) -> str:
    low = filename.lower()
    for keyword, folder in CATEGORY_RULES:
        if keyword in low:
            return folder
    return "uncategorized"


def candidate_urls(thumb_url: str):
    """Yield best-guess originals first, then fall back to the thumbnail."""
    base = DIM_RE.sub("", thumb_url)  # original, no dimension suffix
    yield base
    # WordPress stores >2560px images as -scaled.jpg
    root, ext = os.path.splitext(base)
    yield f"{root}-scaled{ext}"
    yield thumb_url  # last resort: whatever was on the page


def collect_image_urls():
    found = set()
    for path in PAGES:
        url = urljoin(BASE, path)
        try:
            r = SESSION.get(url, timeout=30)
            r.raise_for_status()
        except Exception as e:
            print(f"  ! skip {url}: {e}")
            continue
        soup = BeautifulSoup(r.text, "html.parser")
        for img in soup.find_all("img"):
            for attr in ("src", "data-src", "data-lazy-src"):
                src = img.get(attr)
                if src and "/wp-content/uploads/" in src:
                    found.add(urljoin(BASE, src.split("?")[0]))
        print(f"  scanned {path}  (running total: {len(found)} image refs)")
        time.sleep(0.4)
    return found


def download(found):
    os.makedirs(OUT_DIR, exist_ok=True)
    grabbed, seen_originals = 0, set()
    for thumb in sorted(found):
        for candidate in candidate_urls(thumb):
            fname = os.path.basename(urlparse(candidate).path)
            key = DIM_RE.sub("", fname)
            if key in seen_originals:
                break  # already have this project photo at some resolution
            try:
                resp = SESSION.get(candidate, timeout=60)
                if resp.status_code != 200 or not resp.headers.get(
                    "content-type", ""
                ).startswith("image"):
                    continue
            except Exception:
                continue

            folder = categorize(fname)
            if folder == "_skip":
                seen_originals.add(key)
                break
            dest_dir = os.path.join(OUT_DIR, folder)
            os.makedirs(dest_dir, exist_ok=True)
            dest = os.path.join(dest_dir, key)
            with open(dest, "wb") as f:
                f.write(resp.content)
            seen_originals.add(key)
            grabbed += 1
            print(f"  + {folder}/{key}  ({len(resp.content)//1024} KB)")
            break
        time.sleep(0.25)
    return grabbed


def to_webp():
    try:
        from PIL import Image
    except ImportError:
        print("Pillow not installed; skipping WebP. Run: pip install pillow")
        return
    count = 0
    for root, _, files in os.walk(OUT_DIR):
        for fn in files:
            if fn.lower().endswith((".jpg", ".jpeg", ".png")):
                src = os.path.join(root, fn)
                dst = os.path.splitext(src)[0] + ".webp"
                if os.path.exists(dst):
                    continue
                try:
                    im = Image.open(src).convert("RGB")
                    # cap longest edge at 1600px; plenty for web, much smaller files
                    im.thumbnail((1600, 1600))
                    im.save(dst, "WEBP", quality=82, method=6)
                    count += 1
                except Exception as e:
                    print(f"  ! webp fail {src}: {e}")
    print(f"Converted {count} images to WebP.")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--webp", action="store_true", help="also write optimized .webp copies")
    args = ap.parse_args()

    print("Collecting image URLs...")
    found = collect_image_urls()
    print(f"\nFound {len(found)} unique image references. Downloading originals...\n")
    n = download(found)
    print(f"\nDone. Downloaded {n} photos into ./{OUT_DIR}/")
    if args.webp:
        print("\nConverting to WebP...")
        to_webp()


if __name__ == "__main__":
    main()
