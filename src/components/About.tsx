// About section: highlighted lead, supporting paragraphs, stat grid, and a
// portrait that fans out hobby icons (laptop, basketball, camera, joystick) on
// hover — all done with CSS group-hover, no JS required.
import Image from "next/image"
import { Laptop, Camera, Gamepad2 } from "lucide-react"
import { FaBasketballBall } from "react-icons/fa"
import { aboutContent } from "@/data/About"

const chipBase =
    "absolute z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-surface text-ink shadow-[0_16px_30px_-12px_rgba(0,0,0,0.4)] opacity-0 transition-all duration-500 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] group-hover:opacity-100"

const About = () => {
    return (
        <section className="mx-auto w-full max-w-wrap px-[26px] py-[clamp(80px,11vw,150px)] md:px-14" id="about">
            <div className="r mb-[clamp(40px,6vw,72px)] flex items-baseline gap-5">
                <span className="pt-2 font-mono text-[13px] font-bold tracking-[0.05em] text-accent">02</span>
                <h2 className="font-display text-[clamp(34px,5.2vw,60px)] font-bold leading-[0.95] tracking-[-0.03em]">About</h2>
            </div>

            <div className="grid grid-cols-1 items-start gap-[clamp(40px,7vw,80px)] lg:grid-cols-[1fr_340px]">
                <div>
                    <p
                        className="r font-display text-[clamp(24px,3.4vw,38px)] font-semibold leading-[1.18] tracking-[-0.02em] text-balance [&_em]:not-italic [&_em]:text-accent"
                        dangerouslySetInnerHTML={{ __html: aboutContent.lead }}
                    />

                    <div className="r mt-8 text-[16.5px] leading-[1.7] text-ink-soft">
                        {aboutContent.paragraphs.map((para, i) => (
                            <p key={i} className="mb-[18px]">{para}</p>
                        ))}

                        <div className="mt-2 grid grid-cols-2 gap-px border border-line bg-line">
                            {aboutContent.stats.map((stat) => (
                                <div className="bg-bg px-5 py-[22px]" key={stat.label}>
                                    <div className="font-display text-[38px] font-bold leading-none tracking-[-0.03em]">{stat.value}</div>
                                    <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-mute">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Portrait with hover-reveal hobby icons */}
                <div className="r group relative mx-auto w-full max-w-[320px]">
                    {/* accent ring that grows on hover */}
                    <div className="pointer-events-none absolute -inset-3 rounded-[26px] border border-accent/0 transition-all duration-500 group-hover:-inset-4 group-hover:border-accent/40" />

                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-bg-2">
                        <Image
                            src="/portrait.png"
                            alt="Bereket Girma"
                            fill
                            sizes="(max-width: 1024px) 320px, 340px"
                            className="object-cover object-top grayscale-[0.15] transition-all duration-500 group-hover:scale-[1.04] group-hover:grayscale-0"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* pop-out chips */}
                    <span className={`${chipBase} -left-5 top-8 translate-x-3 group-hover:translate-x-0`} aria-hidden>
                        <Laptop className="h-5 w-5" />
                    </span>
                    <span className={`${chipBase} -right-5 top-8 -translate-x-3 delay-75 group-hover:translate-x-0`} aria-hidden>
                        <FaBasketballBall className="h-5 w-5 text-accent" />
                    </span>
                    <span className={`${chipBase} -left-5 bottom-8 translate-x-3 delay-100 group-hover:translate-x-0`} aria-hidden>
                        <Camera className="h-5 w-5" />
                    </span>
                    <span className={`${chipBase} -right-5 bottom-8 -translate-x-3 delay-150 group-hover:translate-x-0`} aria-hidden>
                        <Gamepad2 className="h-5 w-5" />
                    </span>
                </div>
            </div>
        </section>
    )
}

export default About
