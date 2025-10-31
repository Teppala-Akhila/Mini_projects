import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import { MOVIE_API_URL } from "./component/constants";

const App = () => {
  const [movies, setMovies] = useState([]);          // all movies from API
  const [filteredMovies, setFilteredMovies] = useState([]); // visible movies

  // Fetch movies from API once
  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setFilteredMovies(data.results);
      })
      .catch((err) => console.error("Error fetching movies:", err));
  }, []);

  // Search movies
  const handleSearch = (searchText) => {
    if (!searchText.trim()) {
      setFilteredMovies(movies); // show all if search empty
      return;
    }
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  // Filter top-rated
  const handleFilter = () => {
    const filtered = movies.filter((movie) => movie.vote_average > 7.0);
    setFilteredMovies(filtered);
  };

  // Reset movies
  const resetMovies = () => {
    setFilteredMovies(movies);
  };

  return (
    <>
      {/* Pass functions to Header */}
      <Header onSearch={handleSearch} onFilter={handleFilter} onReset={resetMovies} />
      <Body movies={filteredMovies} />
      <Footer />
    </>
  );
};

const reactElement = document.getElementById("main-container");
const reactRoot = createRoot(reactElement);
reactRoot.render(<App />);






// import React from "react";
// import { createRoot } from "react-dom/client";
// import Header from "./component/Header";
// import Body from "./component/Body";
// import Footer from "./component/Footer";

// var reactElement = document.getElementById("main-container");
// var reactRoot = createRoot(reactElement);

// const App = () => {
//   return (
//     <>
//       <Header />
//       <Body />
//       <Footer/>
//     </>

//   );
// };
// reactRoot.render(<App />);