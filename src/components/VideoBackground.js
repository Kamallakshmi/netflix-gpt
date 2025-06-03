import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieID }) => {
  // fetch trailer video --> need APi call --> need movie id
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  //console.log(trailerVideo);
  useMovieTrailer(movieID);

  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-video"
        style={{ border: "none", maxWidth: "100%" }}
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
