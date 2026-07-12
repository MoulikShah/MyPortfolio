import { experience, earlierRoles } from "@/lib/content";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Experience() {
    return (
        <Section id="experience" kicker="01 · Experience" title="Where I’ve worked">
            <ol className="relative space-y-10 border-l border-ink-700/70 pl-6">
                {experience.map((job, i) => (
                    <li key={job.company} className="relative">
                        <span
                            className={`absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full ${
                                job.current
                                    ? "bg-accent shadow-[0_0_12px_rgba(45,212,191,0.6)]"
                                    : "bg-ink-700"
                            }`}
                        />
                        <Reveal delay={i * 40}>
                            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                                <h3 className="text-lg font-semibold text-zinc-100">
                                    {job.role}{" "}
                                    <span className="text-zinc-400">·</span>{" "}
                                    <a
                                        href={job.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="link-underline text-zinc-100"
                                    >
                                        {job.company}
                                    </a>
                                    {job.current && (
                                        <span className="ml-2 align-middle rounded-full border border-accent/40 bg-accent-faint px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                                            now
                                        </span>
                                    )}
                                </h3>
                                <p className="font-mono text-xs text-zinc-500">{job.date}</p>
                            </div>
                            <p className="mt-0.5 font-mono text-xs text-zinc-500">
                                {job.team} · {job.location}
                            </p>
                            <ul className="mt-3 space-y-2">
                                {job.points.map((point, j) => (
                                    <li key={j} className="flex gap-2.5 text-[15px] leading-relaxed text-zinc-400">
                                        <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-3 flex flex-wrap gap-1.5">
                                {job.tags.map((tag) => (
                                    <span key={tag} className="chip">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </Reveal>
                    </li>
                ))}
            </ol>

            <Reveal className="mt-14">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Earlier
                </p>
            </Reveal>
            <ol className="relative mt-6 space-y-8 border-l border-ink-700/70 pl-6">
                {earlierRoles.map((role, i) => (
                    <li key={role.company} className="relative">
                        <span className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full bg-ink-700" />
                        <Reveal delay={i * 40}>
                            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                                <h3 className="text-[15px] font-semibold text-zinc-200">
                                    {role.role} <span className="text-zinc-500">·</span>{" "}
                                    {role.company}
                                </h3>
                                <p className="font-mono text-xs text-zinc-500">{role.date}</p>
                            </div>
                            <ul className="mt-2 space-y-1.5">
                                {role.points.map((point, j) => (
                                    <li
                                        key={j}
                                        className="flex gap-2.5 text-sm leading-relaxed text-zinc-500"
                                    >
                                        <span className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-ink-700" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    </li>
                ))}
            </ol>
        </Section>
    );
}
