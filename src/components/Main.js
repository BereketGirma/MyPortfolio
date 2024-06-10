import React from "react";
import './Main.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub , faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

const jobDetail = {
    'ITSolutions' : {
        title: 'IT Student Consultant',
        time: 'August 2023 - Present',
        tasks:[
            'Provided personalized IT solutions to students, faculty, and staff, addressing hardware and software issues.',
            'Collaborated with cross-functional teams to troubleshoot and resolve technical problems promptly.'
            ]
        },
    'MavPASS-CIS' : {
        title: 'IT Student Consultant',
        time: 'August 2023 - Present',
        tasks:[
            'Provided personalized IT solutions to students, faculty, and staff, addressing hardware and software issues.'
            ]
        },
    'MavPASS-PHY' : {
        title: 'IT Student Consultant',
        time: 'August 2023 - Present',
        tasks:[
            'Provided personalized IT solutions to students, faculty, and staff, addressing hardware and software issues.',
            'Collaborated with cross-functional teams to troubleshoot and resolve technical problems promptly.',
            'Collaborated with cross-functional teams to troubleshoot and resolve technical problems promptly.'
            ]
        }
}

function showJobCard(event){
    const buttons = document.querySelectorAll('.job')
    buttons.forEach(button => {
        button.setAttribute('aria-selected','false')
    })
    event.currentTarget.setAttribute('aria-selected','true')

    const jobCard = document.getElementById('job-card');
    if(jobCard){
    const job = event.currentTarget.getAttribute('data-job');
    const job_info = jobDetail[job]

        if(job_info){
            jobCard.querySelector('.job-title').textContent = job_info.title
            jobCard.querySelector('.job-time').textContent = job_info.time

            const existingContainer = jobCard.querySelectorAll('.arrow-text-container');
            existingContainer.forEach(container => container.remove());

            job_info.tasks.forEach(task => {
                const container = document.createElement('div');
                container.className = 'arrow-text-container';

                const arrow = document.createElement('div');
                arrow.className = 'arrow'

                const taskElement = document.createElement('p');
                taskElement.className = 'job-task'
                taskElement.textContent = task;

                container.appendChild(arrow);
                container.appendChild(taskElement);
                jobCard.appendChild(container);
            });
       } else {
        console.error('Job information not found for:',job);
       }
    
    } else {
        console.error('Job information not found');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    window.onload = function() {
        document.querySelector('.job[data-job="ITSolutions"]').click();
    };
});
    //Send email when clicked
    const handleClick = (event) => {
        event.preventDefault();
        window.location.href = 'mailto:bereketgirma002@gmail.com';
    };


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
                <span className="vertical-text" onClick={handleClick}>bereketgirma002@gmail.com</span>
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
                <div className="about-me-container" id = "about">
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

                <div className="project-container" id = "projects">
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

                <div className="experience-container" id = "experience">
                    <div className="experience">
                        <div className="title"><h1>Experience</h1></div>
                        <div className="title-line"></div>
                    </div>
                    <div className="jobs-container">
                        <div className="button-tile" role="tablist">
                            <button className="job" role="tab" aria-selected = "true" data-job = "ITSolutions" onClick={(e) => showJobCard(e)}>IT Solutions</button>
                            <button className="job" role="tab" aria-selected = "false" data-job = "MavPASS-CIS" onClick={(e) => showJobCard(e)}>MavPASS  CIS</button>
                            <button className="job" role="tab" aria-selected = "false" data-job = "MavPASS-PHY" onClick={(e) => showJobCard(e)}>MavPASS  PHY</button>
                        </div>
                        <div className="job-card" id = "job-card">
                                <h3 className="job-title"></h3>
                                <p className="job-time"></p>
                        </div>
                    </div>
                </div>

                <div className="certificate-container">
                    <h1 className="certificate-title">Certificates</h1>
                    <div className="certificate-box">
                        <div className="certificate one">
                            <p>This is certificate one</p>
                            <img src = "" alt = "Certificate-one"/>
                        </div>
                        <div className="certificate two">
                            <img src = "" alt = "Certificate-one"/>
                        </div>
                        <div className="certificate three">
                            <img src = "" alt = "Certificate-one"/>
                        </div>
                    </div>
                </div>

                <div className="contact-container" id ="contact">
                    <div className="contact">
                        <div className="title"><h1>Contact Me</h1></div>
                        <div className="title-line"></div>
                    </div>

                    <div className="contact-content">
                        <div className="contact-description">
                            <p>I am actively seeking new internship opportunities in software engineering. With a strong background in software development, problem-solving, and team collaboration, I am eager to contribute my skills to a dynamic team. Feel free to reach out to me at bereketgirma002@gmail.com </p>
                        </div>

                        <button className="contact-button" onClick={handleClick}>Say Hello!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
