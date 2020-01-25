import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nakazawa from './Nakazawa';
import Koga from './Koga';
import Header from './Header';

function App() {
  return (
    <div className="App">
    <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Koga/>
          Learn React
          <Nakazawa/>
        </a>
      </header>
    </div>
  );
}

export default App;
