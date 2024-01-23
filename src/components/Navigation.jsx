import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const activeLinkStyle = {
    fontWeight: 'bold',
    color: '#ff9900', // Example color for the active link
  };

  return (
    <nav>
      <ul>
        <li><NavLink exact to="/" activeStyle={activeLinkStyle}>About Me</NavLink></li>
        <li><NavLink to="/portfolio" activeStyle={activeLinkStyle}>Portfolio</NavLink></li>
        <li><NavLink to="/contact" activeStyle={activeLinkStyle}>Contact</NavLink></li>
        <li><NavLink to="/resume" activeStyle={activeLinkStyle}>Resume</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigation;
