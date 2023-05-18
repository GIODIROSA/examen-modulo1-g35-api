import React from "react";
import style from "../assets/css/movieCard.module.css";

const MovieCard = ({ movies }) => {
  const { id, title, overview, poster_path } = movies;
  const imageUrl = "https://image.tmdb.org/t/p/w300" + poster_path;
  return (
    <>
      <div className={style.movieCard}>
        <img src={imageUrl} width={230} height={345} alt={title} />
        <p className={style.movieTitulo}>{title}</p>
      </div>
    </>
  );
};

export default MovieCard;
