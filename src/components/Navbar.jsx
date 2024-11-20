import React, { useEffect, useRef, useState } from 'react'
import { Assests } from '../assets/Assests'
import { Link, useNavigate } from 'react-router-dom';
 
export const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const navbarRef = useRef(null);
  const navbarListRef = useRef(null);
  const navigate = useNavigate();

  const toggleNav = () => {
    setVisible((prev) => !prev);
  };

  // Effect to disable scrolling when the navbar is active
  // Add event listener for clicks outside the navbar
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (navbarListRef.current && !navbarListRef.current.contains(e.target) &&
        navbarRef.current && !navbarRef.current.contains(e.target)) {
      setVisible(false); // Close the navbar
    }
  };

  // Handle home link click (navigate to home)
  const handleHomeClick = () => {
    navigate('/'); // Navigates to the home route
    setVisible(false); // Close the navbar when the home link is clicked
  };
  
  return (
    <div className="navbar" ref={navbarRef}>
        <div className="navbar-heading">
            <Link to= "/"><h1  onClick={handleHomeClick}><span>Wilfred Tinega</span></h1></Link>
            <img src={Assests.light_mode} alt="" />
            <i className='bi-list' onClick={toggleNav}></i>
        </div>
        <ul  ref={navbarListRef}
        className={`navbar-list ${visible ? 'active' : ''}`}
        onClick={() => setVisible(false)}>
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
