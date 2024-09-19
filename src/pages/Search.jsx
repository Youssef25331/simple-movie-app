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
} from "react-bootstrap";
import FetchingComponent from "../FetchComponent";
import { useParams, useSearchParams } from "react-router-dom";
import { useState, useMemo } from "react";

function Search() {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [show, setShow] = useState(false);
  const [currentSort, setCurrentSort] = useState("popularity.desc");
  const [mode, setMode] = useState("Tv"); // New state to toggle between TV and Movies

  const keyWord = searchParams.get("keywords") || "";
  const activeGenres = searchParams.getAll("Genres") || [];
  const activeSort = searchParams.get("Sorts") || currentSort;
  const page = searchParams.get("p") || 2;

  const genres = useMemo(
    () => [
      { id: 28, name: "Action" },
      { id: 12, name: "Adventure" },
      { id: 10759, name: "Action & Adventure (TV)" },
      { id: 16, name: "Animation" },
      { id: 35, name: "Comedy" },
      { id: 80, name: "Crime" },
      { id: 99, name: "Documentary" },
      { id: 18, name: "Drama" },
      { id: 10751, name: "Family" },
      { id: 10762, name: "Kids (TV)" },
      { id: 10764, name: "Reality(tv)" },
      { id: 14, name: "Fantasy" },
      { id: 36, name: "History" },
      { id: 27, name: "Horror" },
      { id: 10402, name: "Music" },
      { id: 9648, name: "Mystery" },
      { id: 10749, name: "Romance" },
      { id: 878, name: "Science Fiction" },
      { id: 10765, name: "Sci-Fi & Fantasy (TV)" },
      { id: 10770, name: "TV Movie" },
      { id: 53, name: "Thriller" },
      { id: 10752, name: "War" },
      { id: 10763, name: "News (TV)" },
      { id: 10766, name: "Soap (TV)" },
      { id: 10767, name: "Talk (TV)" },
      { id: 10768, name: "War & Politics (TV)" },
      { id: 37, name: "Western" },
    ],
    [],
  );

  const sorts = useMemo(
    () => [
      { name: "Most Popular", value: "popularity.desc" },
      { name: "Least Popular", value: "popularity.asc" },
      { name: "First Airdate", value: "first_air_date.asc" },
      { name: "Highest Average Vote", value: "vote_average.desc" },
      { name: "Lowest Average Vote", value: "vote_average.asc" },
    ],
    [],
  );

  const apiUrl =
    params.type.toLowerCase() === "movies"
      ? `https://api.themoviedb.org/3/discover/movie?include_adult=false&language=en-US&page=${page}&sort_by=${activeSort}${keyWord ? `&with_keywords=${keyWord}` : ""}${activeGenres.length > 0 ? `&with_genres=${activeGenres.join()}` : ""}`
      : `https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=${page}&sort_by=${activeSort}${keyWord ? `&with_keywords=${keyWord}` : ""}${activeGenres.length > 0 ? `&with_genres=${activeGenres.join()}` : ""}`;

  const { isLoading, data } = FetchingComponent(apiUrl);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Accordion className="m-3" defaultActiveKey={null}>
              <AccordionItem eventKey="0">
                <AccordionHeader>Genre</AccordionHeader>
                <AccordionBody>
                  {genres.map((genre) => (
                    <FormCheck
                      name="Genres"
                      key={genre.id}
                      type="checkbox"
                      value={genre.id}
                      label={genre.name}
                    />
                  ))}
                </AccordionBody>
              </AccordionItem>
              <AccordionItem eventKey="1">
                <AccordionHeader>Sort By</AccordionHeader>
                <AccordionBody>
                  {sorts.map((sort) => (
                    <FormCheck
                      name="Sorts"
                      key={sort.value}
                      value={sort.value}
                      type="radio"
                      label={sort.name}
                    />
                  ))}
                </AccordionBody>
              </AccordionItem>
            </Accordion>
            <Button className="ms-3" type="submit">
              Submit form
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <div className="m-auto search-container">
        <div className="d-flex mt-4 search-top-container">
          <Button onClick={handleShow} variant="dark">
            Filter
          </Button>
          <Form.Control type="search" placeholder="Search" />
        </div>

        {!isLoading ? (
          <div className="discover-container mt-5">
            {data.results.map((item) => (
              <Card key={item.id} item={item} title={true} />
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
}

export default Search;
