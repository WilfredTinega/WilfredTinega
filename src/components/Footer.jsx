import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const thisYear = new Date().getFullYear();

  return (
    <div className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Links */}
          <div className="text-center md:text-left">
            <p className="text-lg font-light">
              <span>&copy;</span> {thisYear} Wilfred Mamboleo Tinega
            </p>
            <ul className="flex justify-center md:justify-start gap-4 mt-4">
              <li>
                <a
                  href="https://www.linkedin.com/in/wilfredtinega"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-[#0ea5e9] transition-colors"
                >
                  <i className="bi-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/wilfredtinega"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-[#0ea5e9] transition-colors"
                >
                  <i className="bi-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/WilfredTinega"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-[#0ea5e9] transition-colors"
                >
                  <i className="bi-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="mailto:tinegamamboleo@gmail.com"
                  className="text-xl hover:text-[#0ea5e9] transition-colors"
                >
                  <i className="bi-envelope"></i>
                </a>
              </li>
              <li>
                <a
                  href="tel:+254740781289"
                  className="text-xl hover:text-[#0ea5e9] transition-colors"
                >
                  <i className="bi-telephone"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="text-center md:text-right">
            <ul className="flex flex-wrap justify-center md:justify-end gap-6">
              {['About', 'Projects', 'Blog', 'contacts'].map((item, index) => (
                <li key={index}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-lg font-light flex items-center gap-1 hover:text-[#0ea5e9] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
