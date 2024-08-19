import { useEffect, useState } from "react"
import { Image } from "react-bootstrap"
import FetchingComponent from "./FetchComponent"
import { Alert } from "react-bootstrap"
import Carousel from "./Carousel"

function MainContent() {

  const { isLoading, data, url } = FetchingComponent()
  console.log(data)
  return (
    <div className="d-flex overflow-auto main-wrapper">
      {
        isLoading ?
          (
            <Image src="
https://media.istockphoto.com/id/1361039427/vector/retro-download-bar-alert-window-on-computer-monitor-with-loading-message-classic-style.jpg?s=612x612&w=0&k=20&c=f9SNye6Ar9rBrotvHTVZmSZJSF9CvzBa7l0HmR8U-_8=
        "/>
          )
          : (
            <Carousel data={data} />
          )
      }
    </div>
  )
}
export default MainContent
