import { useEffect, useState } from "react"
import { Alert } from "react-bootstrap"

export default function FetchingComponent({ url, options, theme }) {

  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState()

    console.log(options)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options)

        if (!response.ok) {
          const error = await response.json();
          <Alert variant={theme}>
            {error}
          </Alert>
        }
        const data = await response.json()
        setData(data)
        setIsLoading(false)
      } catch (e) {
        console.error("Failed to call API: ", e)
      }
    }
    fetchData()

  }, [])
  return { isLoading, data }
}
FetchingComponent.defaultProps = {
  url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
  options: {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGEwNmNiYzQxMjVlNjExNzQzNThkNzQwNTFjNzFhOSIsIm5iZiI6MTcyMzk3OTY5Ny43MzAwMDksInN1YiI6IjY2YmE1NGE3OGZkNWI2YTE5YWE5MTUyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I5oJjKXO2AyxEzxXrpfKWh8qkrqlMs2U4hNCqkzBObE'
    }
  }
}
