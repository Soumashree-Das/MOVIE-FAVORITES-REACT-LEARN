import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import Navbar from "./Components/Navbar";
import { MovieProvider } from "./Contexts/MovieContexts";
import MovieDetailsPage from "./Pages/MovieDetailsPage";

import "./CSS/App.css";

function App() {
  // const Movienumber = 2;

  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;

{
  /* conditional rendering */
}
{
  /* type 1  */
}

{
  /* {Movienumber === 1 ? (<MovieCard movie={{
        title : "time",
        release_date:"01-05-2024"
      }}/>) : (
        <MovieCard movie={{
        title : "martin",
        release_date:"01-05-2024"
      }}/>
      )} */
}

{
  /* type 2  */
}
{
  /* {Movienumber ===2 && <MovieCard movie={{
        title : "martin",
        release_date:"01-05-2024"
      }}/>} */
}
