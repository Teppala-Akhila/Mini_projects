import MovieCard from "./Moviecard";

const Body = ({ movies }) => {
  return (
    <div className="container2">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Body;



// // components/Body.js
// import { useEffect, useState } from "react";
// import { MOVIE_API_URL } from "./constants";
// import MovieCard from "./Moviecard";

// const Body = () => {
//   const [movies, setMovies] = useState([]);          // all movies from API
//   const [searchText, setSearchText] = useState("");  // current input value
//   const [filteredMovies, setFilteredMovies] = useState([]); // movies to display
//   // const [filteredList,setFilteredList] = useState([]); 

//   // Fetch movies from API
//   useEffect(() => {
//     fetch(MOVIE_API_URL)
//       .then((res) => res.json())
//       .then((data) => {
//         setMovies(data.results);
//         setFilteredMovies(data.results); // initially show all movies
//         // setFilteredList(data.results);
//       })
//       .catch((err) => console.error("Error fetching movies:", err));
//   }, []);

//   // Handle search
//   const handleSearch = () => {
//     const filtered = movies.filter((movie) =>
//       movie.title.toLowerCase().includes(searchText.toLowerCase())
//     );
//     setFilteredMovies(filtered);
//   };
//   const handleFilter=() => {
//     const filtered= movies.filter((movie) =>
//     movie.vote_average > 7.0 );
//     setFilteredMovies(filtered); 
//   }



//   return (
//     <div>
//       {/* Search input */}
//       <input
//         type="text"
//         value={searchText}
//         onChange={(e) => setSearchText(e.target.value)}
//         placeholder="Search movies..."
//       />
      

//       {/* Search button */}
//       <button onClick={handleSearch}>Search</button>
//       <div className="filterclass">
//         <button onClick={handleFilter}>
//           Top Rated
//         </button>
//       </div>

//       {/* Movie grid */}
//       <div className="container2">
//         {filteredMovies.map((movie) => (
//           <MovieCard key={movie.id} movie={movie} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;








