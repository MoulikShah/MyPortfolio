import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Moulik Shah — Machine Learning Engineer at TikTok";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "80px",
                    backgroundColor: "#09090b",
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                    backgroundSize: "64px 64px",
                }}
            >
                <div style={{ display: "flex", color: "#2dd4bf", fontSize: 28, fontFamily: "monospace" }}>
                    Machine Learning Engineer · TikTok
                </div>
                <div
                    style={{
                        display: "flex",
                        marginTop: 28,
                        color: "#fafafa",
                        fontSize: 72,
                        fontWeight: 700,
                        letterSpacing: "-2px",
                        lineHeight: 1.1,
                        maxWidth: 980,
                    }}
                >
                    I build recommendation systems that decide what millions see next.
                </div>
                <div
                    style={{
                        display: "flex",
                        marginTop: 40,
                        color: "#a1a1aa",
                        fontSize: 30,
                    }}
                >
                    Moulik Shah · moulikshah.vercel.app
                </div>
            </div>
        ),
        { ...size }
    );
}
