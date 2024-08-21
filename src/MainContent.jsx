import { useEffect, useState } from "react"
import SlideCarousel from "./SlideCarousel"
import { Image } from "react-bootstrap"
import FetchingComponent from "./FetchComponent"

function MainContent() {

  const { isLoading, data } = FetchingComponent()

  return (
    <div className="p-4">
      {
        isLoading ? ('hi') : <Image className="p-1 main-image" fluid src={"https://image.tmdb.org/t/p/original"+data.results[Math.floor(Math.random() * data.results.length)].backdrop_path} />
      }
      <div className="carocaro">

      <SlideCarousel title={"Trending Movies"} />
      <SlideCarousel url={'https://api.themoviedb.org/3/trending/tv/day?language=en-US'} title={"Trending TV"} />
      </div>
    </div>

  )
}
export default MainContent
