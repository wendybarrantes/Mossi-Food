import '../estilos/Header.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  
  return (
    <Navbar bg="light" expand="lg" className="mb-4">
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
            <Nav.Link onClick={()=> navigate ("/Inicio")}>HOME</Nav.Link>
            <Nav.Link onClick={()=> navigate("/sobreNosotros")}>ABOUT</Nav.Link>
            <Nav.Link onClick={()=> navigate ("/menuUsuario")}>MENU</Nav.Link>
            <Nav.Link onClick={() => navigate("/contacto")}>CONTACS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
