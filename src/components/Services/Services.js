import React, { useState } from 'react';
import './Services.css'; // Import the CSS for services layout
import ServiceModal from './ServiceModal'; // Import the pop-up modal component

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Reddit Scraping Service',
      description: 'Scrape Reddit for posts, comments, or both based on your custom criteria.',
      options: {
        outputFormats: ['CSV', 'JSON', 'XML'],
        contentTypes: ['Posts', 'Comments', 'Both'],
        keywordsRequired: true,
        maxRecords: true
      },
      imageSrc: 'images/reddit-scraping.jpg'
    },
    {
      id: 2,
      title: 'Web Automation Tool',
      description: 'Automate web interactions using Python and Selenium.',
      options: {
        outputFormats: ['CSV', 'JSON'],
        contentTypes: ['Both'],
        keywordsRequired: false,
        maxRecords: false
      },
      imageSrc: 'images/web-automation.jpg'
    },
    {
      id: 3,
      title: 'Custom Web Scraping',
      description: 'Tailor-made web scraping solutions for any website.',
      options: {
        outputFormats: ['CSV', 'JSON', 'XML', 'HTML'],
        contentTypes: ['Custom'],
        keywordsRequired: true,
        maxRecords: true
      },
      imageSrc: 'images/custom-scraping.jpg'
    }
  ];

  const handleOrder = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="services-section">
      <h2>My Web Scraping Services</h2>
      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.imageSrc} alt={service.title} className="service-thumbnail" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button onClick={() => handleOrder(service)}>Order Service</button>
          </div>
        ))}
      </div>

      {selectedService && (
        <ServiceModal service={selectedService} onClose={closeModal} />
      )}
    </div>
  );
};

export default Services;
