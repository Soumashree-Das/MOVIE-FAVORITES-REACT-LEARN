// // import React from "react";
// // import "../CSS/MovieCard.css";
// // import { useMovieContext } from "../Contexts/MovieContexts";

// // function MovieCard({ movie }) {
// //   const { favorites , addtoFav, removeFav, isFav } = useMovieContext();
// //   const fav = isFav(movie.id);

// //   function onFavortieClick(e) {
// //     e.preventDefault();
// //     if(fav) removeFav(movie.id);
// //     else addtoFav(movie);
// //   }

// //   return (
// //     <div className="movie-card">
// //       <div className="movie-poster">
// //         <img
// //           src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
// //           alt={movie.title}
// //         />
// //         <div className="movie-overlay">
// //           <button className={`favorite-btn ${fav ? "active" : ""}`} onClick={onFavortieClick}>
// //             {fav ? "❤️":"🤍"}
// //           </button>
// //         </div>
// //       </div>
// //       <div className="movie-info">
// //         <h3>{movie.title}</h3>
// //         <p>{movie.release_date?.split("-")[0]}</p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default MovieCard;





// // The MovieCard component displays movie details (poster, title, year) and a favorite button. When clicked, it updates the global favorites list via context. The button toggles between ❤️ (favorited) and 🤍 (not favorited). React re-renders the UI on state changes, making it interactive and responsive. This reusable component efficiently handles user input while keeping UI in sync with data.

// // Import React library (necessary for JSX to work)
// import React from "react";
// // Import the CSS styles for this component
// import "../CSS/MovieCard.css";
// // Import the custom hook to access movie context
// import { useMovieContext } from "../Contexts/MovieContexts";

// // Define the MovieCard component that receives a 'movie' prop
// function MovieCard({ movie }) {

//   const [showDetails, setShowDetails] = useState(false);
//   // Destructure values from the movie context:
//   // - favorites: array of favorite movies
//   // - addtoFav: function to add a movie to favorites
//   // - removeFav: function to remove a movie from favorites
//   // - isFav: function to check if a movie is in favorites
//   const { favorites, addtoFav, removeFav, isFav } = useMovieContext();
  
//   // Check if the current movie is a favorite
//   const fav = isFav(movie.id);

//   // Handler function for when the favorite button is clicked
//   function onFavortieClick(e) {
//     e.preventDefault(); // Prevent default button behavior
//     if(fav) {
//       removeFav(movie.id); // If already favorite, remove it
//     } else {
//       addtoFav(movie); // If not favorite, add it
//     }
//   }

//   // The JSX that will be rendered to the DOM
//   return (
//     // Main container div with movie-card class
//     <div className="movie-card">
//       {/* Container for the movie poster */}
//       <div className="movie-poster">
//         {/* Movie poster image */}
//         <img
//           src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//           alt={movie.title}
//         />
//         {/* Overlay that appears on top of the poster */}
//         <div className="movie-overlay">
//           {/* Favorite button - changes appearance based on fav status */}
//           <button 
//             className={`favorite-btn ${fav ? "active" : ""}`} 
//             onClick={onFavortieClick}
//           >
//             {/* Shows heart emoji if favorite, empty heart if not */}
//             {fav ? "❤️" : "🤍"}
//           </button>
//         </div>
//       </div>
//       {/* Container for movie information */}
//       <div className="movie-info">
//         {/* Movie title */}
//         <h3>{movie.title}</h3>
//         {/* Movie release year (extracted from release_date) */}
//         {/* The ?. is optional chaining - safe if release_date is undefined */}
//         <p>{movie.release_date?.split("-")[0]}</p>
//       </div>
//     </div>
//   );
// }

// // Export the component to be used in other files
// export default MovieCard;

// // Key Features:

// // Presentational - Pure display logic (no state management)

// // Reusable - Works with any movie object

// // Interactive - Favorite button with visual feedback

// // Props-Based - Receives all data via movie prop

// // Context Consumer - Uses useMovieContext

// // Data Flow:
// // movie prop → Rendered UI ↔ Context Update





// components/MovieCard.jsx
import React from "react";
// Import the CSS styles for this component
import "../CSS/MovieCard.css";
// Import the custom hook to access movie context
import { useMovieContext } from "../Contexts/MovieContexts";
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  const { favorites, addtoFav, removeFav, isFav } = useMovieContext();
  const fav = isFav(movie.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (fav) removeFav(movie.id);
    else addtoFav(movie);
  };

  return (
    <Link to={`/movies/${movie.id}`} className="movie-card-link">
      <div className="movie-card">
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movie-overlay">
            <button 
              className={`favorite-btn ${fav ? "active" : ""}`}
              onClick={handleFavoriteClick}
            >
              {fav ? "❤️" : "🤍"}
            </button>
          </div>
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date?.split("-")[0]}</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;