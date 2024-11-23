import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Nyumbani from './Nyumbani'

export default function About() {
  return (
    <div className='about-page'>
      <h1><span class="bi-code-slash">About</span></h1>
      <ul className="about-nav">
        <li> <Link to="experience">Experience</Link> </li>
        <li> <Link to="skills">Skills</Link> </li>
        <li> <Link to="education">Education</Link> </li>
      </ul>
      <Nyumbani />
      <Outlet/>
    </div>
  )
}
