import { projects } from "@/lib/content";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Projects() {
    const flagship = projects.find((p) => p.flagship);
    const rest = projects.filter((p) => !p.flagship);

    return (
        <Section id="projects" kicker="02 · Projects" title="Things I’ve built" wide>
            {flagship && (
                <Reveal>
                    <article className="card relative overflow-hidden p-6 sm:p-8">
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/5 blur-3xl"
                        />
                        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                            Flagship · {flagship.date}
                        </p>
                        <h3 className="mt-2 text-xl font-semibold text-zinc-100 sm:text-2xl">
                            {flagship.name}
                        </h3>
                        <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-zinc-400">
                            {flagship.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-1.5">
                            {flagship.tags.map((tag) => (
                                <span key={tag} className="chip">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </article>
                </Reveal>
            )}
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((project, i) => (
                    <Reveal key={project.name} delay={i * 50}>
                        <article className="card flex h-full flex-col p-5 transition-colors hover:border-ink-700">
                            <p className="font-mono text-[11px] text-zinc-500">{project.date}</p>
                            <h3 className="mt-1.5 font-semibold text-zinc-100">{project.name}</h3>
                            <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                                {project.description}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-1.5">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="chip">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </article>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
