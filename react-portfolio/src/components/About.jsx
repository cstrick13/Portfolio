import React from 'react';
import './About.css'; // You can add custom styling in a separate CSS file

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h1>About Me</h1>
        <p>Hello! I'm Cory, a passionate developer specializing in front-end technologies like React.</p>
        <p>
          I have experience building dynamic web applications and enjoy solving complex problems through code.
          In my spare time, I like to learn about new technologies, explore creative solutions, and collaborate on open-source projects.
        </p>
        <h2>Skills</h2>
        <ul>
          <li>React.js</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML5 & CSS3</li>
          <li>Node.js</li>
          <li>Git & GitHub</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
