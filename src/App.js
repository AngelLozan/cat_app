import React from 'react';
import logo from './cat.png';
import './App.css';
import Catz from './components/cats.js';


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>A Cat App</p>
      </header>
      <Catz />
    </div>
  );
}

export default App;
