import React from 'react'
import { Assests } from '../assets/Assests'

export default function Education() {
  return (
    <div className='education-page'>
      <div className="wraper">
        <img src="https://th.bing.com/th/id/R.3df13e64fa53fd5583865778aa3afe53?rik=nVAarwz0KwS3jg&pid=ImgRaw&r=0" alt="mut logo" />
        <div>Murang'a University of Technology [2025] Grade: <i>pending</i></div>
      </div>
      <div className="wraper">
        <img src="https://admissions.alxafrica.com/alx_icon-300x169.png" alt="alx"/>
        <div>ALX AiCE Career Essential <a className="bi-box-arrow-up-right" href="https://intranet.alxswe.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBK2J4RGc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--b64b7f42a57c57f1e6be5ac43f8617a365b4da5a/66-alx-aice-ai-career-essentials-certificate-wilfred-tinega.png"></a> [2024] Grade: Credit</div>
      </div>
      <div className="wraper">
        <img src={Assests.react} alt="" />
        <div>KESAP research centre [2022] Grade: Credit</div>
      </div>
    </div>
  )
}
