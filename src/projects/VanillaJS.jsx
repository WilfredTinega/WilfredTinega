import React from 'react';

function VanillaJS() {
  const projects = [
    {
      title: 'Text To Speech',
      link: 'https://getspeechfromtextinstantly.netlify.app/',
      stacks: ['Javascript', 'SASS', 'CSS3', 'HTML5'],
    },
    {
      title: 'Image Search Engine',
      link: 'https://quality-image-search-engine.netlify.app/',
      stacks: ['Javascript', 'Rest API', 'SASS', 'CSS3', 'HTML5'],
    },
    {
      title: 'Digital Clock',
      link: 'https://dijitooclock.netlify.app/',
      stacks: ['Javascript', 'SASS', 'CSS3', 'HTML5'],
    },
    {
      title: 'To Do List App',
      link: 'https://to-do-li-st-app.netlify.app/',
      stacks: ['Javascript', 'SASS', 'CSS3', 'HTML5'],
    },
  ];

  return (
    <div className="projects-page bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Vanilla JS Projects</h1>
      <div className="projects grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="project-box bg-white shadow-lg rounded-lg p-4">
            <div className={`wrapper bg-blue-500 text-white rounded-lg p-6 mb-4`}>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-300"
              >
                View Project
              </a>
            </div>
            <div className="projects-stacks flex flex-wrap gap-2">
              {project.stacks.map((stack, i) => (
                <span key={i} className="bg-gray-200 text-gray-700 px-2 py-1 rounded">
                  {stack}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VanillaJS;
