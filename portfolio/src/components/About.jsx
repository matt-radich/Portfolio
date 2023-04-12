import React from "react";
import '../css/about.css'
import { Link } from 'react-router-dom'

function About () {
  return (
    <>
    <h1 className="nameTitle"><u>HI, I'M MATT</u></h1>

    <div className="aboutContainer">
      <div className="aboutText">
        <p>I'm a <b>Software Developer</b> based on the Gold Coast.<br/><br/>
        Driven by a passion for learning and problem solving to create
        meaningful solutions. . .
        </p>
        
      </div>
     

      <div className="skills">
        <div className="skill">HTML</div>
        <div className="skill">CSS</div>
        <div className="skill">Javascript</div>
        <div className="skill">React</div>
        <div className="skill">MySql</div>
        <div className="skill">Github</div>
        <div className="skill">Figma</div>
        <div className="skill">Node</div>
      </div>
    </div> 
     
    <div className="links">
    <Link to="/projects"><button id="aboutPageButtons"><i>MY PROJECTS</i></button></Link>
    <Link to="/contact"><button id="aboutPageButtons"><i>LETS TALK</i></button></Link>
    </div>
    
    
    </>
  )
}

export default About