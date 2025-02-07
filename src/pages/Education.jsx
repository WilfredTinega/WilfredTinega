import React from 'react';
import { Assests } from '../assets/Assests';

export default function Education() {
  return (
    <div className="education-page bg-gray-900 text-white py-8 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0ea5e9] flex items-center mb-8">
        <i className="bi-code-slash mr-2"></i>Education
      </h2>

      <div className="education-content space-y-8">
        {/* Murang'a University of Technology */}
        <div className="wraper flex flex-col md:flex-row bg-gray-800 p-4 rounded-lg shadow-lg">
          <img
            className="w-full md:w-48 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
            src="https://th.bing.com/th/id/R.3df13e64fa53fd5583865778aa3afe53?rik=nVAarwz0KwS3jg&pid=ImgRaw&r=0"
            alt="Murang'a University Logo"
          />
          <div>
            <p className="text-lg font-medium mb-2">
              Murang'a University of Technology [2025]
            </p>
            <p className="text-gray-300 italic">Grade: Pending</p>
          </div>
        </div>

        {/* ALX AiCE Career Essentials */}
        <div className="wraper flex flex-col md:flex-row bg-gray-800 p-4 rounded-lg shadow-lg">
          <img
            className="w-full md:w-48 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
            src="https://admissions.alxafrica.com/alx_icon-300x169.png"
            alt="ALX Logo"
          />
          <div>
            <p className="text-lg font-medium mb-2">
              ALX AiCE Career Essentials [2024]
            </p>
            <p className="text-gray-300 italic">Grade: Credit</p>
            <a
              className="text-[#f778ba] hover:underline flex items-center mt-2"
              href="https://intranet.alxswe.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBK2J4RGc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--b64b7f42a57c57f1e6be5ac43f8617a365b4da5a/66-alx-aice-ai-career-essentials-certificate-wilfred-tinega.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate <i className="bi-box-arrow-up-right ml-2"></i>
            </a>
          </div>
        </div>

        {/* KESAP Research Centre */}
        <div className="wraper flex flex-col md:flex-row bg-gray-800 p-4 rounded-lg shadow-lg">
          <img
            className="w-full md:w-48 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
            src={Assests.react}
            alt="KESAP Logo"
          />
          <div>
            <p className="text-lg font-medium mb-2">
              KESAP Research Centre [2022]
            </p>
            <p className="text-gray-300 italic">Grade: Credit</p>
          </div>
        </div>
      </div>
    </div>
  );
}
