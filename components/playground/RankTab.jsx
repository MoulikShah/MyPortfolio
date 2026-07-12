"use client";

import { useRef, useState } from "react";
import { embed, cosine } from "@/lib/ml";
import { projects, experience } from "@/lib/content";
import ModelGate from "./ModelGate";

// The ranking corpus is my actual portfolio: every project and role becomes a
// candidate item, so the demo doubles as semantic search over this site.
const corpus = [
    ...projects.map((project) => ({
        kind: "project",
        label: project.name,
        href: "#projects",
        text: `${project.name}. ${project.description} ${project.tags.join(" ")}`,
    })),
    ...experience.map((job) => ({
        kind: "experience",
        label: `${job.role} @ ${job.company}`,
        href: "#experience",
        text: `${job.role} at ${job.company} ${job.team}. ${job.points.join(" ")} ${job.tags.join(" ")}`,
    })),
];

const sampleQueries = [
    "low-latency model serving",
    "recommendation systems at scale",
    "LLM agents and tool calling",
    "financial machine learning",
];

export default function RankTab({ embedder }) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState(null);
    const [timing, setTiming] = useState(null);
    const [busy, setBusy] = useState(false);
    const corpusVectorsRef = useRef(null);

    async function rank(text) {
        const trimmed = text.trim();
        if (!trimmed || busy) return;
        setBusy(true);
        try {
            const model = await embedder.load();

            if (!corpusVectorsRef.current) {
                const t0 = performance.now();
                corpusVectorsRef.current = await embed(model, corpus.map((item) => item.text));
                corpusVectorsRef.current.indexMs = performance.now() - t0;
            }

            const t1 = performance.now();
            const [queryVector] = await embed(model, [trimmed]);
            const embedMs = performance.now() - t1;

            const t2 = performance.now();
            const scored = corpus
                .map((item, i) => ({ ...item, score: cosine(queryVector, corpusVectorsRef.current[i]) }))
                .sort((a, b) => b.score - a.score);
            const scoreMs = performance.now() - t2;

            setResults(scored.slice(0, 6));
            setTiming({ embedMs, scoreMs, indexMs: corpusVectorsRef.current.indexMs });
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
            <div>
                <p className="text-sm leading-relaxed text-zinc-400">
                    Type anything you&apos;d look for in a candidate. Your query gets embedded,
                    and my projects and roles get re-ranked by cosine similarity, live.
                </p>
                <form
                    className="mt-4 flex gap-2"
                    onSubmit={(event) => {
                        event.preventDefault();
                        rank(query);
                    }}
                >
                    <input
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="e.g. deploying models with Triton and ONNX"
                        className="w-full rounded-lg border border-ink-700 bg-ink-950 px-3.5 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-accent/60 focus:outline-none"
                    />
                    <button
                        type="submit"
                        disabled={busy}
                        className="shrink-0 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent-dim disabled:opacity-50"
                    >
                        {busy ? "…" : "Rank"}
                    </button>
                </form>
                <div className="mt-3 flex flex-wrap gap-1.5">
                    {sampleQueries.map((sample) => (
                        <button
                            key={sample}
                            onClick={() => {
                                setQuery(sample);
                                rank(sample);
                            }}
                            className="chip transition-colors hover:border-accent/50 hover:text-zinc-200"
                        >
                            {sample}
                        </button>
                    ))}
                </div>

                {results && (
                    <div className="mt-6">
                        {timing && (
                            <p className="mb-3 font-mono text-[11px] text-zinc-500">
                                query embed{" "}
                                <span className="text-accent">{timing.embedMs.toFixed(1)}ms</span>
                                {" · "}score + sort{" "}
                                <span className="text-accent">{timing.scoreMs.toFixed(2)}ms</span>
                                {" · "}corpus of {corpus.length} indexed in{" "}
                                {timing.indexMs.toFixed(0)}ms
                            </p>
                        )}
                        <ol className="space-y-2">
                            {results.map((result, i) => (
                                <li key={result.label}>
                                    <a
                                        href={result.href}
                                        className="group flex items-center gap-3 rounded-lg border border-ink-800 bg-ink-950/50 px-3 py-2.5 transition-colors hover:border-ink-700"
                                    >
                                        <span className="w-5 shrink-0 font-mono text-xs text-zinc-600">
                                            {i + 1}
                                        </span>
                                        <span className="min-w-0 flex-1">
                                            <span className="block truncate text-sm text-zinc-200 group-hover:text-zinc-50">
                                                {result.label}
                                            </span>
                                            <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">
                                                {result.kind}
                                            </span>
                                        </span>
                                        <span className="flex w-28 shrink-0 items-center gap-2">
                                            <span className="h-1 flex-1 overflow-hidden rounded-full bg-ink-800">
                                                <span
                                                    className="block h-full rounded-full bg-accent"
                                                    style={{ width: `${Math.max(result.score, 0) * 100}%` }}
                                                />
                                            </span>
                                            <span className="font-mono text-[11px] text-zinc-400">
                                                {result.score.toFixed(2)}
                                            </span>
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </div>
                )}
            </div>
        </ModelGate>
    );
}
