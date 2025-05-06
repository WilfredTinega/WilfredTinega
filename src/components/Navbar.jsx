import React, { useEffect, useState } from 'react';
import {NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(()=>{document.body.classList.toggle("overflow-hidden",visible)},[visible]),
  useEffect(()=>{document.body.classList.toggle("static",visible)},[visible])

  return (
    <div className="flex justify-between md:justify-around items-center py-4 px-8 bg-gray-950 text-green-500 text-lg">
      <div className=''>
        <NavLink className="text-2xl font-bold border-0 outline-0 text-blue-500 hover:text-green-500  " to="/"><span className='bg-gradient-to-l from-green-500 to-blue-500 bg-clip-text text-transparent'>MAMBOLEO</span></NavLink>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 text-xl capitalize">
        <NavLink to='/about'>about</NavLink>
        <NavLink to='/projects'>projects</NavLink>
        <NavLink to='/contacts'>contacts</NavLink>
        <NavLink to='/more'>more</NavLink>
      </div>

      {/* Mobile Menu Toggle */}
      <span onClick={() => setVisible(true)} className="bi-list text-3xl md:hidden cursor-pointer"></span>

      {/* Sidebar for Mobile */}
      <div className={`fixed top-0 right-0 bottom-0 w-full z-1 bg-gray-900 text-gray-50 transition-transform duration-300 ease-in-out transform ${visible ? 'translate-x-0' : 'translate-x-full'}`}>

        {/* Close Button */}
        <div onClick={() => setVisible(false)} className="flex items-center gap-2 text-lg px-4 py-2 cursor-pointer">
          <span className="material-symbols-outlined text-[#0ea5e9]">arrow_back_ios</span>
          <p>Back</p>
        </div>
        <hr className='text-green-500'/>

        {/* Mobile Menu Links */}
        <div className="flex flex-col gap-2 p-5 text-xl">
          <NavLink onClick={() => setVisible(false)} className='text-green-500'  to='/about'>About</NavLink>
          <NavLink onClick={() => setVisible(false)} className='text-green-500'  to='/projects'>Projects</NavLink>
          <NavLink onClick={() => setVisible(false)} className='text-green-500'  to='/contacts'>Contacts</NavLink>
          <NavLink onClick={() => setVisible(false)} className='text-green-500'  to='/more'>More</NavLink>
        </div>

        <div className='fixed bottom-0 right-0 left-0 flex justify-center'>
                <ul className="flex justify-center md:justify-start gap-4 mt-4">
                    <li>
                        <a className="text-xl  text-green-500 hover:text-blue-500  transition-colors" href="https://www.linkedin.com/in/wilfredtinega" title='LinkedIn Wilfred Tinega'>
                            <i className="bi-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a className="text-xl  text-green-500 hover:text-blue-500  transition-colors" href="https://github.com/wilfredtinega" title='GitHub Wilfred Tinega'>
                            <i className="bi-github"></i>
                        </a>
                    </li>
                    <li>
                        <a className="text-xl  text-green-500 hover:text-blue-500  transition-colors" href="https://x.com/wmtinega" title='X Wilfred Tinega'>
                            <i className="bi-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a className="text-xl text-green-500 hover:text-blue-500 transition-colors" href="mailto:tinegamamboleo@gmail.com" title='Send Me eMail'>
                            <i className="bi-envelope"></i>
                        </a>
                    </li>
                    <li>
                        <a className="text-xl text-green-500 hover:text-blue-500 transition-colors" href="tel:+254740781289" title='Call Me'>
                            <i className="bi-telephone"></i>
                        </a>
                    </li>
                </ul>
        </div>
      </div>
    </div>
  );
};
