// import React from 'react'
// import { createContext,useState,useEffect,useContext } from 'react'

// const MovieContexts=createContext();

// export const useMovieContext = useContext(MovieContexts);

// export const MovieProvider = ({children}) => {
//     const [favorites,setFavorites] = useState([]);

//     useEffect(() => {
//         const storedFavs = localStorage.getItem("favorites");

//         if(storedFavs){
//             setFavorites(JSON.parse(storedFavs));
//         }
//     }, [])

//     useEffect(()=>{
//         localStorage.setItem('favorites',JSON.stringify(favorites))
//     },[favorites])

//     const addtoFav = (movie) =>{
//         setFavorites(prev => [...prev,novie]);
//     }

//     const removeFav = (movieId) =>{
//         setFavorites(prev => prev.filter(movie => movie.id !== movieId))
//     }

//     const isFav = (movieId) => {
//         return favorites.some(movie => movie.id === movieId)
//     }

//     const value = [
//         favorites,
//         addtoFav,
//         removeFav,
//         isFav
//     ]

//     return <MovieContext.provider value = {value}>
//         {children}
//     </MovieContext.provider>
// }


import React, { createContext, useState, useEffect, useContext } from 'react';

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext); // ✅ Correct custom hook

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) {
      setFavorites(JSON.parse(storedFavs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addtoFav = (movie) => {
    setFavorites((prev) => [...prev, movie]); // Also had a typo here (you wrote "novie")
  };

  const removeFav = (movieId) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFav = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const value = {
    favorites,
    addtoFav,
    removeFav,
    isFav,
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};
