// -----------------------------------------------------------------------------
// About section: the lead line, supporting paragraphs and the stat grid.
// -----------------------------------------------------------------------------

export interface Stat {
    /** Big value, e.g. "30+" */
    value: string
    /** Small caption under the value */
    label: string
}

export const aboutContent = {
    /**
     * Large lead sentence. Wrap the word(s) you want highlighted in <em></em> —
     * they render in the accent color.
     */
    lead: `I like turning messy, real-world problems into software people actually
        <em>enjoy</em> using — caring about the systems underneath and the details on the surface.`,
    paragraphs: [
        `I'm a computer-science student at Minnesota State University, Mankato, graduating May 2026.
        Right now I'm Software Engineer & CTO at TableTap, shipping a full-stack ordering + POS platform —
        and before that I built a role-based EHR platform, a desktop automation app, and a live surveillance dashboard.`,
        `On campus I've led a 30+ member IT consulting team and founded the MNSU LeetCode Club. When I'm not
        building, I'm usually gaming, on the basketball court, or behind a camera.`,
    ],
    stats: [
        { value: "30+", label: "Team members led" },
        { value: "200+", label: "Users supported / mo" },
        { value: "7+", label: "Shipped projects" },
        { value: "3.74", label: "GPA · CS" },
    ] as Stat[],
}
