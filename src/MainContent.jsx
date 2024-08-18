import { useEffect, useState } from "react"
import { Image } from "react-bootstrap"

function MainContent() {
  const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGEwNmNiYzQxMjVlNjExNzQzNThkNzQwNTFjNzFhOSIsIm5iZiI6MTcyMzk3OTY5Ny43MzAwMDksInN1YiI6IjY2YmE1NGE3OGZkNWI2YTE5YWE5MTUyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I5oJjKXO2AyxEzxXrpfKWh8qkrqlMs2U4hNCqkzBObE'
    }
  }
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url, options)
      const data = await response.json()
      setData(data)
      setIsLoading(false)

    }
    fetchData()

  }, [])


  return (
    <div className="d-flex overflow-auto main-wrapper">
      {
        isLoading ? (

          <Image src="
https://media.istockphoto.com/id/1361039427/vector/retro-download-bar-alert-window-on-computer-monitor-with-loading-message-classic-style.jpg?s=612x612&w=0&k=20&c=f9SNye6Ar9rBrotvHTVZmSZJSF9CvzBa7l0HmR8U-_8=
            "/>
        ) : (
          data.results.map((movie) => (
              <Image  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}></Image>
          ))
        )
      }
    </div>
  )
}
export default MainContent
