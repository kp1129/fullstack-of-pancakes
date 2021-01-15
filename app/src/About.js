import React from "react";
import { Tweet } from "react-twitter-widgets";
import photo1 from "./images/photo1.jpg";
import photo2 from "./images/photo2.jpg";
import photo3 from "./images/photo3.jpg";

function About() {
  return (
    <div className="about">
      <h2>
        About Me (feat. a few emojis{" "}
        <span role="img" aria-label="dizzy">
          💫
        </span>
        )
      </h2>

      <p>
        <span role="img" aria-label="cactus">
          🌵
        </span>{" "}
        I'm based in the sunny Phoenix, Arizona, and I build full stack apps.
      </p>

      <div className="photos">        
        <img src={photo1} />
        <img src={photo2} />
        <img src={photo3} />
      </div>

      <p>
        My path into tech was a bit nontraditional.{" "}
        <span role="img" aria-label="graduation cap">
          🎓
        </span>
        Like many college students, all I knew for sure was that I wanted to
        help people. I picked psychology as my major because, frankly, humans
        are fascinating. I thought I could fulfill my desire to help people by
        becoming a therapist. I soon realized that helping people was only part
        of the puzzle; what I really wanted to do was to research the things we
        still barely understand and to do something about all the unanswered
        questions...
        <span role="img" aria-label="face with monocle">
          🧐
        </span>
      </p>

      <p>
        My desire to explore and innovate brought me to work at Y Combinator
        startups{" "}
        <span role="img" aria-label="unicorn">
          🦄
        </span>
        . There, I helped grow superstar teams that were truly building the
        future! I caught the programming bug instantly.{" "}
        <span role="img" aria-label="laptop">
          💻
        </span>
        I began taking computer science and programming classes in my free time,
        and soon I was on my way to Lambda School, a year-long code bootcamp
        that teaches full stack JavaScript development, computer science
        fundamentals, and includes a hackathon-style internship.
      </p>

      {/* <div className="tweet"> */}
      <Tweet className="my-tweet" tweetId="1253452257074352128" />
      {/* </div> */}

      <p>
        Outside of writing code, I like to travel and I read a ton of books.{" "}
        <span role="img" aria-label="stack of books">
          📚
        </span>
        My record so far is 116 books in one year (it was a crazy year). I'm
        always interested in learning, exploring the unknown, pushing the
        boundaries of what's possible, and helping people by building the tech
        of the future.{" "}
        <span role="img" aria-label="rocket ship">
          🚀
        </span>
      </p>
    </div>
  );
}

export default About;
