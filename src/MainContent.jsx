import { useEffect, useState } from "react"
import { Image } from "react-bootstrap"
import FetchingComponent from "./FetchComponent"
import { Alert } from "react-bootstrap"
import SlideCarousel from "./SlideCarousel"

function MainContent() {

  const { isLoading, data } = FetchingComponent()

  console.log(isLoading)
  return (
    <>
      {

      isLoading?(
      <div className="hi"></div>
      ):(

      <SlideCarousel data={data} />
      )
      }
    </>

  )
}
export default MainContent
