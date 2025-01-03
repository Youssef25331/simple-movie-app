import FetchingComponent from "../FetchingComponent/FetchComponent";

export default function getCredit(isMovie, id) {
  const moviesUrl = `https://api.themoviedb.org/3/movie/${id}/credits`;
  const tvUrl = `https://api.themoviedb.org/3/tv/${id}/credits`;
  const { isLoading, data } = FetchingComponent(isMovie ? moviesUrl : tvUrl);
  const creditLoading = isLoading;
  const credit = data;
  return { creditLoading, credit };
}
