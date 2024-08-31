import { useContext, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { Container, Image } from "react-bootstrap"; import FetchingComponent from "./FetchComponent";
import CustomArrow from "./CustomArrow";
import { AppTheme } from "./App";

function SlideCarousel({ url, title }) {

  const [theme, setTheme] = useContext(AppTheme)
  const responsive = {
    desktop: {
      breakpoint: { max: 5000, min: 992 },
      items: 6,
      slidesToSlide: 6
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 5,
      slidesToSlide: 5
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 3,
      slidesToSlide: 3
    }
  };

  const { isLoading, data } = FetchingComponent(url = url)
  console.log(data)
  return (
    <Container variant='dark' className="my-5" fluid>

      <h2 >{title}</h2> {
        !isLoading ? (
          <Carousel

            responsive={responsive}
            customLeftArrow={
              <CustomArrow />
            }
            customRightArrow={
              <CustomArrow variant={'right'} />
            }
            infinite
            transitionDuration={1200}
            customTransition="all 1.2s"
            containerClass="carousel-container "
            centerMode
            dotListClass="custom-dot-list-style"
            swipeable={false}
          >
            {
              data.results.map((items) => (
                <a href={items.original_title}>
                  <Image className="px-1 carousel-image" fluid key={items.id} src={"https://image.tmdb.org/t/p/w500" + items.poster_path}>
                  </Image>
                </a>

              ))
            }
          </Carousel >
        ) : (
          <>loading</>
        )
      }
    </Container>

  )
}
export default SlideCarousel;
