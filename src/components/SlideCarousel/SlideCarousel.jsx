import { Container, Image } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";

import FetchingComponent from "../FetchingComponent/FetchComponent";
import CustomArrow from "./CustomArrow";

import "./SlideCarousel.scss";
function SlideCarousel({ isMovie = true, url, title }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 5000, min: 992 },
      items: 6,
      slidesToSlide: 6,
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 5,
      slidesToSlide: 5,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 3,
      slidesToSlide: 3,
    },
  };

  const { isLoading, data } = FetchingComponent((url = url));

  return (
    <Container className="my-5" fluid>
      <h2>{title}</h2>
      <Carousel
        responsive={responsive}
        customLeftArrow={<CustomArrow />}
        customRightArrow={<CustomArrow variant={"right"} />}
        infinite
        transitionDuration={1200}
        customTransition="all 1.2s"
        containerClass="carousel-container "
        centerMode
        dotListClass="custom-dot-list-style"
        swipeable={false}
      >
        {data.results.map((items) => (
          <Link key={items.id} to={isMovie ? "movie/" + items.id : "tv/" + items.id}>
            <Image
              className="px-1 carousel-image"
              key={items.id}
              src={!isLoading ? "https://image.tmdb.org/t/p/w500" + items.poster_path : items.poster_path}
              rounded
              fluid
            ></Image>
          </Link>
        ))}
      </Carousel>
    </Container>
  );
}
export default SlideCarousel;
