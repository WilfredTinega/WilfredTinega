import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Nyumbani from './Nyumbani';

export default function About() {
  const location = useLocation();
  const isAboutRoot = location.pathname === '/about';

  return (
    <div className='about-page'>
      <ul className="about-nav">
        <li>
          <Link to="/about">
            <span className="material-symbols-outlined">
              home
            </span>
          </Link>
        </li>
        <li><Link to="experience">Experience</Link></li>
        <li><Link to="skills">Skills</Link></li>
        <li><Link to="education">Education</Link></li>
      </ul>

      {isAboutRoot && <Nyumbani />}
      <Outlet />
    </div>
  );
}
