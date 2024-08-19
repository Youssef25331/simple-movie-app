import { useEffect, useState } from "react"
export default function FetchingComponent(url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US', options = {}, theme = 'dark') {

  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState()
  const defaultOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGEwNmNiYzQxMjVlNjExNzQzNThkNzQwNTFjNzFhOSIsIm5iZiI6MTcyMzk3OTY5Ny43MzAwMDksInN1YiI6IjY2YmE1NGE3OGZkNWI2YTE5YWE5MTUyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I5oJjKXO2AyxEzxXrpfKWh8qkrqlMs2U4hNCqkzBObE'
    }
  }
  const overideOptions = { ...defaultOptions, ...options }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, overideOptions)
        if (!response.ok) {
          const error = await response.json();
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