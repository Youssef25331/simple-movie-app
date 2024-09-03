import { useEffect, useState } from "react";
import SlideCarousel from "./SlideCarousel";
import { Image } from "react-bootstrap";
import FetchingComponent from "./FetchComponent";

function HomePage() {
  const { isLoading, data } = FetchingComponent();

  return (
    <div>
      <div className="main-image-container overlay">
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          <div className="stuff">
            <Image
              className="bg-primary bg-gradient main-image"
              fluid
              src={
                "https://image.tmdb.org/t/p/original" +
                data.results[Math.floor(Math.random() * data.results.length)]
                  .backdrop_path
              }
            />
          </div>
        )}
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
