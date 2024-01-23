// Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer>
      {/* Add your footer content here */}
      <p>&copy; 2024 Your Website Name</p>
      {/* Text links to GitHub and LinkedIn */}
      <div>
        <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {' | '}
        <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
