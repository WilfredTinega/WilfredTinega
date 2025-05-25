import { Assests } from '../assets/Assests'
import About from './About'
import Contacts from './Contacts'
import Projects from './Projects'

const Home = () => {
  return (
    <div className='bg-gray-900 px-1'>

      {/** Hero Section */}
      <div className='min-h-[80vh] md:min-h-screen relative md:flex md:justify-center md:items-center md:p-10 md:gap-4'>
        <img className='border-2 border-blue-500 md:w-1/3 md:rounded-full' src={Assests.wmt} alt="Wilfred Tinega Image" />
        <div className='backdrop-blur-sm absolute w-full md:static bottom-0 px-2 md:rounded-md'>
          <div className='text-green-500 text-2xl md:text-4xl font-bold  xl:text-5xl capitalize'>wilfred tinega</div>
          <div className='text-blue-500 text-md md:text-2xl font-semibold capitalize'>front-end Web developer</div>
          
          <div className='flex flex-wrap gap-2 md:my-5'>
              <div className='bg-green-500 text-white text-sm rounded-full flex justify-center items-center py-1 px-2 hover:bg-blue-500'>React.js</div>
              <div className='bg-green-500 text-white text-sm rounded-full flex justify-center items-center py-1 px-2 hover:bg-blue-500'>JavaScript</div>
              <div className='bg-green-500 text-white text-sm rounded-full flex justify-center items-center py-1 px-2 hover:bg-blue-500'>HTML5</div>
              <div className='bg-green-500 text-white text-sm rounded-full flex justify-center items-center py-1 px-2 hover:bg-blue-500'>CSS3</div>
              <div className='bg-green-500 text-white text-sm rounded-full flex justify-center items-center py-1 px-2 hover:bg-blue-500'>Tailwindcss</div>
              <div className='bg-green-500 text-white text-sm rounded-full flex justify-center items-center py-1 px-2 hover:bg-blue-500'>JQuery</div>
          </div>

          <div className='flex justify-around items-center gap-2 pt-1 md:py-5'>
              <a  className='flex justify-center items-center gap-2 text-blue-500 hover:text-green-500 border-2 rounded-full  px-2' title='Wilfred Tinega Front-End Web Developer Resume' href={Assests.frontend}>
                  <span>Resume</span>
                  <i className='bi-download text-green-500 text-2xl'></i>
              </a>
          </div>

          <div className='flex justify-center'>
              <ul className="flex justify-center md:justify-start gap-4">
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
      
      {/**About */}
      <div>
        <About />
      </div>

      {/**services */}
      <div>
        <p></p>
      </div>

      {/**projects */}
      <div>
        <Projects/>
      </div>

      {/** Contacts */}
      <div>
        <Contacts/>
      </div>

      
    </div>
  )
}

export default Home

