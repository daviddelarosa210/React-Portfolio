// Portfolio.jsx

import React from 'react';
import Project from './Project';

function Portfolio() {
  // Define data for each project
  const projects = [
    {
      title: 'Project 1',
      image: 'path/to/project1.jpg',
      deployedLink: 'https://example.com/project1',
      githubLink: 'https://github.com/example/project1',
    },
    // Add data for other projects...
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      {/* Map through projects and render Project component */}
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
}

export default Portfolio;
