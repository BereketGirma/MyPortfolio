"use client"

import React from "react";
import { contactContent } from "../data/Contact"

const Contact = () => {
    const handleClick= () => {
        window.location.href = `mailto:${contactContent['email']}`
    }
    return(
        //Contact section

        <div id="contact" className="min-h-fit text-white flex flex-col justify-center px-6 py-12 gap-8">
            <div className="w-full flex flex-col justify-center gap-2">
                <div className="flex items-center gap-2">
                    <h1 className="text-4xl leading-relaxed font-semibold">Contact Me</h1>
                    <span className="flex-1 bg-blue-400 h-0.5 md:w-1/2 md:flex-none"></span>
                </div>

                <div className="w-full lg:flex justify-center gap-10">
                    <div className="lg:w-4/5 text-lg space-y-5 text-center">
                        <p>{contactContent['description']} 
                            <span className="text-blue-400 underline cursor-pointer" onClick={handleClick}>{contactContent['email']}</span>
                        </p>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Contact;