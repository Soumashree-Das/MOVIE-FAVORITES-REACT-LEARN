import React, { use } from "react";
import MovieCard from "../Components/MovieCard";
import { useState, useEffect } from "react";
import "../CSS/Home.css";

import { searchMovies, getPopularMovies } from "../Services/api.js";

function Home() {
  const [searchQuery, setsearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popolarMovies = await getPopularMovies();
        setMovies(popolarMovies);
      } catch (err) {
        console.log(err);
        setError("failed to load");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    if(!searchQuery.trim())return ;
    if(loading) return ;

    setLoading(true);

    try{
        const searchResults = await searchMovies(searchQuery);
        setMovies(searchResults);
        setError(null);
    }catch(err){
        console.log(err);
        setError("failed to search movies ...")
    }finally{
        setLoading(false);
    }
  };

  return (
    <div className="home">
      <form action="" onSubmit={handleSearch} className="search-Form">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>

      {error && <div className="error-msg">{error}</div>}

      {loading ? (
        <div className="loading">LOADING... </div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
