// components/Body.js
import { useEffect, useState } from "react";
import { MOVIE_API_URL } from "./constants";
import MovieCard from "./Moviecard";

const Body = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log("API Data:", data.results);
        setMovies(data.results);
      })
      .catch((err) => console.error("Error fetching movies:", err));
  }, []);

  return (
    <div className="container2">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Body;





// const fetchdata=async()=>{
//         const data=await fetch("https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1");
//         console.log(data);
//         const jsonobj=await data.json();
//         console.log(jsonobj);
//     };
// fetchdata();


// const Body=()=>{
//     return(
//         <div className="container2">
//         <div className="movie1">
//             <img src="https://m.media-amazon.com/images/S/pv-target-images/f4aa623d9fb26421fec29f384e8fbb43bb100364ca32cbe6e85f46ab9958c8bc.jpg" alt="Ninnu Kori"/>
//             <h3>Ninnu Kori</h3>
//             <p>Rating: 7.5</p>
//         </div>

//         <div className="movie2">
//             <img src="https://m.media-amazon.com/images/M/MV5BMGU1YzY4NjQtYTA0ZS00OTRkLWI1YWItM2FkMGFjZDk4ODFmXkEyXkFqcGc@._V1_.jpg" alt="8 Vasanthalu"/>
//             <h3>8 Vasanthalu</h3>
//             <p>Rating: 7.2</p>
//         </div>

//         <div className="movie3">
//             <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Bharat_Ane_Nenu_poster.jpg/250px-Bharat_Ane_Nenu_poster.jpg" alt="Bharat Ane Nenu"/>
//             <h3>Bharat Ane Nenu</h3>
//             <p>Rating: 7.4</p>
//         </div>

//         <div className="movie4">
//             <img src="https://m.media-amazon.com/images/M/MV5BNTU0ZjYxOWItOWViMC00YWVlLWJlMGUtZjc1YWU0NTlhY2ZhXkEyXkFqcGc@._V1_.jpg" alt="Salaar"/>
//             <h3>Salaar</h3>
//             <p>Rating: 6.9</p>
//         </div>

//         <div className="movie5">
//             <img src="https://m.media-amazon.com/images/M/MV5BMTBiNDVkOWQtMGZhMC00MDA0LWI4ZjUtMWE3YjRmMDc3NzBjXkEyXkFqcGc@._V1_.jpg" alt="MAD"/>
//             <h3>MAD</h3>
//             <p>Rating: 7.6</p>
//         </div>

//         <div className="movie6">
//             <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/major-et00097589-27-05-2022-08-31-06.jpg" alt="Major"/>
//             <h3>Major</h3>
//             <p>Rating: 6.5</p>
//         </div>

//         <div className="movie7">
//             <img src="https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg" alt="RRR"/>
//             <h3>RRR</h3>
//             <p>Rating: 7.8</p>
//         </div>

//         <div className="movie8">
//             <img src="https://m.media-amazon.com/images/S/pv-target-images/acda4ca3da981ad44848c04d5b79267b6edef62f7ba4a04383b6c976eda674a2.jpg" alt="Vakeel sabb"/>
//             <h3>Vakeel Sabb</h3>
//             <p>Rating: 7.4</p>
//         </div>
// </div>
//     );
// };


// export default Body;