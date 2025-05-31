//rafce -> react arrow function export component

import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import checkValidData from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //useRef is used to reference the field(eg: input tag)
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const nameValue = isSignInForm ? null : name.current?.value;
    const message = checkValidData(
      nameValue,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/108535067?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // signin logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://i.redd.it/zjgs096khv591.jpg" alt="background" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black w-1/4 my-36 mx-auto right-0 left-0 text-white bg-opacity-85 rounded-sm"
      >
        <h1 className="font-bold text-2xl py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-700 rounded-sm bg-opacity-85"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700 rounded-sm bg-opacity-85"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700 rounded-sm bg-opacity-85"
        />
        <p className="text-red-500 font-bold text-md py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-sm"
          onClick={handleButtonClick}
        >
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
