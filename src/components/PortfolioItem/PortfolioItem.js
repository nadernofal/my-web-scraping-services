import React from 'react';
import './PortfolioItem.css';

const PortfolioItem = ({ project }) => {
  const [showModal, setShowModal] = React.useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="portfolio-item">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <img src={require('C:/Users/mn320/Desktop/myblog/src/images/viator.png')} alt={project.title} />
      <button className="view-more-button" onClick={handleModalOpen}>View More</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-description">{project.description}</p>
            {project.details}
            <button className="close-button" onClick={handleModalClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioItem;