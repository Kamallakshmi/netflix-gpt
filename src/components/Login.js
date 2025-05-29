//rafce -> react arrow function export component

import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://i.redd.it/zjgs096khv591.jpg" alt="background" />
      </div>
      <form className="absolute p-12 bg-black w-1/4 my-36 mx-auto right-0 left-0 text-white bg-opacity-85 rounded-sm">
        <h1 className="font-bold text-2xl py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-700 rounded-sm bg-opacity-85"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700 rounded-sm bg-opacity-85"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700 rounded-sm bg-opacity-85"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-sm">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered. Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
