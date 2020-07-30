import React from 'react';
import './App.css';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Yoda from './components/Yoda';

function App() {
  return (
    <div className="App">
      <h1>Git Branching / Merge Practice</h1>
      <p>Let's practice fantastic Git Branching and Merging</p>
      <About />
      <Services />
      <Contact />
      <Yoda />
    </div>
  );
}

export default App;
