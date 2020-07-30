import React from 'react';
import './App.css';
import About from './components/About';
import Services from './components/Services';
import Jarjar from './components/Jarjar';

function App() {
  return (
    <div className="App">
      <h1>Git Branching / Merge Practice</h1>
      <p>Let's practice Git Branching and Merging</p>
      <About />
      <Services />
      <Jarjar />
    </div>
  );
}

export default App;
