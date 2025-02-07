import React from 'react';
import { Assests } from '../assets/Assests';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-black text-white p-6 md:p-12">
      {/* Left Content */}
      <div className="flex-1 space-y-4 md:space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold text-[#0ea5e9]">
          Wilfred Tinega
        </h1>
        <p className="text-lg md:text-xl font-medium">
          Front-End Developer 🚀
        </p>
        <p className="text-gray-300">
          Crafting beautiful, responsive, and efficient web experiences. Let's build something amazing together!
        </p>
      </div>

      {/* Image */}
      <div className="flex-shrink-0 mt-6 md:mt-0 md:ml-8">
        <img
          className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-[#0ea5e9] shadow-lg"
          src={Assests.DP}
          alt="Wilfred Tinega"
        />
      </div>
    </div>
  );
};

export default Hero;
