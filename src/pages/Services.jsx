import { NavLink } from 'react-router-dom'
const Services = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-900 text-4xl text-green-500'>
        <div className='bg-gradient-to-r to-green-500 from-blue-500 bg-clip-text'>
            <span className='text-transparent'>Coming soon....</span>
        </div>

        <div className='mt-5'>
            <NavLink to="/" className="border-2 border-green-500 border hover:border-blue-500 rounded-full text-2xl px-5 text-blue-500 hover:text-green-500"> <span className='bi-caret'></span>Back Home</NavLink>
        </div>
        
    </div>
  )
}

export default Services