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
                <li><a href='mailTo:tinegamamboleo@gmail.com' class="bi-envelope"></a> </li>
                <li><a href="tel:+254740781289" class="bi-telephone"></a></li>       
            </ul>
        </div>

        <div className="footer-nav">
            <ul>
                <li><Link to="about">About<i class="bi-box-arrow-up-right"></i></Link></li>
                <li><Link to="projects">Projects<i class="bi-box-arrow-up-right"></i></Link></li>
                <li><Link to="blog">Blog<i class="bi-box-arrow-up-right"></i></Link></li>
                <li><Link to="contact-me">Get in Touch<i class="bi-box-arrow-up-right"></i></Link></li>
            </ul>
        </div>   
    </div>
  )
}

export default Footer