import React from 'react';
import mountainRange from './images/mountainrange1.png'
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
import 'animate.css';

function App() {
  return (
    <div className="view">
      <img className="mountain1 animate__animated animate__fadeInBottomRight" src={mountainRange} />
  <img className="mountain2" src={mountainRange} />  

    </div>
    // <Router>
      
    // <div className="app">
    //   <ParticlesContainer />
    //   <Navbar />
    //   <Switch>
    //   <Route path="/contact"><ContactContainer /></Route>
    //   <Route path="/projects"><ProjectsContainer /></Route>
    //   <Route path="/about"><AboutContainer /></Route>
    //   <Route exact path="/"><HomeContainer /></Route> 
    //   </Switch>
    // </div>
    // </Router>
  );
}

export default App;
