import React from "react";
import './Main.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub , faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

const About = ()=>{
    return(
        <div className="page">
            <div className="side-container left-side">
                <div className="linkedin-side-icon">
                    <a href = "" target="_blank" rel = "noopener noreferrer">
                        <FontAwesomeIcon icon = {faLinkedinIn}/>
                    </a>
                </div>
                <div className="github-side-icon">
                    <a href = "" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon = {faGithub} size = "2x"/>
                    </a>
                </div>
                <div className="side-line"></div>
            </div>

            <div className="side-container right-side">
                <p className="vertical-text">bereketgirma002@gmail.com</p>
                <div className="side-line"></div>
            </div>
            
            <div className="main">
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
                                <img src = "" alt="About-Image" className="about-image"/>
                        </div>
                    </div>
                </div>

                <div className="project-container">
                    <div className="project">
                        <div className="title"><h1>Project</h1></div>
                        <div className="title-line"></div>
                    </div>

                    <div className="projects-container">
                        <div className="project-card">
                            <img src = "" alt = "Project-one-Image" className="image one"/>
                            <div className="project-info right-info">
                                <h4>Featured project</h4>
                                <h1 className="project-title">project 1</h1>
                                <div className="project-description right-desc">
                                    <p>Information</p>
                                </div>
                                <h5>Coding softwares used</h5>
                                <div className="github-icon-container">
                                    <a href = "" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon = {faGithub} size = "2x"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="project-card">
                            <div className="project-info left-info">
                                <h4>Featured project</h4>
                                <h1 className="project-title">project 1</h1>
                                <div className="project-description left desc">
                                    <p>Information</p>
                                </div>
                                <h5>Coding softwares used</h5>
                                <div className="github-icon-container">
                                    <a href = "" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon = {faGithub} size = "2x"/>
                                    </a>
                                </div>
                            </div>
                            <img src = "" alt = "Project-one-Image" className="image one"/>
                        </div>

                        <div className="project-card">
                            <img src = "" alt = "Project-one-Image" className="image one"/>
                            <div className="project-info right-info">
                                <h4>Featured project</h4>
                                <h1 className="project-title">project 1</h1>
                                <div className="project-description right desc">
                                    <p>Information</p>
                                </div>
                                <h5>Coding softwares used</h5>
                                <div className="github-icon-container">
                                    <a href = "" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon = {faGithub} size = "2x"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="other-project-container">
                    <h1 className="other-title">Other projects</h1>
                    <div className="project-box">
                        <div className="box item-1">Hello</div>
                        <div className="box item-2">Hello</div>
                        <div className="box item-3">Hello</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
