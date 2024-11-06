import React from 'react'
import { Assests } from '../assets/Assests'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-heading">
          <div>
            <img src={Assests.menu} alt="" />
            <img src={Assests.close} alt="" />
          </div>
            <Link to= "/"><h1><span>Wilfred Tinega</span></h1></Link>
            <img src={Assests.light_mode} alt="" />
        </div>
        <ul>
            <li> <Link to="/about">About</Link> </li>
            <li> <Link to="/experience">Experience</Link> </li>
            <li> <Link to="/education">Education</Link> </li>
            <li> <Link to="/skills">Skills</Link> </li>
            <li> <Link to="/projects">Projects</Link> </li>
            <li> <Link to="/blog">Blogs</Link> </li>
            <li> <Link to="/contact-me">Contact Me</Link> </li>
        </ul>
    </div>
  )
}
