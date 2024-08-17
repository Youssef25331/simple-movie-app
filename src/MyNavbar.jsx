
import { Button, Form, Container, Nav, Navbar, NavDropdown, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function MyNavbar() {

  return (
    <Navbar expand="sm" bg="dark" variant='dark'>
      <Container>
        <Navbar.Brand href="">MovieDB</Navbar.Brand>
        <Navbar.Toggle aria-controls="toggle-navbar" />
        <Navbar.Collapse id="toggle-navbar">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link>
              Movies
            </Nav.Link>
            <Nav.Link>
              TV Shows
            </Nav.Link>
          </Nav>
          <Form className="d-flex align-items-center p-2">
            <FontAwesomeIcon size="lg" icon={faSearch} className='fa-icon' />
            <Form.Control type="search" className="mx-2" placeholder="search" />
          </Form>
          <Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default MyNavbar 
