import React from 'react'
import { Assests } from '../assets/Assests'

export default function Home() {
  return (
    <div className='home-page'>
      <div className='home-top'>
        <div className='content'>
          <h1><span><i class="bi-code-slash"></i>Hello I am...</span></h1>
          <p>
            <tt>Electrical </tt>
            <tt>and </tt>
            <tt>Electronics </tt>
            <tt>Engineer</tt>         
         </p>
          <p>
            <tt>Front-</tt>
            <tt>End </tt>
            <tt>Web </tt>
            <tt>Developer</tt>
          </p>
          <p>
            <tt>I </tt>
            <tt>Build </tt>
            <tt>For </tt>
            <tt>Web</tt>
          </p>
        </div>
        <div className='image'>
          <img src={Assests.lowkieman} alt=""/>
        </div>
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
