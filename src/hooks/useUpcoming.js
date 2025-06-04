// custom hook is just a function

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcoming = () => {
  // fetching the data and puting into store (Fetch data from TMDB API and update store)
  // its better to create new custom hook to do this thing it is good practise
  const dispatch = useDispatch();

  // Memoization - To save lots of API call.
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getUpcomingMovies = async () => {
    //console.log("Dispatching movies...");
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  };

  //i will put API call inside useEffect because i call it only once.
  useEffect(() => {
    // Memoization - reduce the number of API calls
    if (!nowPlayingMovies) getUpcomingMovies();
  }, []);
};

export default useUpcoming;
