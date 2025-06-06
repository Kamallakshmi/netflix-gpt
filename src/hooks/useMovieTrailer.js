import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (movieID) => {
  const dispatch = useDispatch();

  //Memoization
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  // fetching the trailer video and updating store with trailer video data
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieID +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json);
    const trailer = json.results.find(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );
    dispatch(addTrailerVideo(trailer)); // ✅ Send a single video
  };

  useEffect(() => {
    // Memoization
    if (!trailerVideo) getMovieVideos();
  }, []);
};

export default useMovieTrailer;
