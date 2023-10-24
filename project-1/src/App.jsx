


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

export const App = () => {
  return (
    <>
     <Navbar />
     <Hero />
    </>
  );
};

export default App;
