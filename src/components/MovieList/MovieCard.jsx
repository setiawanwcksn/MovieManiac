import React from "react";
import "./MovieCard.css";
import Star from "../../assets/star.png";

const MovieCard = ({
  title,
  poster,
  rating,
  release_date,
  description,
  id,
}) => {
  return (
    <a
      href={`https://www.themoviedb.org/movie/${id}`}
      target="_blank"
      className="movie_card"
    >
      <img
        src={`https://media.themoviedb.org/t/p/w500${poster}`}
        alt=""
        className="movie_poster"
      />

      <div className="movie_details">
        <h3 className="movie_details_heading">{title}</h3>
        <div className="align_center movie_date_rate">
          <p>{release_date}</p>
          <p>
            {rating} <img src={Star} alt="" className="card_emoji" />
          </p>
        </div>
        <p className="movie_description">{description.slice(0, 100) + "..."}</p>
      </div>
    </a>
  );
};

export default MovieCard;
