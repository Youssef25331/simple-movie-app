import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { AppTheme } from "./App";
import { useParams } from "react-router-dom";

function MyNavbar() {

  const [theme] = useContext(AppTheme);
  const [transparent, setTransparent] = useState(false)
  const params = useParams()

  useEffect(() => {
    console.log(params.category)
    params.category == "movie"  || params.category == "tv" ?
      setTransparent(true) : setTransparent(false)
  }, [params])

 /*another way to handle go back without react-router access
  *
  * const handlePopState = (event) => {
    setTransparent(false);
  };

  useEffect(() => {
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    // This effect runs whenever `isTransparent` changes
    // React updates should ideally be within component state and effects
  }, [isTransparent]); */

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
              <a href="javascript:window.history.back()" >
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
