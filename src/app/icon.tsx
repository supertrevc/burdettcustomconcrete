import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Branded favicon: amber "B" on deep navy.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#16263F",
          color: "#E08A1E",
          fontSize: 22,
          fontWeight: 700,
          borderRadius: 6,
        }}
      >
        B
      </div>
    ),
    { ...size },
  );
}
