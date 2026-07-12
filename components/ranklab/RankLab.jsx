"use client";

import { useLayoutEffect, useRef, useState } from "react";
import {
    pool,
    categories,
    initialUserState,
    applySignal,
    recordImpressions,
    rank,
} from "@/lib/ranklab";
import Reveal from "../Reveal";

const FEED_SIZE = 6;
const DWELL_MS = 700;

// FLIP: animate list reordering by measuring card positions before and after
function useFlip(orderKey) {
    const containerRef = useRef(null);
    const rectsRef = useRef(new Map());

    useLayoutEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        const previous = rectsRef.current;
        const next = new Map();
        for (const el of container.children) {
            next.set(el.dataset.id, el.getBoundingClientRect());
            const before = previous.get(el.dataset.id);
            if (before) {
                const dy = before.top - next.get(el.dataset.id).top;
                if (Math.abs(dy) > 2) {
                    el.animate(
                        [{ transform: `translateY(${dy}px)` }, { transform: "translateY(0)" }],
                        { duration: 450, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
                    );
                }
            }
        }
        rectsRef.current = next;
    }, [orderKey]);

    return containerRef;
}

export default function RankLab() {
    const [user, setUser] = useState(initialUserState);
    const [explore, setExplore] = useState(0.25);
    const [hidden, setHidden] = useState([]);
    const [events, setEvents] = useState([]);
    const dwellTimers = useRef({});
    const dwellSent = useRef({});

    const ranked = rank(user, explore).filter((item) => !hidden.includes(item.id));
    const feed = ranked.slice(0, FEED_SIZE);
    const orderKey = feed.map((item) => item.id).join(",");
    const listRef = useFlip(orderKey);

    function log(kind, item) {
        setEvents((prev) =>
            [{ kind, name: item.name, ts: Date.now() }, ...prev].slice(0, 7)
        );
    }

    function signal(item, kind) {
        setUser((prev) => recordImpressions(applySignal(prev, item, kind), feed));
        log(kind, item);
    }

    function startDwell(item) {
        if (dwellSent.current[item.id]) return;
        dwellTimers.current[item.id] = setTimeout(() => {
            dwellSent.current[item.id] = true;
            signal(item, "dwell");
        }, DWELL_MS);
    }

    function cancelDwell(item) {
        clearTimeout(dwellTimers.current[item.id]);
    }

    function reset() {
        setUser(initialUserState());
        setHidden([]);
        setEvents([]);
        dwellSent.current = {};
    }

    const maxScore = Math.max(...feed.map((item) => item.score), 0.01);

    return (
        <section id="ranklab" className="mx-auto w-full max-w-wide px-5 py-16 sm:py-20">
            <Reveal>
                <p className="section-kicker">01 · Rank Lab</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
                    Watch a ranker learn you in real time.
                </h2>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-zinc-400">
                    This is the loop I work on at TikTok, shrunk down to a toy: a recall
                    pool of {pool.length} local services, a linear ranker over your
                    session signals, and an exploration bonus. Click things, linger on
                    things, hide things, and watch the feed re-rank itself.
                </p>
            </Reveal>

            <Reveal delay={100}>
                <div className="card mt-8 grid gap-0 overflow-hidden lg:grid-cols-[1.2fr_1fr]">
                    {/* Feed */}
                    <div className="border-b border-ink-700/60 p-4 sm:p-6 lg:border-b-0 lg:border-r">
                        <div className="mb-4 flex items-center justify-between">
                            <p className="font-mono text-xs text-zinc-400">
                                for-you feed · top {feed.length} of {ranked.length} recalled
                            </p>
                            <button
                                onClick={reset}
                                className="rounded-md border border-ink-700 px-2.5 py-1 font-mono text-[11px] text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200"
                            >
                                reset user
                            </button>
                        </div>
                        <ul ref={listRef} className="space-y-2">
                            {feed.map((item, i) => (
                                <li
                                    key={item.id}
                                    data-id={item.id}
                                    onMouseEnter={() => startDwell(item)}
                                    onMouseLeave={() => cancelDwell(item)}
                                >
                                    <div
                                        role="button"
                                        tabIndex={0}
                                        onClick={() => signal(item, "click")}
                                        onKeyDown={(event) => {
                                            if (event.key === "Enter") signal(item, "click");
                                        }}
                                        className="group flex cursor-pointer items-center gap-3 rounded-lg border border-ink-800 bg-ink-950/50 px-3 py-2.5 transition-colors hover:border-accent/40"
                                    >
                                        <span className="w-4 shrink-0 text-center font-mono text-xs text-zinc-600">
                                            {i + 1}
                                        </span>
                                        <span className="text-xl">{item.emoji}</span>
                                        <span className="min-w-0 flex-1">
                                            <span className="block truncate text-sm text-zinc-200">
                                                {item.name}
                                            </span>
                                            <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">
                                                {item.category}
                                            </span>
                                        </span>
                                        <span className="flex w-24 shrink-0 items-center gap-2">
                                            <span className="h-1 flex-1 overflow-hidden rounded-full bg-ink-800">
                                                <span
                                                    className="block h-full rounded-full bg-accent transition-all duration-500"
                                                    style={{
                                                        width: `${Math.max((item.score / maxScore) * 100, 4)}%`,
                                                    }}
                                                />
                                            </span>
                                            <span className="w-9 text-right font-mono text-[11px] text-zinc-400">
                                                {item.score.toFixed(2)}
                                            </span>
                                        </span>
                                        <button
                                            aria-label={`Hide ${item.name}`}
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                setHidden((prev) => [...prev, item.id]);
                                                signal(item, "hide");
                                            }}
                                            className="px-1 font-mono text-xs text-zinc-700 opacity-0 transition-opacity hover:text-signal-red group-hover:opacity-100"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 flex items-center gap-3">
                            <span className="font-mono text-[11px] text-zinc-500">exploit</span>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={explore * 100}
                                onChange={(event) => setExplore(Number(event.target.value) / 100)}
                                className="h-1 flex-1 cursor-pointer appearance-none rounded-full bg-ink-800 accent-[#2dd4bf]"
                                aria-label="Explore vs exploit balance"
                            />
                            <span className="font-mono text-[11px] text-zinc-500">explore</span>
                            <span className="w-10 text-right font-mono text-[11px] text-accent">
                                ε={explore.toFixed(2)}
                            </span>
                        </div>
                    </div>

                    {/* Model state */}
                    <div className="p-4 sm:p-6">
                        <p className="font-mono text-xs text-zinc-400">learned user model</p>
                        <div className="mt-4 space-y-2.5">
                            {categories.map((category) => {
                                const value = user.affinity[category];
                                return (
                                    <div key={category} className="flex items-center gap-3">
                                        <span className="w-20 shrink-0 font-mono text-[11px] text-zinc-500">
                                            {category}
                                        </span>
                                        <span className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-ink-800">
                                            <span className="absolute left-1/2 top-0 h-full w-px bg-ink-700" />
                                            <span
                                                className={`absolute top-0 h-full rounded-full transition-all duration-500 ${
                                                    value >= 0 ? "left-1/2 bg-accent" : "right-1/2 bg-signal-red"
                                                }`}
                                                style={{ width: `${Math.abs(value) * 50}%` }}
                                            />
                                        </span>
                                        <span className="w-12 text-right font-mono text-[11px] text-zinc-400">
                                            {value >= 0 ? "+" : ""}
                                            {value.toFixed(2)}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="mt-5 flex gap-5 font-mono text-[11px] text-zinc-500">
                            <span>
                                impressions <span className="text-zinc-300">{user.totalImpressions}</span>
                            </span>
                            <span>
                                clicks <span className="text-zinc-300">{user.clicks}</span>
                            </span>
                            <span>
                                hidden <span className="text-zinc-300">{hidden.length}</span>
                            </span>
                        </div>
                        <p className="mt-6 font-mono text-xs text-zinc-400">event stream</p>
                        <ul className="mt-2 min-h-[120px] space-y-1.5">
                            {events.length === 0 && (
                                <li className="font-mono text-[11px] text-zinc-600">
                                    waiting for signals… try clicking a card or hovering on one
                                </li>
                            )}
                            {events.map((event, i) => (
                                <li key={`${event.ts}-${i}`} className="font-mono text-[11px] text-zinc-500">
                                    <span
                                        className={
                                            event.kind === "hide" ? "text-signal-red" : "text-accent"
                                        }
                                    >
                                        {event.kind}
                                    </span>{" "}
                                    → {event.name}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4 border-t border-ink-800/70 pt-4 text-xs leading-relaxed text-zinc-500">
                            score = (1−ε)·(0.65·affinity + 0.35·prior) + ε·UCB. Clicks teach
                            the model most, dwells less, hides go negative. The UCB term keeps
                            under-shown items surfacing, which is the same reason your real
                            feed sometimes tries something new on you.
                        </p>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
