import React, { useEffect, useState } from "react";
import _ from "lodash";

import "./MovieList.css";
import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";

const MovieList = ({ title, emoji, type }) => {
  const [movies, setMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const ratings = [8, 7, 6];
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    setFilteredMovies(_.orderBy(movies, [sort.by], [sort.order]));
  }, [sort]);

  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=9d592981311b4343bc0a013d20bfd537`
    );
    const data = await response.json();
    setMovies(data.results);
    setFilteredMovies(data.results);
  };

  const handleFilter = (rate) => {
    if (rate === minRating) {
      setMinRating(0);
      setFilteredMovies(movies);
    } else {
      setMinRating(rate);
      setFilteredMovies(movies.filter((movie) => movie.vote_average >= rate));
    }
  };

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="movie_list" id={type}>
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          {title} <img src={emoji} alt={title} className="navbar_emoji" />
        </h2>

        <div className="align_center movie_list_fs">
          <ul className="align_center movie_filter">
            <FilterGroup
              minRating={minRating}
              onRatingClick={handleFilter}
              ratings={ratings}
            />
          </ul>
          <select
            name="by"
            id=""
            onChange={handleSort}
            value={sort.by}
            className="movie_sorting"
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select
            name="order"
            id=""
            onChange={handleSort}
            value={sort.order}
            className="movie_sorting"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>
      <div className="movie_cards">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.original_title}
            poster={movie.poster_path}
            rating={movie.vote_average}
            release_date={movie.release_date}
            description={movie.overview}
          />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
