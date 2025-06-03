import React, { useRef } from "react";
import languageConstants from "../utils/languageConstants";
import { useSelector, useDispatch } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // this function will search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    //console.log(searchText.current.value);
    // Make an API call to openAI and get movies results

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Final Destination, Dark, Don, Twilight, Raw";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      // TODO: Write Error Handling if there are no movies
    }
    //console.log(gptResults.choices?.[0]?.message?.content.split(","));
    //['Shaun of the Dead', ' Zombieland', ' Tucker and Dale vs. Evil', ' The Cabin in the Woods', ' Happy Death Day']
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    // For each movie I will search TMDB API
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [promise,promsie,promise,promise,promise]
    // take data out of promiseArray - using promise.all - it will take the array of promise only return data when all promise resolved
    const tmdbResults = await Promise.all(promiseArray);
    //console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[40%] md:pt-36 px-4 flex justify-center">
      <form
        className="w-full md:w-2/3 lg:w-1/2 bg-black/70 backdrop-blur-sm rounded-md grid grid-cols-12 shadow-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="col-span-9 p-3 md:p-4 m-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          placeholder={languageConstants[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-2 bg-red-600 hover:bg-red-700 transition-colors duration-200 text-white font-semibold rounded-md text-sm md:text-base"
          onClick={handleGptSearchClick}
        >
          {languageConstants[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
