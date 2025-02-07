import React from 'react';
import { Assests } from '../assets/Assests';
import Hero from './Hero';
import Nyumbani from './Nyumbani';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <Hero />

      {/* Stacks Section */}
      <div className="py-10">
        <h2 className="text-2xl font-semibold text-center mb-6">
          <span className="bi-code-slash flex justify-center items-center gap-2 text-[#0ea5e9]"> Stacks </span>
        </h2>

        {/* Stacks Grid */}
        <div className='flex items-center gap-4 flex-wrap px-2'>
          <img src={Assests.js} alt="JavaScript" className="w-12 h-12 bg-blue-500 rounded-sm hover:scale-110 transition-transform" />
          <img src={Assests.html5} alt="HTML5" className="w-10 h-10 bg-blue-500 rounded-sm  hover:scale-110 transition-transform" />
          <img src={Assests.css} alt="CSS3" className="w-12 h-12 bg-blue-500 rounded-sm hover:scale-110 transition-transform" />
          <img src={Assests.bootstrap} alt="Bootstrap" className="w-12 h-12 rounded-sm bg-blue-500 hover:scale-110 transition-transform" />
          <img src={Assests.react} alt="React" className="w-12 h-12 bg-blue-500 rounded-sm hover:scale-110 transition-transform" />
          <img src={Assests.sass} alt="Sass" className="w-12 h-12 bg-blue-500 rounded-sm hover:scale-110 transition-transform" />
          <img src={Assests.git} alt="Git" className="w-12 h-12 bg-blue-500 rounded-sm hover:scale-110 transition-transform" />
          <img src={Assests.github} alt="GitHub" className="w-12 h-12 bg-blue-500 rounded-sm hover:scale-110 transition-transform" />
          <img src={Assests.jquery} alt="jQuery" className="w-12 h-12 rounded-sm hover:scale-110 transition-transform" />
          <img src={Assests.npm} alt="NPM" className="w-12 h-12 bg-blue-500 rounded-sm hover:scale-110 transition-transform" />
        </div>
            
  </div>
  </div>
  );
}
