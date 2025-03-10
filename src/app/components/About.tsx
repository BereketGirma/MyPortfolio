"use client"
import React from "react"
import { aboutContent } from "../data/About"
import Image from "next/image"
import portrait from "../assets/Portrait.jpg"

const About = () => {
    return(
        <div id="about" className="min-h-fit text-white flex flex-col justify-start px-6 py-12 gap-8">
            {/* Starter info */}
            <div className="w-100 flex flex-col">
                <h1 className="text-4xl leading-relaxed font-semibold">{aboutContent.heading} 
                    <span className="text-yellow-500">{aboutContent.name}</span></h1>
                <p className="text-2xl leading-relaxed">{aboutContent.intro}</p>
            </div>

            {/* About me section */}
            <div className="w-full flex flex-col justify-center gap-2">
                <div className="flex items-center gap-2">
                    <h1 className="text-4xl leading-relaxed font-semibold">About Me</h1>
                    <span className="flex-1 bg-blue-400 h-0.5 md:w-1/2 md:flex-none"></span>
                </div>

                <div className="lg:flex items-center gap-10">
                    <div className="text-lg space-y-5">
                        {aboutContent.description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    <div className="max-lg:hidden lg:w-full items-center justify-center">
                        <Image
                            src={portrait}
                            alt="placeholder"
                            width={500}
                            height={800}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default About;