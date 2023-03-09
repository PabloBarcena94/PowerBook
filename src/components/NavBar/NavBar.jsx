import {CartWidget} from '../CartWidget/CartWidget.jsx'

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
        <Navbar.Brand href="#">PowerBook</Navbar.Brand>
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
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample; 



/*export function NavBar() {

    return (
      
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">Power Book</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">INICIO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">CONTACTO</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            CATEGORÍAS
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Comics</a></li>
            <li><a className="dropdown-item" href="#">Terror</a></li>
            <li><a className="dropdown-item" href="#">Juveniles</a></li>
          </ul>
        </li>
        <li><a className="dropdown-item" href="#"><CartWidget/></a></li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>

    );
    } */