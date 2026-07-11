// Fixed top navigation + full-screen mobile menu.
// Marker classes (nav, nav-link, n, nav-burger, m-menu) are JS hooks used by
// SiteEffects for scroll state, active-link highlighting and the mobile menu;
// their dynamic styles live in globals.css. Everything static is Tailwind.
import { site } from "@/data/Site"

const NavBar = () => {
    return (
        <>
            <header className="nav fixed inset-x-0 top-0 z-[100] flex items-center justify-between border-b border-transparent px-[26px] py-5 transition-[padding,background,border-color] duration-[400ms] md:px-14">
                <a href="#top" className="flex items-center gap-[9px] font-mono text-base font-bold tracking-[0.06em]">
                    <span className="h-2 w-2 rounded-full bg-accent animate-blink" />
                    {site.logo}
                </a>

                <nav className="hidden items-center gap-1 md:flex">
                    {site.navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="nav-link relative flex items-baseline gap-[7px] rounded-lg px-[14px] py-2 text-[14.5px] font-semibold text-ink-soft transition-colors hover:text-ink"
                        >
                            <span className="n font-mono text-[10.5px] text-ink-faint transition-colors">{link.num}</span>
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <button
                        className="theme-toggle relative h-7 w-[52px] shrink-0 rounded-full border border-line bg-bg-2 p-0 transition-[background,border-color] duration-[400ms]"
                        data-theme-toggle
                        aria-label="Toggle dark mode"
                    >
                        <span className="absolute left-0.5 top-0.5 grid h-[22px] w-[22px] place-items-center rounded-full bg-ink text-[11px] text-bg transition-transform duration-[400ms] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] dark:translate-x-6">
                            ☾
                        </span>
                    </button>
                    <a
                        href="#contact"
                        className="whitespace-nowrap rounded-lg border border-ink px-4 py-[9px] font-mono text-[13px] font-semibold transition-colors hover:bg-ink hover:text-bg"
                    >
                        Let&apos;s talk
                    </a>
                    <button
                        className="nav-burger grid h-[42px] w-[42px] place-items-center gap-[5px] rounded-[9px] border border-line bg-transparent md:hidden"
                        aria-label="Menu"
                    >
                        <span className="block h-[1.6px] w-[18px] bg-ink" />
                        <span className="block h-[1.6px] w-[18px] bg-ink" />
                        <span className="block h-[1.6px] w-[18px] bg-ink" />
                    </button>
                </div>
            </header>

            {/* Mobile menu overlay */}
            <div className="m-menu fixed inset-0 z-[99] flex flex-col justify-center gap-1.5 bg-bg px-8 md:hidden">
                {site.navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="flex items-baseline gap-[14px] py-1.5 font-display text-[clamp(34px,11vw,60px)] font-bold tracking-[-0.03em]"
                    >
                        <span className="font-mono text-sm text-accent">{link.num}</span>
                        {link.label}
                    </a>
                ))}
            </div>
        </>
    )
}

export default NavBar
