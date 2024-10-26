import React from "react";
import './About.css';
import { aboutContent } from '../../data/aboutContent'; //Import content

const About = () => {
    return(
        <section className="about-container" id = "about">
            <div className="iconIntro-container">
                <div className="circle-container">
                    <div className="circle"></div>
                    <div className="line"></div>
                </div>

                <div className="intro-container">
                    <p className="intro">
                        {aboutContent.heading}
                        <span className="name"> {aboutContent.name}.</span>
                        <p className="info">{aboutContent.intro}</p>
                    </p>
                </div>
            </div>
            
            <div className="about-me-container">
                <div className="about">
                    <div className="title"><h1>About me</h1></div>
                    <div className="title-line"></div>
                </div>

                <div className="about-content">
                    <div className="description">
                        {aboutContent.description.map((paragraph, index) => (
                            <h3 key = {index} classname = "description-paragraph">
                                {paragraph}
                            </h3>
                        ))}
                    </div>

                    <div className="about-image-container">
                        <img 
                            src = {require("../../assets/Images/Project Images/projectBG.webp")} 
                            alt="About" 
                            className="about-image"
                            loading = "lazy"
                            />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;