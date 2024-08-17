import "./App.scss";

import { Button, Container, Nav, Navbar, NavDropdown, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <header>
        <Navbar expand="lg" bg="dark" variant='dark'>
          <Container>
            <Navbar.Brand href="">MovieDB</Navbar.Brand>
            <Navbar.Toggle aria-controls="toggle-navbar" />
            <Navbar.Collapse id="toggle-navbar">
              <Nav>
                <Nav.Link>
                  Movies
                </Nav.Link>
              </Nav>
              <Nav>
                <Button type="button" variant="outline-success" size="md">Search</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default App;
