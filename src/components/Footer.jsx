// Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer>
      {/* Add your footer content here */}
      <p>&copy; 2024 David's Resume</p>
      {/* Text links to GitHub and LinkedIn */}
      <div>
        <a href="https://github.com/daviddelarosa210" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {' | '}
        <a href="https://www.linkedin.com/in/david-de-la-rosa-b0150b177/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
