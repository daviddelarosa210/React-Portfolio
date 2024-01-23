// Project.jsx

import React from 'react';

function Project({ title, image, deployedLink, githubLink }) {
  return (
    <div>
      <h3>{title}</h3>
      {/* Add an image */}
      <img src={image} alt={title} />
      {/* Add links to deployed app and GitHub repository */}
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">
        Deployed App
      </a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        GitHub Repository
      </a>
    </div>
  );
}

export default Project;
