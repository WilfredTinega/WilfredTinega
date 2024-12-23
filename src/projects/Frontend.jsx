import React from 'react'
import "./projects.css"
import ReactProjects from './ReactProjects'
import VanillaJS from './VanillaJS'

function Frontend() {
  return (
    <div className='projects'>
      <ReactProjects/>
      <VanillaJS/>
    </div>
  )
}

export default Frontend