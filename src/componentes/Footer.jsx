import React from 'react';
import { Link } from 'react-router-dom'; // Importar el componente Link para navegación interna
import './Footer.css';
import mossiLogo from './path/to/your/mossiLogo.png'; // Cambia la ruta a donde tengas tu logo

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo-container">
          <img src= "src\assets\imgs\mossi_food_logo.jpg" alt="Mossi Food Service" className="footer-logo" />
        </div>

        {/ Enlaces de navegación /}
        <nav className="footer-nav">
          <ul>
            <li><Link to="/MenuUsuario">Menu</Link></li>
            <li><Link to="/Contacto">Contacts</Link></li>
            <li><Link to="/SobreNosotros">About</Link></li>
          </ul>
        </nav>

        {/ Íconos de redes sociales /}
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-pinterest"></i></a>
        </div>

        {/ Copyright */}
        <div className="footer-bottom">
          <p>&copy; 2024 Mossi Food Service. All Rights Reserved. Privacy Policy.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;