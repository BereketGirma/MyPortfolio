import {React, useState} from "react";
import './Project.css'
import { projectContent } from "../../data/projectsContent";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import {faGithub} from '@fortawesome/free-brands-svg-icons'; 

const Project = () => {

    //project video demos
    const videoList = {
        'project1' : {
            videoSrc: require("../../assets/VideoDemo/PortfolioDemo.mp4")
        },
        'project2' : {
            videoSrc: require("../../assets/VideoDemo/PortfolioDemo.mp4")
        }
    }

    const[isVideoPlaying,setVideoPlaying] = useState(false);
    const [currentVideoSrc, setCurrentVideoSrc] = useState("");

    //handles when video is playing
    const videoOpen = (projectNums) => {
        if(!isVideoPlaying){
            const projectVideoSrc = videoList[projectNums].videoSrc;
            setCurrentVideoSrc(projectVideoSrc);
            setVideoPlaying(true);
        }
    };

    //handles when video is closed
    const videoClose = () => {
        if(isVideoPlaying){
            setVideoPlaying(false);
            setCurrentVideoSrc('');
        }
    };

    return(
        
            <div className="project-container" id = "projects">
                <div className="project">
                    <div className="title"><h1>Project</h1></div>
                    <div className="title-line"></div>
                </div>

                <div className="projects-container">
                    <div className="project-card">
                        <div className='imgContainer' onClick={() => videoOpen("project1")}>
                                <img 
                                    src = {require("../../assets/Images/Project Images/LobBot.png")} 
                                    alt = "project one" 
                                    className="image one"
                                    loading="lazy" 
                                />
                                <p className='videoDemo'>Click image to view demo!</p>
                        </div>

                        <div className="project-info right-info">
                            <h4>Featured project</h4>
                            <h1 className="project-title">{projectContent.project1.title}</h1>
                            <div className="project-description right-desc" id= "project-description">
                                <h4>{projectContent.project1.description}</h4>
                            </div>
                            <h5 className="softwares">{projectContent.project1.softwares}</h5>
                            <div className="github-icon-container">
                                <a href = {projectContent.project1.github}  target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon = {faGithub} size = "2x"/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="project-card">
                        <div className="project-info left-info">
                            <h4>Featured project</h4>
                            <h1 className="project-title">{projectContent.project2.title}</h1>
                            <div className="project-description left desc">
                                <h4>{projectContent.project2.description}</h4>
                            </div>
                            <h5 className="softwares">{projectContent.project2.softwares}</h5>
                            <div className="github-icon-container">
                                <a href = "example.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon = {faGithub} size = "2x"/>
                                </a>
                            </div>
                        </div>
                        
                        <div className='imgContainer' onClick={() => videoOpen("project2")} >
                            <img 
                                src = {require("../../assets/Images/Project Images/projectBG.webp")} 
                                alt = "" 
                                className="image one" 
                                loading = "lazy"
                            />
                                <p className='videoDemo'>Click image to view demo!</p>
                        </div>

                    </div>

                    <div className="project-card">
                        <div className='imgContainer'>
                            <img 
                                src = {require("../../assets/Images/Project Images/projectBG.webp")} 
                                alt = "project 1" 
                                className="image one" 
                                loading = "lazy"
                            />
                        </div>

                        <div className="project-info right-info">
                            <h4>Featured project</h4>
                            <h1 className="project-title">project 1</h1>
                            <div className="project-description right desc">
                                <p>Information</p>
                            </div>
                            <h5>Coding softwares used</h5>
                            <div className="github-icon-container">
                                <a href = "example.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon = {faGithub} size = "2x"/>
                                </a>
                            </div>
                        </div>

                    </div>

                    {isVideoPlaying &&(
                        <div className='video-overlay'>
                            <div className='video-content' onClick={(e) => e.stopPropagation()}>
                                <span className='close-button' onClick={videoClose}>&times;</span>
                                <video width='100%' autoPlay controls
                                    src = {currentVideoSrc}
                                    >
                                </video>
                            </div>
                        </div>
                    )} 

                    {/* <div className="other-project-container">
                        <h1 className="other-title">Other projects</h1>
                        <div className="other-project-box">
                            <div className="box item-1">Hello</div>
                            <div className="box item-2">Hello</div>
                            <div className="box item-3">Hello</div>
                        </div>
                    </div> */}
                </div>
            </div>
        
    )
}
export default Project;