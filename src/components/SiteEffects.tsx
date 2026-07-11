"use client"

// -----------------------------------------------------------------------------
// All client-side interactions for the portfolio, ported from the design's
// vanilla main.js: theme toggle, intro loader, custom cursor, reactive glow,
// scroll reveal + stagger, animated skill bars, nav scroll/active state, mobile
// menu, and hero parallax. Respects prefers-reduced-motion. (No easter egg.)
// -----------------------------------------------------------------------------

import { useEffect } from "react"

const THEME_KEY = "bg-theme"

const SiteEffects = () => {
    useEffect(() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        const isTouch = window.matchMedia("(hover: none)").matches
        const $ = <T extends Element = Element>(s: string, c: ParentNode = document) =>
            c.querySelector<T>(s)
        const $$ = <T extends Element = Element>(s: string, c: ParentNode = document) =>
            Array.from(c.querySelectorAll<T>(s))

        const cleanups: Array<() => void> = []
        const rafIds: number[] = []
        const timeouts: number[] = []
        const observers: IntersectionObserver[] = []
        const raf = (fn: FrameRequestCallback) => {
            const id = requestAnimationFrame(fn)
            rafIds.push(id)
            return id
        }
        const root = document.documentElement

        /* ---------- THEME ---------- */
        const toggleTheme = () => {
            const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark"
            root.classList.add("__no-transition")
            root.setAttribute("data-theme", next)
            try { localStorage.setItem(THEME_KEY, next) } catch { /* ignore */ }
            void document.body.offsetWidth // force synchronous reflow
            requestAnimationFrame(() =>
                requestAnimationFrame(() => root.classList.remove("__no-transition"))
            )
        }
        $$("[data-theme-toggle]").forEach((b) => {
            b.addEventListener("click", toggleTheme)
            cleanups.push(() => b.removeEventListener("click", toggleTheme))
        })

        /* ---------- LOADER ---------- */
        const loader = $(".loader")
        const fill = $<HTMLElement>(".loader-bar .fill")
        const pct = $(".loader-pct")
        const hero = $(".hero")
        if (!loader) {
            hero?.classList.add("loaded")
        } else if (reduceMotion) {
            loader.classList.add("done")
            hero?.classList.add("loaded")
        } else {
            let p = 0
            const tick = () => {
                p += Math.random() * 22 + 11
                if (p > 100) p = 100
                if (fill) fill.style.width = p + "%"
                if (pct) pct.textContent = String(Math.floor(p)).padStart(3, "0") + " / 100"
                if (p < 100) {
                    timeouts.push(window.setTimeout(tick, 55 + Math.random() * 70))
                } else {
                    timeouts.push(window.setTimeout(() => {
                        loader.classList.add("done")
                        hero?.classList.add("loaded")
                    }, 240))
                }
            }
            timeouts.push(window.setTimeout(tick, 150))
        }
        // Play hero reveal at first paint regardless of loader timing.
        if (hero) raf(() => raf(() => hero.classList.add("loaded")))

        /* ---------- CUSTOM CURSOR ---------- */
        if (!isTouch && !reduceMotion) {
            const dot = $<HTMLElement>(".cursor-dot")
            const ring = $<HTMLElement>(".cursor-ring")
            if (dot && ring) {
                document.body.classList.add("has-cursor")
                let mx = window.innerWidth / 2, my = window.innerHeight / 2
                let rx = mx, ry = my
                const onMove = (e: MouseEvent) => {
                    mx = e.clientX; my = e.clientY
                    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`
                }
                window.addEventListener("mousemove", onMove)
                const loop = () => {
                    rx += (mx - rx) * 0.18
                    ry += (my - ry) * 0.18
                    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`
                    raf(loop)
                }
                raf(loop)
                const hot = "a, button, .card, .tl-item, [data-hot]"
                const onOver = (e: Event) => {
                    if ((e.target as Element).closest(hot)) ring.classList.add("hot")
                }
                const onOut = (e: Event) => {
                    if ((e.target as Element).closest(hot)) ring.classList.remove("hot")
                }
                document.addEventListener("mouseover", onOver)
                document.addEventListener("mouseout", onOut)
                cleanups.push(() => {
                    window.removeEventListener("mousemove", onMove)
                    document.removeEventListener("mouseover", onOver)
                    document.removeEventListener("mouseout", onOut)
                    document.body.classList.remove("has-cursor")
                })
            }
        }

        /* ---------- MOUSE-REACTIVE GLOW ---------- */
        if (!reduceMotion) {
            const glow = $<HTMLElement>(".bg-glow")
            if (glow) {
                let tx = window.innerWidth * 0.5, ty = window.innerHeight * 0.35
                let cx = tx, cy = ty
                const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY }
                window.addEventListener("mousemove", onMove)
                const loop = () => {
                    cx += (tx - cx) * 0.06
                    cy += (ty - cy) * 0.06
                    glow.style.setProperty("--mx", cx + "px")
                    glow.style.setProperty("--my", cy + "px")
                    raf(loop)
                }
                raf(loop)
                cleanups.push(() => window.removeEventListener("mousemove", onMove))
            }
        }

        /* ---------- SCROLL REVEAL + STAGGER ---------- */
        {
            const io = new IntersectionObserver((entries) => {
                entries.forEach((en) => {
                    if (en.isIntersecting) {
                        en.target.classList.add("in")
                        io.unobserve(en.target)
                    }
                })
            }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" })
            observers.push(io)
            $$<HTMLElement>(".r").forEach((el) => {
                const grp = el.closest("[data-stagger]")
                if (grp) {
                    const sibs = $$(".r", grp)
                    el.style.transitionDelay = (sibs.indexOf(el) * 0.07) + "s"
                }
                io.observe(el)
            })
        }

        /* ---------- SKILL BARS + COUNT-UP ---------- */
        {
            const io = new IntersectionObserver((entries) => {
                entries.forEach((en) => {
                    if (!en.isIntersecting) return
                    const el = en.target as HTMLElement
                    const val = +(el.dataset.skill || 0)
                    const sfill = $<HTMLElement>(".fill", el)
                    const spct = $(".pct", el)
                    if (sfill) sfill.style.width = val + "%"
                    if (spct && !reduceMotion) {
                        let c = 0
                        const step = () => {
                            c += Math.ceil((val - c) / 6) || 1
                            if (c >= val) c = val
                            spct.textContent = c + "%"
                            if (c < val) raf(step)
                        }
                        raf(step)
                    } else if (spct) {
                        spct.textContent = val + "%"
                    }
                    io.unobserve(el)
                })
            }, { threshold: 0.5 })
            observers.push(io)
            $$(".skill").forEach((el) => io.observe(el))
        }

        /* ---------- NAV: scrolled state + active section ---------- */
        {
            const nav = $(".nav")
            const links = $$<HTMLAnchorElement>(".nav-link")
            const map: Record<string, HTMLAnchorElement> = {}
            links.forEach((l) => { map[(l.getAttribute("href") || "").slice(1)] = l })
            const onScroll = () => nav?.classList.toggle("scrolled", window.scrollY > 40)
            onScroll()
            window.addEventListener("scroll", onScroll, { passive: true })
            cleanups.push(() => window.removeEventListener("scroll", onScroll))

            const secIO = new IntersectionObserver((entries) => {
                entries.forEach((en) => {
                    const id = en.target.id
                    if (en.isIntersecting && map[id]) {
                        links.forEach((l) => l.classList.remove("active"))
                        map[id].classList.add("active")
                    }
                })
            }, { rootMargin: "-45% 0px -50% 0px" })
            observers.push(secIO)
            $$("section[id], footer[id]").forEach((s) => { if (map[s.id]) secIO.observe(s) })
        }

        /* ---------- MOBILE MENU ---------- */
        {
            const burger = $(".nav-burger")
            const menu = $(".m-menu")
            if (burger && menu) {
                const onBurger = () => menu.classList.toggle("open")
                burger.addEventListener("click", onBurger)
                cleanups.push(() => burger.removeEventListener("click", onBurger))
                $$<HTMLAnchorElement>("a", menu).forEach((a) => {
                    const close = () => menu.classList.remove("open")
                    a.addEventListener("click", close)
                    cleanups.push(() => a.removeEventListener("click", close))
                })
            }
        }

        /* ---------- HERO PARALLAX ---------- */
        if (!reduceMotion) {
            const name = $<HTMLElement>(".hero-name")
            const meta = $<HTMLElement>(".hero-meta")
            let ticking = false
            const onScroll = () => {
                if (ticking) return
                ticking = true
                raf(() => {
                    const y = window.scrollY
                    if (y < window.innerHeight) {
                        if (name) name.style.transform = `translateY(${y * 0.16}px)`
                        if (meta) meta.style.transform = `translateY(${y * 0.3}px)`
                    }
                    ticking = false
                })
            }
            window.addEventListener("scroll", onScroll, { passive: true })
            cleanups.push(() => window.removeEventListener("scroll", onScroll))
        }

        /* ---------- CLEANUP ---------- */
        return () => {
            cleanups.forEach((fn) => fn())
            rafIds.forEach((id) => cancelAnimationFrame(id))
            timeouts.forEach((id) => clearTimeout(id))
            observers.forEach((o) => o.disconnect())
        }
    }, [])

    return null
}

export default SiteEffects
