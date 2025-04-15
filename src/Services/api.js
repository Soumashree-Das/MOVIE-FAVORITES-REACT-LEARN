
const API_key = "d17f0a829ebb64eac345285a25415681";
const BASE_URL = "https://api.themoviedb.org/3";
// const BASE_URL = "https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3";

// Fetch popular movies
export const getPopularMovies = async () => {
    try {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_key}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching popular movies:", error);
        return [];
    }
};

// Search movies by query
export const searchMovies = async (query) => {
    try {
        const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_key}&query=${encodeURIComponent(query)}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error searching movies:", error);
        return [];
    }
};
