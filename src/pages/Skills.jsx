import React from 'react';

export default function Skills() {
  return (
    <div className="skills-page bg-gray-100 min-h-screen p-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-blue-600 mb-6 flex items-center gap-2">
        <i className="bi bi-code-slash"></i>
        Skills
      </h1>

      {/* Skills Section */}
      <div className="skills grid md:grid-cols-3 gap-6">
        {/* Technical Skills */}
        <div className="skill bg-white shadow-lg rounded-lg p-4">
          <h4 className="text-xl font-semibold text-blue-500 mb-4">Technical Skills</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Building services and protection design</li>
            <li>Installation of 3-phase and single-phase motors</li>
            <li>Design and installation of DoL (Direct on Line)</li>
            <li>Design and installation of ATS/changeover switch</li>
            <li>Troubleshooting and maintenance of motors and wiring</li>
          </ul>
        </div>

        {/* Soft Skills */}
        <div className="skill bg-white shadow-lg rounded-lg p-4">
          <h4 className="text-xl font-semibold text-blue-500 mb-4">Soft Skills</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Microsoft Office Suite</li>
            <li>Circuit design</li>
            <li>3D/2D CAD</li>
            <li>Embedded system programming</li>
          </ul>
        </div>

        {/* Other Skills */}
        <div className="skill bg-white shadow-lg rounded-lg p-4">
          <h4 className="text-xl font-semibold text-blue-500 mb-4">Other Skills</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Front-end web development</li>
            <li>C programming language</li>
            <li>C++ programming language</li>
            <li>Assembly language programming</li>
            <li>Python programming</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
