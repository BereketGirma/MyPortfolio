import React, {useEffect, useState} from 'react';
import './Main.css'

//-------------------icon imports--------------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import {faGithub , faLinkedinIn} from '@fortawesome/free-brands-svg-icons'; 
//---------------------------------------------------------

const Main = ()=>{
    
    //Send email when clicked
    const handleClick = (event) => {
        event.preventDefault();
        window.location.href = 'mailto:bereketgirma002@gmail.com';
    };
    

    return(
        <div className="main">
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
        </div>
    )
}

export default Main;
