import React, { useEffect } from "react";
import mountainRange from "./images/mountainrange1.png";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

// components
import ParticlesContainer from "./components/ParticlesContainer";
import Navbar from "./components/Navbar";
import HomeContainer from "./components/HomeContainer";
import AboutContainer from "./components/AboutContainer";
import ProjectsContainer from "./components/ProjectsContainer";
import ContactContainer from "./components/ContactContainer";

import Footer from './Footer';

// styles
import "./App.css";
import "animate.css";

function App() {
  const make_stars = () => {
    for (let i = 0; i <= 99; i++) {
      let star = document.createElement("i");
      let x = Math.floor(Math.random() * window.innerWidth);
      let y = Math.floor(Math.random() * (window.innerHeight * 0.4));
      let duration = Math.random() * 10;
      let size = Math.random() * 1.5;

      star.style.left = x + "px";
      star.style.top = y + "px";
      star.style.width = 1 + size + "px";
      star.style.height = 1 + size + "px";
      star.style.animationDuration = 2 + duration + "s";

      document.querySelector(".view").append(star);
    }
  };

  useEffect(() => {
    make_stars();
  }, []);

  return (
    <Router>
    <div className="app">
      <div className="header">
        <div className="theme-toggle">
          toggle will go here
        </div>
      <div className="navbar">
            <NavLink exact to="/">HOME</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/projects">PROJECTS</NavLink>
            <NavLink to="/contact">CONTACT</NavLink>           
        </div>
      </div>
      <div className="view">
        <h1 class="animate__animated animate__pulse">
          Hi! I'm Katya and I'm a software engineer!
        </h1>
        <img
          className="mountain1 animate__animated animate__fadeInBottomRight"
          src={mountainRange}
        />
        <img className="mountain2" src={mountainRange} />
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
