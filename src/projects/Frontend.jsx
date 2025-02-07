import React from 'react';
import ReactProjects from './ReactProjects';
import VanillaJS from './VanillaJS';

function Frontend() {
  return (
    <div className="frontend-projects-page">
      <div className="projects-container">
        <section className="react-projects-section mb-10">
          <ReactProjects />
        </section>
        <section className="vanilla-projects-section">
          <VanillaJS />
        </section>
      </div>
    </div>
  );
}

export default Frontend;
