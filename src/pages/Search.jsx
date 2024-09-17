import Card from "../Card";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Button,
  Form,
  FormCheck,
  Modal,
  ModalBody,
  ModalHeader,
} from "react-bootstrap";
import FetchingComponent from "../FetchComponent";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyWord = searchParams.get("keywords");
  const page = searchParams.get("p");

  const movie_url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page ? page : "1"}&sort_by=popularity.desc${keyWord ? `&with_keywords=${keyWord}` : ""}`;
  const tv_url = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page ? page : "1"}&sort_by=popularity.desc${keyWord ? `&with_keywords=${keyWord}` : ""}`;
  const { isLoading: isMovieLoading, data: movie_data } =
    FetchingComponent(movie_url);
  const { isLoading: isTvLoading, data: tv_data } = FetchingComponent(tv_url);
  const data = [];

  const [show, setShow] = useState(true);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const genres = [{ name: "suck", id: 12 }];

  let lastPage;

  !isMovieLoading
    ? movie_data.results.forEach((movie) => {
        movie.media_type = "Movie";
        data.push(movie);
      })
    : console.log("loading");
  if (!isTvLoading) {
    tv_data.results.forEach((tv) => {
      tv.media_type = "TV";
      data.push(tv);
    });
  } else {
  }
  console.log("loading");
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Accordion defaultActiveKey={null}>
            <AccordionItem eventKey="0">
              <AccordionHeader>Genre</AccordionHeader>
              <AccordionBody>
                <FormCheck></FormCheck>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem eventKey="1">
              <AccordionHeader>Sort By</AccordionHeader>
            </AccordionItem>
          </Accordion>
        </Modal.Body>
      </Modal>
      <div className="m-auto search-container">
        <div className="d-flex mt-4 search-top-container">
          <Button onClick={handleShow} variant="dark">
            Filter
          </Button>
          <Form.Control type="search" className="" placeholder="search" />
        </div>
        {!isTvLoading ? (
          <div className="discover-container mt-5">
            {data.map((item) => (
              <Card key={item.id} item={item} title={true} />
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Search;
