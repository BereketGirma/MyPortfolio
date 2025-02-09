"use client"
import React from "react"
import { aboutContent } from "../data/About"
import Image from "next/image"
import image from "../assets/images.png"

const About = () => {
    return(
        <div className="min-h-fit text-gray-900 flex flex-col justify-start px-6 py-12 gap-8">
            {/* Starter info */}
            <div className="w-100 flex flex-col">
                <h1 className="text-4xl text-gray-600 leading-relaxed font-semibold">{aboutContent.heading} 
                    <span className="text-blue-500">{aboutContent.name}</span></h1>
                <p className="text-2xl text-gray-600 leading-relaxed">{aboutContent.intro}</p>
            </div>

            {/* About me section */}
            <div className="w-full flex flex-col justify-center gap-2">
                <div className="flex items-center gap-2">
                    <h1 className="text-4xl text-gray-900 leading-relaxed font-semibold">About Me</h1>
                    <span className="flex-1 bg-blue-400 h-0.5 md:w-1/2 md:flex-none"></span>
                </div>

                <div className="lg:flex items-center gap-10">
                    <div className="text-gray-600 text-lg space-y-5">
                        {aboutContent.description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    <div className="max-lg:hidden lg:w-full items-center justify-center">
                        <Image
                            src={image}
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