import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import '../css/Header.css';

function Header({ darkMode, setDarkMode }) {
  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const styleHeader = document.getElementsByClassName("header")[0].style;
    if (darkMode){
      styleHeader.backgroundColor = "transparent";
    }
    else {
      styleHeader.backgroundColor = "#3e1851";
    }
  }, [darkMode])

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
        <NavLink to="/about">
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
