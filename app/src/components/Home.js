import React, { useEffect } from "react";
import mountainRange from "../images/mountainrange1.png";
import "../css/Home.css";

function Home({ darkMode }) {
  // function to generate stars
  const make_stars = () => {
    for (let i = 0; i <= 99; i++) {
      let star = document.createElement("i");
      // random x and y coordinates
      let x = Math.floor(Math.random() * window.innerWidth);
      let y = Math.floor(Math.random() * (window.innerHeight * 0.4));
      // control duration of css animation
      let duration = Math.random() * 10;
      // star size
      let size = Math.random() * 1.5;
      // style the star element
      star.style.left = x + "px";
      star.style.top = y + "px";
      star.style.width = 1 + size + "px";
      star.style.height = 1 + size + "px";
      star.style.animationDuration = 2 + duration + "s";
      // append to the DOM
      document.querySelector(".home").append(star);
    }
  };

  useEffect(() => {
    // controls adding stars to the page 
    // 1 second after component mounts
    const timer = setTimeout(() => {
      make_stars();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // controls light/dark mode styling
    const styleHomeAnimation = document.getElementsByClassName("home")[0].style;

    if (darkMode) {
      styleHomeAnimation.backgroundImage =
        "linear-gradient(180deg, #000, #1e1e2e, #26324f)";
      styleHomeAnimation.webkitBackgroundImage =
        "linear-gradient(180deg, #000, #1e1e2e, #26324f)";
    } else {
      styleHomeAnimation.backgroundImage =
        "linear-gradient(180deg, #3e1851, #b65d9b, #fdbca2, #fe9677)";
      styleHomeAnimation.webkitBackgroundImage =
        "linear-gradient(180deg, #3e1851, #b65d9b, #fdbca2, #fe9677)";
    }
  }, [darkMode]);

  return (
    <div className="home">
      <h1 className="animate__animated animate__pulse">
        Hi! I'm Katya and I'm a software engineer!
      </h1>
      <img
        className="mountain1 animate__animated animate__fadeInBottomRight"
        src={mountainRange}
        alt="moutain range"
      />
      <img className="mountain2" src={mountainRange} alt="moutain range" />
    </div>
  );
}

export default Home;
