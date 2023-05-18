import React from "react";
import style from "../assets/css/movieCard.module.css";

const MovieCard = ({ movies }) => {
  const { id, title, overview, poster_path } = movies;
  const imageUrl = "https://image.tmdb.org/t/p/w300" + poster_path;
  return (
    <>
      <img src={imageUrl} alt={title} />
      <p>{id}</p>
      <p className={style.movieTitulo}>{title}</p>
      <p className={style.movieOverview}>{overview}</p>
    </>
  );
};

export default MovieCard;
