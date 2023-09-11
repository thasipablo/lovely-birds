import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BirdDetails from './pages/Categories';
import Home from './pages/Home';

const App = () => (
  <Router>
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bird-details" element={<BirdDetails />} />
      </Routes>
    </div>
  </Router>
);

export default App;
