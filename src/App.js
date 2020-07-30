import React from 'react';
import './App.css';
import About from './components/About';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <h1>Git Branching / Merge Practice</h1>
      <p>Let's practice Git Branching and Merging</p>
      <About />
      <Services />
    </div>
  );
}

export default App;
