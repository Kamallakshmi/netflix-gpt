import React from "react";
import languageConstants from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[20%] flex justify-center">
      <form className="w-1/2  bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={languageConstants[langKey].gptSearchPlaceholder}
        />
        <butto className="py-4 px-4 m-4 bg-red-700 text-white text-center rounded-md col-span-3">
          {languageConstants[langKey].search}
        </butto>
      </form>
    </div>
  );
};

export default GPTSearchBar;
