import Card from "../Card";
import { Form } from "react-bootstrap";
import FetchingComponent from "../FetchComponent";
import { useSearchParams } from "react-router-dom";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyWord = searchParams.get('keywords=')
  const movie_url =
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
  const tv_url =
    "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc";
  const { isLoading: isMovieLoading, data: movie_data } =
    FetchingComponent(movie_url);

  const { isLoading: isTvLoading, data: tv_data } = FetchingComponent(tv_url);
  const data = [];

  !isMovieLoading
    ? movie_data.results.forEach((movie) => {
        movie.media_type = "Movie";
        data.push(movie);
      })
    : console.log("loading");
  !isTvLoading
    ? tv_data.results.forEach((tv) => {
        tv.media_type = "TV";
        data.push(tv);
      })
    : console.log("loading");
  console.log(data);
  return (
    <>
      <div className="m-auto search-container">
        <Form.Control type="search" className="" placeholder="search" />
        {!isTvLoading ? (
          <div className="discover-container mt-5">
            {data.map((item) => (
              <Card item={item} />
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
