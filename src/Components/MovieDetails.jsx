// components/MovieDetails.jsx
import React, { useState, useEffect } from 'react';
import { getMovieDetails } from '../Services/api';

function MovieDetails({ movieId, onClose }) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await getMovieDetails(movieId);
      setDetails(data);
      setLoading(false);
    };
    fetchDetails();
  }, [movieId]);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="movie-details-overlay">
      <div className="movie-details-card">
        <button className="close-btn" onClick={onClose}>×</button>
        
        {details && (
          <>
            <h2>{details.title}</h2>
            <p><strong>Director:</strong> {details.director || "Unknown"}</p>
            <p><strong>Runtime:</strong> {details.runtime} minutes</p>
            <p><strong>Release Date:</strong> {details.release_date}</p>
            <p><strong>Cast:</strong> {details.cast?.join(", ") || "N/A"}</p>
            <p><strong>Overview:</strong> {details.overview}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default MovieDetails;