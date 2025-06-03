import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="flex-shrink-0 w-32 md:w-44 lg:w-52 hover:scale-105 transition-transform duration-300 cursor-pointer">
      <img
        src={IMG_CDN + posterPath}
        alt="Movie card"
        className="rounded-md shadow-md"
      />
    </div>
  );
};

export default MovieCard;
