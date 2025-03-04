import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='flex justify-center gap-2 items-center mb-3'>
        <p className='text-amber-500'>
            {text1} <span className='text-blue-500 font-medium'>{text2}</span>
        </p>
        <p className='w-1/2 sm:w-12 h-0.5 bg-amber-500'></p>
      
    </div>
  )
}

export default Title