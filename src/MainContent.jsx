import { useEffect, useState } from "react"
import SlideCarousel from "./SlideCarousel"
import { Image } from "react-bootstrap"

function MainContent() {


  return (
    <>
      <SlideCarousel title={"Trending Movies"} />

      <SlideCarousel url={'https://api.themoviedb.org/3/trending/tv/day?language=en-US'} title={"Trending TV"} />
    </>

  )
}
export default MainContent
