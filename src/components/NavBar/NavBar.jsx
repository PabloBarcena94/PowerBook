import {CartWidget} from '../CartWidget/CartWidget.jsx'
import {Logo} from '../CartWidget/Logo.jsx'

// React Bootstrap components 

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><Logo/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <div>
            <Nav.Link href="#action1">Inicio</Nav.Link>
            </div>
            <div>
            <Nav.Link href="#action2">Contacto</Nav.Link>
            </div>
            <div>
            <NavDropdown title="Categorías" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"></NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Comics
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Terror
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Juveniles
              </NavDropdown.Item>
            </NavDropdown>
            </div>
            <Nav.Link href="#" disabled>
              
            </Nav.Link>
          </Nav>
          <div><CartWidget/></div>
          
          <Form className="d-flex">
            <div className="buscador">
            <Form.Control
              type="search"
              placeholder="Busca por autor,título,género,"
              className="me-2"
              aria-label="Search"
            /> </div>
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample; 



