import { Collapse, Form, Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import { AppTheme } from "./App";

function MyNavbar() {
  const [theme] = useContext(AppTheme);
  const [searchOpen, setSearchOpen] = useState(false);
  const [value, setValue] = useState();

  return (
    <Navbar sticky="top" expand="sm" bg={theme} variant={theme}>
      <Container>
        <Navbar.Brand href="/" className="my-2">
          <img src={'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixlr.com%2Fimage-generator%2F&psig=AOvVaw0J6BahZOPil0LvixBTkZ58&ust=1728752589061000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIjAhrHnhokDFQAAAAAdAAAAABAI'} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="toggle-navbar" />
        <Navbar.Collapse id="toggle-navbar">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/search/movies">Movies</Nav.Link>
            <Nav.Link href="/search/tv">TV Shows</Nav.Link>
          </Nav>
          <a href="/search/movies">
            <FontAwesomeIcon
              size="lg"
              /* visibility={searchOpen?"hidden":''} */ icon={faSearch}
              className="fa-icon p-1"
            />
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MyNavbar;
