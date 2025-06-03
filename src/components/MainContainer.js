import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  // console.log("Redux movies data:", movies);
  if (!Array.isArray(movies) || movies.length === 0) return null; //[! early return]
  const mainMovie = movies[2]; // we are playing trailer of 1st movie
  //console.log(mainMovie); // it will throw error because of access null when store not filled with movies
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-20 bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieID={id} />
    </div>
  );
};

export default MainContainer;
