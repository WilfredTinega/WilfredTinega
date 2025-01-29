import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
 
export const Navbar = () => {
  const [visible, setVisible] = useState(false)
 
  return (
    <div className="flex items-center justify-between sm:px-5 md:px-10 lg:px-15 bg-slate-200">
        <Link to= "/">Wilfred Tinega</Link>
        <ul className="flex items-center justify-between gap-2">
            <NavLink to="/about"  className="flex flex-col items-center gap-1">About</NavLink>
            <NavLink to="/projects"  className="flex flex-col items-center gap-1">Projects</NavLink>
            <NavLink to="/blog"  className="flex flex-col items-center gap-1">Blogs</NavLink>
            <NavLink to="/contact-me"  className="flex flex-col items-center gap-1">Contact Me</NavLink>
        </ul>
        
        <div className='bi-list sm:hidden'></div>
        
    </div>
  )
}
