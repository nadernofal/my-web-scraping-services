import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutMe from '../../components/AboutMe/AboutMe';
import Portfolio from '../../components/Portfolio/Portfolio';
import Reviews from '../../components/Reviews/Reviews';
import Contact from '../../components/Contact/Contact';
import Nav from '../../components/Nav/Nav';
import Services from '../../components/Services/Services.js'
import './App.css';
const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={
                  <div>
                  <AboutMe />
                  <Portfolio />
                  <Reviews />
                </div>
      
        } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services/>}/>
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;