import React from 'react'
import { Assests } from '../assets/Assests'

const Hero = () => {
  return (
    <div className='min-h-screen px-5 md:px-10 bg-gray-950 flex flex-col-reverse md:flex-row items-center justify-center gap-10'>
        <img className='w-50 h-50 md:w-75 md:h-75 lg:w-100 lg:h-100 rounded-full' src={Assests.wmt} alt="" />
        <div className='bg-white p-5 rounded-2xl shadow-2xl md:rounded-r-2xl'>
            <div className='text-green-500 text-2xl md:text-4xl  xl:text-5xl capitalize'>wilfred tinega</div>
            <div className='text-blue-500 text-xl md:text-2xl capitalize text-center'>front-end Web developer</div>
            <div className='flex justify-center items-center gap-2 m-4'><a  className='flex justify-center items-center gap-2 text-blue-500 hover:text-green-500 border-2 rounded-full  px-5' title='Wilfred Tinega Front-End Web Developer Resume' href={Assests.frontend}>Resume<i className='bi-download text-green-500 text-2xl'></i></a></div>
            <div className='flex justify-center'>
                <ul className="flex justify-center md:justify-start gap-4 mt-4">
                    <li>
                        <a className="text-xl  text-green-500 hover:text-blue-500  transition-colors" href="https://www.linkedin.com/in/wilfredtinega">
                            <i className="bi-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a className="text-xl  text-green-500 hover:text-blue-500  transition-colors" href="https://github.com/wilfredtinega">
                            <i className="bi-github"></i>
                        </a>
                    </li>
                    <li>
                        <a className="text-xl  text-green-500 hover:text-blue-500  transition-colors" href="https://x.com/WilfredTinega">
                            <i className="bi-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a className="text-xl text-green-500 hover:text-blue-500 transition-colors" href="mailto:tinegamamboleo@gmail.com">
                            <i className="bi-envelope"></i>
                        </a>
                    </li>
                    <li>
                        <a className="text-xl text-green-500 hover:text-blue-500 transition-colors" href="tel:+254740781289">
                            <i className="bi-telephone"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Hero