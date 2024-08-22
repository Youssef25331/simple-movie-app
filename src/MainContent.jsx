import { useEffect, useState } from "react"
import SlideCarousel from "./SlideCarousel"
import { Image } from "react-bootstrap"
import FetchingComponent from "./FetchComponent"

function MainContent() {

  const { isLoading, data } = FetchingComponent()

  return (
    <div className="p-4">
      <div className="main-image-container overlay">

        {
          isLoading ? (<h1>Loading</h1>) : <Image className="bg-primary bg-gradient main-image" fluid src={"https://image.tmdb.org/t/p/original" + data.results[Math.floor(Math.random() * data.results.length)].backdrop_path} />
        }
      </div>
      <div className="p-4 carocaro">
        <SlideCarousel title={"Trending Movies"} />
        <SlideCarousel url={'https://api.themoviedb.org/3/trending/tv/day?language=en-US'} title={"Trending TV"} />
      </div>
    </div>

  )
}
export default MainContent
