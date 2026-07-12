"use client";

import { useCallback, useState } from "react";
import { getSentimentModel } from "@/lib/ml";
import useModel from "./useModel";
import ModelGate from "./ModelGate";

const presets = [
    "Fed signals rate cuts as inflation cools faster than expected",
    "Tech giant misses earnings, shares plunge 12% in after-hours trading",
    "Retail sales stagnate amid weakening consumer confidence",
];

export default function SentimentTab() {
    const loader = useCallback((onProgress) => getSentimentModel(onProgress), []);
    const model = useModel(loader);
    const [text, setText] = useState("");
    const [runs, setRuns] = useState([]);
    const [busy, setBusy] = useState(false);

    async function classify(input) {
        const headline = input.trim();
        if (!headline || busy) return;
        setBusy(true);
        try {
            const classifier = await model.load();
            const t0 = performance.now();
            const [result] = await classifier(headline);
            const ms = performance.now() - t0;
            setRuns((prev) => [{ headline, ...result, ms }, ...prev].slice(0, 5));
        } finally {
            setBusy(false);
        }
    }

    return (
        <ModelGate
            status={model.status}
            progress={model.progress}
            onLoad={() => model.load().catch(() => {})}
            name="DistilBERT SST-2"
            size="67MB"
        >
            <div>
                <p className="text-sm leading-relaxed text-zinc-400">
                    This one’s a nod to my NYU V-Lab work on FinBERT sentiment trading.
                    Classify a financial headline (or anything else) right here.
                </p>
                <form
                    className="mt-4 flex gap-2"
                    onSubmit={(event) => {
                        event.preventDefault();
                        classify(text);
                    }}
                >
                    <input
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                        placeholder="Paste a headline…"
                        className="w-full rounded-lg border border-ink-700 bg-ink-950 px-3.5 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-accent/60 focus:outline-none"
                    />
                    <button
                        type="submit"
                        disabled={busy}
                        className="shrink-0 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent-dim disabled:opacity-50"
                    >
                        {busy ? "…" : "Classify"}
                    </button>
                </form>
                <div className="mt-3 flex flex-wrap gap-1.5">
                    {presets.map((preset) => (
                        <button
                            key={preset}
                            onClick={() => {
                                setText(preset);
                                classify(preset);
                            }}
                            className="chip max-w-full truncate transition-colors hover:border-accent/50 hover:text-zinc-200"
                        >
                            {preset}
                        </button>
                    ))}
                </div>

                {runs.length > 0 && (
                    <ul className="mt-6 space-y-2">
                        {runs.map((run, i) => (
                            <li
                                key={`${run.headline}-${i}`}
                                className="rounded-lg border border-ink-800 bg-ink-950/50 px-3.5 py-3"
                            >
                                <p className="text-sm text-zinc-300">{run.headline}</p>
                                <div className="mt-2 flex flex-wrap items-center gap-3">
                                    <span
                                        className={`font-mono text-xs font-semibold ${
                                            run.label === "POSITIVE" ? "text-accent" : "text-signal-red"
                                        }`}
                                    >
                                        {run.label}
                                    </span>
                                    <span className="h-1 w-32 overflow-hidden rounded-full bg-ink-800">
                                        <span
                                            className={`block h-full rounded-full ${
                                                run.label === "POSITIVE" ? "bg-accent" : "bg-signal-red"
                                            }`}
                                            style={{ width: `${run.score * 100}%` }}
                                        />
                                    </span>
                                    <span className="font-mono text-[11px] text-zinc-500">
                                        {(run.score * 100).toFixed(1)}% · {run.ms.toFixed(1)}ms
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </ModelGate>
    );
}
