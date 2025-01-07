import React from 'react'
import { Assests } from '../assets/Assests'

export default function Home() {
  return (
    <div className='home-page'>
      <div className='home-top'>
        <div className='content'>
          <h2><span><i class="bi-code-slash"></i>Hello I am...</span></h2>
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
          <div className='resume'>
            <a href="./src/assets/WilfredTinega.pdf" title='Wilfred Tinega Resume'><span class="material-symbols-outlined">cloud_download</span></a>
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
