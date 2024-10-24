import {React,useEffect} from "react"
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
    useEffect(() => {
        document.querySelector('.job[data-job = "ITSolutions').click();
    })

    return(
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
    )
}

export default Experience;