import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';

const App = () => (
  <Router>
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details">
          <Route path=":id" element={<DetailsPage />} />
        </Route>
      </Routes>
    </div>
  </Router>
);

export default App;
