import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w- screen h-screen aspect-video absolute  bg-gradient-to-r from-black via-transparent to-transparent text-white px-8 md:px-12 pt-[25%] md:pt-[15%] z-10">
      <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:inline-block text-md py-6 w-1/3">{overview}</p>
      <div className="pt-2">
        <button className="bg-white text-black font-semibold p-3 px-4 md:px-9 py-2 md:py-3 text-lg  hover:bg-opacity-70 rounded-md mr-4">
          ▶ Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 text-white font-semibold p-3 px-9 text-lg bg-opacity-70 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
