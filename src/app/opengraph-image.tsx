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
      </div>
    ),
    {
      ...size,
    }
  );
}
