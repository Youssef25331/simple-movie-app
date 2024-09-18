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

  const genres = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 10759,
      name: "Action & Adventure (TV)",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 10762,
      name: "Kids (TV)",
    },
    {
      id: 10764,
      name: "Reality(tv)",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10765,
      name: "Sci-Fi & Fantasy (TV)",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 10763,
      name: "News (TV)",
    },
    {
      id: 10766,
      name: "Soap (TV)",
    },
    {
      id: 10767,
      name: "Talk (TV)",
    },
    {
      id: 10768,
      name: "War & Politics (TV)",
    },
    {
      id: 37,
      name: "Western",
    },
  ];
  const sorts = [
    { name: "Most Popular", value: "popularity.asc" },
    { name: "Least Popular", value: "popularity.desc" },
    { name: "First Airdate", value: "first_air_date.asc" },
    { name: "Highest Average Vote", value: "vote_average.asc" },
    { name: "Lowest Average Vote", value: "vote_average.desc" },
  ];

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
                {genres.map((genre) => (
                  <FormCheck
                    key={genre.id}
                    type="checkbox"
                    label={genre.name}
                  />
                ))}
              </AccordionBody>
            </AccordionItem>
            <AccordionItem eventKey="1">
              <AccordionHeader>Sort By</AccordionHeader>
              <AccordionBody>
                <Form>
                  {sorts.map((sort, index) => (
                    <FormCheck
                      name={"Sorts"}
                      key={sort.index}
                      type="radio"
                      label={sort.name}
                    />
                  ))}
                </Form>
              </AccordionBody>
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
