import React from "react";
import { BG_URL } from "../utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="absolute -z-10">
        <img
          src={BG_URL}
          className="h-screen object-cover md:h-auto"
          alt="background"
        />
      </div>

      <div className="">
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
