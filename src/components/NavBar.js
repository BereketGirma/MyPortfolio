import React, { useState} from 'react';
import './NavBar.css'

const NavBar = () => {
    const [clicked,setClicked] = useState(false); //clicked state

    //changes clicked state when navbar elements are clicked
    const handleMenuClick = () =>{
        setClicked(!clicked);
    }

    //handles scroll when navbar elements are clicked
    const handleOption = (event) => {
        setClicked(false);
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if(targetElement){
            const offSet = 70;
            window.scrollTo({
                top: targetElement.offsetTop - offSet,
                behavior: 'smooth'
            })
        }
    };

    return (
        <div>
            <nav className={`navbar`}>
                <h1 id = "heading1">Bereket Girma | Portfolio</h1>
                
                <ul id = 'navOptions' className={`navOptions ${clicked? 'active' : ''}`}>
                <li><a href="#about" onClick={handleOption}>About</a></li>
                <li><a href="#projects" onClick={handleOption}>Projects</a></li>
                <li><a href ="#experience" onClick={handleOption}>Work</a></li>
                <li><a href="#contact" onClick={handleOption}>Contact</a></li>
                </ul>

                {/* mobile version of navbar */}
                <div id = "mobile" onClick={handleMenuClick}>
                    <i className={`fas ${clicked ? "fa-times" : "fa-bars"} bar`}></i>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;