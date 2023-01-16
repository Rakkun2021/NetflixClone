import React from "react";
import "./signUp.css";
import Footer from "../../components/footer/Footer.jsx";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  // eslint-disable-next-line
  const [password, setPassword] = useState("");
  // eslint-disable-next-line
  const [user, setUser] = useState("false");
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const handleStart = () => {
    setEmail(emailRef.current.value);
    localStorage.setItem("email", emailRef.current.value);
  };

  const handleFinish = (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    localStorage.setItem("password", passwordRef.current.value);
    navigate("/");
  };

  return (
    <>
      <div className="signUp">
        <div className="image">
          <img src="./images/netflixPoster.jpeg" alt="" />
        </div>
        <div className="logo">
          <img src="./images/netflix-logo-png-2582.png" alt="" />
        </div>
        <button className="signInButton" onClick={() => navigate("/signIn")}>
          Sign In
        </button>
        <div className="signUpCard">
          <h1>
            Unlimited movies, TV <br /> shows and more.
          </h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          {!email ? (
            <div className="inputLabel">
              <input type="email" ref={emailRef} placeholder="Email Address" />
              <input type="submit" value="Get Started" onClick={handleStart} />
            </div>
          ) : (
            <form className="inputLabel">
              <input type="password" ref={passwordRef} placeholder="Password" />
              <input type="submit" value="Start" onClick={handleFinish} />
            </form>
          )}
        </div>
        <div className="promoLabels">
          <div className="left">
            <h1>Enjoy on your TV.</h1>
            <h2>
              Watch on smart TVs, PlayStation, Xbox, <br /> Chromecast, Apple
              TV, Blu-ray players and <br /> more.
            </h2>
          </div>
          <div className="right">
            <img src="./images/tv.png" alt="" />
          </div>
        </div>
        <div className="promoLabels-flipped">
          <div className="right">
            <img src="./images/device-pile.png" alt="" />
          </div>
          <div className="left">
            <h1>Watch everywhere.</h1>
            <h2>
              Stream unlimited films and TV programmes on your phone, tablet,
              laptop and TV without paying more.
            </h2>
          </div>
        </div>
        <div className="promoLabels">
          <div className="left">
            <h1>Create profiles for children.</h1>
            <h2>
              Send children on adventures with their favourite characters in a
              space made just for them – free with your membership.
            </h2>
          </div>
          <div className="right">
            <img src="./images/netf.png" alt="" />
          </div>
        </div>
        <div className="promoLabels-flipped-last">
          <div className="right">
            <img src="./images/mobile-0819.jpeg" alt="" />
          </div>
          <div className="left">
            <h1 style={{ fontSize: "30px" }}>
              Download your programmes to watch offline.
            </h1>
            <h2>Available on all plans except Basic with adverts.</h2>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SignUp;
