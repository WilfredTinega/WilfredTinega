import React from 'react'
import Projects from './Projects'
import Contacts from './Contacts'
import { Assests } from '../assets/Assests';

const About = () => {
  return (
    <>

      {/* About Me */}
      <div className="py-12 px-2 md:px-10 lg:px-40 bg-gray-50 text-blue-500">

        {/* Section Header */}
        <div className="text-center mb-12 ">
          <h1 className="text-4xl font-bold text-blue-400">About</h1>
          <div className="h-1 w-16 bg-green-500 mx-auto mt-2 rounded"></div>
        </div>

        {/* Intro Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

          <div className="shadow shadow-green-500 hover:shadow-blue-500 rounded-sm p-2">
            <div className="text-lg text-gray-700">
              <p>I'm Wilfred Tinega, a Front-End Web Developer.</p>
              <p>I utilize modern technlogies to build eye catching interfaces</p>
            </div>
            <div className='flex justify-end '>
              <img className="h-[100px] w-auto rounded-tl-full border-2" src={Assests.wmt} alt="Wilfred Tinega" />
            </div>
            
          </div>

          <div className="shadow shadow-green-500 hover:shadow-blue-500 rounded-sm p-2 justify-between ">
            <div className="text-lg text-gray-700">

              <p>I blend a strong technical foundation with a passion for:</p>

              <ul className='list-disc mx-5 capitalize'>
                <li>user-focused design to build clean</li>
                <li>responsive, and</li>
                <li>interactive web applications.</li>
              </ul>  
            </div>
            <i className="bi-cpu text-4xl bg-gradient-to-r from-green-500 to-blue-500 text-transparent  bg-clip-text float-end "></i>
          </div>

          <div className="shadow shadow-green-500 hover:shadow-blue-500 rounded-sm p-2 ">
            <p className="text-lg text-gray-700">
              I specialize in React.js, Tailwind CSS, JavaScript, and modern development tools like Vite and Git.
            </p>
            <i className="bi-cpu text-4xl bg-gradient-to-r from-green-500 to-blue-500 text-transparent  bg-clip-text float-end "></i>
          </div>
        </div>

        {/* What I Offer Section */}
        <div className="mb-16 px-2">
          <div className='mb-5 text-3xl'>
            <span className="bg-gradient-to-r from-green-500 to-blue-500 p-0.5 rounded-full">
              <span className='bg-gray-50 text-center rounded-full'><span className='p-2'>What I Offer</span></span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="shadow-sm shadow-blue-500 hover:shadow-green-500 rounded p-2 md:p-5">

              <div className="text-lg text-gray-700">
                I bring a hands-on approach to front-end development, backed by an engineering mindset that values problem-solving and precision.
              </div>
              
              <i className="bi-cpu text-4xl bg-gradient-to-r from-green-500 to-blue-500 text-transparent  bg-clip-text float-end"></i>
            </div>

            <div className="shadow-sm shadow-blue-500 hover:shadow-green-500 rounded p-2 md:p-5">
              <div className="text-lg text-gray-700">
                Whether integrating APIs, or experimenting with design systems, I ensure that every project is optimized for usability and performance.
              </div>

              <i className="bi-cpu text-4xl bg-gradient-to-r from-green-500 to-blue-500 text-transparent  bg-clip-text float-end"></i>
            </div>

          </div>
        </div>

        {/* Open To Section */}
        <div className="shadow-sm shadow-green-500 p-2 rounded capitalize grid grid-col md:grid-cols-2" >
          <div>
            <h2 className="text-3xl pb-5">
              <span className="bg-gradient-to-r from-green-500 to-blue-500 p-0.5 rounded-full">
                <span className="capitalize bg-gray-50 rounded-full">
                  <span className='px-5'>open to</span>
                </span>
              </span>
            </h2>

            <ul className="list-disc list-inside text-lg md:text-xl">
              <li>Freelance front-end roles</li>
              <li>Contract-based roles</li>
              <li>Collaborative open-source projects</li>
              <li>Junior developer opportunities</li>
            </ul>
          </div>

          <div className='bg-gradient-to-tl rounded from-green-500 to-blue-500 flex justify-end md:justify-center'>
            <img src={Assests.terminal} alt="Terminal Illustration" className="block w-1/2 h-fit rounded-xl" />
          </div>
          
        </div>
      </div>

      {/*Technologies*/}
      <div className='bg-gray-900 p-2 pb-10'>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-400">Technologies</h1>
          <div className="h-1 w-16 bg-green-500 mx-auto mt-2 rounded"></div>
        </div>

        <div className='flex gap-1 flex-wrap justify-center'>
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
    </>
  )
}

export default About