"use client";

import { useRef } from "react";

// Card with a soft accent glow that follows the cursor
export default function GlowCard({ children, className = "" }) {
    const ref = useRef(null);

    function onMouseMove(event) {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        el.style.setProperty("--my", `${event.clientY - rect.top}px`);
    }

    return (
        <div ref={ref} onMouseMove={onMouseMove} className={`group/glow relative ${className}`}>
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover/glow:opacity-100"
                style={{
                    background:
                        "radial-gradient(280px circle at var(--mx, 50%) var(--my, 50%), rgba(45, 212, 191, 0.08), transparent 70%)",
                }}
            />
            {children}
        </div>
    );
}
