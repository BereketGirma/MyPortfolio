// -----------------------------------------------------------------------------
// Global site content: logo, navigation, hero and the rolling marquee.
// Edit here to update the header and landing section.
// -----------------------------------------------------------------------------

export interface NavLink {
    /** Two-digit index shown before the label, e.g. "01" */
    num: string
    label: string
    /** In-page anchor, e.g. "#work" */
    href: string
}

export const site = {
    /** Shown in the top-left of the nav */
    logo: "BEREKET.GIRMA",
    /** Path (relative to /public) to the résumé PDF */
    resumePath: "/Bereket_Girma_Resume.pdf",
    navLinks: [
        { num: "01", label: "Work", href: "#work" },
        { num: "02", label: "About", href: "#about" },
        { num: "03", label: "Experience", href: "#experience" },
        { num: "04", label: "Skills", href: "#skills" },
        { num: "05", label: "Contact", href: "#contact" },
    ] as NavLink[],
}

export const hero = {
    /** Small status line above the name */
    eyebrow: "Open to internship & new-grad roles · 2026",
    /** Mono meta column beside the name */
    meta: ["SOFTWARE ENGINEER", "FULL-STACK · CS '26", "MANKATO, MN"],
    firstName: "Bereket",
    lastName: "Girma",
    subtitle: `Computer-science student and full-stack developer. I design and build clear,
        durable software — from role-based systems and real-time sync to the details on the surface.`,
    /** Words that scroll across the hero marquee */
    marquee: [
        "TypeScript", "React & Next.js", "Django", "Python", "Java",
        "Kotlin", "MongoDB", "PostgreSQL", "Docker", "C#",
    ],
}
