// Portfolio.jsx

import React from 'react';
import Project from './Project';

function Portfolio() {
  // Define data for each project
  const projects = [
    {
      title: 'Password Generator',
      image: 'path/to/project1.jpg',
      deployedLink: 'https://daviddelarosa210.github.io/Module-3-Challange/',
      githubLink: 'https://github.com/daviddelarosa210/Password-Generator.git',
    },
    {
      title: 'Work Day Scheduler',
      image: 'path/to/project1.jpg',
      deployedLink: 'https://daviddelarosa210.github.io/Work-Day-Scheduler/',
      githubLink: 'https://github.com/daviddelarosa210/Work-Day-Scheduler.git',
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
