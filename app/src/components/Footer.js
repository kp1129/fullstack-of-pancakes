import React, { useEffect } from "react";
import '../css/Footer.css';

function Footer({ darkMode }) {

  useEffect(() => {
    const styleFooter = document.getElementsByClassName("footer")[0].style;
    
    if (darkMode) {
      styleFooter.backgroundColor = "transparent";
      styleFooter.color = "#fff"
    } else {
      styleFooter.backgroundColor = "#fdbaa0";
      styleFooter.color = "#000";
    }
  }, [darkMode])
    
  return (
    <div className="footer">
      <p>
        <a
          href="https://twitter.com/katyain321"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter 
        </a>
        {" "}|{" "}
        <a
          href="https://www.linkedin.com/in/katyapavlopoulos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        {" "}|{" "}
        <a
          href="https://github.com/kp1129"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        {" "}|{" "}
        <a
          href="https://dev.to/kp1129"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dev.to
        </a>        
      </p>
      <p>
        ©2021. Built with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        by me
      </p>      
    </div>
  );
}

export default Footer;
