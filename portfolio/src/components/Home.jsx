import React from "react"
import '../css/home.css'
import { Link } from 'react-router-dom'


function Home () {
  return (
    <>
    
      
      <div className="page-wrapper">
        <div className="dev-title-container">

          <div  className="name-title">
            <div className="my-name">MATT RADICH<br></br></div>
            <div className="sd-title"><u>SOFTWARE DEVELOPER</u></div>
            <Link to="/contact"><button id="letsTalkButton"><i>LETS TALK</i></button></Link>
            
          </div>

          <div className="social-links">
            <a href="https://github.com/matt-radich" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
            
            <a href="https://www.linkedin.com/in/matt-radich-4a6b0323a/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a>
          </div>

        </div>
      </div>
        
        
      
    </>
    
  )
}

export default Home