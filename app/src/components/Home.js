import React, { useEffect } from "react";
import mountainRange from "../images/mountainrange1.png";
import '../css/Home.css';

function Home() {
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

      document.querySelector(".home").append(star);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      make_stars();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
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
