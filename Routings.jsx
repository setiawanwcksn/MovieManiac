import React from "react";
import { Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList/MovieList";

import Fire from "./assets/fire.png";
import Star from "./assets/glowing-star.png";
import Party from "./assets/partying-face.png";

const Routings = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<MovieList title="Popular" emoji={Fire} type="popular" />}
      />
      <Route
        path="/top_rated"
        element={<MovieList title="Top Rated" emoji={Star} type="top_rated" />}
      />
      <Route
        path="/upcoming"
        element={<MovieList title="Upcoming" emoji={Party} type="upcoming" />}
      />
    </Routes>
  );
};

export default Routings;
