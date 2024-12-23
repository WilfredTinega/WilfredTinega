import React from 'react'
import "./projects.css"

function VanillaJS() {
  return (
    <div className='projects vanillajs'>
      <div className='project-box'>
        <div className='wrapper one'>
          <div>
            <h3>Text To Speech</h3>
            <a href="https://getspeechfromtextinstantly.netlify.app/">here</a> 
          </div>
        </div>
        <div className='projects-stacks'>
          <span>Javascript</span>
          <span>SASS</span>
          <span>CSS3</span>
          <span>HTML5</span>
        </div>
      </div>

      <div className='project-box'>
        <div className="wrapper two">
          <div>
            <h3>Image Search Engine</h3>
            <a href="https://quality-image-search-engine.netlify.app/"> here</a>
          </div>
          
        </div>
        <div className='projects-stacks'>
          <span>Javascript</span>
          <span>Rest API</span>
          <span>SASS</span>
          <span>CSS3</span>
          <span>HTML5</span>
        </div>
      </div>

      <div className='project-box'>
        <div className="wrapper three">
          <div>
            <h3>Digital Clock</h3>
            <a href="https://dijitooclock.netlify.app/">here</a>
          </div>
          
        </div>
        <div className='projects-stacks'>
          <span>Javascript</span>
          <span>SASS</span>
          <span>CSS3</span>
          <span>HTML5</span>
        </div>
      </div>

      <div className='project-box'>
        <div className="wrapper three">
          <div>
            <h3>To Do List App</h3>
            <a href="https://to-do-li-st-app.netlify.app/">here</a>
          </div>
          
        </div>
        <div className='projects-stacks'>
          <span>Javascript</span>
          <span>SASS</span>
          <span>CSS3</span>
          <span>HTML5</span>
        </div>
      </div>
    </div>
  )
}

export default VanillaJS