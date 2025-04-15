// This context manages the app's favorite movies state. It initializes from localStorage, syncs changes back to it, and provides methods to add, remove, and check favorites. The MovieProvider wraps child components, giving them access to favorites data and manipulation functions through the custom useMovieContext hook, enabling state persistence across sessions. 


// Import necessary React hooks
import React, { createContext, useState, useEffect, useContext } from 'react';

// 1. Create a new Context object for movies
const MovieContext = createContext();

// 2. Create custom hook for easy context consumption
// (This lets components access context without importing both useContext and MovieContext)
export const useMovieContext = () => useContext(MovieContext);

// 3. Context Provider component that will wrap your application
export const MovieProvider = ({ children }) => {
  // State to store favorite movies array
  const [favorites, setFavorites] = useState([]);

  // 4. Load favorites from localStorage when component mounts (initial render)
  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) {
      // Parse stored data and update state
      setFavorites(JSON.parse(storedFavs));
    }
  }, []); // Empty dependency array = runs only once on mount

  // 5. Sync favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]); // Runs whenever 'favorites' updates

  // 6. Function to add a movie to favorites
  const addtoFav = (movie) => {
    // Use spread operator to create new array with added movie
    setFavorites((prev) => [...prev, movie]);
  };

  // 7. Function to remove a movie from favorites by ID
  const removeFav = (movieId) => {
    // Filter out the movie with matching ID
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  // 8. Function to check if a movie is favorited
  const isFav = (movieId) => {
    // Returns true if any movie in favorites has matching ID
    return favorites.some((movie) => movie.id === movieId);
  };

  // 9. Bundle all values to provide through context
  const value = {
    favorites,      // Current favorites array
    addtoFav,       // Add function
    removeFav,      // Remove function
    isFav,          // Check function
  };

  // 10. Return the Provider with all values
  return (
    <MovieContext.Provider value={value}>
      {children}  {/* Render child components */}
    </MovieContext.Provider>
  );
};


// Key Features:

// Global State - Centralizes favorites data for the entire app

// Persistence - Syncs with localStorage (loads/saves automatically)

// CRUD Operations - Provides add/remove/check functions

// Provider Pattern - Makes state available to component tree

// Custom Hook - Clean API via useMovieContext()

// Data Flow:
// localStorage ↔ Context State ↔ Components

// 2. Navbar (Navigation)