// Converts the menubar logo into a clean transparent "ink mask": every pixel's
// alpha becomes its darkness (luminance -> transparency) and color goes black.
// This discards the baked white emblem fill so the single-color mark sits on
// any background — dark as-is on light, white via brightness(0) invert on dark —
// with no box. One asset for both states. Built-ins only (zlib).
import { readFileSync, writeFileSync } from "node:fs";
import { inflateSync, deflateSync } from "node:zlib";

const src =
  "public/brand/cropped-Concrete-Contractor-Post-Falls-Idaho-Burdett-Custom-Concrete-Website-Menubar-Logo-TB.png";
const dest = "public/brand/burdett-wordmark.png";

function decodePng(buf) {
  let p = 8,
    w = 0,
    h = 0,
    colorType = 0,
    bitDepth = 0;
  const idat = [];
  while (p < buf.length) {
    const len = buf.readUInt32BE(p);
    const type = buf.toString("ascii", p + 4, p + 8);
    const data = buf.subarray(p + 8, p + 8 + len);
    if (type === "IHDR") {
      w = data.readUInt32BE(0);
      h = data.readUInt32BE(4);
      bitDepth = data[8];
      colorType = data[9];
    } else if (type === "IDAT") idat.push(data);
    else if (type === "IEND") break;
    p += 12 + len;
  }
  if (colorType !== 6 || bitDepth !== 8) throw new Error("unsupported PNG");
  const raw = inflateSync(Buffer.concat(idat));
  const bpp = 4,
    stride = w * bpp,
    out = Buffer.alloc(h * stride);
  const paeth = (a, b, c) => {
    const pp = a + b - c,
      pa = Math.abs(pp - a),
      pb = Math.abs(pp - b),
      pc = Math.abs(pp - c);
    return pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
  };
  let rp = 0;
  for (let y = 0; y < h; y++) {
    const f = raw[rp++];
    for (let x = 0; x < stride; x++) {
      const v = raw[rp++];
      const a = x >= bpp ? out[y * stride + x - bpp] : 0;
      const b = y > 0 ? out[(y - 1) * stride + x] : 0;
      const c = x >= bpp && y > 0 ? out[(y - 1) * stride + x - bpp] : 0;
      let val;
      if (f === 0) val = v;
      else if (f === 1) val = v + a;
      else if (f === 2) val = v + b;
      else if (f === 3) val = v + ((a + b) >> 1);
      else val = v + paeth(a, b, c);
      out[y * stride + x] = val & 0xff;
    }
  }
  return { w, h, px: out };
}

const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();
const crc32 = (buf) => {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++)
    c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
};
function encodePng(w, h, px) {
  const stride = w * 4,
    raw = Buffer.alloc(h * (stride + 1));
  for (let y = 0; y < h; y++) {
    raw[y * (stride + 1)] = 0;
    px.copy(raw, y * (stride + 1) + 1, y * stride, y * stride + stride);
  }
  const idat = deflateSync(raw, { level: 9 });
  const chunk = (type, data) => {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const body = Buffer.concat([Buffer.from(type, "ascii"), data]);
    const crc = Buffer.alloc(4);
    crc.writeUInt32BE(crc32(body), 0);
    return Buffer.concat([len, body, crc]);
  };
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk("IHDR", ihdr),
    chunk("IDAT", idat),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

const { w, h, px } = decodePng(readFileSync(src));
const out = Buffer.alloc(w * h * 4);
for (let i = 0; i < w * h; i++) {
  const r = px[i * 4],
    g = px[i * 4 + 1],
    b = px[i * 4 + 2],
    a = px[i * 4 + 3];
  const lum = 0.299 * r + 0.587 * g + 0.114 * b;
  // ink coverage = darkness, weighted by original opacity
  const ink = ((255 - lum) / 255) * (a / 255);
  out[i * 4] = 0;
  out[i * 4 + 1] = 0;
  out[i * 4 + 2] = 0;
  out[i * 4 + 3] = Math.round(ink * 255);
}
writeFileSync(dest, encodePng(w, h, out));
console.log(`wrote ${dest} (${w}x${h})`);
