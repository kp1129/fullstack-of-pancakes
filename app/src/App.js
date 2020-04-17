import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// components
import ParticlesContainer from './components/ParticlesContainer';
import Navbar from './components/Navbar';
import HomeContainer from './components/HomeContainer';
import AboutContainer from './components/AboutContainer';
import ProjectsContainer from './components/ProjectsContainer';
import ContactContainer from './components/ContactContainer';

// styles
import './App.css';

function App() {
  return (
    <Router>
      
    <div className="app">
      <ParticlesContainer />
      <Navbar />
      <Switch>
      <Route path="/contact"><ContactContainer /></Route>
      <Route path="/projects"><ProjectsContainer /></Route>
      <Route path="/about"><AboutContainer /></Route>
      <Route exact path="/"><HomeContainer /></Route> 
      </Switch>
    </div>
    </Router>
  );
}

export default App;
