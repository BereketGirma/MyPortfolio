import {React,useEffect, useState} from "react"
import './Experience.css'
import { experienceContent } from "../../data/experienceContent"
const Experience = () => {
     //--------------------Job Description-----------------------------------
    
    //-------------------------------------------------------------------------

    const [selectedJob, setSelectedJob] = useState("job1");
    
    //when window is loaded it will trigger the first job to show its details
    useEffect(() => {
        setSelectedJob("job1");
    },[]);

    const handleJobClick = (job) => {
        setSelectedJob(job);
    }

    const {title, time, tasks} = experienceContent[selectedJob];

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
                    {Object.keys(experienceContent).map((job, index) => (
                        <button
                            key={index}
                            className={`job ${selectedJob === job ? "active" : ""}`}
                            role="tab"
                            aria-selected={selectedJob === job}
                            data-job={job}
                            onClick={() => handleJobClick(job)}
                        >
                            {experienceContent[job].button}
                        </button>
                    ))}
                </div>

                <div className="job-line"></div>

                <div className="job-card" id = "job-card">
                    <h3 className="job-title">{title}</h3>
                    <p className="job-time">{time}</p>
                    {tasks.map((task, index) => (
                        <div key={index} className="arrow-text-container">
                            <div className="arrow"></div>
                            <h4 className="job-task">{task}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience;