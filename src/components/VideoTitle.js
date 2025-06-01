import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w- screen h-screen aspect-video absolute  bg-gradient-to-r from-black via-transparent to-transparent text-white px-12 pt-[20%] z-10">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-lg py-6 w-1/3">{overview}</p>
      <div className="">
        <button className="bg-white text-black font-semibold p-3 px-9 text-lg  hover:bg-opacity-70 rounded-md mr-4">
          ▶ Play
        </button>
        <button className="bg-gray-500 text-white font-semibold p-3 px-9 text-lg bg-opacity-70 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
