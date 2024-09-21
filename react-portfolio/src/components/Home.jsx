import React from 'react';
import './Home.css';
function Home() {
  return (
    <section id="home" className="hero-section">
      <div className="hero">
        <h1>Welcome to Cory's Portfolio</h1>
        <p>Your go-to source for all things tech.</p>
        <a href="#about" className="cta-button">Learn More</a>
      </div>
      <div className="hero-description">
        <p>With years of experience in frontend development, I specialize in crafting interactive and responsive web applications. Let’s build something amazing together!</p>
      </div>
    </section>
  );
}

export default Home;
