import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
    </Router>
  );
}

export default App;
