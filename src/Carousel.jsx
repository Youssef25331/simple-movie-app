import { useEffect, useState } from "react";

function Carousel({ url, data, theme }) {

  return (
    <div className="carousel-wrapper">
      {
        data.results.map((item) =>
          <div className="hi">
            {item.id}
          </div>
        )
      }
    </div>
  )
}
export default Carousel;
