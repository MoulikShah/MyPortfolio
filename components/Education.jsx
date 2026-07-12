import { education, achievements } from "@/lib/content";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Education() {
    return (
        <Section id="education" kicker="03 · Education" title="Where I studied">
            <div className="space-y-6">
                {education.map((school, i) => (
                    <Reveal key={school.school} delay={i * 50}>
                        <div className="card p-5">
                            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                                <h3 className="font-semibold text-zinc-100">
                                    <a href={school.url} target="_blank" rel="noreferrer" className="link-underline">
                                        {school.school}
                                    </a>
                                </h3>
                                <p className="font-mono text-xs text-zinc-500">{school.date}</p>
                            </div>
                            <p className="mt-1 text-sm text-zinc-300">{school.degree}</p>
                            <p className="mt-2 font-mono text-xs leading-relaxed text-zinc-500">
                                {school.note}
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>
            <Reveal className="mt-10">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Achievements
                </p>
                <ul className="mt-4 space-y-3">
                    {achievements.map((achievement) => (
                        <li key={achievement.title} className="text-sm leading-relaxed">
                            <span className="font-medium text-zinc-200">{achievement.title}</span>
                            <span className="text-zinc-500"> — {achievement.note}</span>
                        </li>
                    ))}
                </ul>
            </Reveal>
        </Section>
    );
}
