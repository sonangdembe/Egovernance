

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to the Home Page</h2>
      <h3>Water payment integrations system using Khalti API</h3>
      <p>Please <Link to="/login" className="action-link">login</Link>/<Link to="/signup" className="action-link">sign up</Link> to continue.</p>
    </div>
  );
};

export default Home;
