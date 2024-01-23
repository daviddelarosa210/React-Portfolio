// Portfolio.jsx

import React from 'react';
import Project from './Project';

function Portfolio() {
  // Define data for each project
  const projects = [
    {
      title: 'Password Generator',
      image: '/Screen Shot 2023-09-10 at 9.25.47 PM.png',
      deployedLink: 'https://daviddelarosa210.github.io/Module-3-Challange/',
      githubLink: 'https://github.com/daviddelarosa210/Password-Generator.git',
    },
    {
      title: 'Work Day Scheduler',
      image: '/Work-scheduler.png',
      deployedLink: 'https://daviddelarosa210.github.io/Work-Day-Scheduler/',
      githubLink: 'https://github.com/daviddelarosa210/Work-Day-Scheduler.git',
    },
    {
      title: 'Thunder Jamz',
      image: '/Screenshot 2024-01-23 at 1.36.21 PM.png',
      deployedLink: 'https://lillyw54.github.io/weatherbasedapp/',
      githubLink: 'https://github.com/daviddelarosa210/weatherbaseapp.git',
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
