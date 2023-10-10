// Import React and React Router components
import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

function BRANCH() {
  return (
    <div>
      <h1>BRANCH</h1>
      // Use an Outlet component to render nested routes
      <Outlet />
    </div>
  );
}
// Create a Home component
function ECE() {
  return <h1>ECE</h1>;
}

function EEE() {
  return <h1>EEE</h1>;
}

// Create an About component
function CSE() {
  return (
    <div>
      <h1>CSE</h1>
      // Use an Outlet component to render nested routes
      <Outlet />
    </div>
  );
}

// Create a Team component
function CSEHONORS() {
  return <h2>CSE honors</h2>;
}

// Create a Contact component
function CSEREGULAR() {
  return <h2>CSE regular</h2>;
}

// Create a Navbar component
function Navbar() {
  return (
    // Use a nav tag to wrap the navigation links
    <nav>
      // Use Link components to create navigation links
      <Link to="/">BRANCH</Link> 
      <Link to="/BRANCH/ECE">ECE</Link> 
            <Link to="/BRANCH/EEE">EEE</Link>
      <Link to="/BRANCH/CSE">CSE</Link>
      <Link to="/BRANCH/CSE/CSEHONORS">CSE</Link>
      <Link to="/BRANCH/CSE/CSEREGULAR">CSE</Link>
    </nav>
  );
}

// Create an App component
function App() {
  return (
    // Use a BrowserRouter component to wrap the routes
    <BrowserRouter>
      // Render the Navbar component
      <Navbar />
      // Use a Routes component to define the routes
      <Routes>
        // Use Route components to specify the paths and components for each route
        <Route path="/" element={<BRANCH />} >
        <Route path="/BRANCH/ECE" element={<ECE />} />
        <Route path="/BRANCH/EEE" element={<EEE />} />
         <Route path="/BRANCH/CSE" element={<CSE/>}>
          // Use nested Route components for subroutes
          <Route path="CSEHONORS" element={<CSEHONORS />} />
          <Route path="CSEREGULAR" element={<CSEREGULAR/>} />/</Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Export the App component
export default App;