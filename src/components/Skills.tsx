// Skills columns. `skill` / `fill` / `pct` + data-skill are hooks SiteEffects
// uses to animate the bars and count-up.
import { skillColumns } from "@/data/Skills"

const Skills = () => {
    return (
        <section className="mx-auto w-full max-w-wrap px-[26px] py-[clamp(80px,11vw,150px)] md:px-14" id="skills">
            <div className="r mb-[clamp(40px,6vw,72px)] flex items-baseline gap-5">
                <span className="pt-2 font-mono text-[13px] font-bold tracking-[0.05em] text-accent">04</span>
                <h2 className="font-display text-[clamp(34px,5.2vw,60px)] font-bold leading-[0.95] tracking-[-0.03em]">
                    Skills &amp;<br /><span className="text-ink-faint">technologies</span>
                </h2>
                <p className="ml-auto hidden max-w-[300px] pt-1.5 text-right text-[15px] leading-[1.55] text-ink-mute md:block">
                    A working toolkit — depth where it counts, breadth where it helps.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-[clamp(28px,4vw,56px)] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {skillColumns.map((col) => (
                    <div className="r" key={col.title}>
                        <h3 className="mb-[22px] flex items-center gap-[9px] font-mono text-[17px] font-bold tracking-[0.02em] text-ink">
                            <span className="h-[11px] w-[11px] rounded-[3px] bg-accent" />{col.title}
                        </h3>
                        {col.skills.map((skill) => (
                            <div className="skill mb-5" data-skill={skill.level} key={skill.name}>
                                <div className="mb-2 flex items-baseline justify-between">
                                    <span className="text-[14.5px] font-semibold">{skill.name}</span>
                                    <span className="pct font-mono text-xs text-ink-mute">0%</span>
                                </div>
                                <div className="h-[3px] overflow-hidden rounded-sm bg-line">
                                    <div className="fill h-full w-0 rounded-sm bg-accent transition-[width] duration-[1100ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]" />
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills
