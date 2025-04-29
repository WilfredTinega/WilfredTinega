import React from 'react'
import Projects from './Projects'
import Contacts from './Contacts'
import { Assests } from '../assets/Assests';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 px-2 sm:px-4 md:px-6 lg:px-10">

      {/*About Me*/}
      <div>
        <div className='text-center py-2'>
          <h1 className="text-4xl text-blue-500">About</h1>
          <p className='h-0.5 bg-green-500 w-1/8 m-auto'></p>
        </div>

        <div className=''>
          <div className=''>
            <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-0.5 mb-5 bg-white rounded-md'>
              <div><i className='bi-cpu text-9xl'></i></div>
              <div>I'm Wilfred Tinega, a Front-End Web Developer and Electrical and Electronics Engineering student at Murang'a University of Technology.</div>
            </div>

            <div className='flex flex-col md:flex-row justify-between items-center gap-0.5 mb-5 bg-white rounded-md'>
              <div>I blend a strong technical foundation with a passion for user-focused design to build clean, responsive, and interactive web applications.</div>
              <div><i className='bi-cpu text-9xl'></i></div>
            </div>

          </div>

          <div className=''>
            <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-0.5 mb-5 bg-white rounded-md'>
              <div><i className='bi-cpu text-9xl'></i></div>
              <div>I specialize in React.js, Tailwind CSS, JavaScript, and modern development tools like Vite and Git.</div>
              
            </div>

            <div className='flex flex-col md:flex-row justify-between items-center gap-0.5 mb-5 bg-white rounded-md'>
              <div>My GitHub repositories reflect both personal exploration and practical application of front-end concepts. Some of my featured work includes:</div>
              <div><i className='bi-cpu text-9xl'></i></div>
            </div> 
          </div>

          <div className=''>
            <h1>🌐 Notable Projects</h1>

            <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-0.5 mb-5 bg-white rounded-md'>
              <div>
                <i className='bi-cpu text-9xl'></i>
              </div>   
              <div>aice - A Gemini AI clone powered by the Gemini API and React, enabling smart conversational interactions in a modern UI.</div>
            </div>

            <div  className='flex flex-col md:flex-row justify-between items-center gap-0.5 mb-5 bg-white rounded-md'>
              <div>google-flights-clone - A Google Flights UI replica integrating the SkyScrapper API, showcasing real-time flight search functionality.</div>
              <div>
                <i className='bi-cpu text-9xl'></i>
              </div>
            </div>

            <div  className='flex flex-col-reverse md:flex-row justify-between items-center gap-0.5 mb-5 bg-white rounded-md'>
              <div>
                <i className='bi-cpu text-9xl'></i>
              </div> 
              <div>real-estate-app - A responsive real estate interface with filtering, searching, and property details built in React and Tailwind.</div>
            </div>

            <div  className='flex flex-col md:flex-row justify-between items-center gap-0.5 mb-5 bg-white rounded-md'>
              <div>
                lowkieman - My personal portfolio website, built to highlight my projects, skills, and development approach.
              </div>
              <div>
                <i className='bi-cpu text-9xl'></i>
              </div>   
            </div>

            <div  className='flex flex-col-reverse md:flex-row justify-between items-center gap-0.5 mb-5 bg-white rounded-md'>
              <div>
                <i className='bi-cpu text-9xl'></i>
              </div> 
              <div>MUTPortal - A university student portal concept for seamless academic navigation.</div>
              
            </div>

            <div  className='flex flex-col md:flex-row justify-between items-center gap-0.5 mb-5 bg-white rounded-md'>
            
              <div>theroom - A visually accurate ALX Fellowship platform clone with well-structured components.</div>
              <div>
                <i className='bi-cpu text-9xl'></i>
              </div> 
            </div>

          </div>

          <div>
            <h1>💼 What I Offer</h1>

            <div>
              <div  className='flex flex-col-reverse md:flex-row justify-between items-center gap-0.5 mb-5 bg-white rounded-md'>
              <div><i className='bi-cpu text-9xl'></i></div>
                <div>I bring a hands-on approach to front-end development, backed by an engineering mindset that values problem-solving and precision.</div>
                
              </div>

              <div  className='flex flex-col md:flex-row justify-between items-center gap-0.5 mb-5 bg-white rounded-md'>
                
                <div>Whether cloning high-fidelity UIs, integrating APIs,or experimenting with design systems,I ensure that every project is optimized for usability and performance.</div>
                <div><i className='bi-cpu text-9xl'></i></div>
              </div>

            </div>

          </div>

          <div>
            <div>
              <h1>I'm currently open to:</h1>
              <ul className='p-2'>
                <li className=''>Freelance or contract-based front-end roles</li>
                <li className='list-disc'>Collaborative open-source projects</li>
                <li className='list-disc'>Junior developer opportunities in fast-paced teams</li>
              </ul>
            </div>
            <div>
              <img src={Assests.terminal} alt="" />
            </div>
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