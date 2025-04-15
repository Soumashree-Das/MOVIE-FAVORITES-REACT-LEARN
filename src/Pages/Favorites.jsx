// The Favorites component displays a user's favorited movies using the MovieContext. It shows either a grid of favorited MovieCard components or an empty state message. The component automatically updates when favorites change, demonstrating React's reactive nature. It handles both data-present and empty states gracefully for a complete user experience.


// Import React library (required for components)
import React from "react";
// Import component-specific CSS styles
import "../CSS/Favorites.css";
// Import custom hook to access movie context
import { useMovieContext } from "../Contexts/MovieContexts";
// Import MovieCard component to display individual movies
import MovieCard from "../Components/MovieCard";

function Favorites() {
  // Destructure favorites array from movie context
  const { favorites } = useMovieContext();

  // Conditional rendering: If favorites exist, display them
  if (favorites && favorites.length > 0) {
    return (
      <div className="favorites">
        {/* Section heading */}
        <h2>YOUR FAVORITES</h2>
        {/* Container for favorite movies grid */}
        <div className="movies-grid">
          {/* Map through favorites array and render MovieCard for each */}
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    )
  }

  // Default view when no favorites exist
  return (
    <div className="favorites-empty">
      {/* Empty state message */}
      <h2>No favorite movies yet.</h2>
      <p>Add a movie to favorites and they will appear here.</p>
    </div>
  );
}

// Export component for use in other files
export default Favorites;



// Key Features:
// Context Integration - Accesses global favorites state

// Conditional Rendering - Shows content based on data availability

// Reusable Components - Uses the same MovieCard component

// Empty State Handling - Improves UX when no favorites exist

// Automatic Updates - Reacts to context changes

// Data Flow:
// Context → Conditional Render → MovieCard Grid