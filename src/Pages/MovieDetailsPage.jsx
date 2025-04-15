// pages/MovieDetailsPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieDetails } from '../Services/api';
import '../CSS/MovieDetails.css';

function MovieDetailsPage() {
  const { id } = useParams(); // Extract movie ID from URL
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie:", error);
        navigate('/'); // Redirect if error
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, navigate]);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="movie-details-container">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Back to Movies
      </button>
      
      {movie && (
        <div className="movie-details-content">
          <div className="movie-poster-column">
            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title}
              className="details-poster"
            />
          </div>
          <div className="movie-info-column">
            <h1>{movie.title}</h1>
            <p className="release-date">{movie.release_date} • {movie.runtime} mins</p>
            <div className="genres">
              {movie.genres?.map(genre => (
                <span key={genre.id} className="genre-tag">{genre.name}</span>
              ))}
            </div>
            <h3>Overview</h3>
            <p className="overview">{movie.overview}</p>
            
            <h3>Director</h3>
            <p>{movie.director || 'Unknown'}</p>
            
            <h3>Cast</h3>
            <div className="cast-container">
              {movie.cast?.slice(0, 6).map(actor => (
                <div key={actor.id} className="cast-member">
                  {actor.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetailsPage;