// import React from 'react'
// import { Link } from 'react-router-dom'
// import "../CSS/Navbar.css"

// function Navbar() {
//     return (
//         <nav className='navbar'>
//             <div className='navbar-brand'>
//                 <Link to="/">Movie App</Link>
//             </div>
//             <div className="navbar-links">
//                 <Link to="/" className="nav-link">Home</Link>
//                 <Link to="/favorites" className="nav-link">Favorites</Link>
//             </div>
//         </nav>
//     )
// }

// export default Navbar







// The Navbar component provides navigation links for the app using React Router's Link. It includes a brand title ("Movie App") and two routes: Home ("/") and Favorites ("/favorites"). The links enable seamless client-side navigation without page reloads. Styled with CSS classes, it remains fixed across all pages for consistent user experience.


// Import React library (required for any React component)
import React from 'react'

// Import Link component from react-router-dom for client-side navigation
// (prevents full page reloads when switching between routes)
import { Link } from 'react-router-dom'

// Import the CSS styles specific to this Navbar component
import "../CSS/Navbar.css"

// Define the Navbar functional component
function Navbar() {
    // The return statement contains JSX that will be rendered to the DOM
    return (
        // <nav> HTML5 semantic element for navigation
        // 'navbar' class for styling
        <nav className='navbar'>
            
            {/* Left side of navbar - typically for logo/branding */}
            <div className='navbar-brand'>
                {/* 
                Link component creates a clickable link that:
                - Points to the home route ("/")
                - Will be styled by your CSS
                - Won't cause full page reload (single-page app behavior)
                */}
                <Link to="/">Movie App</Link>
            </div>

            {/* Right side of navbar - navigation links */}
            <div className="navbar-links">
                {/* 
                First navigation link - Home
                - Points to root route ("/")
                - Has 'nav-link' class for styling
                */}
                <Link to="/" className="nav-link">Home</Link>
                
                {/* 
                Second navigation link - Favorites 
                - Points to "/favorites" route
                - Same styling class as Home link
                */}
                <Link to="/favorites" className="nav-link">Favorites</Link>
            </div>
        </nav>
    )
}

// Export the component to make it available for import in other files
export default Navbar


// Key Features:

// Routing - Uses React Router's Link for SPA navigation

// Consistent Layout - Rendered once in App.js

// Semantic HTML - Uses <nav> element

// CSS Modules - Scoped styling

// Branding + Routes - Combines logo and navigation links

// Data Flow:
// URL Changes → Router Updates View