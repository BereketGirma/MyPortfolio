import React,{useState} from "react";
import './About.css'

const About = ()=>{
    return(
        <>
            <div className="about-container">
                <div className="circle-container">
                    <div className="circle"></div>
                    <div className="line"></div>
                </div>

                <div className="intro-container">
                    <p className="intro">Hi, I'm <span className="name">Bereket.</span>
                    <p className="info">I'm currently rising Junior at Minnesota State University, Mankato <br/>majoring in Computer Science.</p>
                    </p>
                </div>
            </div>

            {/* <div className="about-me-container">
                    <h1 className="title">About me</h1>
            </div> */}
        </>
    )
}

export default About;
