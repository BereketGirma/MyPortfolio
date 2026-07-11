// -----------------------------------------------------------------------------
// Experience timeline. Each entry renders as a row with a lettered badge,
// a date range, a role + company, and a list of accomplishment bullets.
// -----------------------------------------------------------------------------

export interface Experience {
    /** 1–2 char badge shown in the marker square */
    badge: string
    /** Date range, e.g. "Aug 2023 — Present" */
    period: string
    title: string
    company: string
    bullets: string[]
}

export const experiences: Experience[] = [
    {
        badge: "TT",
        period: "Feb 2026 — Present",
        title: "Software Engineer & CTO",
        company: "@ TableTap",
        bullets: [
            "Architected and shipped a full-stack, multi-role ordering & POS platform with QR-based guest ordering and JWT-secured, role-gated access.",
            "Built real-time order updates with Django Channels and Redis WebSockets across concurrent kitchen and POS sessions.",
            "Drove development by building custom AI agents and automations for code review, audits, and test generation.",
        ],
    },
    {
        badge: "IT",
        period: "Aug 2023 — May 2026",
        title: "IT Lead Consultant",
        company: "@ Minnesota State University",
        bullets: [
            "Led and mentored a team of 30+ consultants with structured check-ins and workflow tracking, improving collaboration efficiency ~25%.",
            "Resolved hardware and software issues for 200+ users/month, reducing average downtime ~15% through root-cause analysis.",
            "Diagnosed and resolved 50+ monthly support tickets, decreasing resolution time ~30%.",
        ],
    },
    {
        badge: "SE",
        period: "May 2024 — Aug 2024",
        title: "Software Engineer Intern",
        company: "@ Client-Sponsored Project",
        bullets: [
            "Architected, built, and tested an automated shift-scheduling system for 30+ staff, cutting manual scheduling time by 80%.",
            "Built a cross-platform Java + Gradle desktop app with object-oriented design, streamlining workflows on macOS and Windows.",
            "Integrated Microsoft Teams and Excel APIs to automate schedule distribution, cutting communication overhead 75%.",
        ],
    },
    {
        badge: "PA",
        period: "Jan 2024 — May 2024",
        title: "MavPASS Leader — Intro to Programming",
        company: "@ Minnesota State University",
        bullets: [
            "Supported 100+ CIS 121 students with targeted academic sessions on programming fundamentals.",
            "Identified common challenges from lectures and promoted collaborative group problem-solving.",
        ],
    },
    {
        badge: "PA",
        period: "Aug 2023 — Dec 2023",
        title: "MavPASS Leader — General Physics",
        company: "@ Minnesota State University",
        bullets: [
            "Provided academic support to 40+ PHY 211 students through focused sessions and planned exercises.",
            "Encouraged collaborative learning and offered extra help during dedicated office hours.",
        ],
    },
]
