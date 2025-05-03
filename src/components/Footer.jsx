import React from 'react';

const Footer = () => {
  const thisYear = new Date().getFullYear();

  return (
    <div className="bg-gray-950 text-white flex flex-col-reverse md:flex-row items-center justify-between p-5 md:p-10">
      <div className="text-lg font-light pb-1">
        <span>&copy;</span> {thisYear} Wilfred Tinega
      </div>

      <ul className="flex justify-center md:justify-start gap-4 mt-4">
        <li>
          <a
            href="https://www.linkedin.com/in/wilfredtinega" 
            title='LinkedIn'
            className="text-xl  text-green-500 hover:text-blue-500 transition-colors"
          >
            <i className="bi-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/wilfredtinega"
            title='Github'
            className="text-xl  text-green-500 hover:text-blue-500 transition-colors"
          >
            <i className="bi-github"></i>
          </a>
        </li>
        <li>
          <a className="text-xl text-green-500 hover:text-blue-500 transition-colors" href="https://x.com/WilfredTinega"
          title='X'>
            {/*<img src={Assests.twitter} alt="JavaScript" className="w-5 h-5 block rounded-sm hover:scale-110 transition-transform" />*/}
            <i className="bi-twitter"></i>
          </a>
        </li>
        
        <li>
          <a
            href="mailto:tinegamamboleo@gmail.com"
            title='eMail'
            className="text-xl  text-green-500 hover:text-blue-500 transition-colors"
          >
            <i className="bi-envelope"></i>
          </a>
        </li>
        <li>
          <a
            href="tel:+254740781289"
            title='Call Me'
            className="text-xl  text-green-500 hover:text-[#0ea5e9] transition-colors"
          >
            <i className="bi-telephone"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
