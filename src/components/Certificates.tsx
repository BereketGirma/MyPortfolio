// Certifications grid. A card becomes a link when its `link` is set; otherwise
// it renders a plain placeholder so credentials can be added later.
import { certificates } from "@/data/Certificate"

const cardClass =
    "group flex min-h-[178px] flex-col gap-3 bg-bg p-[30px] transition-colors hover:bg-surface"

const Certificates = () => {
    return (
        <section className="mx-auto w-full max-w-wrap px-[26px] py-[clamp(80px,11vw,150px)] md:px-14" id="certifications">
            <div className="r mb-[clamp(40px,6vw,72px)] flex items-baseline gap-5">
                <span className="pt-2 font-mono text-[13px] font-bold tracking-[0.05em] text-accent">05</span>
                <h2 className="font-display text-[clamp(34px,5.2vw,60px)] font-bold leading-[0.95] tracking-[-0.03em]">Certifications</h2>
                <p className="ml-auto hidden max-w-[300px] pt-1.5 text-right text-[15px] leading-[1.55] text-ink-mute md:block">
                    Coursework and credentials in AI-assisted engineering.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-3" data-stagger>
                {certificates.map((cert) => {
                    const inner = (
                        <>
                            <div className="flex items-center justify-between">
                                <span className="font-display text-[22px] font-extrabold text-accent">❖</span>
                                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-mute">{cert.issuer}</span>
                            </div>
                            <h3 className="mt-2 font-display text-[19px] font-bold leading-[1.2] tracking-[-0.01em]">{cert.title}</h3>
                            <div className="mt-auto font-mono text-[12.5px] font-semibold">
                                {cert.link ? (
                                    <span className="inline-flex items-center gap-[6px] text-ink-soft transition-colors group-hover:text-accent">
                                        View credential
                                        <span className="transition-transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">↗</span>
                                    </span>
                                ) : (
                                    <span className="text-ink-faint">{cert.date ?? "Verification link soon"}</span>
                                )}
                            </div>
                        </>
                    )

                    return cert.link ? (
                        <a key={cert.title} href={cert.link} target="_blank" rel="noopener noreferrer" className={`${cardClass} r`}>
                            {inner}
                        </a>
                    ) : (
                        <div key={cert.title} className={`${cardClass} r`}>{inner}</div>
                    )
                })}
            </div>
        </section>
    )
}

export default Certificates
