// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAilGkG5qVGe3YQyZYkeUupj6K-YnhB4JU",
  authDomain: "netflixgpt-b0d0f.firebaseapp.com",
  projectId: "netflixgpt-b0d0f",
  storageBucket: "netflixgpt-b0d0f.firebasestorage.app",
  messagingSenderId: "565839678669",
  appId: "1:565839678669:web:0e954aa94a4827b8152d84",
  measurementId: "G-K1KF7MDW9T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export { auth, analytics };
