import React from 'react'
import { Assests } from '../assets/Assests'

export default function Contacts() {
  return (
    <div className='contact-page'>
      <div className="left">
        <div>
          <h1><span>Get in Touch</span></h1>
          <hr />
        </div>
        
        <form action="">
          <div>
            <input type="text" name="Name" id="name" placeholder='Your Name'/>
            <input type="email" name="Email" id="email" placeholder='Your Email' />
          </div>
          <textarea name="Message" id="message" placeholder='Your message here...'></textarea>
          <input type="submit" className='submit' />
        </form>
      </div>
    </div>
  )
}
