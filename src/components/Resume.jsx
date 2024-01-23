// Resume.jsx

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
        <li>Proficiency 1</li>
        <li>Proficiency 2</li>
        {/* Add more proficiencies... */}
      </ul>
    </section>
  );
}

export default Resume;
