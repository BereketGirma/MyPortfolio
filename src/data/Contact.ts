// -----------------------------------------------------------------------------
// Footer / contact content: the big CTA, email, and social links.
// -----------------------------------------------------------------------------

export interface SocialLink {
    label: string
    href: string
}

export const contactContent = {
    /** Big footer call-to-action (rendered on two lines) */
    ctaLine1: "Let's build",
    ctaLine2: "something",
    email: "bereketgirma002@gmail.com",
    availability: "Open to internships & full-time roles.",
    socials: [
        { label: "GitHub", href: "https://github.com/BereketGirma" },
        { label: "LinkedIn", href: "https://linkedin.com/in/bereketgirma" },
    ] as SocialLink[],
}
