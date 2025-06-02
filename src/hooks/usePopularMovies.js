// custom hook is just a function

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  // fetching the data and puting into store (Fetch data from TMDB API and update store)
  // its better to create new custom hook to do this thing it is good practise
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    //console.log("Dispatching movies...");
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };

  //i will put API call inside useEffect because i call it only once.
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
