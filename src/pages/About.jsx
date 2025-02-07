import React from 'react';
import { Link,NavLink, Outlet, useLocation } from 'react-router-dom';
import Nyumbani from './Nyumbani';

export default function About() {
  const location = useLocation();
  const isAboutRoot = location.pathname === '/about';

  return (
    <div className="about-page bg-gray-100 min-h-screen">
      {/* Navigation Bar */}
      <nav className="about-nav bg-black text-white py-4">
        <ul className="flex justify-center gap-6">
          <li>
          </li>
          <li>
            <NavLink
              to="experience"
              className="hover:text-blue-200 transition"
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              to="skills"
              className="hover:text-blue-200 transition"
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="education"
              className="hover:text-blue-200 transition"
            >
              Education
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Content Section */}
      <div className="p-6">
        {isAboutRoot && (
          <div className="bg-white p-6 shadow rounded-lg">
            <Nyumbani />
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
}
