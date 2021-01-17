import React from "react";
import { NavLink } from "react-router-dom";

function Header({ darkMode, setDarkMode, setHome }) {
  const handleHomeClick = () => {
    setHome(true);
  }
  const handleNonHomeClick = () => {
    setHome(false);
  }
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
        <NavLink onClick={handleNonHomeClick} to="/about">ABOUT</NavLink>
        <NavLink onClick={handleNonHomeClick} to="/projects">PROJECTS</NavLink>
        <NavLink onClick={handleNonHomeClick} to="/connect">CONNECT</NavLink>
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
