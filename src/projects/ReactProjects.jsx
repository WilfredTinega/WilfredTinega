import React from 'react';

function ReactProjects() {
  return (
    <div className="projects-page bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">React Projects</h1>
      <div className="projects grid gap-6 md:grid-cols-2">
        
        {/* Gemini AI Project */}
        <div className="project-box bg-white shadow-lg rounded-lg p-4">
          <div className="wrapper bg-blue-500 text-white rounded-lg p-6 mb-4">
            <h3 className="text-xl font-semibold">Gemini AI</h3>
            <a
              href="https://aicemamboleo.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-300"
            >
              View Project
            </a>
          </div>
          <div className="projects-stacks flex flex-wrap gap-2">
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">React</span>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">Gemini API</span>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">SASS</span>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">CSS3</span>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">HTML5</span>
          </div>
        </div>

        {/* Murang'a University of Technology Project */}
        <div className="project-box bg-white shadow-lg rounded-lg p-4">
          <div className="wrapper bg-green-500 text-white rounded-lg p-6 mb-4">
            <h3 className="text-xl font-semibold">Murang'a University of Technology</h3>
            <a
              href="https://mutportal.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-green-300"
            >
              View Project
            </a>
          </div>
          <div className="projects-stacks flex flex-wrap gap-2">
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">React</span>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">SASS</span>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">CSS3</span>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">HTML5</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReactProjects;
