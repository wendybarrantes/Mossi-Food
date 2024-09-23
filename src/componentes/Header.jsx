import "../estilos/Header.css";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const [cantCarrito, setCantCarrito] = useState(
    localStorage.getItem("platillos") ? JSON.parse(localStorage.getItem("platillos")).length : 0
  );

  useEffect(() => {
    const updateCarrito = () => {
      setCantCarrito(localStorage.getItem("platillos") ? JSON.parse(localStorage.getItem("platillos")).length : 0);
    };
    updateCarrito();
  }, []);

  return (
    <Navbar bg="white" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src="src/assets/imgs/mossi_food_logo.jpg"
            width="100"
            height="100"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-links"> 
            <Nav.Link onClick={() => navigate("/Inicio")} className="nav-item">HOME</Nav.Link>
            <Nav.Link onClick={() => navigate("/SobreNosotros")} className="nav-item">ABOUT</Nav.Link>
            <Nav.Link onClick={() => navigate("/MenuUsuario")} className="nav-item">MENU</Nav.Link>
            <Nav.Link onClick={() => navigate("/Contacto")} className="nav-item">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Link to="/carrito" className="carrito position-relative">
          <i className="fa-solid fa-cart-shopping fs-4"></i>
          {cantCarrito > 0 && (
            <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">{cantCarrito}</span>
          )}
        </Link>
      </Container>
    </Navbar>
  );
}

export default Header;
