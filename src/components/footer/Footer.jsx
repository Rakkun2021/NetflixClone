import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <img src="./images/netflix-logo-png-2582.png" alt="" className="logo" />
        <p>
          Netflix is top free streaming website, where to watch movies online
          free without registration required. With a big database and great
          features, we're confident Netflix is the best free movies online
          website in the space that you can't simply miss!
        </p>
        <div className="connect">
          <TwitterIcon className="icon"/>
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
  );
};

export default Footer;
