import React from 'react'

const Footer = () => {
  return (  
    <div className="footer">
      <p>&copy;<span id="getYear"></span> wilfred mamboleo tinega </p>

      <ul>
          <li>
              <a href="https://www.linkedin.com/in/wilfredtinega" class="bi-linkedin"></a>
          </li>
          <li>
              <a href="https://github.com/lowkieman" class="bi-github"></a>
          </li>
          <li>
              <a href="https://wa.me/254798732981" class="bi-whatsapp"></a>
              </li>
          <li>
              <a href="https://youtube.com/@TMamboleo" class="bi-youtube"></a>
          </li>
          <li>
              <a href="https://t.me/LowkieMan" class="bi-telegram"></a>
          </li>
          <li>
              <a href="https://x.com/tinegawilfred" class="bi-twitter"></a>
          </li>
          <li>
              <a href="https://facebook.com/tinegamamboleo" class="bi-facebook"></a>
          </li>            
      </ul>      
    </div>
  )
}

export default Footer