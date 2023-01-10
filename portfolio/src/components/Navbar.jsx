import React from "react"

function Navbar () {
  return (
    <nav className="nav">
      <a href="/" className="site-logo">MRad</a>
      <ul>
        <li className="active-nav">
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="contact">Contact</a>
        </li>
          
        
      </ul>
    </nav>
  )
}

export default Navbar