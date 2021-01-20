import React from "react";
import '../css/Skills.css';

function Skills() {
  return (
    <div className="skills">
      <p>
        {" "}
        My favorite part of the stack is frontend (
        <span role="img" aria-label="sparkles">
          ✨
        </span>
        React, Redux, CSS, LESS/SASS, Bootstrap, Material UI, styled-components,
        etc) but I'm just as comfortable diving into backend (
        <span role="img" aria-label="sparkles">
          ✨
        </span>
        Node, Python), deploying (
        <span role="img" aria-label="sparkles">
          ✨
        </span>
        Heroku, Vercel, Netlify), and learning new tech on the go. Check out my projects on Github!
      </p>

    </div>
  );
}

export default Skills;
