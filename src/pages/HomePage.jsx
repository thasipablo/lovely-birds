import React from 'react';
import { BirdsSpeciesList } from '../components';
import Navigation from '../components/Navigation';

const HomePage = () => (
  <div className="app">
    <Navigation />
    <BirdsSpeciesList />
  </div>
);

export default HomePage;
