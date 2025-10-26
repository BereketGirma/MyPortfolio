export const projects = [
    {
        id: 1,
        title: "SAFEHR",
        shortDesc: `SAFEHR is a web-based EHR platform used to support nursing education and simulation. It allows students to document and update patient care in a realistic, hands-on learning environment.`, 
        description: `SAFEHR (Simulation Analytics Family-Focused Electronic Health Record) is a full-stack Electronic Health Record platform built to support nursing simulation and education at Minnesota State University, Mankato. 
        Our team collaborates directly with nursing faculty to design workflows that reflect real clinical environments while remaining tailored for student learning. 
        The system implements secure role-based permissions for Admins, Educators, and Students, allowing controlled access to patient cases and documentation tools.
        Real-time updates powered by WebSockets enable synchronized actions during multi-user simulation sessions. 
        The platform is deployed using Docker with separate dev and production environments and integrates MongoDB to efficiently manage patient and simulation data. 
        Automated testing maintains over 85% coverage, ensuring reliability of critical functionality as the project continues to grow based on ongoing feedback.`,
        tags: ["Next.js", "Django", "MongoDB", "SQLite", "Python", "TypeScript"],
        githubLink: "",
        image: "/project/SAFEHR.png",
        demoAvailable: false,
        demoLink: "",
    },

    {
        id: 2,
        title: "AutoShift",
        shortDesc: "AutoShift is a cross-platform desktop app that automates timesheet entries for MSU Mankato using Electron, React, and Selenium.", 
        description: `AutoShift is a cross platform desktop application designed to automate timesheet entries for Minnesota State University, Mankato. Built with TypeScript, Electron, and React
        using Vite framework, it streamlines the process of logging work hours by automating input into the university's timesheet website. AutoShift utilizes Selenium with ChromeDriver for 
        automation, ensuring accuracy and efficiency while reducing manual effort. The app supports Windows and macOS, and operates after the user manually signs in, making it a seamless tool for 
        improving workflow and productivity.`,
        tags: ["Electron", "React + Vite", "Typescript", "Selenium"],
        githubLink: "https://github.com/BereketGirma/AutoShift",
        image: "/project/AutoShift.png",
        demoAvailable: false,
        demoLink: "",
    },

    {
        id: 3,
        title: "PatrolCam",
        shortDesc: "PatrolCam is a web platform for secure live surveillance. As backend lead, I built the core infrastructure with authentication and MongoDB.",
        description: `PatrolCam is a web-based platform designed to provide live-streaming surveillance solutions. 
            The project focuses on enabling users to securely access and view live video feeds through a streamlined web interface. As the backend lead, 
            I mainly developed the backend infrastructure, including implementing user authentication and managing the systems database using MongoDB. 
            While the project also involves AI integration, the first phase of the project focused on frontend and backend components.
            PatrolCam serves as an efficient and scalable solution for real-time surveillance streaming.`,
        tags: ["React", "MongoDB", "JavaScript", "Express"],
        githubLink: "https://github.com/Bursch-Industries/PatrolCam",
        image: "/project/PatrolCam.png",
        demoAvailable: false,
        demoLink: "",
    },

    {
        id: 4,
        title: "Lob-Bot",
        shortDesc: "LobBot is a Telegram bot that streamlines chatting with features like info search, message management, and status sharing.",
        description: `LobBot is a versatile Telegram bot developed using Telegram API.
            It enhances your Telegram experience by offering features such as searching
            for information, managing messages, sharing user status and more. Perfect for 
            both practical tasks and enjoyment, Lob-Bot makes interacting on Telegram more 
            efficient and enjoyable.`,
        tags: ["Telegram-API", "Python"],
        githubLink: "https://github.com/BereketGirma/LobBot",
        image: "/project/LobBot.png",
        demoAvailable: false,
        demoLink: "",
    },

    {
        id: 5,
        title: "Maverick Maps",
        shortDesc: "Maverick Maps is a React Native and Unity app that provides a 3D campus map of MSU Mankato, making navigation easy for students, staff, and visitors.",
        description: `Maverick Maps is a tool that is built for students, faculty, 
            staff and visitors to have an easier time navigating through the campus of 
            Minnesota State University,Mankato. It is an app built with React-Native 
            alongside Unity which displays a 3D Map of the campus layout. It is an
            easy access tool with user friendly UI design.`,
        tags: ["TypeScript", "React", "Unity"],
        githubLink: "https://github.com/WayfindingWizards/WayfindingAppF24",
        image: "/project/Wayfinder.png",
        demoAvailable: false,
        demoLink: "",
    },

    {
        id: 6,
        title: "My Portfolio",
        shortDesc: "This portfolio showcases my software skills and projects using Next.js and TailwindCSS.",
        description: `This portfolio is a dynamic way to showcase my skills, projects and accomplishments in software development. Built from scratch using Next.js and TailwindCSS,
        it highlights my technical expertise and creative approach to problem-solving. The portfolio features a collection of personal and academic projects that demonstrate my knowledge in
        diverse technologies.`,
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        githubLink: "https://github.com/BereketGirma/MyPortfolio",
        image: "/project/Portfolio.png",
        demoAvailable: false,
        demoLink: "",
    },
]