"use client";

import { useState } from "react";
import { navLinks, site } from "@/lib/content";

export default function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-800/70 bg-ink-950/80 backdrop-blur-md">
            <nav className="mx-auto flex h-14 max-w-wide items-center justify-between px-5">
                <a
                    href="#top"
                    className="font-mono text-sm font-semibold tracking-tight text-zinc-100"
                >
                    moulik<span className="text-accent">.shah</span>
                </a>
                <div className="hidden items-center gap-6 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                        >
                            {link.title}
                        </a>
                    ))}
                    <a
                        href={site.resume}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg border border-accent/40 px-3 py-1.5 text-sm font-medium text-accent transition-colors hover:bg-accent-faint"
                    >
                        Resume
                    </a>
                </div>
                <button
                    className="p-2 text-zinc-300 md:hidden"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        {open ? (
                            <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        ) : (
                            <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        )}
                    </svg>
                </button>
            </nav>
            {open && (
                <div className="border-t border-ink-800/70 bg-ink-950/95 px-5 py-4 md:hidden">
                    <div className="flex flex-col gap-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                onClick={() => setOpen(false)}
                                className="text-sm text-zinc-300"
                            >
                                {link.title}
                            </a>
                        ))}
                        <a
                            href={site.resume}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-medium text-accent"
                        >
                            Resume ↗
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
