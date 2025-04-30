import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center text-2xl text-center md:text-3xl bg-gray-900'>
        <div className='mb-10 text-red-500'>404 Error | Page Not Found</div>
        

        <NavLink to="/" className="border-2 border-green-500 border hover:border-blue-500 rounded-full px-5 text-blue-500 hover:text-green-500"> <span className='bi-caret'></span>Back Home</NavLink>

    </div>
  )
}

export default NotFound