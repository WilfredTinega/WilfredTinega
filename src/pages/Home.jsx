import React from 'react'
import { Assests } from '../assets/Assests'

export default function Home() {
  return (
    <div className='home-page'>
      <div className='home-top'>
        <div className='content'>
          <div className='top-left'>
            <h2><span><i class="bi-code-slash"></i>Hello I am...</span></h2>
            <p>Electrical and Electronics Engineer</p>
            <p>Front-End Web Developer</p>
            <p>I Build For Web</p>
            <div className='resume'>
              <a href={Assests.frontend} title='Front-End Web Developer Resume'>
                <span class="material-symbols-outlined">cloud_download</span> <i>Download Resume</i>
              </a>
              <a href={Assests.electrical} title='Electrical Engineer Resume'>
                <span class="material-symbols-outlined">cloud_download</span> <i>Download EEE Resume</i>
              </a>
            </div>
          </div>
          <div className='display-picture'>
            <span><img src={Assests.DP} alt="dp" /></span>
          </div>
        </div>
      </div>
      <div className='home-bottom'>
        <h2><span><i class="bi-code-slash"></i>Stacks</span></h2>
        <ul class="stacks">
          <li><img src={Assests.js} alt="" /></li>
          <li><img src={Assests.html5} alt="" /></li>
          <li><img src={Assests.css} alt="" /></li>
          <li><img src={Assests.bootstrap} alt="" /></li>
          <li><img src={Assests.react} alt="" /></li>
          <li><img src={Assests.sass} alt="" /></li>
          <li><img src={Assests.git} alt="" /></li>
          <li><img src={Assests.github} alt="" /></li>
          <li><img src={Assests.jquery} alt="" /></li>
          <li><img src={Assests.npm} alt="" /></li>
        </ul>
      </div>
    </div>

  )
}
