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
import {
  Link,
  replace,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useState, useMemo } from "react";
import MyPagination from "../MyPagination";

function Search() {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [show, setShow] = useState(false);
  const currentSort = "popularity.desc";
  const type = params.type.toLowerCase();

  const query = searchParams.get("query");
  const keyWord = searchParams.get("keywords") || "";
  const activeGenres = searchParams.getAll("Genres") || [];
  const activeSort = searchParams.get("Sorts") || currentSort;
  const page = searchParams.get("p") || 1;

  const handlePage = (num) => {
    searchParams.set("p", num);
    setSearchParams(searchParams);
    window.location.reload();
  };

  const handleSearch = (value) => {
    setSearchParams({});
    searchParams.set("query", value);
    setSearchParams(searchParams);
    window.location.reload();
  };

  const movieGenres = useMemo(
    () => [
      {
        id: 28,
        name: "Action",
      },
      {
        id: 12,
        name: "Adventure",
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
        id: 37,
        name: "Western",
      },
    ],
    [],
  );
  const tvGenres = useMemo(
    () => [
      {
        id: 10759,
        name: "Action & Adventure",
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
        name: "Kids",
      },
      {
        id: 9648,
        name: "Mystery",
      },
      {
        id: 10763,
        name: "News",
      },
      {
        id: 10764,
        name: "Reality",
      },
      {
        id: 10765,
        name: "Sci-Fi & Fantasy",
      },
      {
        id: 10766,
        name: "Soap",
      },
      {
        id: 10767,
        name: "Talk",
      },
      {
        id: 10768,
        name: "War & Politics",
      },
      {
        id: 37,
        name: "Western",
      },
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

  const apiUrl = () => {
    if (!query) {
      return type === "movies"
        ? `https://api.themoviedb.org/3/discover/movie?include_adult=false&language=en-US&page=${page}&sort_by=${activeSort}${keyWord ? `&with_keywords=${keyWord}` : ""}${activeGenres.length > 0 ? `&with_genres=${activeGenres.join()}` : ""}`
        : `https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=${page}&sort_by=${activeSort}${keyWord ? `&with_keywords=${keyWord}` : ""}${activeGenres.length > 0 ? `&with_genres=${activeGenres.join()}` : ""}`;
    }
    return type === "movies"
      ? `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`
      : `https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=${page}`;
  };

  const { isLoading, data } = FetchingComponent(apiUrl());
  const lastPage = isLoading
    ? 1
    : data.total_pages > 500
      ? 500
      : data.total_pages;

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
                  {type == "movies"
                    ? movieGenres.map((genre) => (
                      <FormCheck
                        inline
                        name="Genres"
                        key={genre.id}
                        type="checkbox"
                        value={genre.id}
                        label={genre.name}
                      />
                    ))
                    : tvGenres.map((genre) => (
                      <FormCheck
                        inline
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
          <Form.Control
            type="button"
            value={"Filters"}
            className="w-25 me-2 filter-button"
            onClick={handleShow}
            variant="dark"
          ></Form.Control>
          <Form.Control
            type="search"
            className="search-bar"
            onKeyDown={(e) =>
              e.code === "Enter" ? handleSearch(e.target.value) : ""
            }
            placeholder="Click here to serach for..."
          />
        </div>
          <div className="discover-container  mt-3">
            {data.results.map((item) => (
              <Card type={type} key={item.id} item={item} title={true} isLoading={isLoading}/>
            ))}
          </div>
      </div>
      <div className="position-absolute translate-middle-x mt-4 start-50 pagination-container">
        {lastPage ? (
          <MyPagination
            page={page}
            lastPage={lastPage}
            handlePage={handlePage}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Search;
