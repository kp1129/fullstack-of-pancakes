import React from "react";
import { NavLink } from 'react-router-dom';
import ModeToggle from './ModeToggle';

function Header() {
  return (
    <div className="header">
      <div className="theme-toggle">
          {/* <ModeToggle /> */}
      </div>
      <div className="navbar">
        <NavLink exact to="/">
          HOME
        </NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/projects">PROJECTS</NavLink>
        <NavLink to="/connect">CONNECT</NavLink>
        <a href="https://my.searchlight.ai/katya.p.1129" target="_blank">REFERENCES</a>
      </div>
    </div>
  );
}

export default Header;
