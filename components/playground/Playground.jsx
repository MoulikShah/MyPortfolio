"use client";

import { useCallback, useState } from "react";
import { getEmbedder } from "@/lib/ml";
import useModel from "./useModel";
import RankTab from "./RankTab";
import ChatTab from "./ChatTab";
import SentimentTab from "./SentimentTab";
import Reveal from "../Reveal";

const tabs = [
    { id: "rank", label: "Rank", hint: "retrieval + ranking" },
    { id: "chat", label: "Ask me", hint: "RAG chat" },
    { id: "sentiment", label: "Sentiment", hint: "text classification" },
];

export default function Playground() {
    const [active, setActive] = useState("rank");
    const embedderLoader = useCallback((onProgress) => getEmbedder(onProgress), []);
    const embedder = useModel(embedderLoader);

    return (
        <section id="playground" className="mx-auto w-full max-w-wide px-5 py-16 sm:py-20">
            <Reveal>
                <p className="section-kicker">00 · ML Playground</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
                    Don’t take my word for it, run a model.
                </h2>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-zinc-400">
                    Everything below runs <span className="text-zinc-200">in your browser</span>.
                    Quantized ONNX models via transformers.js, no server, no API keys.
                    The ranking demo is the same embed, score, re-rank loop I work on
                    at TikTok, just a few orders of magnitude smaller.
                </p>
            </Reveal>

            <Reveal delay={100}>
                <div className="card mt-8 overflow-hidden">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink-700/60 px-4 py-3 sm:px-5">
                        <div className="flex gap-1">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActive(tab.id)}
                                    className={`rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors ${
                                        active === tab.id
                                            ? "bg-ink-800 text-zinc-100"
                                            : "text-zinc-500 hover:text-zinc-300"
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                        <p className="hidden font-mono text-[11px] text-zinc-600 sm:block">
                            {embedder.status === "ready" ? (
                                <>
                                    <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
                                    MiniLM-L6-v2 · int8 · 384-dim · local WASM
                                </>
                            ) : (
                                tabs.find((tab) => tab.id === active)?.hint
                            )}
                        </p>
                    </div>
                    <div className="p-4 sm:p-6">
                        {active === "rank" && <RankTab embedder={embedder} />}
                        {active === "chat" && <ChatTab embedder={embedder} />}
                        {active === "sentiment" && <SentimentTab />}
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
