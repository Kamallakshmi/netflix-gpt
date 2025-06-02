import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div className="overflow-x-hidden w-full">
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
        Main Container
          - Video Background
          - Video Title
        Secondary Container
          - Movies List * N
            - Cards * N

      
      
      */}
    </div>
  );
};

export default Browse;
