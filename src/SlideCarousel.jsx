import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "react-bootstrap";

function SlideCarousel({ data, theme }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 5000, min: 992 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };
  return (

    <Carousel
      responsive={responsive}
      infinite
      slidesToSlide={2}
      transitionDuration={700}
      containerClass="carousel-container"
      centerMode
      dotListClass="custom-dot-list-style"
    >
      {
        data.results.map((items) => (
          <Image src={"https://image.tmdb.org/t/p/w200" + items.poster_path}></Image>
        ))
      }
    </Carousel >
  )
}
export default SlideCarousel;
