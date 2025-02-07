import React from 'react';

export default function Experience() {
  return (
    <div className="experience-page bg-black text-white p-6 md:p-12">
      <h1 className="text-3xl md:text-4xl font-bold text-[#0ea5e9] flex items-center mb-8">
        <i className="bi-code-slash mr-2"></i>Experience
      </h1>
      
      <div className="experience-content space-y-8">
        {/* Kenya Power */}
        <div className="wraper flex flex-col md:flex-row bg-gray-800 p-4 rounded-lg shadow-lg">
          <img
            className="w-full md:w-48 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
            src="https://th.bing.com/th/id/R.02f776141c81928c0f6c284a166311f4?rik=GB%2bw9Hks8AemNw&pid=ImgRaw&r=0&sres=1&sresct=1"
            alt="Kenya Power"
          />
          <div>
            <p className="text-lg font-medium mb-2">
              Kenya Power and Lighting Company (May - July 2024) Industrial Attachment
            </p>
            <div>
              <h4 className="text-xl font-semibold text-[#f778ba] mb-2">Skills Learned</h4>
              <ul className="list-disc ml-6 text-gray-300">
                <li>Maintenance of Transformers</li>
                <li>Maintenance of LV and HV/MV lines</li>
                <li>Temporary Breakdown Troubleshooting</li>
                <li>Breakdown Handling</li>
                <li>3-phase and single-phase meter installation</li>
                <li>Trace Maintenance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Brookside Dairy */}
        <div className="wraper flex flex-col md:flex-row bg-gray-800 p-4 rounded-lg shadow-lg">
          <img
            className="w-full md:w-48 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
            src="https://th.bing.com/th/id/OIP.2B476N9uH1XdWlBYoIshnQAAAA?rs=1&pid=ImgDetMain"
            alt="Brookside Dairy"
          />
          <div>
            <p className="text-lg font-medium mb-2">
              Brookside Dairy Ltd (July 2023 - August 2023) Industrial Attachment
            </p>
            <div>
              <h4 className="text-xl font-semibold text-[#f778ba] mb-2">Skills Learned</h4>
              <ul className="list-disc ml-6 text-gray-300">
                <li>Installation of Single-phase and three-phase motors</li>
                <li>Routine Maintenance of Filling and Packaging machines</li>
                <li>Breakdown Handling</li>
                <li>Troubleshooting</li>
                <li>Monitoring the machines</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Danny Electrical Solution */}
        <div className="wraper flex flex-col md:flex-row bg-gray-800 p-4 rounded-lg shadow-lg">
          <img
            className="w-full md:w-48 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
            src="https://th.bing.com/th/id/OIP.hVHli2jzinzA-qPcwXwILgHaHE?rs=1&pid=ImgDetMain"
            alt="Danny Electrical Solution"
          />
          <div>
            <p className="text-lg font-medium mb-2">
              Danny Electrical Solution (May - June 2023) Industrial Attachment
            </p>
            <div>
              <h4 className="text-xl font-semibold text-[#f778ba] mb-2">Skills Gained</h4>
              <ul className="list-disc ml-6 text-gray-300">
                <li>Installation of sockets, lamps/bulbs, switches</li>
                <li>Design of electrical drawings</li>
                <li>Installation of single-phase water pump</li>
                <li>Creating bill of quantities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
