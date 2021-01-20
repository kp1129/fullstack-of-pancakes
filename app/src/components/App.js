import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// styles
import "../App.css";
import "animate.css";

// components
import Header from "./Header";
import Home from "./Home";
import Skills from "./Skills";
import About from "./About";
import Footer from "./Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [home, setHome] = useState(true);

  useEffect(() => {
    const styleBody = document.body.style;
    const styleHomeAnimation = document.getElementsByClassName("home")[0]
      ?.style;
    const styleHeader = document.getElementsByClassName("header")[0].style;
    const styleFooter = document.getElementsByClassName("footer")[0].style;

    if (darkMode) {
      styleBody.backgroundColor = "#000";
      styleBody.color = "#fff";
      styleHeader.backgroundColor = "transparent";
      styleFooter.backgroundColor = "transparent";
      styleFooter.color = "#fff";
      if (home) {
        styleHomeAnimation.backgroundImage =
          "linear-gradient(180deg, #000, #1e1e2e, #26324f)";
        styleHomeAnimation.webkitBackgroundImage =
          "linear-gradient(180deg, #000, #1e1e2e, #26324f)";
      }
    } else if (!darkMode) {
      styleBody.backgroundColor = "#fff";
      styleBody.color = "#000";
      styleHeader.backgroundColor = "#3e1851";
      styleFooter.backgroundColor = "#fdbaa0";
      styleFooter.color = "#000";
      if (home) {
        styleHomeAnimation.backgroundImage =
          "linear-gradient(180deg, #3e1851, #b65d9b, #fdbca2, #fe9677)";
        styleHomeAnimation.webkitBackgroundImage =
          "linear-gradient(180deg, #3e1851, #b65d9b, #fdbca2, #fe9677)";
      }
    }
  }, [darkMode, home]);
  return (
    <Router>
      <div className="app">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} setHome={setHome}/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home  />
            <Skills />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
