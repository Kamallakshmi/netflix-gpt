# Netflix GPT

- Create React App
- Configured tailwindCSS
- Header
- Routing of App
- Login Form
- Sign Up Form
- Form Validation
  - useRef Hook
- Authentication [when sign in it should sign in, when sign up it should do sign up]
  - For authentication we need a backend (we are using Google Firebase)
  - Firebase Setup
  - Deploying our app to production
- Create SignUp User Account
- Implement Sign In user API
- Created Redux Store with userSlice
  -Implemented Sign Out
- Update Profile
- BUG FIX --> Sign up user dispalyName and profile picture update
- BUG FIX --> if the user is not logged in Redirect/ browse to login Page and vice-versa
- Unsubscribed to the onAuthStateChanged callback
- Add hardcoded values to the constants.js
- Register for TMDB API & create an app & get access token
- Get Data from TMDB now playing movies list API
- Custom hooks for Now Playing Movies
- Created movieSlice
- Updated the store with movies data
- Planning for Main Container & secondary container
- Fetch data for trailer video
- Update store with trailer video data
- Embedded the youtube video and make it autoplay and mute

# Features

- Login/ Sign Up Page
  - Sign In / Sign Up Form
  - Once signed in redirect to browse page
- Browse page(comes only after authentication)
  - Header
  - Main Movie
    - Trailer in Background
    - Main Movie Title & Description
  - Movie Suggestions
    - Movie List \* N
- NetflixGPT
  - Search bar
  - Movie Suggestions
