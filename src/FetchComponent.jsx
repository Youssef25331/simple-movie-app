//should reimplement with axion
import { useEffect, useState } from "react";

export default function FetchingComponent(
  url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
  options = {},
) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(
    {
      results: [
        {
          "backdrop_path": require("./CardImage.png"),
          "title": "Loading",
          "original_title": "Loading",
          "poster_path": require("./CardImage.png"),
        },
        {
          "backdrop_path": require("./CardImage.png"),
          "title": "Loading",
          "original_title": "Loading",
          "poster_path": require("./CardImage.png"),
        },
        {
          "backdrop_path": require("./CardImage.png"),
          "title": "Loading",
          "original_title": "Loading",
          "poster_path": require("./CardImage.png"),
        },
        {
          "backdrop_path": require("./CardImage.png"),
          "title": "Loading",
          "original_title": "Loading",
          "poster_path": require("./CardImage.png"),
        },
        {
          "backdrop_path": require("./CardImage.png"),
          "title": "Loading",
          "original_title": "Loading",
          "poster_path": require("./CardImage.png"),
        },
        {
          "backdrop_path": require("./CardImage.png"),
          "title": "Loading",
          "original_title": "Loading",
          "poster_path": require("./CardImage.png"),
        },
        {
          "backdrop_path": require("./CardImage.png"),
          "title": "Loading",
          "original_title": "Loading",
          "poster_path": require("./CardImage.png"),
        },
        {
          "backdrop_path": require("./CardImage.png"),
          "title": "Loading",
          "original_title": "Loading",
          "poster_path": require("./CardImage.png"),
        },
        {
          "backdrop_path": require("./CardImage.png"),
          "title": "Loading",
          "original_title": "Loading",
          "poster_path": require("./CardImage.png"),
        },
        {
          "backdrop_path": require("./CardImage.png"),
          "title": "Loading",
          "original_title": "Loading",
          "poster_path": require("./CardImage.png"),
        },
        {
          "backdrop_path": require("./CardImage.png"),
          "title": "Loading",
          "original_title": "Loading",
          "poster_path": require("./CardImage.png"),
        },
        {
          "backdrop_path": require("./CardImage.png"),
          "title": "Loading",
          "original_title": "Loading",
          "poster_path": require("./CardImage.png"),
        },
        {
          "backdrop_path": require("./CardImage.png"),
          "title": "Loading",
          "original_title": "Loading",
          "poster_path": require("./CardImage.png"),
        },
        {
          "backdrop_path": require("./CardImage.png"),
          "title": "Loading",
          "original_title": "Loading",
          "poster_path": require("./CardImage.png"),
        },
        {
          "backdrop_path": require("./CardImage.png"),
          "title": "Loading",
          "original_title": "Loading",
          "poster_path": require("./CardImage.png"),
        },
        {
          "backdrop_path": require("./CardImage.png"),
          "title": "Loading",
          "original_title": "Loading",
          "poster_path": require("./CardImage.png"),
        },
        {
          "backdrop_path": require("./CardImage.png"),
          "title": "Loading",
          "original_title": "Loading",
          "poster_path": require("./CardImage.png"),
        },
        {
          "backdrop_path": require("./CardImage.png"),
          "title": "Loading",
          "original_title": "Loading",
          "poster_path": require("./CardImage.png"),
        },
        {
          "backdrop_path": require("./CardImage.png"),
          "title": "Loading",
          "original_title": "Loading",
          "poster_path": require("./CardImage.png"),
        },
        {
          "backdrop_path": require("./CardImage.png"),
          "title": "Loading",
          "original_title": "Loading",
          "poster_path": require("./CardImage.png"),
        },
        {
          "backdrop_path": require("./CardImage.png"),
          "title": "Loading",
          "original_title": "Loading",
          "poster_path": require("./CardImage.png"),
        },

      ]
    }
  );
  console.log(data)

  const defaultOptions = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGEwNmNiYzQxMjVlNjExNzQzNThkNzQwNTFjNzFhOSIsIm5iZiI6MTcyMzk3OTY5Ny43MzAwMDksInN1YiI6IjY2YmE1NGE3OGZkNWI2YTE5YWE5MTUyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I5oJjKXO2AyxEzxXrpfKWh8qkrqlMs2U4hNCqkzBObE",
    },
  };
  const overideOptions = { ...defaultOptions, ...options };
  useEffect(() => {

    const fetchData = async () => {

      try {
        const response = await fetch(url, overideOptions);
        if (!response.ok) {
          const error = await response.json();
          console.log(error);
        }
        const data = await response.json();
        setIsLoading(false);
      } catch (e) {
        console.error("Failed to call API: ", e);
      }
    };
    fetchData();
  }, []);

  return { isLoading, data };
}
