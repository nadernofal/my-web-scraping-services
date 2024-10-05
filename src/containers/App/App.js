import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutMe from 'C:/Users/mn320/Desktop/myblog/src/components/AboutMe/AboutMe';
import Portfolio from 'C:/Users/mn320/Desktop/myblog/src/components/Portfolio/Portfolio';
import Reviews from 'C:/Users/mn320/Desktop/myblog/src/components/Reviews/Reviews';
import Contact from 'C:/Users/mn320/Desktop/myblog/src/components/Contact/Contact';
import Nav from 'C:/Users/mn320/Desktop/myblog/src/components/Nav/Nav';
import Services from 'C:/Users/mn320/Desktop/myblog/src/components/Services/Services.js'
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