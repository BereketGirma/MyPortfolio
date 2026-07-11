// -----------------------------------------------------------------------------
// Certifications. Each renders as a card; add a `link` to turn the card into a
// "View credential ↗" link. Leave `link` empty ("") to show a plain placeholder.
// -----------------------------------------------------------------------------

export interface Certificate {
    title: string
    issuer: string
    /** Optional year / date caption */
    date?: string
    /** Credential URL — leave empty to render as a non-linked placeholder */
    link?: string
}

export const certificates: Certificate[] = [
    {
        title: "Claude 101",
        issuer: "Anthropic",
        link: "https://verify.skilljar.com/c/6mmp9o2dm3g5",
    },
    {
        title: "AI Fluency: Framework & Foundations",
        issuer: "Anthropic",
        link: "https://verify.skilljar.com/c/cawifgdu895x",
    },
    {
        title: "AI Prompting in Software Engineering",
        issuer: "Coursera",
        link: "https://www.coursera.org//account/accomplishments/badge/Y1A4IL5gS62QOCC-YIutnw",
    },
]
