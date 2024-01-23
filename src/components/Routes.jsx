// Routes.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="./AboutMe" element={<AboutMe />} />
        <Route path="./Portfolio" element={<Portfolio />} />
        <Route path="./Contact" element={<Contact />} />
        <Route path="./Resume" element={<Resume />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
