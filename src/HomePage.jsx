import { useMemo } from "react";
import SlideCarousel from "./SlideCarousel";
import { Button, Image } from "react-bootstrap";
import FetchingComponent from "./FetchComponent";
import { Link } from "react-router-dom";

function HomePage() {
  const { isLoading, data } = FetchingComponent();
  const randomItem = useMemo(() => {
    return data?.results?.length ? data.results[Math.floor(Math.random() * data.results.length)] : null;
  }, [data]);
  return (
    <div>

      <div className="hero-container overlay">
        <div className="hero">
          <Image
            className="bg-primary bg-gradient main-image w-100"
            fluid
            src={
              !isLoading ? "https://image.tmdb.org/t/p/original" + randomItem.backdrop_path : randomItem.backdrop_path
            }
          />

          <div className="hero-details-container position-absolute flex-column d-flex">
            <h1
              className="hero-name"
              src={"https://image.tmdb.org/t/p/w500" + randomItem.poster_path}
            >
              {randomItem.title}
            </h1>

            <p className="text-break hero-details">{randomItem.overview}</p>
            <Link to={"/movie/" + randomItem.id}>
              <Button variant="dark" className="hero-button">
                details
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-4 position-relative carousels-container">
        <SlideCarousel title={"Trending Movies"} />
        <SlideCarousel
          isMovie={false}
          url={"https://api.themoviedb.org/3/trending/tv/day?language=en-US"}
          title={"Trending TV"}
        />
        <SlideCarousel
          url={
            "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
          }
          title={"Popular Movies"}
        />
        <SlideCarousel
          isMovie={false}
          url={"https://api.themoviedb.org/3/tv/popular?language=en-US&page=1"}
          title={"Popular TV"}
        />
        <SlideCarousel
          isMovie={false}
          url={
            "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1"
          }
          title={"Top Rated TV"}
        />
        <SlideCarousel
          url={
            "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
          }
          title={"Top Rated Movies"}
        />
        <SlideCarousel
          isMovie={false}
          url={
            "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1"
          }
          title={"Airing Today"}
        />
        <SlideCarousel
          url={
            "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
          }
          title={"Upcoming Movies"}
        />
      </div>
    </div>
  );
}
export default HomePage;
