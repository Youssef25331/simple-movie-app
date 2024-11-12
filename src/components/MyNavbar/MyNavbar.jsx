import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { AppTheme } from "../../App";
import { useParams } from "react-router-dom";
import "./MyNavbar.scss";

function MyNavbar() {

  const [theme] = useContext(AppTheme);
  const [transparent, setTransparent] = useState(false)
  const params = useParams()

  function goBack() {
    if (window.history.length > 1) {
      window.history.back();
      window.history.back();
    } else {
      window.history.back();
    }
  }
  useEffect(() => {
    console.log(params.category)
    params.category == "movie" || params.category == "tv" ?
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
    <Navbar className={transparent ? "transparent-navbar fixed-top" : `sticky-top bg-${theme}`} expand="sm" variant={theme}>
      <Container>
        {
          !transparent ?
            <>
              <Navbar.Brand href="/" className="my-2">
                <img className="site-icon" src={require('./favicon.png')} width={"64px"} />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="toggle-navbar" />
              <Navbar.Collapse id="toggle-navbar" >
                <Nav className={"justify-content-center nav-links flex-grow-1 pe-3"}>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/search/movies">Movies</Nav.Link>
                  <Nav.Link href="/search/tv">TV Shows</Nav.Link>
                </Nav>
              </Navbar.Collapse>

            </>
            :
            <>
              <a onClick={() => goBack()} >
                <FontAwesomeIcon
                  size="2x"
                  icon={faArrowLeft}
                  color="purple"
                  className="fa-icon pt-5"
                />
              </a>
            </>
        }
      </Container>

    </Navbar >
  );
}
export default MyNavbar;
