import React from "react"
import '../css/navbar.css'
import { Link } from 'react-router-dom'

function Navbar () {
  return (
    <nav className="nav">
      <Link to="/" className="site-logo"></Link>
      <ul>
        <li>
          <Link to="/"><u>HOME</u></Link>
        </li>
        <li>
          <Link to="/about"><u>ABOUT</u></Link>
        </li>
        <li>
          <Link to="/projects"><u>PROJECTS</u></Link>
        </li>
        <li>
          <Link to="/contact"><u>CONTACT</u></Link>
        </li>
        
      </ul>
    </nav>
  )
}

export default Navbar