import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot } from '@fortawesome/free-solid-svg-icons'
import  { faTerminal } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <nav id="nav">
      <ul>
        <li>
          <Link to="/" className="raulwwq0-button-1">
          <FontAwesomeIcon icon={faRobot} />
          
            <span>  Home</span>
          </Link>
        </li>
        <li>
          <Link to="/#portfolio-section" className="raulwwq0-button-1">
          <FontAwesomeIcon icon={faTerminal} />
            <span>  Portfolio</span>
          </Link>
        </li>
        <li>
          <Link to="/services" className="raulwwq0-button-1">
          <span>  Services</span>
          </Link>
        </li>
        <li>
          <Link to="/contact" className="raulwwq0-button-1">
            <span>  Contact</span>
          </Link>
        </li>

      </ul>
    </nav>
  );
};

export default NavBar;