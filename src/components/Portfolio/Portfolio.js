import React from 'react';
import PortfolioItem from 'C:/Users/mn320/Desktop/myblog/src/components/PortfolioItem/PortfolioItem';
import './Portfolio.css'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Scraping Viator Web Site',
      description: ' Scrap the whole Viator listing for the Albania tours, the website includes JS bot detection, and my solution was to download the html content and do the scraping task offline after removing the included JS detectors functionality from the source code the whole process was automated using Selenium and Browsers extentions.',
      image: 'C:/Users/mn320/Desktop/myblog/src/images/viator.png',
      skills: ['Bot Development', 'Web Scraping Plugin', 'Web Scraping Framework'],
      details: (
        <div>
          <p>
            This project involved building a web scraper to extract product information from an e-commerce website. I used Selenium to navigate the website and Scrapy to extract the data. The scraper was able to extract product titles, prices, and descriptions, and store them in a SQLite database.
          </p>
          <ul>
            <li>Used Selenium to navigate the website and handle JavaScript-heavy pages</li>
            <li>Implemented Scrapy to extract data from the website</li>
            <li>Stored extracted data in a SQLite database</li>
          </ul>
        </div>
      ),
    },
    {
      id: 2,
      title: 'Web Automation Tool',
      description: 'Developed a web automation tool using Selenium and Python to automate tasks on a website.',
      image: 'images/project2.jpg',
      skills: ['Selenium', 'Python', 'IBM DB2'],
      details: (
        <div>
          <p>
            This project involved building a web automation tool to automate tasks on a website. I used Selenium to interact with the website and Python to write the automation script. The tool was able to automate tasks such as logging in, filling out forms, and clicking buttons.
          </p>
          <ul>
            <li>Used Selenium to interact with the website and handle JavaScript-heavy pages</li>
            <li>Implemented Python to write the automation script</li>
            <li>Stored automation results in an IBM DB2 database</li>
          </ul>
        </div>
      ),
    },
    {
      id: 3,
      title: 'Web Automation Tool',
      description: 'Developed a web automation tool using Selenium and Python to automate tasks on a website.',
      image: 'images/project2.jpg',
      skills: ['Selenium', 'Python', 'IBM DB2'],
      details: (
        <div>
          <p>
            This project involved building a web automation tool to automate tasks on a website. I used Selenium to interact with the website and Python to write the automation script. The tool was able to automate tasks such as logging in, filling out forms, and clicking buttons.
          </p>
          <ul>
            <li>Used Selenium to interact with the website and handle JavaScript-heavy pages</li>
            <li>Implemented Python to write the automation script</li>
            <li>Stored automation results in an IBM DB2 database</li>
          </ul>
        </div>
      ),
    },   {
      id: 4,
      title: 'Web Automation Tool',
      description: 'Developed a web automation tool using Selenium and Python to automate tasks on a website.',
      image: 'images/project2.jpg',
      skills: ['Selenium', 'Python', 'IBM DB2'],
      details: (
        <div>
          <p>
            This project involved building a web automation tool to automate tasks on a website. I used Selenium to interact with the website and Python to write the automation script. The tool was able to automate tasks such as logging in, filling out forms, and clicking buttons.
          </p>
          <ul>
            <li>Used Selenium to interact with the website and handle JavaScript-heavy pages</li>
            <li>Implemented Python to write the automation script</li>
            <li>Stored automation results in an IBM DB2 database</li>
          </ul>
        </div>
      ),
    },   {
      id: 5,
      title: 'Web Automation Tool',
      description: 'Developed a web automation tool using Selenium and Python to automate tasks on a website.',
      image: 'images/project2.jpg',
      skills: ['Selenium', 'Python', 'IBM DB2'],
      details: (
        <div>
          <p>
            This project involved building a web automation tool to automate tasks on a website. I used Selenium to interact with the website and Python to write the automation script. The tool was able to automate tasks such as logging in, filling out forms, and clicking buttons.
          </p>
          <ul>
            <li>Used Selenium to interact with the website and handle JavaScript-heavy pages</li>
            <li>Implemented Python to write the automation script</li>
            <li>Stored automation results in an IBM DB2 database</li>
          </ul>
        </div>
      ),
    },   {
      id: 6,
      title: 'Web Automation Tool',
      description: 'Developed a web automation tool using Selenium and Python to automate tasks on a website.',
      image: 'images/project2.jpg',
      skills: ['Selenium', 'Python', 'IBM DB2'],
      details: (
        <div>
          <p>
            This project involved building a web automation tool to automate tasks on a website. I used Selenium to interact with the website and Python to write the automation script. The tool was able to automate tasks such as logging in, filling out forms, and clicking buttons.
          </p>
          <ul>
            <li>Used Selenium to interact with the website and handle JavaScript-heavy pages</li>
            <li>Implemented Python to write the automation script</li>
            <li>Stored automation results in an IBM DB2 database</li>
          </ul>
        </div>
      ),
    },
    // Add more projects here
  ];

  return (
    <section id="portfolio-section">
      <h2 className="section-title">Portfolio</h2>
      <div className="container">
        
        <div className="portfolio-grid">
          {projects.map((project) => (
            <PortfolioItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;