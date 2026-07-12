import { skills } from "@/lib/content";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Skills() {
    return (
        <Section id="skills" kicker="05 · Skills" title="What I work with">
            <div className="space-y-6">
                {skills.map((group, i) => (
                    <Reveal key={group.group} delay={i * 40}>
                        <div className="flex flex-col gap-2.5 sm:flex-row sm:items-baseline">
                            <p className="w-32 shrink-0 font-mono text-xs uppercase tracking-wider text-zinc-500">
                                {group.group}
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                                {group.items.map((item) => (
                                    <span key={item} className="chip !text-xs !text-zinc-300">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
