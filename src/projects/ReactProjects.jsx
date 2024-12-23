import React from 'react'
import "./projects.css"

function ReactProjects() {
  return (
    <div className="projects react">
      <div className='project-box'>
        <div className="wrapper four">
          <div>
            <h3>Gemini AI</h3>
            <a href="https://aicegemini.vercel.app/">here</a>
          </div>
        </div>
        <div className='projects-stacks'>
          <span>React</span>
          <span>Gemini API</span>
          <span>SASS</span>
          <span>CSS3</span>
          <span>HTML5</span>
        </div>
      </div>

      <div className='project-box'>
        <div className="wrapper five">
          <div>
            <h3>Murang'a University of Technology</h3>
            <a href="mutportal.netlify.app">here</a>
          </div>
        </div>
        <div className='projects-stacks'>
          <span>React</span>
          <span>SASS</span>
          <span>CSS3</span>
          <span>HTML5</span>
        </div>
      </div>
    </div>
  )

}

export default ReactProjects