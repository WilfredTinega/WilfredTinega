import React from 'react'
import "./projects.css"
import { Assests } from '../assets/Assests'

function VanillaJS() {
  return (
    <div className='projects'>
      <div className='project-box'>
            <a href="getspeechfromtextinstantly.netlify.app"><span class="material-symbols-outlined">linked_services</span></a>
            <div className='projects-stacks'>
                <span>Javascript</span>
                <span>SASS</span>
                <span>CSS3</span>
                <span>HTML5</span>
            </div>
      </div>

      <div className='project-box'>
            <a href="quality-image-search-engine.netlify.app/"><span class="material-symbols-outlined">linked_services</span></a>
            <div className='projects-stacks'>
                <span>Javascript</span>
                <span>Rest API</span>
                <span>SASS</span>
                <span>CSS3</span>
                <span>HTML5</span>
            </div>
      </div>

      <div className='project-box'>
            <a href="dijitooclock.netlify.app"><span class="material-symbols-outlined">linked_services</span></a>
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