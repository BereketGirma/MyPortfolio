// Footer / contact: big mailto CTA, contact + social columns, and the index.
import { contactContent } from "@/data/Contact"
import { site, hero } from "@/data/Site"

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="mx-auto w-full max-w-wrap border-t border-line px-[26px] pb-[50px] pt-[clamp(70px,9vw,120px)] md:px-14" id="contact">
            <h2 className="r mb-11 font-display text-[clamp(44px,9vw,132px)] font-bold leading-[0.86] tracking-[-0.045em]">
                <a href={`mailto:${contactContent.email}`} className="group inline transition-colors hover:text-accent">
                    {contactContent.ctaLine1}<br />
                    {contactContent.ctaLine2}<span className="text-accent">.</span>{" "}
                    <span className="inline-block text-[0.6em] transition-transform group-hover:translate-x-[0.1em] group-hover:-translate-y-[0.1em]">↗</span>
                </a>
            </h2>

            <div className="r grid grid-cols-1 gap-8 border-t border-line pt-11 md:grid-cols-3">
                <div>
                    <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-mute">Email</div>
                    <a href={`mailto:${contactContent.email}`} className="mb-[9px] block w-fit whitespace-nowrap text-[15.5px] text-ink-soft transition-colors hover:text-accent">{contactContent.email}</a>
                    <p className="text-[15.5px] text-ink-soft">{contactContent.availability}</p>
                </div>
                <div>
                    <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-mute">Elsewhere</div>
                    {contactContent.socials.map((social) => (
                        <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="mb-[9px] block w-fit text-[15.5px] text-ink-soft transition-colors hover:text-accent">
                            {social.label} ↗
                        </a>
                    ))}
                </div>
                <div>
                    <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-mute">Index</div>
                    {site.navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="mb-[9px] block w-fit text-[15.5px] text-ink-soft transition-colors hover:text-accent">{link.label}</a>
                    ))}
                </div>
            </div>

            <div className="mt-[54px] flex flex-wrap items-center justify-between gap-3 border-t border-line-2 pt-6 font-mono text-xs text-ink-mute">
                <span>© {year} {hero.firstName} {hero.lastName} — Designed &amp; built from scratch.</span>
                <span>Built with Next.js</span>
            </div>
        </footer>
    )
}

export default Footer
