import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "HyperFit - Function Training - 24/7 Gym - Recovery";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0B0B0B",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        {/* HYPERFIT text logo */}
        <div
          style={{
            display: "flex",
            fontSize: 120,
            fontWeight: 900,
            fontStyle: "italic",
            color: "white",
            letterSpacing: "-0.05em",
            marginBottom: "40px",
          }}
        >
          <span style={{ marginRight: "20px" }}>HYPER</span>
          <span
            style={{
              WebkitTextStroke: "3px white",
              WebkitTextFillColor: "transparent",
            }}
          >
            FIT
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: 36,
            color: "rgba(255, 255, 255, 0.8)",
            textAlign: "center",
            fontWeight: 600,
          }}
        >
          Function Training - 24/7 Gym - Recovery
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
