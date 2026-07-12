import Reveal from "./Reveal";

export default function Section({ id, kicker, title, children, wide = false }) {
    return (
        <section
            id={id}
            className={`mx-auto w-full ${wide ? "max-w-wide" : "max-w-content"} px-5 py-16 sm:py-20`}
        >
            <Reveal>
                <p className="section-kicker">{kicker}</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
                    {title}
                </h2>
            </Reveal>
            <div className="mt-8">{children}</div>
        </section>
    );
}
