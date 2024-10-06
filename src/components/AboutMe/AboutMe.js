import React from 'react';
import './AboutMe.css';
import CmdWindow from '../CmdWindow/CmdWindow';

const AboutMe = () => {
  return (
    <section id="about">
    <div className='cont'>
      
      <div id='image'><img src={require("../../images/your-photo.png")} alt="Your Photo" /></div>
      <h1>Web Automation and Scraping Expert</h1>
    </div>
    <div className='cont'>
      <CmdWindow />
    </div>
    </section>
 
  );
};

export default AboutMe;