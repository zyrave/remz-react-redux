import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavigationBar = ({ children }) => (
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <Link to="/" className="navbar-brand">
        Red Dice
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto" />
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/signup" className="nav-link">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    <main role="main">{children}</main>
  </div>
);

NavigationBar.propTypes = {
  children: PropTypes.object.isRequired,
};

export default NavigationBar;
