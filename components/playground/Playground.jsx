"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { getEmbedder } from "@/lib/ml";
import { getLLM, webgpuSupported, LLM_SIZE } from "@/lib/llm";
import useModel from "./useModel";
import ChatTab from "./ChatTab";
import Reveal from "../Reveal";

export default function Playground() {
    const embedderLoader = useCallback((onProgress) => getEmbedder(onProgress), []);
    const embedder = useModel(embedderLoader);

    // Turbo = optional on-device LLM (WebGPU only)
    const [turboStatus, setTurboStatus] = useState("unsupported");
    const [turboProgress, setTurboProgress] = useState(0);
    const engineRef = useRef(null);

    useEffect(() => {
        if (webgpuSupported()) setTurboStatus("idle");
    }, []);

    const enableTurbo = useCallback(async () => {
        if (engineRef.current) return;
        setTurboStatus("loading");
        try {
            engineRef.current = await getLLM((progress) => setTurboProgress(progress));
            setTurboStatus("ready");
        } catch (err) {
            console.error("Turbo load failed:", err);
            setTurboStatus("error");
        }
    }, []);

    const turbo = { status: turboStatus, progress: turboProgress, engineRef, enable: enableTurbo };

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
                    on your device. Got a GPU? Flip on turbo and a small LLM will write
                    the answers on-device too.
                </p>
            </Reveal>

            <Reveal delay={100}>
                <div className="card mt-8 overflow-hidden">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink-700/60 px-4 py-3 sm:px-5">
                        <p className="font-mono text-xs text-zinc-400">ask-moulik · local RAG</p>
                        <div className="flex items-center gap-3">
                            {turboStatus !== "unsupported" && (
                                <button
                                    onClick={turboStatus === "idle" || turboStatus === "error" ? enableTurbo : undefined}
                                    disabled={turboStatus === "loading" || turboStatus === "ready"}
                                    title={
                                        turboStatus === "ready"
                                            ? "On-device LLM active"
                                            : `Download a small LLM (${LLM_SIZE}) that generates answers on your GPU`
                                    }
                                    className={`rounded-md border px-2.5 py-1 font-mono text-[11px] transition-colors ${
                                        turboStatus === "ready"
                                            ? "border-accent/50 bg-accent-faint text-accent"
                                            : turboStatus === "loading"
                                              ? "border-ink-700 text-zinc-500"
                                              : "border-ink-700 text-zinc-400 hover:border-accent/50 hover:text-accent"
                                    }`}
                                >
                                    {turboStatus === "ready" && "⚡ turbo on"}
                                    {turboStatus === "loading" && `⚡ loading ${turboProgress}%`}
                                    {(turboStatus === "idle" || turboStatus === "error") &&
                                        `⚡ turbo (${LLM_SIZE})`}
                                </button>
                            )}
                            <p className="hidden font-mono text-[11px] text-zinc-600 sm:block">
                                {embedder.status === "ready" ? (
                                    <>
                                        <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
                                        MiniLM-L6-v2 · local WASM
                                        {turboStatus === "ready" && " + Qwen2.5-0.5B · WebGPU"}
                                    </>
                                ) : (
                                    "MiniLM-L6-v2 · loads on first question"
                                )}
                            </p>
                        </div>
                    </div>
                    <div className="p-4 sm:p-6">
                        <ChatTab embedder={embedder} turbo={turbo} />
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
