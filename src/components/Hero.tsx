// Landing hero. Marker classes: hero (loaded state), hero-name / hero-meta
// (parallax), reveal-line (rise-in animation) — all handled in globals.css.
import { hero, site } from "@/data/Site"
import { withBasePath } from "@/lib/utils"

const Hero = () => {
    const marqueeWords = [...hero.marquee, ...hero.marquee]

    return (
        <section className="hero mx-auto flex min-h-screen w-full max-w-wrap flex-col justify-center px-[26px] pt-[90px] md:px-14">
            <div className="mb-[26px] flex items-center gap-4">
                <span className="h-2 w-2 rounded-full bg-live shadow-[0_0_0_4px_rgba(31,164,99,0.18)]" />
                <span className="font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-ink-mute">
                    {hero.eyebrow}
                </span>
            </div>

            <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[150px_1fr]">
                <div className="hero-meta flex flex-row flex-wrap gap-5 md:flex-col md:gap-[10px] md:pt-[18px]">
                    {hero.meta.map((line) => (
                        <span key={line} className="font-mono text-[11.5px] tracking-[0.08em] text-ink-mute">{line}</span>
                    ))}
                </div>
                <h1 className="hero-name m-0 font-display text-[clamp(72px,15.5vw,230px)] leading-[0.86] tracking-[-0.05em] md:leading-[0.82]">
                    <span className="reveal-line"><span>{hero.firstName}</span></span>
                    <span className="reveal-line">
                        <span>{hero.lastName}<span className="text-accent">.</span></span>
                    </span>
                </h1>
            </div>

            <div className="mt-[54px] grid grid-cols-1 items-end gap-7 md:grid-cols-[150px_1fr_380px] md:gap-10">
                <div className="hidden md:block" />
                <p className="m-0 max-w-[540px] text-[clamp(17px,2vw,21px)] leading-[1.55] text-ink-soft">{hero.subtitle}</p>
                <div className="flex flex-col gap-[18px]">
                    <a href="#work" className="group inline-flex items-center gap-[9px] self-start whitespace-nowrap font-mono text-sm font-semibold tracking-[0.02em]">
                        <span className="border-b-2 border-accent pb-[3px] transition-[padding] group-hover:pb-[6px]">Selected work</span>
                        <span className="transition-transform group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">↗</span>
                    </a>
                    <a href={withBasePath(site.resumePath)} download className="group inline-flex items-center gap-[9px] self-start whitespace-nowrap font-mono text-sm font-semibold tracking-[0.02em]">
                        <span className="border-b-2 border-accent pb-[3px] transition-[padding] group-hover:pb-[6px]">Download résumé</span>
                        <span className="transition-transform group-hover:translate-y-[3px]">↓</span>
                    </a>
                </div>
            </div>

            <div className="group mt-[clamp(48px,7vw,90px)] overflow-hidden border-y border-line py-[18px]" aria-hidden="true">
                <div className="flex w-max animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
                    {marqueeWords.map((word, i) => (
                        <span
                            key={`${word}-${i}`}
                            className="inline-flex items-center gap-[26px] px-[26px] font-display text-[clamp(20px,2.6vw,30px)] font-bold tracking-[0.01em] after:text-[0.6em] after:text-accent after:content-['✳']"
                        >
                            {word}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero
