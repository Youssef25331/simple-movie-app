import { Link } from "react-router-dom";
import "./Card.scss";

export default function Card({ item, title, type ,isLoading}) {
  return (
    <div className="card-container">
      <Link
        key={item.id}
        className="d-flex"
        to={!isLoading?type == "movies" ? "/movie/" + item.id : "/tv/" + item.id:""}
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
        >
          <div className="card-overlay"></div>
        </div>
      </Link>
      {title ? (
        <h3 className="card-title m-2 text-center ">
          {item.title || item.name}
        </h3>
      ) : (
        ""
      )}
    </div>
  );
}
