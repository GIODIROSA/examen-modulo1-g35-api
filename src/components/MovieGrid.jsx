import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import movies from "../pages/movies.json";
import style from "../assets/css/movieGrid.module.css";

const MovieGrid = () => {
  return (
    <>
      <div className={style.contenedorCardsMovie}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movies={movie} />
        ))}
      </div>
    </>
  );
};

export default MovieGrid;
