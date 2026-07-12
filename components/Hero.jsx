import { hero, site } from "@/lib/content";
import Reveal from "./Reveal";

function SocialLink({ href, label, children }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="text-zinc-500 transition-colors hover:text-accent"
        >
            {children}
        </a>
    );
}

export default function Hero() {
    return (
        <div className="relative overflow-hidden" id="top">
            {/* faint grid backdrop */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
                    backgroundSize: "56px 56px",
                    maskImage:
                        "radial-gradient(ellipse 90% 70% at 50% 30%, black 30%, transparent 100%)",
                }}
            />
            <div className="relative mx-auto flex min-h-[92vh] max-w-wide flex-col justify-center px-5 pt-14">
                <Reveal>
                    <p className="font-mono text-sm text-accent">{hero.kicker}</p>
                </Reveal>
                <Reveal delay={80}>
                    <h1 className="caret mt-5 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-50 sm:text-5xl md:text-6xl">
                        {hero.heading}
                    </h1>
                </Reveal>
                <Reveal delay={160}>
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                        {hero.sub}
                    </p>
                </Reveal>
                <Reveal delay={240}>
                    <div className="mt-9 flex flex-wrap items-center gap-4">
                        <a
                            href="#playground"
                            className="rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent-dim"
                        >
                            Try the ML playground
                        </a>
                        <a
                            href="#experience"
                            className="rounded-lg border border-ink-700 px-4 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500"
                        >
                            See my work
                        </a>
                        <div className="ml-1 flex items-center gap-4">
                            <SocialLink href={site.socials.github} label="GitHub">
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                                </svg>
                            </SocialLink>
                            <SocialLink href={site.socials.linkedin} label="LinkedIn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
                                </svg>
                            </SocialLink>
                            <SocialLink href={`mailto:${site.email}`} label="Email">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                                    <rect x="3" y="5" width="18" height="14" rx="2" />
                                    <path d="m3 7 9 6 9-6" />
                                </svg>
                            </SocialLink>
                        </div>
                    </div>
                </Reveal>
                <Reveal delay={320}>
                    <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs text-zinc-500">
                        <span>
                            <span className="text-zinc-300">recall → ranking → re-rank</span> · production recsys
                        </span>
                        <span>
                            <span className="text-zinc-300">M.S. CompE</span> · NYU ’26
                        </span>
                        <span>
                            <span className="text-zinc-300">prev</span> · Scale AI, NYU V-Lab
                        </span>
                    </div>
                </Reveal>
            </div>
        </div>
    );
}
