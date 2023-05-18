import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import movies from "../pages/movies.json";

const MovieGrid = () => {
  return (
    <>
      <ul className="">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movies={movie} />
        ))}
      </ul>
    </>
  );
};

export default MovieGrid;
