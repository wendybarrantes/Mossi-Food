import React from 'react';
import '../estilos/Hero.css'
import heroImage from '../assets/imgs/OIP.jpg'; 

const Hero = () => {
  return (
    <div className="hero">
      <img src={heroImage} alt="Mossi Food" className="hero-image" />
      <div className="hero-content">
        <h1>Bienvenido Mossi Food Service</h1>
        <p>Deliciosa Comida a su alcance!</p>

      </div>
    </div>
  );
};

export default Hero;
