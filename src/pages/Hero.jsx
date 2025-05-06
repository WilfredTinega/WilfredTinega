import React from 'react'
import { Assests } from '../assets/Assests'

const Hero = () => {
  return (
    <div className='bg-gray-950'>
        <div className='min-h-screen relative md:px-10 lg:px-50 md:grid md:grid-cols-2 md:items-center bg-gray-900'>
            <div className='w-full md:h-1/2 md:flex md:items-center'>
              <img className='w-full md:h-full md:rounded-xl' src={Assests.wmt} alt="Wilfred Tinega Image" />  
            </div>
            
            <div className='w-full md:h-1/2 md:bg-white absolute top-90 md:static bg-[#ffffff01] backdrop-blur-xl p-5 md:rounded-r-2xl md:flex md:flex-col md:justify-center '>
                <div className='text-green-500 text-3xl md:text-4xl font-bold  xl:text-5xl capitalize'>wilfred tinega</div>
                <div className='text-blue-500 text-xl md:text-2xl font-semibold capitalize'>front-end Web developer</div>
                <div className='flex justify-center items-center gap-2 m-4'><a  className='flex justify-center items-center gap-2 text-blue-500 hover:text-green-500 border-2 rounded-full  px-5' title='Wilfred Tinega Front-End Web Developer Resume' href={Assests.frontend}>Resume<i className='bi-download text-green-500 text-2xl'></i></a></div>

                <div className='flex justify-center'>
                    <ul className="flex justify-center md:justify-start gap-4 mt-4">
                        <li>
                            <a className="text-xl  text-green-500 hover:text-blue-500  transition-colors" href="https://www.linkedin.com/in/wilfredtinega" title='LinkedIn Wilfred Tinega'>
                                <i className="bi-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a className="text-xl  text-green-500 hover:text-blue-500  transition-colors" href="https://github.com/wilfredtinega" title='GitHub Wilfred Tinega'>
                                <i className="bi-github"></i>
                            </a>
                        </li>
                        <li>
                            <a className="text-xl  text-green-500 hover:text-blue-500  transition-colors" href="https://x.com/wmtinega" title='X Wilfred Tinega'>
                                <i className="bi-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a className="text-xl text-green-500 hover:text-blue-500 transition-colors" href="mailto:tinegamamboleo@gmail.com" title='Send Me eMail'>
                                <i className="bi-envelope"></i>
                            </a>
                        </li>
                        <li>
                            <a className="text-xl text-green-500 hover:text-blue-500 transition-colors" href="tel:+254740781289" title='Call Me'>
                                <i className="bi-telephone"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className='hidden'>

            <div>
                <h1>element 1</h1>
            </div>
            <div>
                <h1>element 3</h1>
            </div>
            <div>
                <h1>element 2</h1>
            </div>
            <div>
                <h1>element 4</h1>
            </div>
            <div>
                <h1>element 5</h1>
            </div>

        </div>
    </div>
  )
}

export default Hero