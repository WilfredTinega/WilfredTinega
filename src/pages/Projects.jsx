import React from 'react';
import { Link,NavLink, Outlet, useLocation } from 'react-router-dom';
import Frontend from '../projects/Frontend';

export default function Projects() {
  const location = useLocation();
  const isLocation = location.pathname === '/projects';

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar for Project Categories */}
      <div className="border-b border-gray-800">
        <ul className="flex justify-center gap-6 py-4">
          <li>
            <NavLink
              to="front-end"
              className="text-lg font-medium hover:text-[#0ea5e9] transition-colors"
            >
              Front-End
            </NavLink>
          </li>
          <li>
            <NavLink
              to="react-projects"
              className="text-lg font-medium hover:text-[#0ea5e9] transition-colors"
            >
              React
            </NavLink>
          </li>
          <li>
            <NavLink
              to="vanillajs"
              className="text-lg font-medium hover:text-[#0ea5e9] transition-colors"
            >
              Javascript
            </NavLink>
          </li>
          <li>

          </li>
        </ul>
      </div>

      {/* Projects Container */}
      <div className="px-6 py-10 max-w-6xl mx-auto">
        {isLocation && (
          <div className="mb-8">
            <Frontend />
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
}
