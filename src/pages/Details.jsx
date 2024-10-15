import "./details.scss";
import React, { useContext, useEffect } from "react";
import { AppTheme } from "../App";
import { Image } from "react-bootstrap";
import FetchingComponent from "../FetchComponent";
import getCredit from "./getCredit";
import { useParams } from "react-router-dom";

export default function DetailsPage() {
  const params = useParams();
  console.log(params.category)
  const { isLoading, data } = FetchingComponent(
    `https://api.themoviedb.org/3/${params.category}/${params.id}?language=en-US`,
  );

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
            src={!isLoading ? "https://image.tmdb.org/t/p/w500" + data.poster_path : require("../CardImage.png")}
            rounded
          />
          <div className="ms-4 details-description-container">
            <h2 className="details-title">
              {data.title || data.name || data.original_name || "Loading"}
            </h2>
            <div className="d-flex flex-wrap genre">
              {!isLoading ?
                data.genres.map((genre) => (
                  <a href={`/search/${params.category == "movie" ? "movies" : "tv"}/?Genres=${genre.id}`}>

                    <span key={genre.id}>{genre.name}</span>
                  </a>
                )) : ""
              }
            </div>
            <p className="details-description text-break">{data.overview}</p>
          </div>
        </div>
        <div className="d-flex flex-column  cast-container">
          {!creditLoading && credit.cast[0] ? <h3>Cast</h3> : ""}
          <div className="cast-member-container ms-3  d-flex flex-wrap">
            {!creditLoading
              ? credit.cast.slice(0, 15).map((actor) =>
                actor.profile_path ? (
                  <div
                    key={actor.credit_id}
                    className="cast-member align-items-center me-2 d-flex flex-column"
                  >
                    <a href={"https://www.imdb.com/find/?q=" + actor.name}>
                      <Image
                        src={
                          "https://image.tmdb.org/t/p/w200" +
                          actor.profile_path
                        }
                      />
                      <p className="text-center cast-member-name">
                        {actor.name}
                      </p>
                    </a>
                  </div>
                ) : (
                  ""
                ),
              )
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}
