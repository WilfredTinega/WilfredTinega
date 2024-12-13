import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Frontend from '../projects/Frontend';

export default function Projects() {

  const location = useLocation();
  const islocation = location.pathname === '/projects';

  return (
    <div className='projects-page'>
      <div className="navbar-project">
        <ul>
          <li id='frontE'><Link to="front-end">Front-End</Link></li>
          <li id='frontR'><Link to="react-projects">React</Link></li>
          <li id='frontJ'><Link to="vanillajs">Javascript</Link></li>
          <li id='frontH'><Link to="htmlcss">HTML & CSS</Link></li>
        </ul>
      </div>
      <div className="projects-container">

      {islocation && <Frontend />}
      <Outlet/>
      </div>
    </div>
  )};
