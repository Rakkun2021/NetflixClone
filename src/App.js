import "./App.css";
import React, { useContext } from "react";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Home from "./pages/home/Home";
import Movies from "./pages/movies/Movies";
import Television from "./pages/television/Television.jsx";
import { Routes, Route } from "react-router-dom";
import Watch from "./pages/watch/Watch";
import { UserContext } from "./components/userContext/UserContext.jsx";

function App() {
  const { user } = useContext(UserContext);
  // const user = true;
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <SignUp />} />
        <Route path="/movies" element={user ? <Movies /> : <SignIn />} />
        <Route path="/tv" element={user ? <Television /> : <SignIn />} />
        <Route path="/watch" element={user ? <Watch /> : <SignIn />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}
export default App;
