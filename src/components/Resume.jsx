import React from 'react';

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      {/* Link to downloadable resume */}
      <a href="path/to/resume.pdf" download>
        Download Resume
      </a>
      {/* List of proficiencies */}
      <ul>
        <li>Front-end technologies: HTML, CSS, JavaScript, React, etc.</li>
        <li>Back-end technologies: Node.js, Express, MongoDB, etc.</li>
        <li>Database management: MySQL, MongoDB, etc.</li>
        <li>API development and consumption</li>
        <li>Version control with Git</li>
        {/* Add more proficiencies... */}
      </ul>
    </section>
  );
}

export default Resume;
