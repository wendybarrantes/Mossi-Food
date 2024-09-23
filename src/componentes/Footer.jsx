import React from 'react';
import "../estilos/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faWhatsapp, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section about">
                    <h2>Sobre Nosotros</h2>
                    <p>En Mossi Food Service, ofrecemos una experiencia culinaria única con platos elaborados con ingredientes frescos y de alta calidad. Ven y descubre tu nuevo lugar favorito.</p>
                </div>
                <div className="footer-section social">
                    <h2>Síguenos</h2>
                    <div className="social-icons">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </div>
                </div>
                <div className="footer-section newsletter">
                    <h2>Suscríbete a Nuestro Boletín</h2>
                    <p>Recibe las últimas noticias y ofertas especiales directamente en tu bandeja de entrada.</p>
                    <form>
                        <input type="email" placeholder="Ingresa tu correo" required />
                        <button type="submit">Suscribirse</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Mossi Food Service. Todos los derechos reservados. | <a href="#privacy">Política de Privacidad</a></p>
                <p>Diseñado por Templatemonster</p>
            </div>
        </footer>
    );
};

export default Footer;
