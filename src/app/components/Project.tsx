"use client"

import { projectContent } from "../data/Project";
import { FaGithub } from "react-icons/fa"

const Project = () => {
    return(
        <div className="min-h-fit text-gray-900 flex flex-col justify-start px-6 py-12">
            {/* Project section */}
            <div className="w-full flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <h1 className="text-4xl text-gray-900 leading-relaxed font-semibold">Project</h1>
                    <span className="flex-1 bg-blue-400 h-0.5 md:w-1/2 md:flex-none"></span>
                </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-gray-700">
                {Object.keys(projectContent).map((project, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col px-4 py-4 rounded-md backdrop-blur-md bg-white/30 border-white gap-2 shadow-gray-900 md:hover:shadow-2xl md:hover:-translate-y-1 transition duration-300"
                    >
                        {/* Project title */}
                        <h2 className="font-semibold text-2xl">
                            {projectContent[project as keyof typeof projectContent].title}
                        </h2>

                        {/* Project description */}
                        <p className="flex-grow">
                            {projectContent[project as keyof typeof projectContent].description}
                        </p>
                        
                        {/* Softwares + Github */}
                        <div className="flex justify-between items-center mt-auto">
                            {/* Tech Stack(Softwares) */}
                            <div className="flex flex-wrap gap-2">
                                {projectContent[project as keyof typeof projectContent].softwares.map((software, i) => (
                                    <span className="text-sm px-3 py-1 bg-blue-400/30 rounded-2xl border border-blue-700" key={i}>
                                        {software}
                                    </span>
                                ))}
                            </div>

                            {/* Github Icon */}
                            <a 
                                href={projectContent[project as keyof typeof projectContent].github} 
                                title="GitHub Repository"
                                className="hover:scale-125 transition-transform duration-300"
                            >
                                <FaGithub className="w-8 h-8"/>
                            </a>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project