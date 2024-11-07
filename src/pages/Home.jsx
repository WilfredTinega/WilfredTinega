import React from 'react'
import { Assests } from '../assets/Assests'

export default function Home() {
  return (
    <div className='home-page'>
            <div className='home-top'>
                <div>
                    <h1><span><i class="bi-code-slash"></i>Hello I am...</span></h1>
                    <p>Electrical and Electronics Engineer</p>
                    <p>Front End Web Developer</p>
                    <p>I Build For Web</p>
                </div>
                <img src={Assests.lowkieman} alt=""/>
            </div>
            
            <div className='home-bottom'>
                <h1><span><i class="bi-code-slash"></i>Stacks</span></h1>
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
