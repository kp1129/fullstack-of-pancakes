import React from "react";
import { Link } from 'react-router-dom';

const HomeContainer = () => {
  return (
    <div className="home-container">
      <h1>Katya Pavlopoulos</h1>
      <h2>Fullstack Engineer</h2>
      <Link className="view-projects-btn" to="/projects">VIEW PROJECTS</Link>
    </div>
  );
};


export default HomeContainer;
