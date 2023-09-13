import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';

const App = () => (
  <Router>
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bird-details" element={<DetailsPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;
