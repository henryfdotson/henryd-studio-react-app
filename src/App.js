import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import React, { useEffect, useState } from "react";
// Enable Routing
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// Import Boostrap Grid
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Import Dark Mode CSS
import './darkmode.css'

function App() {

  // Dark Mode Enable
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>Hello, world!</h1>
      <Router>
        <div>
          <Navigation />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
