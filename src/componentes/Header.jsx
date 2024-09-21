import '../estilos/Header.css'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
const Header = ()=>{
    const navigate = useNavigate()
    return(
        <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="src\assets\imgs\mossi_food_logo.jpg"
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="Logo"
            />
           Mossi Food Service
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} href="/">Inicio</Nav.Link>
              <Nav.Link as={Link} href="/acerca">Acerca</Nav.Link>
              <Nav.Link as={Link} href="/servicios">Servicios</Nav.Link>
              <Nav.Link onClick={()=>navigate("/contacto")}>Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default Header