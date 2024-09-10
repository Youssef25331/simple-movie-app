import { Collapse, Form, Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext, useEffect } from "react";
import { AppTheme } from "./App";

function MyNavbar() {
  const [theme, setTheme] = useContext(AppTheme);
  const [searchOpen, setSearchOpen] = useState(false);
  const [value, setValue] = useState();

  return (
    <Navbar sticky="top" expand="sm" bg={theme} variant={theme}>
      <Container>
        <Navbar.Brand href="/" className="my-2">
          MovieDB
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="toggle-navbar" />
        <Navbar.Collapse id="toggle-navbar">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>Movies</Nav.Link>
            <Nav.Link>TV Shows</Nav.Link>
          </Nav>
          <Form className="d-flex align-items-center">
            <FontAwesomeIcon
              size="lg"
              /* visibility={searchOpen?"hidden":''} */ icon={faSearch}
              className="fa-icon p-1"
              onClick={() => {
                setSearchOpen(!searchOpen);
              }}
            />
            <Collapse in={searchOpen} timeout={10000} dimension={"width"}>
              <div className="searchWrapper">
                {/* Fix choppy opening animation */}
                <Form.Control
                  type="search"
                  className="mx-2"
                  placeholder="search"
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
            </Collapse>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MyNavbar;
