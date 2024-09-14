import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Card({ item }) {
  return (
    <Link
      key={item.id}
      to={item.media_type == "Movie" ? "/movie/" + item.id : "/tv/" + item.id}
    >
      <Image
        className=" card-image"
        key={item.id}
        src={
          item.poster_path
            ? "https://image.tmdb.org/t/p/w500" + item.poster_path
            : console.log(item)
        }
        rounded
        fluid
      ></Image>
    </Link>
  );
}
