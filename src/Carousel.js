import { useEffect, useState } from "react";

const url = `https://api.themoviedb.org/3/movie/550?api_key=6da06cbc4125e61174358d74051c71a9`;

function Carousel() {
  useEffect(() => {
    const fetchInfo = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    };
    fetchInfo();
  });
}
export default Carousel;
