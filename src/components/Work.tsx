// Projects grid. Each card shows a banner image when the project has one,
// otherwise a gradient cover with a big letter glyph. `card` / `data-hot` are
// cursor hooks; `r` + `data-stagger` drive the reveal animation.
import type { CSSProperties } from "react"
import Image from "next/image"
import { projects, githubCard } from "@/data/Project"
import { withBasePath } from "@/lib/utils"

const linkClass =
    "group/link inline-flex items-center gap-[6px] font-mono text-[12.5px] font-semibold text-ink-soft transition-colors hover:text-accent"
const arrClass = "transition-transform group-hover/link:translate-x-[2px] group-hover/link:-translate-y-[2px]"

const Work = () => {
    return (
        <section className="mx-auto w-full max-w-wrap px-[26px] py-[clamp(80px,11vw,150px)] md:px-14" id="work">
            <div className="r mb-[clamp(40px,6vw,72px)] flex items-baseline gap-5">
                <span className="pt-2 font-mono text-[13px] font-bold tracking-[0.05em] text-accent">01</span>
                <h2 className="font-display text-[clamp(34px,5.2vw,60px)] font-bold leading-[0.95] tracking-[-0.03em]">
                    Selected<br /><span className="text-ink-faint">work</span>
                </h2>
                <p className="ml-auto hidden max-w-[300px] pt-1.5 text-right text-[15px] leading-[1.55] text-ink-mute md:block">
                    Projects spanning systems, product, and tooling — several shipped to real users.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3" data-stagger>
                {projects.map((project) => (
                    <article key={project.index} className="card r group relative flex min-h-[360px] flex-col overflow-hidden bg-bg transition-[background,transform] duration-500 hover:z-[2] hover:bg-surface">
                        <div
                            className="relative grid h-[168px] place-items-center overflow-hidden"
                            style={{ backgroundImage: `linear-gradient(135deg, ${project.cover.from}, ${project.cover.to})` }}
                        >
                            {project.image ? (
                                <>
                                    <Image
                                        src={withBasePath(project.image)}
                                        alt={`${project.title} preview`}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-[600ms] group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
                                </>
                            ) : (
                                <>
                                    <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] bg-[length:22px_22px] opacity-50" />
                                    <span className="font-display text-[64px] font-extrabold tracking-[-0.04em] text-white/90 mix-blend-overlay transition-transform duration-[600ms] group-hover:scale-[1.12] group-hover:-rotate-3">
                                        {project.glyph}
                                    </span>
                                </>
                            )}
                            <span className="absolute left-[14px] top-3 z-[2] font-mono text-[11px] font-semibold text-white/85">{project.index}</span>
                        </div>

                        <div className="flex flex-1 flex-col px-[22px] pb-6 pt-[22px]">
                            <h3 className="flex items-center gap-2 font-display text-[22px] font-bold tracking-[-0.02em]">
                                {project.title}
                                {project.live && <span className="h-[7px] w-[7px] rounded-full bg-live" title="In production" />}
                            </h3>
                            <p className="mb-4 mt-[9px] flex-1 text-[14.5px] leading-[1.5] text-ink-mute">{project.description}</p>
                            <div className="mb-[18px] flex flex-wrap gap-[7px]">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="whitespace-nowrap rounded-md border border-line px-[9px] py-1 font-mono text-[10.5px] tracking-[0.03em] text-ink-soft">{tag}</span>
                                ))}
                            </div>
                            {(project.liveLink || project.githubLink) && (
                                <div className="flex gap-[18px] border-t border-line-2 pt-[15px]">
                                    {project.liveLink && (
                                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={linkClass}>
                                            Visit <span className={arrClass}>↗</span>
                                        </a>
                                    )}
                                    {project.githubLink && (
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={linkClass}>
                                            GitHub <span className={arrClass}>↗</span>
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </article>
                ))}

                {/* Closing card → GitHub profile */}
                <article
                    className="card r group relative flex min-h-[360px] flex-col items-center justify-center overflow-hidden bg-bg text-center"
                    data-hot
                    style={{ backgroundImage: "linear-gradient(135deg, #16150f, #2b2a24)" } as CSSProperties}
                >
                    <div className="flex flex-col items-center justify-center gap-[14px] px-6">
                        <span className="font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-white/60">{githubCard.label}</span>
                        <h3 className="font-display text-[30px] font-bold text-white">{githubCard.heading}</h3>
                        <a href={githubCard.url} target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-[9px] font-mono text-sm font-semibold text-white">
                            <span className="border-b-2 border-accent pb-[3px]">{githubCard.handle}</span>
                            <span className="transition-transform group-hover/link:translate-x-[3px] group-hover/link:-translate-y-[3px]">↗</span>
                        </a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Work
