import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log("movies:", movies);

  if (!movies || !Array.isArray(movies)) {
    return null; // or show a loading spinner or a message
  }

  return (
    <div className="px-2 md:px-4">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex overflow-x-auto overflow-y-hidden space-x-4 no-scrollbar">
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
