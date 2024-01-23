// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer'; // Import the Footer component

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          {/* Default route for About Me */}
          <Route path="/">
            <AboutMe />
          </Route>
        </Switch>

        {/* Include the Footer component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
