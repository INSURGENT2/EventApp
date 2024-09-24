import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to EventApp</h1>
      <p>Your gateway to managing events seamlessly.</p>
      <div className="home-links">
        <Link to="/visitor" className="home-link">Visitor Login</Link>
        <Link to="/exhibitor" className="home-link">Exhibitor Login</Link>
      </div>
    </div>
  );
};

export default Home;
