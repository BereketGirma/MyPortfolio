// Involvement / recognition grid (data/Involvement.ts).
import { involvement } from "@/data/Involvement"

const Involvement = () => {
    return (
        <section className="mx-auto w-full max-w-wrap px-[26px] py-[clamp(80px,11vw,150px)] md:px-14" id="involvement">
            <div className="r mb-[clamp(40px,6vw,72px)] flex items-baseline gap-5">
                <span className="pt-2 font-mono text-[13px] font-bold tracking-[0.05em] text-accent">06</span>
                <h2 className="font-display text-[clamp(34px,5.2vw,60px)] font-bold leading-[0.95] tracking-[-0.03em]">Involvement</h2>
            </div>

            <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4" data-stagger>
                {involvement.map((item) => (
                    <div className="r flex min-h-[178px] flex-col gap-3 bg-bg p-[30px] transition-colors hover:bg-surface" key={item.title}>
                        <div className="font-display text-[26px] font-extrabold text-accent">{item.icon}</div>
                        <div className="font-display text-[19px] font-bold leading-[1.15] tracking-[-0.01em]">{item.title}</div>
                        {item.period && (
                            <div className="font-mono text-[11px] tracking-[0.04em] text-ink-mute">{item.period}</div>
                        )}
                        <div className="mt-auto text-[13.5px] leading-[1.5] text-ink-mute">{item.description}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Involvement
