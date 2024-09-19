import "./details.scss";
import React from "react";
import { Image } from "react-bootstrap";
import FetchingComponent from "../FetchComponent";
import getCredit from "./getCredit";
import { useParams } from "react-router-dom";

export default function DetailsPage() {
  const params = useParams();
  const { isLoading, data } = FetchingComponent(
    `https://api.themoviedb.org/3/${params.category}/${params.id}?language=en-US`,
  );

  const { creditLoading, credit } = getCredit(
    params.category == "movie",
    params.id,
  );
  return isLoading ? (
    "loading"
  ) : (
    <div
      className="details-background"
      style={{
        backgroundImage:
          "url(" + "https://image.tmdb.org/t/p/original/" + data.backdrop_path,
      }}
    >
      <div className="position-relative d-flex details-hero-container">
        <Image
          className="details-image"
          src={"https://image.tmdb.org/t/p/w500" + data.poster_path}
          rounded
          fluid
        />
        <div className="ms-4 details-description-container">
          <h2 className="details-title">
            {data.title || data.name || data.original_name}
          </h2>
          <div className="d-flex flex-wrap genre">
            {data.genres.map((genre) => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </div>
          <p className="details-description text-break">{data.overview}</p>
          <div className="d-flex flex-column cast-container">
            {!creditLoading && credit.cast[0] ? <h3>Cast</h3> : ""}
            <div className="cast-member-container d-flex flex-wrap">
              {!creditLoading
                ? credit.cast.slice(0, 15).map((actor) =>
                    actor.profile_path ? (
                      <div
                        key={actor.credit_id}
                        className="cast-member align-items-center me-2 d-flex flex-column"
                      >
                        <Image
                          src={
                            "https://image.tmdb.org/t/p/w200" +
                            actor.profile_path
                          }
                        />
                        <p className="text-center cast-member-name">
                          {actor.name}
                        </p>
                      </div>
                    ) : (
                      ""
                    ),
                  )
                : "Cast Loading"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
