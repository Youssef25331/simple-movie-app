import "./details.scss";
import { Image } from "react-bootstrap";
import FetchingComponent from "../../components/FetchingComponent/FetchComponent";
import getCredit from "../../components/GetCredit/getCredit";
import { useParams } from "react-router-dom";

export default function DetailsPage() {
  const params = useParams();
  const { isLoading, data } = FetchingComponent(
    `https://api.themoviedb.org/3/${params.category}/${params.id}?language=en-US`,
  );

  const { isLoading: videoLoading, data: video } = FetchingComponent(
    `https://api.themoviedb.org/3/${params.category}/${params.id}/videos?language=en-US`,
  );

  console.log(data)
  const { creditLoading, credit } = getCredit(
    params.category == "movie",
    params.id,
  );
  return (
    <div
      className="details-background"
      style={!isLoading ?
        {
          backgroundImage:
            "url(" + "https://image.tmdb.org/t/p/original/" + data.backdrop_path,
        } : null
      }
    >
      <div className="position-relative  flex-column  d-flex details-hero-container">
        <div className="d-flex top-details-container">
          <Image
            className="details-image"
            src={!isLoading ? data.poster_path != null ? "https://image.tmdb.org/t/p/w500" + data.poster_path : require("../../CardImage.png") : require("../../CardImage.png")}
            rounded
          />
          <div className="ms-4 details-description-container">
            <h2 className="details-title">
              {data.title || data.name || data.original_name || "Loading"}
            </h2>

            <h2 className="details-secondary-title">
              {data.original_title || data.original_name || data.title || data.name || "Loading"}
            </h2>
            <div className="extra-info d-flex ">
              <p>{!isLoading ? "🏆" + data.vote_average.toFixed(1)
                : null}
              </p>
              <p>{!isLoading ?
                params.category == "movie" ? data.release_date.substring(0, 4) : data.first_air_date.substring(0, 4) : null}
              </p>
            </div>
            <div className="d-flex flex-wrap genre">
              {!isLoading ?
                data.genres.map((genre) => (
                  <a href={`/search/${params.category == "movie" ? "movies" : "tv"}/?Genres=${genre.id}`}>

                    <span key={genre.id}>{genre.name}</span>
                  </a>
                )) : null
              }
            </div>
            <p className="details-description mt-4 text-break">{data.overview}</p>
          </div>
        </div>
        {
          video.results[0] ?
            <div className="trailer-container">
              <iframe width="1080px" height="607px" 
                src={"https://www.youtube.com/embed/" + video.results[0].key + "?autoplay=1&mute=0"}>
              </iframe>
            </div> : null
        }
        <div className="d-flex flex-column  cast-container mt-4">
          {!creditLoading && credit.cast[0] ? <h3>Cast</h3> : ""}
          <div className="cast-member-container  d-flex flex-wrap">
            {!creditLoading
              ? credit.cast.slice(0, 15).map((actor) =>
                actor.profile_path ? (

                  <a href={"https://www.imdb.com/find/?q=" + actor.name}>
                    <div
                      key={actor.credit_id}
                      className="cast-member align-items-center m-2 d-flex"
                    >
                      <Image
                        src={
                          "https://image.tmdb.org/t/p/w200" +
                          actor.profile_path
                        }
                      />
                      <div className="ps-2">
                        <p className="cast-member-name">
                          {actor.name}
                        </p>
                        <p className="cast-member-name">
                          {actor.character}
                        </p>
                      </div>
                    </div>
                  </a>
                ) : (
                  ""
                ),
              )
              : null}
          </div>
        </div>
      </div>
    </div >
  );
}
