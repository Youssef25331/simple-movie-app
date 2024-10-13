import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect } from "react";
import { AppTheme } from "./App";
import { useNavigate } from "react-router-dom";

function MyNavbar() {
  const [theme, setTheme, transparent, setTransparent] = useContext(AppTheme);

  const handleGoBack = () => {
    setTransparent(false)
    window.history.back()
  };

  return (
    <Navbar className={transparent ? "transparent-navbar" : ""} sticky="top" expand="sm" bg={theme} variant={theme}>
      <Container>
        {
          !transparent ?
            <>
              <Navbar.Brand href="/" className="my-2">
                <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                <img src={'../public/favicon.png'} width={"64px"} />
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
                    icon={faSearch}
                    className="fa-icon p-1"
                  />
                </a>
              </Navbar.Collapse>
            </>
            :
            <>
              <a href="#" onClick={handleGoBack}>
                <FontAwesomeIcon
                  size="2x"
                  icon={faArrowLeft}
                  className="fa-icon p-1"
                />
              </a>
            </>
        }
      </Container>
    </Navbar >
  );
}
export default MyNavbar;
