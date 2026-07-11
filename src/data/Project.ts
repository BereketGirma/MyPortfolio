// -----------------------------------------------------------------------------
// Projects grid. Each card shows a gradient "cover" with a big letter glyph,
// a short description, tags, and up to two links (live site + source).
//
// To add a project: copy an entry, bump the `index`, pick a `glyph` letter and
// a two-color gradient (`cover`). Set `live: true` to show the green "in
// production" dot, and add `liveLink` for anything that is publicly hosted.
// -----------------------------------------------------------------------------

export interface Project {
    /** Zero-padded card number, e.g. "001" */
    index: string
    /** Single uppercase letter shown large on the cover */
    glyph: string
    title: string
    /** Shows a small green dot when true (project is deployed / in production) */
    live?: boolean
    description: string
    tags: string[]
    /** Public URL for the hosted app / live demo */
    liveLink?: string
    /** Source code URL */
    githubLink?: string
    /** Two-color gradient for the cover: `from` → `to` (used as fallback / behind image) */
    cover: { from: string; to: string }
    /** Optional banner image (relative to /public). When set, it replaces the glyph. */
    image?: string
}

export const projects: Project[] = [
    {
        index: "001",
        glyph: "S",
        title: "SAFEHR",
        live: false,
        description:
            "Role-based EHR platform for nursing simulation, built with faculty. Admin / Educator / Student permissions, real-time care updates over WebSockets, and 85%+ test coverage.",
        tags: ["Next.js", "Django", "MongoDB", "TypeScript"],
        cover: { from: "#1c322d", to: "#3f6f60" },
        image: "/project/SAFEHR.png",
    },
    {
        index: "002",
        glyph: "T",
        title: "TableTap",
        live: true,
        description:
            "QR-based table-ordering platform for restaurants — guests scan, browse a live menu, and pay from their phone. Bilingual (English / Amharic) with a real-time kitchen dashboard.",
        tags: ["React", "Node", "PostgreSQL", "TypeScript"],
        liveLink: "https://www.table-tap.tech/",
        cover: { from: "#2a1f3d", to: "#6b4d8f" },
        image: "/project/TableTap.svg",
    },
    {
        index: "003",
        glyph: "A",
        title: "AutoShift",
        description:
            "Cross-platform desktop app that automates university timesheet entry. Selenium + ChromeDriver drive the browser, cutting 90% of the manual work for staff.",
        tags: ["Electron", "React", "TypeScript", "Selenium"],
        githubLink: "https://github.com/BereketGirma/AutoShift",
        cover: { from: "#2d1c12", to: "#b5602a" },
        image: "/project/AutoShift.png",
    },
    {
        index: "004",
        glyph: "P",
        title: "PatrolCam",
        description:
            "Live-streaming surveillance dashboard. As backend lead I built authentication, MongoDB schemas, and REST APIs for camera activity logs and user management.",
        tags: ["React", "Express", "MongoDB", "JavaScript"],
        githubLink: "https://github.com/Bursch-Industries/PatrolCam",
        cover: { from: "#142231", to: "#2c74a8" },
        image: "/project/PatrolCam.png",
    },
    {
        index: "005",
        glyph: "M",
        title: "Maverick Maps",
        description:
            "Interactive 3D campus map for MSU Mankato, built with React Native and Unity. A friendly wayfinding tool for students, staff, and visitors.",
        tags: ["React Native", "Unity", "TypeScript"],
        githubLink: "https://github.com/WayfindingWizards/WayfindingAppF24",
        cover: { from: "#14210f", to: "#4f8f30" },
        image: "/project/Wayfinder.png",
    },
    {
        index: "006",
        glyph: "L",
        title: "Lob-Bot",
        description:
            "A versatile Telegram bot that searches for info, manages messages, and shares user status — making day-to-day Telegram more efficient and fun.",
        tags: ["Telegram API", "Python"],
        githubLink: "https://github.com/BereketGirma/LobBot",
        cover: { from: "#2d1419", to: "#a23a4c" },
        image: "/project/BotIcon.jpg",
    },
    {
        index: "007",
        glyph: "B",
        title: "This Portfolio",
        live: true,
        description:
            "The site you're reading — an editorial, component-driven portfolio built from scratch with Next.js and a hand-written design system, deployed on GitHub Pages.",
        tags: ["Next.js", "TypeScript", "CSS"],
        liveLink: "https://bereketgirma.github.io/MyPortfolio",
        githubLink: "https://github.com/BereketGirma/MyPortfolio",
        cover: { from: "#1a1813", to: "#46433a" },
        image: "/project/Portfolio.png",
    },
]

/** The "More on GitHub" card that closes out the grid. */
export const githubCard = {
    label: "More on GitHub",
    heading: "Open source & counting",
    handle: "github.com/BereketGirma",
    url: "https://github.com/BereketGirma",
}
