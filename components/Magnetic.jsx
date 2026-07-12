"use client";

import { useRef } from "react";

// Subtle magnetic pull toward the cursor on primary CTAs
export default function Magnetic({ children, strength = 0.25 }) {
    const ref = useRef(null);

    function onMouseMove(event) {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dx = event.clientX - (rect.left + rect.width / 2);
        const dy = event.clientY - (rect.top + rect.height / 2);
        el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
    }

    function onMouseLeave() {
        const el = ref.current;
        if (el) el.style.transform = "translate(0, 0)";
    }

    return (
        <span
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            className="inline-block transition-transform duration-300 ease-out"
        >
            {children}
        </span>
    );
}
