// -----------------------------------------------------------------------------
// Involvement / recognition grid — leadership, clubs, and highlights.
// -----------------------------------------------------------------------------

export interface Involvement {
    /** Decorative glyph icon (any character) */
    icon: string
    title: string
    description: string
    /** Optional date range shown as a small caption */
    period?: string
}

export const involvement: Involvement[] = [
    {
        icon: "✦",
        title: "Dean's List",
        description: "Recognized for academic excellence every semester from Spring 2024 through Spring 2026.",
        period: "Spring 2024 — Spring 2026",
    },
    {
        icon: "◆",
        title: "MNSU LeetCode Club — President",
        description: "Founded and led weekly problem-solving sessions to prep peers for technical interviews.",
        period: "Aug 2025 — Dec 2025",
    },
    {
        icon: "★",
        title: "ColorStack MNSU — Vice President",
        description: "Help grow and lead the community of Black & Latinx technologists on campus.",
        period: "May 2025 — Present",
    },
    {
        icon: "❉",
        title: "CodePath — Student Fellow",
        description: "Completed CodePath's technical interview and web-development tracks.",
        period: "May 2023 — Dec 2024",
    },
]
