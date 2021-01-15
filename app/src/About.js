import React from "react";

function About() {
  return (
    <div className="about">
      <h3>About</h3>
      <br />
      <p>
        <span role="img" aria-label="cactus">
          🌵
        </span>{" "}
        I'm based in the sunny Phoenix, Arizona, and I build full stack apps.
      </p>
      <br />
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
        Heroku, Vercel, Netlify), and am learning mobile dev (
        <span role="img" aria-label="sparkles">
          ✨
        </span>
        Flutter).
      </p>
      <br />
      <p>
        My path into tech was a bit nontraditional. Like many college students,
        all I knew for sure was that I wanted to help people. I picked
        psychology as my major because, frankly, humans are fascinating. I
        thought I could fulfill my desire to help people by becoming a
        therapist. I soon realized that helping people was only part of the
        puzzle; what I really wanted to do was to research the things we still
        barely understand and to do something about all the unanswered
        questions...
        <span role="img" aria-label="face with monocle">
          🧐
        </span>
      </p>
      <br />
      <p>
        My desire to explore and innovate brought me to work at Y Combinator
        startups. There, I helped grow superstar teams that were truly building
        the future! I caught the programming bug instantly.{" "}
        <span role="img" aria-label="laptop">
          💻
        </span>
        I began taking computer science and programming classes in my free time,
        and soon I was on my way to Lambda School, a year-long code bootcamp
        that teaches full stack JavaScript development, computer science
        fundamentals, and includes a hackathon-style internship.
      </p>
      <br />
      <p>
        Outside of writing code, I like to travel and I read a ton of books.{" "}
        <span role="img" aria-label="stack of books">
          📚
        </span>
        My record so far is 116 books in one year (it was a crazy year). I'm
        interested in exploring the unknown, pushing the boundaries of what's
        possible, and helping people by building the tech of the future.
      </p>
    </div>
  );
}

export default About;
