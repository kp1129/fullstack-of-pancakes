import React from "react";
import { NavLink } from "react-router-dom";

function Header({ darkMode, setDarkMode }) {
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
        <NavLink exact to="/">
          HOME
        </NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/projects">PROJECTS</NavLink>
        <NavLink to="/connect">CONNECT</NavLink>
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
