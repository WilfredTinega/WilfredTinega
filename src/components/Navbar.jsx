import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex justify-between items-center py-4 px-8 bg-black text-white text-lg shadow-md">
      {/* Logo/Brand */}
      <Link className="text-2xl font-bold text-[#0ea5e9]" to="/">
        Wilfred Tinega
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        {['About', 'Projects', 'Blog', 'Contacts'].map((item) => (
          <NavLink
            key={item}
            to={`/${item.toLowerCase().replace(' ', '-')}`}
            className={({ isActive }) =>
              `relative pb-1 hover:text-[#0ea5e9] ${
                isActive ? 'text-[#0ea5e9]' : ''
              }`
            }
          >
            <p>{item}</p>
            <span
              className="absolute left-0 right-0 bottom-0 mx-auto w-1/2 h-0.5 bg-[#0ea5e9] transform scale-x-0 transition-transform duration-300 ease-in-out hover:scale-x-100"
            ></span>
          </NavLink>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <span
        onClick={() => setVisible(true)}
        className="bi-list text-3xl md:hidden cursor-pointer"
      ></span>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-black text-white shadow-lg transition-transform duration-300 ease-in-out transform ${
          visible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div
          onClick={() => setVisible(false)}
          className="flex items-center gap-2 text-lg px-4 py-2 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[#0ea5e9]">
            arrow_back_ios
          </span>
          <p>Back</p>
        </div>

        {/* Mobile Menu Links */}
        <div className="flex flex-col">
          {['About', 'Projects', 'Education', 'Blog', 'Contacts'].map(
            (item) => (
              <NavLink
                key={item}
                onClick={() => setVisible(false)}
                to={`/${item.toLowerCase().replace(' ', '-')}`}
                className="block px-6 py-3 text-lg hover:text-[#0ea5e9] transition-colors"
              >
                {item}
              </NavLink>
            )
          )}
        </div>
      </div>
    </div>
  );
};
