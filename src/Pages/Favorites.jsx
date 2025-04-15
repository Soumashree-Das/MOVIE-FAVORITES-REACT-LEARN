import React from "react";
import "../CSS/Favorites.css";
import { useMovieContext } from "../Contexts/MovieContexts";
import MovieCard from "../Components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return(
    <div className="favorites">
      <h2>YOUR FAVORITES</h2>
      <div className="movies-grid">
        {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>)
  }

  return (
    <div className="favorites-empty">
      <h2>no favorite movies yet.</h2>
      <p>add a movieto favorite and they will be added here.</p>
    </div>
  );
}

export default Favorites;
