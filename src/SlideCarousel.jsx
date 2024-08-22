import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { Container, Image } from "react-bootstrap"; import FetchingComponent from "./FetchComponent";
import CustomArrow from "./CustomArrow";
import Card from 'react-bootstrap/Card';

function SlideCarousel({ url, title, theme }) {

  const responsive = {
    desktop: {
      breakpoint: { max: 5000, min: 992 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 5
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 3
    }
  };

  const { isLoading, data } = FetchingComponent(url = url)

  return (
    <Container variant='dark' className="my-5" fluid>

      <h2>{title}</h2>
      {
        !isLoading ? (
          <Carousel
             
            responsive={responsive}
            customLeftArrow={
              <CustomArrow />
            }
            customRightArrow={
              <CustomArrow  variant={'right'}/>
            }
            infinite
            slidesToSlide={6}
            transitionDuration={1200}
            customTransition="all 1.2s"
            containerClass="carousel-container"
            centerMode
            dotListClass="custom-dot-list-style"
          >
            {
              data.results.map((items) => (
                <Image className="px-1" fluid key={items.id} src={"https://image.tmdb.org/t/p/w500" + items.poster_path}></Image>
                
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
