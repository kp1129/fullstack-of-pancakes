import React from 'react';
import { NavLink } from 'react-router-dom';

const AboutContainer = () => {
    return (
        <div className="about-container">
           <h3>About</h3>
           <br/>
           <p>Hi! My name is Katya and I'm a fullstack engineer based in the sunny Phoenix, Arizona.</p>
           <br/>
           <p>My path into software development was a bit nontraditional. In college, I majored in psychology. The program was research-heavy, and I got to design, run, analyze, and present numerous correlational and experimental studies with human participants.</p>
           <br/>
           <p>After graduation, I ended up working in operations/HR capacity at San Francisco-based startups. There, I interviewed software engineers and helped grow superstar teams that got to build the coolest stuff! This almost supernatural ability that programmers have to build incredible tech is what got me interested in software engineering in the first place, and what keeps me excited to this day.</p>
           <br/>
           <p>To learn code, I attended Lambda School, which is a computer science academy that trains fullstack developers through a mastery-based progression program. Check out the <NavLink className="view-projects-tab" to="/projects">PROJECTS</NavLink> tab for some examples of my work.</p>
        </div>
    )
}

export default AboutContainer;