
const Projects = () => {
  return (
    <>
    <div className="bg-gray-50 px-2 lg:px-20 min-h-screen">
        <div className="text-center mb-8">
            <h1 className="text-4xl md:text-3xl font-bold text-blue-500">Projects</h1>
            <div className="h-1 w-16 bg-green-500 mx-auto mt-2 rounded"></div>
        </div>
        <div className="projects grid gap-2 md:gap-4 lg:gap-6 md:grid-cols-3 lg:grid-cols-4">

            {/* Shopify Website*/}
            <div className="bg-white shadow-sm rounded-lg p-4 ">
            <div className="flex rounded-lg p-2 mb-4 bg-[url('/Shopify1.png')] bg-no-repeat bg-auto">
                <div className="">
                    <div className='text-xl font-semibold text-blue-500'>Shopify</div>
                    <p className='text-md text-green-500'>This is the e-commerce website, front-end optimized...</p>
                </div>
                <div className='flex justify-end items-end text-blue-500 hover:text-green-500'>
                    <span className='bg-gradient-to-r from-green-500 to-blue-500 p-0.5 rounded-full flex justify-center items-center'>
                        <a href="https://mawitishop.netlify.app/" title='Shopify' className=" rounded-full bg-gray-50 "><span className='p-2'>View</span></a>
                    </span> 
                </div>
                
            </div>
            <div className="projects-stacks flex flex-wrap gap-2">
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-gray-50 px-2 py-1 rounded">React</span>
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-gray-50 px-2 py-1 rounded">TailwindCSS</span>
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-gray-50 px-2 py-1 rounded">CSS3</span>
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-gray-50 px-2 py-1 rounded">HTML5</span>
            </div>
            </div>

            {/* Gemini AI Project */}
            <div className="bg-white shadow-sm rounded-lg p-4 ">
            <div className="flex rounded-lg p-2 mb-4 bg-[url('/gemini1.png')] bg-no-repeat bg-auto">
                <div className="">
                    <div className='text-xl font-semibold text-blue-500'>Gemini AI</div>
                    <p className='text-md text-green-500'>A clone of one the LLM from google for text generation...</p>
                </div>
                <div className='flex justify-end items-end text-blue-500 hover:text-green-500'>
                    <span className='bg-gradient-to-r from-green-500 to-blue-500 p-0.5 rounded-full flex justify-center items-center'>
                        <a href="https://aicemamboleo.netlify.app/"title='Gemini AI' className=" rounded-full bg-gray-50 "><span className='p-2'>View</span></a>
                    </span> 
                </div>
                
            </div>
            <div className="projects-stacks flex flex-wrap gap-2">
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-gray-50 px-2 py-1 rounded">React</span>
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-gray-50 px-2 py-1 rounded">Gemini API</span>
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-gray-50 px-2 py-1 rounded">SASS</span>
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-gray-50 px-2 py-1 rounded">CSS3</span>
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-gray-50 px-2 py-1 rounded">HTML5</span>
            </div>
            </div>

            {/* TO DO APP */}
            <div className="bg-white shadow-sm rounded-lg p-4 ">
            <div className="flex rounded-lg p-2 mb-4 bg-[url('/todo1.png')] bg-no-repeat bg-auto">
                <div className="">
                    <div className='text-xl font-semibold text-blue-500'>To Do App</div>
                    <p className='text-md text-green-500'>This is a to do app utilizing web storage...</p>
                </div>
                <div className='flex justify-end items-end text-blue-500 hover:text-green-500'>
                    <span className='bg-gradient-to-r from-green-500 to-blue-500 p-0.5 rounded-full flex justify-center items-center'>
                        <a href="https://to-do-li-st-app.netlify.app/" title='To-Do List App' className=" rounded-full bg-gray-50 "><span className='p-2'>View</span></a>
                    </span> 
                </div>
                
            </div>
            <div className="projects-stacks flex flex-wrap gap-2">
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-gray-50 px-2 py-1 rounded">JavaScript</span>
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-gray-50 px-2 py-1 rounded">SASS</span>
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-gray-50 px-2 py-1 rounded">CSS3</span>
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-gray-50 px-2 py-1 rounded">HTML5</span>
            </div>
            </div>

            {/* text to speech APP */}
            <div className="bg-white shadow-sm rounded-lg p-4 ">
            <div className="flex rounded-lg p-2 mb-4 bg-[url('/t2s1.png')] bg-no-repeat bg-fit">
                <div className="">
                    <div className='text-xl font-semibold text-blue-500 capitalize'>text to speech</div>
                    <p className='text-md text-green-500'>This is a to do app utilizing web storage...</p>
                </div>
                <div className='flex justify-end items-end text-blue-500 hover:text-green-500'>
                    <span className='bg-gradient-to-r from-green-500 to-blue-500 p-0.5 rounded-full flex justify-center items-center'>
                        <a href="https://getspeechfromtextinstantly.netlify.app/" title='Text to Speech' className=" rounded-full bg-gray-50 "><span className='p-2'>View</span></a>
                    </span> 
                </div>
                
            </div>
            <div className="projects-stacks flex flex-wrap gap-2">
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-gray-50 px-2 py-1 rounded">JavaScript</span>
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-gray-50 px-2 py-1 rounded">SASS</span>
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-gray-50 px-2 py-1 rounded">CSS3</span>
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-gray-50 px-2 py-1 rounded">HTML5</span>
            </div>
            </div>

            {/* text to speech APP */}
            <div className="bg-white shadow-sm rounded-lg p-4 ">
            <div className="flex rounded-lg p-2 mb-4 bg-[url('/t2s1.png')] bg-no-repeat bg-fit">
                <div className="">
                    <div className='text-xl font-semibold text-blue-500 capitalize'>text to speech</div>
                    <p className='text-md text-green-500'>This is a to do app utilizing web text to speech apis...</p>
                </div>
                <div className='flex justify-end items-end text-blue-500 hover:text-green-500'>
                    <span className='bg-gradient-to-r from-green-500 to-blue-500 p-0.5 rounded-full flex justify-center items-center'>
                        <a href="https://getspeechfromtextinstantly.netlify.app/" title='Text to Speech' className=" rounded-full bg-gray-50 "><span className='p-2'>View</span></a>
                    </span> 
                </div>
                
            </div>
            <div className="projects-stacks flex flex-wrap gap-2">
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-gray-50 px-2 py-1 rounded">JavaScript</span>
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-gray-50 px-2 py-1 rounded">SASS</span>
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-gray-50 px-2 py-1 rounded">CSS3</span>
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-gray-50 px-2 py-1 rounded">HTML5</span>
            </div>
            </div>

        </div>
    </div>
    
    </>
  )
}

export default Projects