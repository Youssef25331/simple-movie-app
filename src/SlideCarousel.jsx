import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "react-bootstrap";

function SlideCarousel({ data, theme }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (

    <Carousel
      responsive={responsive}
      infinite
      transitionDuration={2000}
      containerClass="carousel-container"
      centerMode
      dotListClass="custom-dot-list-style"
    >
      {
        data.results.map((items) => (
          <Image  src={"https://image.tmdb.org/t/p/w200" + items.poster_path}></Image>
        ))
      }
    </Carousel >
  )
}
export default SlideCarousel;
