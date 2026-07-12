"use client";

import { useCallback } from "react";
import { getEmbedder } from "@/lib/ml";
import useModel from "./useModel";
import ChatTab from "./ChatTab";
import Reveal from "../Reveal";

export default function Playground() {
    const embedderLoader = useCallback((onProgress) => getEmbedder(onProgress), []);
    const embedder = useModel(embedderLoader);

    return (
        <section id="playground" className="mx-auto w-full max-w-content px-5 py-16 sm:py-20">
            <Reveal>
                <p className="section-kicker">00 · Ask my AI</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
                    Skip the scrolling, just ask.
                </h2>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-zinc-400">
                    A small chat that answers questions about me, powered by a quantized
                    embedding model running <span className="text-zinc-200">in your browser</span>{" "}
                    via transformers.js. No server, no API keys, and your questions stay
                    on your device.
                </p>
            </Reveal>

            <Reveal delay={100}>
                <div className="card mt-8 overflow-hidden">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink-700/60 px-4 py-3 sm:px-5">
                        <p className="font-mono text-xs text-zinc-400">ask-moulik · local RAG</p>
                        <p className="font-mono text-[11px] text-zinc-600">
                            {embedder.status === "ready" ? (
                                <>
                                    <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
                                    MiniLM-L6-v2 · int8 · 384-dim · local WASM
                                </>
                            ) : (
                                "MiniLM-L6-v2 · loads on first question"
                            )}
                        </p>
                    </div>
                    <div className="p-4 sm:p-6">
                        <ChatTab embedder={embedder} />
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
