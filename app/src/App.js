import React, { useEffect } from "react";

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
  return (
    <Router>
      <div className="app">
        <Header />
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
