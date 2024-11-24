import React from 'react'
import { Assests } from '../assets/Assests'
import { Link } from 'react-router-dom';
 
export const Navbar = () => {
 
  return (
    <div className="navbar">
        <div className="navbar-heading">
          <Link to= "/"><span>Wilfred Tinega</span></Link>
          <div className='dark-mode'>
            <img src={Assests.light_mode} alt=""/>
          </div>
          <Link to="/about">
          <div className='bi-person'></div></Link>
        </div>
        <div className='dark-mode1'>
            <img src={Assests.light_mode} alt=""/>
        </div>
        <ul className="navbar-list">
            <li> <Link to="/about">About</Link></li>
            <li> <Link to="/projects">Projects</Link> </li>
            <li> <Link to="/blog">Blogs</Link> </li>
            <li> <Link to="/contact-me">Contact Me</Link> </li>
        </ul>
    </div>
  )
}
