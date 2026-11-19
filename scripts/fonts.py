"""Cuts the hub's title font down to the characters the hub uses.

    node scripts/build.mjs --hub-only      (writes .stage/hub-chars.txt)
    python scripts/fonts.py                (writes portal/fonts/hub-display.woff2 + .chars.txt)

The source is Smiley Sans / 得意黑 by atelierAnchor (SIL OFL 1.1, fonts-src/). Under the OFL a cut-down
copy is a Modified Version, which may not carry the Reserved Font Names (Smiley, 得意黑), so the cut is
renamed "Hub Display"; the copyright and licence lines stay in the font, and the licence text ships
next to it.
"""
import shutil
import string
from pathlib import Path

from fontTools import subset
from fontTools.ttLib import TTFont

HUB = Path(__file__).resolve().parent.parent
SRC = HUB / "fonts-src" / "SmileySans-Oblique.ttf"
OUT = HUB / "portal" / "fonts"
NAME = "Hub Display"

used = (HUB / ".stage" / "hub-chars.txt").read_text(encoding="utf-8")
# printable ASCII and common CJK punctuation as well, so small text edits need no new cut
extra = string.printable.strip() + "，。、：；！？“”‘’（）《》【】—…·「」～"
chars = sorted(set(used + extra) - set(" \t\r\n"))

opts = subset.Options()
opts.flavor = "woff2"
opts.layout_features = ["*"]
opts.name_IDs = ["*"]
opts.name_languages = ["*"]
opts.notdef_outline = True
font = TTFont(SRC)
sub = subset.Subsetter(opts)
sub.populate(text="".join(chars))
sub.subset(font)

# rename: family, full and PostScript names (the Reserved Font Names may not name a modified copy)
for rec in font["name"].names:
    if rec.nameID in (1, 4, 16, 18, 21):
        rec.string = NAME
    elif rec.nameID == 6:
        rec.string = NAME.replace(" ", "")
    elif rec.nameID == 3:
        rec.string = f"{NAME};subset"

OUT.mkdir(parents=True, exist_ok=True)
font.flavor = "woff2"
font.save(OUT / "hub-display.woff2")
(OUT / "hub-display.chars.txt").write_text("".join(chars), encoding="utf-8")
shutil.copyfile(HUB / "fonts-src" / "OFL-SmileySans.txt", OUT / "OFL-SmileySans.txt")
print(f"{OUT / 'hub-display.woff2'}: {len(chars)} characters, {(OUT / 'hub-display.woff2').stat().st_size // 1024} KB")
