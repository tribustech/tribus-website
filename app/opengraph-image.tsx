import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Tribus Technologies — Your success, is our success.";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#3b3a3a",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* accent bar */}
        <div style={{ display: "flex", gap: 12 }}>
          {["#01c2bb", "#7678ed", "#db5461", "#f6ae2d", "#1c77c3", "#8fc93a"].map(
            (c) => (
              <div
                key={c}
                style={{
                  width: 90,
                  height: 12,
                  borderRadius: 999,
                  background: c,
                }}
              />
            ),
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 34,
              color: "#01c2bb",
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            TRIBUS TECHNOLOGIES
          </div>
          <div
            style={{
              fontSize: 84,
              color: "#f3f3f3",
              fontWeight: 700,
              lineHeight: 1.05,
              marginTop: 16,
              maxWidth: 980,
            }}
          >
            Your success, is our success.
          </div>
          <div style={{ fontSize: 32, color: "#c0c1c3", marginTop: 24 }}>
            People-centric web &amp; mobile software · Bucharest
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
