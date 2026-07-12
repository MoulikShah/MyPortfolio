import { site } from "@/lib/content";
import Reveal from "./Reveal";

export default function Contact() {
    return (
        <section id="contact" className="mx-auto max-w-content px-5 pb-10 pt-16 sm:pt-20">
            <Reveal>
                <p className="section-kicker">06 · Contact</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
                    Let’s talk recsys, LLMs, or ML infra.
                </h2>
                <p className="mt-4 max-w-lg leading-relaxed text-zinc-400">
                    I’m building at TikTok these days, but I’m always up for a good
                    conversation. Email is the fastest way to reach me.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-4">
                    <a
                        href={`mailto:${site.email}`}
                        className="rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent-dim"
                    >
                        {site.email}
                    </a>
                    <a
                        href={site.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="link-underline text-sm"
                    >
                        LinkedIn ↗
                    </a>
                    <a
                        href={site.socials.github}
                        target="_blank"
                        rel="noreferrer"
                        className="link-underline text-sm"
                    >
                        GitHub ↗
                    </a>
                    <a href={site.resume} target="_blank" rel="noreferrer" className="link-underline text-sm">
                        Resume ↗
                    </a>
                </div>
            </Reveal>
            <footer className="mt-20 border-t border-ink-800/70 pt-6 font-mono text-xs text-zinc-600">
                <p>
                    © {new Date().getFullYear()} {site.name} · {site.location} · Built with
                    Next.js. The chat runs right in your browser.
                </p>
            </footer>
        </section>
    );
}
