"use client";

import { useEffect, useRef, useState } from "react";
import { embed, cosine } from "@/lib/ml";
import { knowledge, suggestedQuestions } from "@/lib/knowledge";
import ModelGate from "./ModelGate";

const MIN_SCORE = 0.28;

// Server LLM route is optional (needs an API key configured in Vercel).
// null = unknown, checked lazily on first question.
let serverChatAvailable = null;

async function askServer(question, contextIds) {
    if (serverChatAvailable === false) return null;
    try {
        const res = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question, ids: contextIds }),
        });
        if (res.status === 503) {
            serverChatAvailable = false;
            return null;
        }
        if (!res.ok) return null;
        serverChatAvailable = true;
        const data = await res.json();
        return data.text || null;
    } catch {
        return null;
    }
}

export default function ChatTab({ embedder }) {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [busy, setBusy] = useState(false);
    const kbVectorsRef = useRef(null);
    const scrollRef = useRef(null);

    useEffect(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }, [messages]);

    async function ask(text) {
        const question = text.trim();
        if (!question || busy) return;
        setBusy(true);
        setInput("");
        setMessages((prev) => [...prev, { role: "user", text: question }]);
        try {
            const model = await embedder.load();
            if (!kbVectorsRef.current) {
                kbVectorsRef.current = await embed(
                    model,
                    knowledge.map((entry) => `${entry.text} ${entry.answer}`)
                );
            }

            const t0 = performance.now();
            const [queryVector] = await embed(model, [question]);
            const scored = knowledge
                .map((entry, i) => ({ entry, score: cosine(queryVector, kbVectorsRef.current[i]) }))
                .sort((a, b) => b.score - a.score);
            const retrieveMs = performance.now() - t0;

            const hits = scored.filter((hit) => hit.score >= MIN_SCORE).slice(0, 2);

            let answer;
            let mode = "retrieval";
            if (hits.length === 0) {
                answer =
                    "Hmm, I don't have that in my knowledge base. Try asking about Moulik's work at TikTok, his projects, education, or how to reach him.";
            } else {
                const serverAnswer = await askServer(
                    question,
                    hits.map((hit) => hit.entry.id)
                );
                if (serverAnswer) {
                    answer = serverAnswer;
                    mode = "llm";
                } else {
                    answer = hits[0].entry.answer;
                }
            }

            setMessages((prev) => [
                ...prev,
                {
                    role: "bot",
                    text: answer,
                    meta: hits.length
                        ? `${mode === "llm" ? "llm + " : ""}retrieved [${hits
                              .map((hit) => `${hit.entry.id} ${hit.score.toFixed(2)}`)
                              .join(", ")}] in ${retrieveMs.toFixed(1)}ms`
                        : `no match above ${MIN_SCORE} · ${retrieveMs.toFixed(1)}ms`,
                },
            ]);
        } catch {
            setMessages((prev) => [
                ...prev,
                { role: "bot", text: "Something went wrong running the model. Give it another shot." },
            ]);
        } finally {
            setBusy(false);
        }
    }

    return (
        <ModelGate
            status={embedder.status}
            progress={embedder.progress}
            onLoad={() => embedder.load().catch(() => {})}
            name="MiniLM-L6-v2"
            size="23MB"
        >
            <div className="flex h-[420px] flex-col">
                <div ref={scrollRef} className="thin-scroll flex-1 space-y-4 overflow-y-auto pr-2">
                    {messages.length === 0 && (
                        <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                            <p className="max-w-md text-sm leading-relaxed text-zinc-400">
                                Ask anything about me. Your question gets embedded and matched
                                against a small knowledge base,{" "}
                                <span className="text-zinc-200">all inside your browser</span>.
                                Nothing gets sent anywhere.
                            </p>
                            <div className="flex flex-wrap justify-center gap-1.5">
                                {suggestedQuestions.map((suggestion) => (
                                    <button
                                        key={suggestion}
                                        onClick={() => ask(suggestion)}
                                        className="chip transition-colors hover:border-accent/50 hover:text-zinc-200"
                                    >
                                        {suggestion}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                    {messages.map((message, i) => (
                        <div
                            key={i}
                            className={message.role === "user" ? "flex justify-end" : "flex justify-start"}
                        >
                            <div
                                className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed ${
                                    message.role === "user"
                                        ? "bg-accent/15 text-zinc-100"
                                        : "border border-ink-800 bg-ink-950/60 text-zinc-300"
                                }`}
                            >
                                {message.text}
                                {message.meta && (
                                    <p className="mt-1.5 font-mono text-[10px] text-zinc-600">{message.meta}</p>
                                )}
                            </div>
                        </div>
                    ))}
                    {busy && (
                        <p className="font-mono text-xs text-zinc-600">
                            <span className="inline-block animate-pulse">thinking…</span>
                        </p>
                    )}
                </div>
                <form
                    className="mt-4 flex gap-2"
                    onSubmit={(event) => {
                        event.preventDefault();
                        ask(input);
                    }}
                >
                    <input
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                        placeholder="Ask about my experience, projects, stack…"
                        className="w-full rounded-lg border border-ink-700 bg-ink-950 px-3.5 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-accent/60 focus:outline-none"
                    />
                    <button
                        type="submit"
                        disabled={busy}
                        className="shrink-0 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent-dim disabled:opacity-50"
                    >
                        Ask
                    </button>
                </form>
            </div>
        </ModelGate>
    );
}
