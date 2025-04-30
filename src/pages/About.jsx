import React from 'react'
import Projects from './Projects'
import Contacts from './Contacts'
import { Assests } from '../assets/Assests';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* About Me */}
<div className="py-12 px-4 md:px-10 bg-gray-800 text-blue-500 font-sans">

{/* Section Header */}
<div className="text-center mb-12">
  <h1 className="text-4xl font-bold text-blue-400">About</h1>
  <div className="h-1 w-16 bg-green-500 mx-auto mt-2 rounded"></div>
</div>

{/* Intro Section */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
  <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300">
    <div className="flex flex-col-reverse items-center gap-4 text-center">
      <p className="text-lg text-gray-700">
        I'm Wilfred Tinega, a Front-End Web Developer and Electrical and Electronics Engineering student at Murang'a University of Technology.
      </p>
      <div>
        <img className="h-[180px] w-auto object-contain rounded hover:scale-105 transition" src={Assests.wmt} alt="Wilfred Tinega" />
      </div>
    </div>
  </div>

  <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row justify-between items-center gap-4">
    <p className="text-lg text-gray-700">
      I blend a strong technical foundation with a passion for user-focused design to build clean, responsive, and interactive web applications.
    </p>
    <i className="bi bi-cpu text-4xl text-blue-500"></i>
  </div>

  <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row-reverse justify-between items-center gap-4">
    <p className="text-lg text-gray-700">
      I specialize in React.js, Tailwind CSS, JavaScript, and modern development tools like Vite and Git.
    </p>
    <i className="bi bi-cpu text-4xl text-blue-500"></i>
  </div>

  <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row justify-between items-center gap-4">
    <p className="text-lg text-gray-700">
      My GitHub repositories reflect both personal exploration and practical application of front-end concepts. Some of my featured work includes:
    </p>
    <i className="bi bi-cpu text-4xl text-blue-500"></i>
  </div>
</div>

{/* What I Offer Section */}
<div className="mb-16 px-2">
  <h2 className="text-3xl md:text-4xl text-green-400 font-semibold mb-6">💼 What I Offer</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div className="p-5 bg-white rounded-2xl shadow hover:shadow-lg transition-all flex items-center gap-5">
      <i className="bi bi-cpu text-4xl text-blue-500"></i>
      <p className="text-lg text-gray-700">
        I bring a hands-on approach to front-end development, backed by an engineering mindset that values problem-solving and precision.
      </p>
    </div>
    <div className="p-5 bg-white rounded-2xl shadow hover:shadow-lg transition-all flex items-center gap-5">
      <p className="text-lg text-gray-700">
        Whether cloning high-fidelity UIs, integrating APIs, or experimenting with design systems, I ensure that every project is optimized for usability and performance.
      </p>
      <i className="bi bi-cpu text-4xl text-blue-500"></i>
    </div>
  </div>
</div>

{/* Open To Section */}
<div className="flex flex-col md:flex-row justify-center items-center gap-6 bg-gradient-to-tr from-green-500 to-blue-500 text-white p-6 rounded-xl shadow-md">
  <div className="w-full md:w-2/3">
    <h2 className="text-2xl font-semibold mb-3 underline underline-offset-4">I'm currently open to:</h2>
    <ul className="list-disc list-inside text-lg space-y-2">
      <li>Freelance front-end roles</li>
      <li>Contract-based roles</li>
      <li>Collaborative open-source projects</li>
      <li>Junior developer opportunities</li>
    </ul>
  </div>
  <div className="w-full md:w-1/3">
    <img src={Assests.terminal} alt="Terminal Illustration" className="w-full h-auto rounded-xl" />
  </div>
</div>
</div>


      {/*Technologies*/}
      <div className='bg-gray-900 p-2'>
        <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-500">Technologies</h1>
            <hr className="mt-4 border-green-500 w-1/8 mx-auto" />
        </div>
        <div className='flex gap-1 flex-wrap justify-center'>
          <div className='p-2 bg-green-500 rounded-md'>
            <img src={Assests.js} alt="JavaScript" className="w-10 h-10 rounded-sm hover:scale-110 transition-transform" />
          </div>
          <div className='p-2 bg-green-500 rounded-md'>
            <img src={Assests.js} alt="JavaScript" className="w-10 h-10 rounded-sm hover:scale-110 transition-transform" />
          </div>
          <div className='p-2 bg-green-500 rounded-md'>
            <img src={Assests.html5} alt="HTML5" className="w-10 h-10 rounded-sm  hover:scale-110 transition-transform" />
          </div>
          <div className='p-2 bg-green-500 rounded-md'>
            <img src={Assests.css} alt="CSS3" className="w-10 h-10 rounded-sm hover:scale-110 transition-transform" />
          </div>
          <div className='p-2 bg-green-500 rounded-md'>
            <img src={Assests.bootstrap} alt="Bootstrap" className="w-10 h-10 rounded-sm hover:scale-110 transition-transform" />
          </div>
          <div className='p-2 bg-green-500 rounded-md'>
            <img src={Assests.react} alt="React" className="w-10 h-10 rounded-sm hover:scale-110 transition-transform" />
          </div>
          <div className='p-2 bg-green-500 rounded-md'>
            <img src={Assests.sass} alt="Sass" className="w-10 h-10  rounded-sm hover:scale-110 transition-transform" />
          </div>
          <div className='p-2 bg-green-500 rounded-md'>
            <img src={Assests.git} alt="Git" className="w-10 h-10  rounded-sm hover:scale-110 transition-transform" />
          </div>
          <div className='p-2 bg-green-500 rounded-md'>
            <img src={Assests.github} alt="GitHub" className="w-10 h-10 rounded-sm hover:scale-110 transition-transform" />
          </div>
          <div className='p-2 bg-green-500 rounded-md'>
            <img src={Assests.jquery} alt="jQuery" className="w-10 h-10  rounded-sm hover:scale-110 transition-transform" />
          </div>
          <div className='p-2 bg-green-500 rounded-md'>
            <img src={Assests.npm} alt="NPM" className="w-10 h-10  rounded-sm hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>
        <Projects />
        <Contacts />
    </div>
  )
}

export default About