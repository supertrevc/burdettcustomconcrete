import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Branded Apple touch icon: amber "B" on deep navy.
export default function AppleIcon() {
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
          fontSize: 120,
          fontWeight: 700,
        }}
      >
        B
      </div>
    ),
    { ...size },
  );
}
