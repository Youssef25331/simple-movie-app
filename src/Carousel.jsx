import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";


function SlideCarousel({ data, theme }) {

  return (
    <Carousel >
      {
        data.results.map((item) =>
          <div>
            {item.id}

          </div>
        )
      }
    </Carousel>
  )
}
export default SlideCarousel;
