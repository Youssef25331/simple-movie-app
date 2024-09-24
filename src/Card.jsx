import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Card({ item, title, type }) {
  return (
    <div className="card-container">
      <Link
        key={item.id}
        className="d-flex"
        to={type == "movies" ? "/movie/" + item.id : "/tv/" + item.id}
      >
        <div
          className="card-image"
          key={item.id}
          style={{
            backgroundImage: `url(${
              item.poster_path
                ? "https://image.tmdb.org/t/p/w500" + item.poster_path
                : "https://www.colorhexa.com/35383f.png"
            })`,
          }}
          rounded
          fluid
        ></div>
      </Link>
      {title ? (
        <h3 className="m-2 text-center card-title">
          {item.title || item.name}
        </h3>
      ) : (
        ""
      )}
    </div>
  );
}
