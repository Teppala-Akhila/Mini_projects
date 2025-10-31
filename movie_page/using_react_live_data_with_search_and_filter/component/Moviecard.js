import { IMG_BASE_URL } from "./constants";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
        className="poster"
        src={
          movie.poster_path
            ? IMG_BASE_URL + movie.poster_path
            : "https://via.placeholder.com/200x300?text=No+Image"
        }
        alt={movie.title}
        height="300"
        width="200"
      />
      <h3>{movie.title}</h3>
      <p>⭐ {movie.vote_average}</p>
      <p>Language : {movie.original_language}</p>
      <p>{movie.popularity}</p>
      <p>{movie.release_date}</p>
    </div>
  );
};

export default MovieCard;
