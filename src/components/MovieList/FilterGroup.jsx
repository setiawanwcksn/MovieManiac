import React from "react";

const FilterGroup = ({ minRating, ratings, onRatingClick }) => {
  return ratings.map((rating) => {
    return (
      <li
        className={
          minRating === rating
            ? "movie_filter_item active"
            : "movie_filter_item"
        }
        key={rating}
        onClick={() => onRatingClick(rating)}
      >
        {rating}+ Star
      </li>
    );
  });
};

export default FilterGroup;
