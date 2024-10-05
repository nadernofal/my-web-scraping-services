import React from 'react';
import './AboutMe.css';
import CmdWindow from 'C:/Users/mn320/Desktop/myblog/src/components/CmdWindow/CmdWindow';
const AboutMe = () => {
  return (
    <section id="about">
    <div className='cont'>
      
      <div id='image'><img src={require("C:/Users/mn320/Desktop/myblog/src/images/your-photo.png")} alt="Your Photo" /></div>
      <h1>Web Automation and Scraping Expert</h1>
    </div>
    <div className='cont'>
      <CmdWindow />
    </div>
    </section>
 
  );
};

export default AboutMe;