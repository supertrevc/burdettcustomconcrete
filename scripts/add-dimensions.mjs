// One-off build helper: read intrinsic WebP dimensions and bake them into
// content/portfolio.json so next/image can reserve exact space (CLS = 0).
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const manifestPath = join(root, "content", "portfolio.json");

function webpSize(buf) {
  if (
    buf.toString("ascii", 0, 4) !== "RIFF" ||
    buf.toString("ascii", 8, 12) !== "WEBP"
  ) {
    return null;
  }
  const fourCC = buf.toString("ascii", 12, 16);
  if (fourCC === "VP8 ") {
    const w = buf.readUInt16LE(26) & 0x3fff;
    const h = buf.readUInt16LE(28) & 0x3fff;
    return { w, h };
  }
  if (fourCC === "VP8L") {
    const b0 = buf[21];
    const b1 = buf[22];
    const b2 = buf[23];
    const b3 = buf[24];
    const w = 1 + (((b1 & 0x3f) << 8) | b0);
    const h = 1 + (((b3 & 0x0f) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6));
    return { w, h };
  }
  if (fourCC === "VP8X") {
    const w = 1 + (buf[24] | (buf[25] << 8) | (buf[26] << 16));
    const h = 1 + (buf[27] | (buf[28] << 8) | (buf[29] << 16));
    return { w, h };
  }
  return null;
}

const entries = JSON.parse(readFileSync(manifestPath, "utf8"));
let ok = 0;
let failed = 0;
for (const e of entries) {
  const filePath = join(root, "public", e.src.replace(/^\//, ""));
  try {
    const buf = readFileSync(filePath);
    const size = webpSize(buf);
    if (size && size.w > 0 && size.h > 0) {
      e.width = size.w;
      e.height = size.h;
      ok++;
    } else {
      failed++;
      console.warn("Could not parse:", e.src);
    }
  } catch (err) {
    failed++;
    console.warn("Missing file:", e.src, err.message);
  }
}

writeFileSync(manifestPath, JSON.stringify(entries, null, 2) + "\n", "utf8");
console.log(`Dimensions added: ${ok} ok, ${failed} failed, ${entries.length} total`);
