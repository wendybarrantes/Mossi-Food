import React from 'react';
import '../estilos/HeroMenuUsuario.css'
import heroImage from '../assets/imgs/panes.webp'; 

const HeroMenuUsuario= () => {
  return (
    <div className="hero">
      <img src={heroImage} alt="Mossi Food" className="hero-image" />
      <div className="hero-content">
        <h1>Bienvenidos a Mossi Food Service </h1>

      </div>
    </div>
  );
};

export default HeroMenuUsuario;



