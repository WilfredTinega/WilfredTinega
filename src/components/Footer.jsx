import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {

    const thisYear = new Date().getFullYear();
  return (  
    <div className="footer">
        <div className='footer-social'>
            <div> <span>&copy;</span> {thisYear} Wilfred Mamboleo Tinega </div>
            <ul>
                <li><a href="https://www.linkedin.com/in/wilfredtinega" class="bi-linkedin"></a></li>
                <li><a href="https://github.com/lowkieman" class="bi-github"></a></li>
                <li><a href="https://x.com/tinegawilfred" class="bi-twitter"></a></li>         
            </ul>
        </div>      
        <ul className='footer-contacts'>
            <li><Link to= "/contact-me">Get in Touch<i class="bi-box-arrow-up-right"></i></Link></li>
            <li> <span class="bi-person"></span> Wilfred Tinega </li>
            <li> <span class="bi-telephone"></span> <>0740781289 </></li>
            <li> <span class="bi-envelope"></span> <>tinegamamboleo@gmail.com</> </li>
        </ul>     
    </div>
  )
}

export default Footer