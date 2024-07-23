import React, {useEffect, useState} from 'react';
import './Main.css'

//-------------------icon imports--------------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import {faGithub , faLinkedinIn} from '@fortawesome/free-brands-svg-icons'; 
//---------------------------------------------------------

const Main = ()=>{

    const [clicked,setClicked] = useState(false); //clicked state
    const [scrollDirection, setScrollDirection] = useState('up'); //scroll direction

    //project video demos
    const videoList = {
        'project1' : {
            videoSrc: require("./VideoDemo/Test2.mp4")
        },
        'project2' : {
            videoSrc: require("./VideoDemo/PortfolioDemo.mp4")
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
    

    //changes clicked state when navbar elements are clicked
    const handleMenuClick = () =>{
        setClicked(!clicked);
    }

    //handles scroll when navbar elements are clicked
    const handleOption = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if(targetElement){
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        })
        }
    };

    // const handleOnOpenVideo = () => setImgClicked(true);
    // const handleOnCloseVideo = () => setImgClicked(false); 


    //handles scroll effect
    //will show or hide navbar depending on direction of scroll 
    useEffect(()=>{
        let lastScrollTop = 0;

        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop){
                setScrollDirection('down'); //hides navbar when scrolling down
            }
            else{
                setScrollDirection('up'); //reveals navbar when scrolling up
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop //for mobile
        }

        window.addEventListener('scroll',handleScroll)

        return() => {
            window.removeEventListener('scroll',handleScroll)
        };},[scrollDirection])

    
    //--------------------Job Description-----------------------------------
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
    //-------------------------------------------------------------------------


    //Shows each job card upon selection
    function showJobCard(event){
        const buttons = document.querySelectorAll('.job')//grab job element
        //set other button aria-selected elements to false
        buttons.forEach(button => {
            button.setAttribute('aria-selected','false')
        })
        event.currentTarget.setAttribute('aria-selected','true')//set button attribute to true

        const jobCard = document.getElementById('job-card');//grav job-card element

        if(jobCard){
        const job = event.currentTarget.getAttribute('data-job');//grab data-job element
        const job_info = jobDetail[job]//find the correct information from jobDetails dictionary

            //if the job_info exists display those elements
            if(job_info){
                jobCard.querySelector('.job-title').textContent = job_info.title //add title
                jobCard.querySelector('.job-time').textContent = job_info.time //add the time worked

                const existingContainer = jobCard.querySelectorAll('.arrow-text-container'); //arrow icons
                existingContainer.forEach(container => container.remove());
                
                //for loop through the info
                //add each task with its own arrow element
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
            console.error('Job information not found for:',job);//Debugging
        }
        
        } else {
            console.error('Job information not found');//Debugging
        }
    }
    
    //when window is loaded it will trigger the first job to show its details
    // window.onload = function() {
    //     console.log("Reloaded")
    //     document.querySelector('.job[data-job="ITSolutions"]').click();
    // };
    useEffect(() => {
        document.querySelector('.job[data-job = "ITSolutions').click();
    })
    //Send email when clicked
    const handleClick = (event) => {
        event.preventDefault();
        window.location.href = 'mailto:bereketgirma002@gmail.com';
    };
    

    return(
        //-----------This is Main Page-------------
        <div className="page">

            {/* navbar element */}
            <nav className={`navbar ${scrollDirection === 'up' ? 'show':'hide'}`}>
                <h1 id = "heading1">Bereket Girma | Portfolio</h1>
                
                <ul id = "navOptions">
                <li><a href="#about" onClick={handleOption}>About</a></li>
                <li><a href="#projects" onClick={handleOption}>Projects</a></li>
                <li><a href ="#experience" onClick={handleOption}>Work</a></li>
                <li><a href="#contact" onClick={handleOption}>Contact</a></li>
                </ul>

                {/* mobile version of navbar */}
                <div id = "mobile"
                onClick={handleMenuClick}>
                    <i id = "bar"
                    className={clicked ? "fas fa-times" : "fas fa-bars"}>
                    </i>
                </div>
            </nav>

            {/*------------------------ side elements ----------------------*/}
            <div className="side-container left-side">
                <div className="linkedin-side-icon">
                    <a href = "https://www.linkedin.com/in/bereket-girma-154a56258/" target="_blank" rel = "noopener noreferrer">
                        <FontAwesomeIcon icon = {faLinkedinIn}/>
                    </a>
                </div>
                <div className="github-side-icon">
                    <a href = "https://github.com/BereketGirma" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon = {faGithub} size = "2x"/>
                    </a>
                </div>
                <div className="side-line"></div>
            </div>

            <div className="side-container right-side">
                <span className="vertical-text" onClick={handleClick}>bereketgirma002@gmail.com</span>
                <div className="side-line"></div>
            </div>
            
            {/* ------------------------------------------------------------ */}


            {/* Container for all elements that are under the navbar */}
            <div className="main">

                {/*----------------------- About section -----------------------*/}

                <div className="about-container">
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
                                <img src = "" alt="About" className="about-image"/>
                        </div>
                    </div>
                </div>
                {/* ------------------------------------------------------------- */}

                {/*--------------------- Project container----------------------- */}

                <div className="project-container" id = "projects">
                    <div className="project">
                        <div className="title"><h1>Project</h1></div>
                        <div className="title-line"></div>
                    </div>

                    <div className="projects-container">
                        <div className="project-card">
                            <div className='imgContainer' onClick={() => videoOpen("project1")}>
                                    <img 
                                        src = {require("./Images/Project Images/projectBG.webp")} 
                                        alt = "" 
                                        className="image one" 
                                    />
                                    <p className='videoDemo'>Click image to view demo!</p>
                            </div>

                            <div className="project-info right-info">
                                <h4>Featured project</h4>
                                <h1 className="project-title">LobBot</h1>
                                <div className="project-description right-desc">
                                    <p>
                                        LobBot is a vertisile Telegram bot developed using Telegram API. 
                                        It enhances your Telegram experience by offering features such as searching for information, managing messages,sharing user status and more. 
                                        Perfect for both practical tasks and enjoyment, LOB-BOT makes interacting on Telegram more efficient and enjoyable.
                                    </p>
                                </div>
                                <h5 className="softwares">TelegramAPI Python</h5>
                                <div className="github-icon-container">
                                    <a href = "https://github.com/BereketGirma/LobBot" target="_blank" rel="noopener noreferrer">
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
                                    <a href = "example.com" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon = {faGithub} size = "2x"/>
                                    </a>
                                </div>
                            </div>
                            
                            <div className='imgContainer' onClick={() => videoOpen("project2")} >
                                <img 
                                    src = {require("./Images/Project Images/projectBG.webp")} 
                                    alt = "" 
                                    className="image one" 
                                />
                                    <p className='videoDemo'>Click image to view demo!</p>
                            </div>

                        </div>

                        <div className="project-card">
                            
                            <div className='imgContainer'>
                                <img 
                                    src = {require("./Images/Project Images/projectBG.webp")} 
                                    alt = "" 
                                    className="image one" 
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

                    </div>
                </div>

                {/* ------------------------------------------------------------- */}

                {/*----------------- Other Project container -------------------- */}
                <div className="other-project-container">
                    <h1 className="other-title">Other projects</h1>
                    <div className="project-box">
                        <div className="box item-1">Hello</div>
                        <div className="box item-2">Hello</div>
                        <div className="box item-3">Hello</div>
                    </div>
                </div>

                {/* ------------------------------------------------------------ */}
                
                {/*--------------------- Experience container----------------------- */}
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

                {/* ------------------------------------------------------------- */}

                {/*--------------------- Certificate container----------------------- */}
                <div className="certificate-container">
                    <h1 className="certificate-title">Certificates</h1>
                    <div className="certificate-box">
                        <div className="certificate one">
                            <p>MavPASS PHYS-211</p>
                            <img 
                                src = {require("./Images/Certificate Images/MavPASS-PHYS211.jpg")} 
                                alt = "Not found" 
                            />
                        </div>
                        
                        <div className="certificate two">
                            <p>MavPASS CIS-121</p>
                            <img 
                                src = {require("./Images/Certificate Images/MavPASS-CIS121.jpg")} 
                                alt = "Not Found"
                            />
                        </div>
                               
                        <div className="certificate three">
                            <p>CodePath AND-101</p>
                            <img 
                                src = {require("./Images/Certificate Images/CodePath-AND101-Certificate.jpg")} 
                                alt = "Not Found"
                            />
                        </div>
                    </div>
                </div>

                {/* ------------------------------------------------------------- */}

                {/*--------------------- Contact container----------------------- */}
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

                {/* ------------------------------------------------------------- */}

            </div>
        </div>
    )
}

export default Main;
