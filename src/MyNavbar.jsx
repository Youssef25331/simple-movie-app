
import { Collapse, Button, Form, Container, Nav, Navbar, NavDropdown, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function MyNavbar({ theme }) {

  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <Navbar sticky="top" expand="lg" bg={theme} variant={theme}>
      <Container>
        <Navbar.Brand href="" className="my-2">MovieDB</Navbar.Brand>
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
          <Form className="d-flex align-items-center" >
            <FontAwesomeIcon size="lg" /* visibility={searchOpen?"hidden":''} */ icon={faSearch} className='fa-icon p-1' onClick={() => { setSearchOpen(!searchOpen) }} />
            <Collapse in={searchOpen} timeout={10000} dimension={'width'}>
              <div className="searchWrapper">
                {/* Fix choppy opening animation */}
                <Form.Control type="search" className="mx-2" placeholder="search" />
              </div>
            </Collapse>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default MyNavbar 
