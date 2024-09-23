import React from 'react';
import '../estilos/Hero.css'
import heroImage from '../assets/imgs/hero.2.jpg'; 

const Hero = () => {
  return (
    <div className="hero">
      <img src={heroImage} alt="Mossi Food" className="hero-image" />
      <div className="hero-content">
        <h1>Welcome to Mossi Food Service</h1>
        <p>Delicious food delivered to your door!</p>

      </div>
    </div>
  );
};

export default Hero;
