import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Card({ item }) {
  return (
    <Link
      key={item.id}
      to={item.media_type == "Movie" ? "/movie/" + item.id : "/tv/" + item.id}
    >
      <Image
        className="px-1 carousel-image"
        key={item.id}
        src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
        rounded
        fluid
      ></Image>
    </Link>
  );
}
