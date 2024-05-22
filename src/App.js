// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateQuotePage from './pages/CreateQuotePage';
import './App.css';
import { inject } from '@vercel/analytics';

inject();

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create-quote">Create Quote</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-quote" element={<CreateQuotePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
