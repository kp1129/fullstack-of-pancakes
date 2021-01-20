import React from "react";
import { NavLink } from "react-router-dom";

function Header({ darkMode, setDarkMode, setHome }) {
  const handleHomeClick = () => {
    setHome(true);
  };
  const handleNonHomeClick = () => {
    setHome(false);
  };
  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="header">
      {/* dark mode toggle */}
      <div
        onClick={handleClick}
        className={darkMode ? "theme-toggle toggled" : "theme-toggle"}
      >
        <div className="toggle"></div>
      </div>
      {/* navigation */}
      <div className="navbar">
        <NavLink onClick={handleHomeClick} exact to="/">
          HOME
        </NavLink>
        <NavLink onClick={handleNonHomeClick} to="/about">
          ABOUT
        </NavLink>
        <a
          href="https://dev.to/kp1129/building-conway-s-game-of-life-with-react-and-css-2l5m"
          target="_blank"
          rel="noopener noreferrer"
        >
          FEATURED CASE STUDY
        </a>
        
        <a href="https://github.com/kp1129"
          target="_blank"
          rel="noopener noreferrer"
        >
          PROJECTS ON GITHUB
        </a>
        
        <a
          href="https://my.searchlight.ai/katya.p.1129"
          target="_blank"
          rel="noopener noreferrer"
        >
          REFERENCES
        </a>
      </div>
    </div>
  );
}

export default Header;
