import React, { useState } from 'react';
import './Navbar.css';

const NavBar = () =>{
  const [clicked,setClicked] = useState(false);
  
  const handleClick = () =>{
    setClicked(!clicked);
  }
  
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

    return (
      <nav className="navbar">
        <h1 id = "heading1">Bereket Girma | Portifolio</h1>
        
        <ul id = "navbar">
          <li><a href="#about" onClick={handleOption}>About</a></li>
          <li><a href="#projects" onClick={handleOption}>Projects</a></li>
          <li><a href ="#experience" onClick={handleOption}>Work</a></li>
          <li><a href="#contact" onClick={handleOption}>Contact</a></li>
        </ul>

        <div id = "mobile"
        onClick={handleClick}>
          <i id = "bar"
          className={clicked ? "fas fa-times" : "fas fa-bars"}>
          </i>
        </div>
      </nav>
    );
  }


export default NavBar;


