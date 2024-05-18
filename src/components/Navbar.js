import React, { Component, useState } from 'react';
import './Navbar.css';

class NavBar extends Component{
  state = {clicked:false};
  
  handleClick = () =>{
    this.setState({clicked:!this.state.clicked})
  }
  
  handleOption = () => {
    this.setState({clicked:false})
  }
  render (){
    return (
      <nav className="navbar">
        <h1 id = "heading1">Bereket Girma | Portifolio</h1>
        
        <ul id = "navbar"
        onClick = {this.barOpen} 
            className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
          <li><a href="#home" onClick={this.handleOption}>Home</a></li>
          <li><a href="#about" onClick={this.handleOption}>About</a></li>
          <li><a href="#contact" onClick={this.handleOption}>Contact</a></li>
        </ul>

        <div id = "mobile"
        onClick={this.handleClick}>
          <i id = "bar"
          className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}>
          </i>
        </div>
      </nav>
    );
  }
}

export default NavBar;


