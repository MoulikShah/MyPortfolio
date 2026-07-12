"use client";

// Shown in place of a demo until its model is downloaded + ready.
export default function ModelGate({ status, progress, onLoad, size, name, children }) {
    if (status === "ready") return children;

    return (
        <div className="flex min-h-[260px] flex-col items-center justify-center gap-4 py-8 text-center">
            {status === "idle" && (
                <>
                    <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
                        This demo downloads <span className="text-zinc-200">{name}</span> once
                        ({size}, cached by your browser) and runs it locally.
                    </p>
                    <button
                        onClick={onLoad}
                        className="rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent-dim"
                    >
                        Load model ({size})
                    </button>
                </>
            )}
            {status === "loading" && (
                <>
                    <div className="h-1.5 w-56 overflow-hidden rounded-full bg-ink-800">
                        <div
                            className="h-full rounded-full bg-accent transition-all duration-300"
                            style={{ width: `${Math.max(progress, 3)}%` }}
                        />
                    </div>
                    <p className="font-mono text-xs text-zinc-500">
                        downloading {name} · {progress}%
                    </p>
                </>
            )}
            {status === "error" && (
                <>
                    <p className="text-sm text-signal-red">
                        Couldn’t download the model. Check your connection and retry.
                    </p>
                    <button
                        onClick={onLoad}
                        className="rounded-lg border border-ink-700 px-4 py-2 text-sm text-zinc-300 hover:border-zinc-500"
                    >
                        Retry
                    </button>
                </>
            )}
        </div>
    );
}
