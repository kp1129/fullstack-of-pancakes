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
        <figure>
          <img src={photo1} alt="monsoon clouds over mountains" />
          <figcaption>snapped this on a hike in Tucson</figcaption>
        </figure>
        <figure>
          <img src={photo2} alt="sunset in the desert" />
          <figcaption>an epic place to watch sunsets</figcaption>
        </figure>
        <figure>
          <img
            src={photo3}
            alt="Downtown Phoenix from the window of an airplane"
          />
          <figcaption>
            Phoenix from above
            <span role="img" aria-label="heart">
              ❤️
            </span>
          </figcaption>
        </figure>
      </div>

      <p>
        My path into tech was a bit nontraditional.{" "}
        <span role="img" aria-label="graduation cap">
          🎓
        </span>
        Like many college students, all I knew for sure was that I wanted to
        help people. I thought I could fulfill that desire by becoming a
        psychologist. Soon I realized that helping people was only part of the
        puzzle;{" "}
        <span role="img" aria-label="face with monocle">
          🧐
        </span>
        what I really wanted was to delve into research, to create more
        effective solutions, and to make sense of the things we still barely
        understand.
      </p>

      <p>
        My desire to explore and innovate brought me to work at Y Combinator
        startups.{" "}
        <span role="img" aria-label="unicorn">
          🦄
        </span>
        There, I helped grow superstar teams that were truly building the
        future! I caught the programming bug instantly.{" "}
        <span role="img" aria-label="laptop">
          💻
        </span>
        I began taking computer science and programming classes in my free time,
        and soon I was on my way to Lambda School, a year-long code bootcamp
        that teaches full stack JavaScript development, computer science
        fundamentals, and includes a hackathon-style internship.
      </p>

      <Tweet className="my-tweet" tweetId="1253452257074352128" />

      <p>
        Outside of writing code, I like to travel and I read a ton of books.{" "}
        <span role="img" aria-label="stack of books">
          📚
        </span>
        My record so far is 116 books in one year (it was a crazy year). I'm
        always exploring something new, and I want to help people by building
        the tech of the future.{" "}
        <span role="img" aria-label="rocket ship">
          🚀
        </span>
      </p>      
    </div>
  );
}

export default About;
