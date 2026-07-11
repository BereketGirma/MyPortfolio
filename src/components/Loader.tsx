// Full-screen intro loader. Marker classes (loader, loader-bar, fill,
// loader-pct) are driven by SiteEffects; the `.done` fade lives in globals.css.
import { hero } from "@/data/Site"

const Loader = () => {
    return (
        <div className="loader fixed inset-0 z-[9000] grid place-items-center bg-bg transition-[opacity,visibility] duration-700" id="loader">
            <div className="w-[min(420px,70vw)] text-left">
                <div className="mb-[14px] flex justify-between font-mono text-[13px] text-ink-mute">
                    <span>PORTFOLIO</span>
                    <span>v2026</span>
                </div>
                <div className="mb-[22px] font-display text-[clamp(30px,6vw,52px)] font-bold leading-[0.95] tracking-[-0.03em]">
                    {hero.firstName} {hero.lastName}
                    <span className="text-accent">.</span>
                </div>
                <div className="loader-bar relative h-0.5 overflow-hidden bg-line">
                    <div className="fill absolute inset-0 w-0 bg-accent transition-[width] duration-200 ease-linear" />
                </div>
                <div className="loader-pct mt-3 font-mono text-xs text-ink-faint">000 / 100</div>
            </div>
        </div>
    )
}

export default Loader
