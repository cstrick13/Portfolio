import React from 'react';
import './Home.css';
import images from '../assets/image';
function Home() {
  return (
    <main>
    <div className="container">
      <img src={images.cutie} className="image"alt="" />
      <div className="hero-text">
        <h1>Cory Strickland</h1>
        <p>Developer<span>Student</span>Imagineer
        </p>
        <button>Order Now</button>
      </div>
    </div>
  </main>
  );
}

export default Home;
