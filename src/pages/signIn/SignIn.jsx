import React from "react";
import "./signIn.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../../components/userContext/UserContext.jsx'



const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = useContext(UserContext)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    if (storedEmail === email && storedPassword === password) {
      navigate("/");
      setUser(true);
    } else {
      navigate("/signUp");
    }
    // console.log(user);
    // console.log(storedEmail);
  };

  return (
    <>
      <div className="signIn">
        <div className="image">
          <img src="./images/netflixPoster.jpeg" alt="" />
        </div>
        <div className="logo">
          <img src="./images/netflix-logo-png-2582.png" alt="" />
        </div>
        <div className="signInCard">
          <h1>Sign In</h1>
          <div className="credentials">
            <form>
              <input
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input type="submit" value="Sign In" onClick={handleSubmit} />
            </form>
          </div>
          <div className="needHelp">
            <div className="checkbox">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <p>Need help?</p>
          </div>
          <div className="signUpNow">
            <p>New to Netflix?</p>
            <span
              onClick={() => {
                navigate("/signUp");
              }}
              className="register"
            >
              Sign Up Now
            </span>
          </div>
          <div className="captchaNote">
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <span>Learn more.</span>
            </p>
          </div>
        </div>
        <div className="footer">
          <div className="left">
            <img
              src="./images/netflix-logo-png-2582.png"
              alt=""
              className="logo"
            />
            <p>
              Netflix is top free streaming website, where to watch movies
              online free without registration required. With a big database and
              great features, we're confident Netflix is the best free movies
              online website in the space that you can't simply miss!
            </p>
            <div className="connect">
              <TwitterIcon className="icon" />
              <p>Connect with us on twitter</p>
            </div>
          </div>
          <div className="right">
            <div className="lists">
              <ul className="list">
                <li>Movies</li>
                <li>TV Shows</li>
                <li>Most watched</li>
                <li>Top IMDB</li>
              </ul>
              <ul className="list">
                <li>Action</li>
                <li>Horror</li>
                <li>Sci-Fi</li>
                <li>Thriller</li>
              </ul>
              <ul className="list">
                <li>Contact</li>
                <li>Request</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignIn;
