import React from "react";
import './About.css';
import { aboutMeText } from '../../data/aboutContent';

const About = () => {
    return(
        <div className="about-container" id = "about">
            <div className="iconIntro-container">
                <div className="circle-container">
                    <div className="circle"></div>
                    <div className="line"></div>
                </div>

                <div className="intro-container">
                    <p className="intro">Hi, I'm <span className="name">Bereket.</span>
                    <p className="info">I'm currently rising Junior at Minnesota State University, Mankato majoring in Computer Science.</p>
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
                        <p></p>
                    </div>

                    <div className="about-image-container">
                        <img 
                            src = {require("../../assets/Images/Project Images/projectBG.webp")} 
                            alt="About" 
                            className="about-image"
                            />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;