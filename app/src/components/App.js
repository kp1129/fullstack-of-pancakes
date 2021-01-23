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
  // controls dark mode throughout the app
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // controls light/dark mode styling
    const styleBody = document.body.style;   

    if (darkMode) {
      styleBody.backgroundColor = "#000";
      styleBody.color = "#fff";
    } else {
      styleBody.backgroundColor = "#fff";
      styleBody.color = "#000";
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
            <Home darkMode={darkMode} />
            <Skills />
          </Route>
        </Switch>
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App;
