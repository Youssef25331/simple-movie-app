import Card from "../Card";
import { Button, Form } from "react-bootstrap";
import FetchingComponent from "../FetchComponent";
import { useSearchParams } from "react-router-dom";

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
    console.log("loading");
  }
  return (
    <>
      <div className="m-auto search-container">
        <div className="d-flex mt-4 search-top-container">
          <Button variant="dark">Filter</Button>
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
