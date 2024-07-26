import React from "react";
import './About.css';

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
                        <p>Et aute ex ipsum nulla nisi ipsum fugiat ipsum amet est. Velit veniam proident esse aliquip nostrud velit aliquip adipisicing. Eu deserunt sit deserunt do officia labore commodo. Sit ullamco eu sint et excepteur veniam sunt.</p>
                        <p>Et aute ex ipsum nulla nisi ipsum fugiat ipsum amet est. Velit veniam proident esse aliquip nostrud velit aliquip adipisicing. Eu deserunt sit deserunt do officia labore commodo. Sit ullamco eu sint et excepteur veniam sunt.</p>
                        <p>Et aute ex ipsum nulla nisi ipsum fugiat ipsum amet est. Velit veniam proident esse aliquip nostrud velit aliquip adipisicing. Eu deserunt sit deserunt do officia labore commodo. Sit ullamco eu sint et excepteur veniam sunt.</p>
                    </div>

                    <div className="about-image-container">
                        <img 
                            src = {require("./Images/Project Images/projectBG.webp")} 
                            alt="About" 
                            className="about-image"
                            />
                    </div>
                </div>

                {/* mobile version of image */}
                <div id = "about-content">
                    <div id="description">
                        <img 
                            src = {require("./Images/Project Images/projectBG.webp")} 
                            alt="About" 
                            id="about-image"
                            />
                        <p>Et aute ex ipsum nulla nisi ipsum fugiat ipsum amet est. Velit veniam proident esse aliquip nostrud velit aliquip adipisicing. Eu deserunt sit deserunt do officia labore commodo. Sit ullamco eu sint et excepteur veniam sunt.</p>
                        
                        

                        <p>Et aute ex ipsum nulla nisi ipsum fugiat ipsum amet est. Velit veniam proident esse aliquip nostrud velit aliquip adipisicing. Eu deserunt sit deserunt do officia labore commodo. Sit ullamco eu sint et excepteur veniam sunt.</p>
                        <p>Et aute ex ipsum nulla nisi ipsum fugiat ipsum amet est. Velit veniam proident esse aliquip nostrud velit aliquip adipisicing. Eu deserunt sit deserunt do officia labore commodo. Sit ullamco eu sint et excepteur veniam sunt.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About;