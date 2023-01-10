import React from "react"
import '../css/navbar.css'
import { Link } from 'react-router-dom'

function Navbar () {
  return (
    <nav className="nav">
      <Link to="/" className="site-logo">MRad</Link>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar