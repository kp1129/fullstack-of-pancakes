import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

// components
import ParticlesContainer from "./components/ParticlesContainer";
import Navbar from "./components/Navbar";
import HomeContainer from "./components/HomeContainer";
import AboutContainer from "./components/AboutContainer";
import ProjectsContainer from "./components/ProjectsContainer";
import ContactContainer from "./components/ContactContainer";

import Header from "./Header";
import Home from "./Home";
import Skills from "./Skills";
import About from "./About";
import Footer from "./Footer";

// styles
import "./App.css";
import "animate.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const styleBody = document.body.style;
    const links = document.getElementsByTagName("a");
    if (darkMode) {
      styleBody.backgroundColor = "#000";
      styleBody.color = "#fff";
      for (let i = 0; i < links.length; i++){
        links[i].style.color = "#fff";
      }
    } else {
      styleBody.backgroundColor = "#fff";
      styleBody.color = "#000";
      for (let i = 0; i < links.length; i++){
        links[i].style.color = "#000";
      }
    }
  }, [darkMode]);
  return (
    <Router>
      <div className="app">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
            <Skills />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
