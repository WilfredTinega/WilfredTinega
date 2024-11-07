import React from 'react'
import { Assests } from '../assets/Assests'
import { Link } from 'react-router-dom';
import "../frameworks/Frameworks"
 
export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-heading">
            <i className='bi-list'></i>
            <i className='bi-x'></i>
            <Link to= "/"><h1><span>Wilfred Tinega</span></h1></Link>
            <img src={Assests.light_mode} alt="" />
        </div>
        <ul className='navbar-list'>
            <li> <Link to="/about">About</Link> </li>
            <li> <Link to="/experience">Experience</Link> </li>
            <li> <Link to="/education">Education</Link> </li>
            <li> <Link to="/skills">Skills</Link> </li>
            <li> <Link to="/projects">Projects</Link> </li>
            <li> <Link to="/blog">Blogs</Link> </li>
            <li> <Link to="/contact-me">Contact Me</Link> </li>
            <li><Link to="#getstarted">Get started</Link></li>
        </ul>
    </div>
  )
}
