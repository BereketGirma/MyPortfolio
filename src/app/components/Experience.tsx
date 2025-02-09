"use client"

import { useState } from "react";
import { experienceContent } from "../data/Experience"
import { FaChevronRight } from "react-icons/fa"

interface ExperienceContentType {
    [key: string]: {
        button: string;
        title: string;
        time: string;
        tasks: string[];
    };
}

const Experience = () => {
    const [activeTab, setActiveTab] = useState("job1");
    const { title, time, tasks } = (experienceContent as ExperienceContentType)[activeTab];

    return(
        <div id="experience" className="min-h-fit text-gray-900 flex flex-col justify-start px-6 py-12">
            {/* Experience section */}
            <div className="w-full flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <h1 className="text-4xl text-gray-900 leading-relaxed font-semibold">Experience</h1>
                    <span className="flex-1 bg-blue-400 h-0.5 md:w-1/2 md:flex-none"></span>
                </div>

                <div className="flex max-lg:flex-col w-full gap-4 md:items-start">
                    <div className="flex overflow-x-auto lg:flex-col text-gray-700 text-lg font-semibold">
                        {Object.keys(experienceContent).map((job: string, index: number) => (
                                <button 
                                    key={index}
                                    className={`w-full text-start max-md:text-center whitespace-nowrap px-4 py-2 max-lg:border-b-2 lg:border-l-2 transition-all duration-300
                                            ${
                                                activeTab === job
                                                    ? "border-blue-500 text-blue-600 bg-blue-500/30"
                                                    : "border-transparent hover:text-blue-600 hover:bg-blue-500/30"
                                            }`}
                                    onClick={() => setActiveTab(job)}
                                >
                                        {(experienceContent as ExperienceContentType)[job].button}
                                </button>
                            ))}
                    </div>

                    <div className="shadow-lg backdrop-blur-md bg-white/30 border-white flex-1 rounded-md">
                        <div className="flex flex-col text-gray-700 px-4 py-4 space-y-2">
                            <h2 className="font-semibold text-2xl">{title}</h2>
                            <p>{time}</p>
                            <ul className="space-y-0">
                                {tasks.map((task, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <FaChevronRight className="text-blue-500 mt-1"/>
                                        <span>{task}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience