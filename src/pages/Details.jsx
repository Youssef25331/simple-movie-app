import "./details.scss";
import React from "react";
import { Image, Row } from "react-bootstrap";
import FetchingComponent from "../FetchComponent";

export default function DetailsPage() {
  const [data, isLoading] = FetchingComponent();
  return (
    <div className="details-background">
      <div className="position-relative d-flex details-hero-container">
        <Image
          className="details-image"
          src="https://image.tmdb.org/t/p/w500/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg"
          rounded
          fluid
        />
        <div className="ms-4 details-description-container">
          <h2 className="details-title">THE WEIRD THINGS MOVIE</h2>
          <div className="d-flex flex-wrap genre">
            <span>Fantasy</span>
            <span>Fantasy</span>
            <span>Fantasy</span>
            <span>Fantasy</span>
            <span>Fantasy</span>
          </div>
          <p className="details-description text-break">
            A live broadcast of a late-night talk show in 1977 goes horribly A
            live broadcast of a late-night talk show in 1977 goes horribly
            wrong, unleashing evil into the nation's living rooms. wrong,
            unleashing evil into the nation's living rooms.
          </p>
          <div className="d-flex flex-column cast-container">
            <h3>Cast</h3>
            <div className="cast-member-container d-flex">
              <div className="cast-member align-items-center me-2 d-flex flex-column">
                <Image src="https://image.tmdb.org/t/p/w500/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg" />
                <p className="text-center">John Doe</p>
              </div>

              <div className="cast-member align-items-center d-flex flex-column">
                <Image src="https://image.tmdb.org/t/p/w500/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg" />
                <p className="text-center">John Doe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
