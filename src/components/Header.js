import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    // this is like event listener
    // we are doig this to check authetication and update the store if the user is logged in / logged out
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");

        // ...
      }
    });

    // unsubscribe will called when component unmounts and unsubcribe my on
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black/90 to-transparent flex justify-between z-20">
      <img className="w-48 " src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-4">
          <img
            src={user?.photoURL}
            alt="profile icon"
            className="w-12 h-12 rounded-md"
          />
          <button onClick={handleSignOut} className="font-bold text-white px-2">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
