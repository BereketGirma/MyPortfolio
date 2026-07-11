// -----------------------------------------------------------------------------
// Skills section. Grouped into columns; each skill has a name and a 0–100
// proficiency that animates the bar + count-up on scroll.
// -----------------------------------------------------------------------------

export interface Skill {
    name: string
    /** Proficiency 0–100 (drives the bar width and % count-up) */
    level: number
}

export interface SkillColumn {
    title: string
    skills: Skill[]
}

export const skillColumns: SkillColumn[] = [
    {
        title: "Languages",
        skills: [
            { name: "Java", level: 85 },
            { name: "Python", level: 90 },
            { name: "TypeScript", level: 90 },
            { name: "Kotlin", level: 74 },
            { name: "C#", level: 72 },
            { name: "SQL", level: 82
                
             },
        ],
    },
    {
        title: "Frameworks",
        skills: [
            { name: "React / Next.js", level: 90 },
            { name: "Django", level: 85 },
            { name: "Node.js", level: 80 },
            { name: "Android Studio", level: 72 },
        ],
    },
    {
        title: "Tools",
        skills: [
            { name: "Git", level: 92 },
            { name: "Docker", level: 82 },
            { name: "GitHub Actions", level: 80 },
            { name: "Linux / Unix", level: 78 },
            { name: "Azure DevOps", level: 70 },
        ],
    },
    {
        title: "Databases",
        skills: [
            { name: "MongoDB", level: 86 },
            { name: "PostgreSQL", level: 82 },
            { name: "SQLite", level: 82 },
            { name: "Firebase", level: 74 },
        ],
    },
    {
        title: "AI Tools",
        skills: [
            { name: "Claude Code", level: 90 },
            { name: "GitHub Copilot", level: 84 },
            { name: "Cursor", level: 82 },
        ],
    },
]
