import React from 'react';

const ContactContainer = () => {
    return (
        <div className="contact-container">
            
           
            <div className="contact-header">
            <h3>Contact</h3>
            <div>
          <a href="https://twitter.com/katyain321" target="_blank" rel="noopener noreferrer">
        <img  className="social-media-btn"  src={require("../images/twitter.png")} alt="twitter" />
        </a>
          <a href="https://www.linkedin.com/in/katyapavlopoulos/" target="_blank" rel="noopener noreferrer">
        <img className="social-media-btn" src={require("../images/linkedin.png")} alt="linkedin" /></a>

        <a href="https://github.com/kp1129" target="_blank" rel="noopener noreferrer">
        <img className="social-media-btn"src={require("../images/github.png")} alt="github" /></a>
        </div>
        
      </div> 
      <p>If you want to connect with me on social media, I'm fairly active on Twitter, LinkedIn, and of course GitHub.</p>

      <p>To contact me with regards to new opportunities, you can email me at katya.p.1129 AT gmail DOT com.</p>

      <p>You can also reach me at 480 - 420 - 7378 (call or text is fine).</p>
        </div>
    )
}

export default ContactContainer;