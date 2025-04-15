🌟 React Basics + Vite
🚀 React Components
Building blocks of React apps: Encapsulate logic and UI.

Created using: JavaScript functions that return JSX.

Examples: Navbar, MovieCard.

✨ JSX
Syntax extension combining HTML-like tags with JavaScript.

Must return a single parent element, or wrap multiple elements in a Fragment.

🎨 Props (Properties)
Definition: Passed from parent to child components.

Key Characteristics: Immutable & accessed via props.

🔄 State
Definition: Managed within a component using the useState hook.

Trigger: State changes result in component re-renders.

Example:

javascript
const [state, setState] = useState(defaultValue);
⚡ Setting Up a React Project
Install Node.js, create React app using:

bash
npm create vite@latest
Use modern tools like Vite for fast setup and hot reloading.

🌐 React Router
Enables navigation between pages in a React app.

Key Components:

BrowserRouter: Wraps the app for routing.

Routes and Route: Define paths & rendered components.

Example:

jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/favorites" element={<Favorites />} />
  </Routes>
</BrowserRouter>
🔧 State Management
useState
Usage: Manage local state (e.g., user input, fetched data).

Example:

javascript
const [state, setState] = useState(initialValue);
useEffect
Purpose: Handle side effects like API calls or subscriptions.

Runs: After rendering or dependency changes.

Example:

jsx
useEffect(() => {
  fetchMovies();
}, [dependency]);
Context API
Manages global state (e.g., favorites list).

How to use:

Create a context using React.createContext.

Wrap the app with a Provider.

🌎 API Integration
Fetching Data
Use libraries like fetch or Axios.

Example API Call:
javascript
const response = await fetch(`${BASE_URL}/movies?api_key=${API_KEY}`);
const data = await response.json();
💻 Conditional Rendering
Techniques:
Ternary Operator:

jsx
isLoading ? <Loading /> : <MovieList />
Logical AND:

jsx
error && <ErrorMessage />
🎨 Styling
Use CSS modules or global styles.

Assign class names via className in JSX.

Example:

jsx
<div className="movie-card">...</div>
💾 Persistent Data Storage
Utilize localStorage for saving & retrieving data.

Convert Data:
Save: localStorage.setItem('key', JSON.stringify(data))

Retrieve: JSON.parse(localStorage.getItem('key'))

✨ Practical Implementation: Movie Search App
Features:
Search for movies, display popular movies, mark favorites/unfavorites.

Utilized: useState, useEffect, React Router, and Context API.

Components:
MovieCard:

Displays movie details (title, year, poster).

Handles favorites logic (addToFavorites, removeFromFavorites).

Favorites Page:

Shows all favorited movies using Context.

Dynamically renders movies from the favorites list.



















<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->
