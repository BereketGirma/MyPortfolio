// Experience timeline. `tl-item` is a cursor hook; `r` + `data-stagger` drive
// the reveal animation.
import { experiences } from "@/data/Experience"

const Experience = () => {
    return (
        <section className="mx-auto w-full max-w-wrap px-[26px] py-[clamp(80px,11vw,150px)] md:px-14" id="experience">
            <div className="r mb-[clamp(40px,6vw,72px)] flex items-baseline gap-5">
                <span className="pt-2 font-mono text-[13px] font-bold tracking-[0.05em] text-accent">03</span>
                <h2 className="font-display text-[clamp(34px,5.2vw,60px)] font-bold leading-[0.95] tracking-[-0.03em]">Experience</h2>
                <p className="ml-auto hidden max-w-[300px] pt-1.5 text-right text-[15px] leading-[1.55] text-ink-mute md:block">
                    Startup leadership as CTO, campus IT, an engineering internship, and peer-led teaching.
                </p>
            </div>

            <div className="flex flex-col" data-stagger>
                {experiences.map((exp, i) => (
                    <div
                        key={i}
                        className="tl-item r grid grid-cols-1 gap-[14px] border-t border-line py-[34px] transition-colors last:border-b hover:bg-[color-mix(in_srgb,var(--accent)_5%,transparent)] md:grid-cols-[150px_1fr] md:gap-10"
                    >
                        <div className="flex flex-col gap-1.5 pt-1.5 font-mono text-[12.5px] text-ink-mute">
                            <span className="inline-flex items-center gap-[7px]">
                                <span className="grid h-7 w-7 place-items-center rounded-[7px] bg-ink font-display text-[13px] font-bold text-bg">{exp.badge}</span>
                            </span>
                            {exp.period}
                        </div>
                        <div>
                            <div className="flex flex-wrap items-baseline gap-3">
                                <h3 className="font-display text-[clamp(22px,2.8vw,30px)] font-bold tracking-[-0.02em]">{exp.title}</h3>
                                <span className="font-mono text-[13px] text-accent">{exp.company}</span>
                            </div>
                            <ul className="mt-4 flex list-none flex-col gap-[9px] p-0">
                                {exp.bullets.map((bullet, b) => (
                                    <li key={b} className="relative pl-[22px] text-[15.5px] leading-[1.5] text-ink-soft before:absolute before:left-0 before:text-ink-faint before:content-['→']">
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience
