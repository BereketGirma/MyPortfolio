import {React,useEffect, useState} from "react"
import './Experience.css'
const Experience = () => {
     //--------------------Job Description-----------------------------------
     const jobDetail = {
        'ITSolutions' : {
            title: 'IT Lead Consultant',
            time: 'August 2023 - Present',
            tasks:[
                'Provided personalized IT solutions to students, faculty, and staff, addressing hardware and software issues.',
                'Collaborated with cross-functional teams to troubleshoot and resolve technical problems promptly.'
                ]
            },
        'MavPASS-CIS' : {
            title: 'MavPass Leader for CIS 121(Introduction to programming)',
            time: 'January 2024 - May 2024',
            tasks:[
                'Provided personalized IT solutions to students, faculty, and staff, addressing hardware and software issues.'
                ]
            },
        'MavPASS-PHY' : {
            title: 'IT Student Consultant',
            time: 'August 2023 - December 2024',
            tasks:[
                'Provided personalized IT solutions to students, faculty, and staff, addressing hardware and software issues.',
                'Collaborated with cross-functional teams to troubleshoot and resolve technical problems promptly.',
                'Collaborated with cross-functional teams to troubleshoot and resolve technical problems promptly.'
                ]
            }
    }
    //-------------------------------------------------------------------------

    const [selectedJob, setSelectedJob] = useState("ITSolutions");
    
    //when window is loaded it will trigger the first job to show its details
    useEffect(() => {
        setSelectedJob("ITSolutions");
    },[]);

    const handleJobClick = (job) => {
        setSelectedJob(job);
    }

    const {title, time, tasks} = jobDetail[selectedJob];

    return(
        <div className="experience-container" id = "experience">
            <div className="experience">
                <div className="title">
                    <h1>Experience</h1>
                </div>
                <div className="title-line"></div>
            </div>

            <div className="jobs-container">
                <div className="button-tile" role="tablist">
                    {Object.keys(jobDetail).map((job) => {
                        <button
                            key={job}
                            className={`job ${selectedJob === job ? "active" : ""}`}
                            role="tab"
                            aria-selected={selectedJob === job}
                            data-job={job}
                            onClick={() => handleJobClick(job)}
                        >
                            {jobDetail[job].title}
                        </button>
                    })}
                </div>

                <div className="job-line"></div>

                <div className="job-card" id = "job-card">
                    <h3 className="job-title">{title}</h3>
                    <p className="job-time">{time}</p>
                    {tasks.map((task, index) => (
                        <div
                            key={index}
                            className="arrow-text-container"
                        >
                            <div className="arrow"></div>
                            <p className="job-task">{task}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience;