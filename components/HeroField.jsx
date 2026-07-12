"use client";

import { useEffect, useRef } from "react";

// Drifting "latent space" backdrop: nodes tagged with my actual stack, edges
// appearing between neighbors. Canvas-only, ~zero cost, pauses offscreen and
// renders a single static frame under prefers-reduced-motion.
const labels = [
    "recall", "ranking", "CVR", "PyTorch", "Triton", "ONNX", "embeddings",
    "A/B tests", "RAG", "agents", "Spark", "Kubernetes", "FinBERT", "search",
    "re-rank", "MLflow",
];

const NODE_COUNT = 34;
const LINK_DIST = 130;

export default function HeroField() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let raf = null;
        let running = false;
        let nodes = [];

        function resize() {
            const parent = canvas.parentElement;
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = parent.clientWidth * dpr;
            canvas.height = parent.clientHeight * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            if (nodes.length === 0) {
                nodes = Array.from({ length: NODE_COUNT }, (_, i) => ({
                    x: Math.random() * parent.clientWidth,
                    y: Math.random() * parent.clientHeight,
                    vx: (Math.random() - 0.5) * 0.18,
                    vy: (Math.random() - 0.5) * 0.18,
                    r: 1 + Math.random() * 1.4,
                    label: i < labels.length ? labels[i] : null,
                }));
            }
        }

        function frame(step) {
            const w = canvas.parentElement.clientWidth;
            const h = canvas.parentElement.clientHeight;
            ctx.clearRect(0, 0, w, h);

            if (step) {
                for (const node of nodes) {
                    node.x += node.vx;
                    node.y += node.vy;
                    if (node.x < 0 || node.x > w) node.vx *= -1;
                    if (node.y < 0 || node.y > h) node.vy *= -1;
                }
            }

            ctx.lineWidth = 1;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.hypot(dx, dy);
                    if (dist < LINK_DIST) {
                        ctx.strokeStyle = `rgba(45, 212, 191, ${0.07 * (1 - dist / LINK_DIST)})`;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            }

            ctx.font = "10px ui-monospace, monospace";
            for (const node of nodes) {
                ctx.fillStyle = "rgba(45, 212, 191, 0.35)";
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
                ctx.fill();
                if (node.label) {
                    ctx.fillStyle = "rgba(161, 161, 170, 0.28)";
                    ctx.fillText(node.label, node.x + 6, node.y + 3);
                }
            }
        }

        function loop() {
            frame(true);
            raf = requestAnimationFrame(loop);
        }

        function start() {
            if (running || reduced) return;
            running = true;
            raf = requestAnimationFrame(loop);
        }

        function stop() {
            running = false;
            if (raf) cancelAnimationFrame(raf);
        }

        resize();
        frame(false);
        if (!reduced) start();

        const observer = new IntersectionObserver(([entry]) =>
            entry.isIntersecting ? start() : stop()
        );
        observer.observe(canvas);
        window.addEventListener("resize", resize);
        return () => {
            stop();
            observer.disconnect();
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full"
            style={{
                maskImage: "radial-gradient(ellipse 85% 75% at 50% 40%, black 25%, transparent 95%)",
            }}
        />
    );
}
