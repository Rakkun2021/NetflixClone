import React from "react";
import './poster.css'

const Poster = () => {
  return (
    <div className="posterSlot">
      <div className="poster">
        <img src="./images/IMG_7259_1024x1024@2x.jpeg" alt="" />
        <p>HD</p>
        <div className="title">Spider-Man</div>
        <div className="metaData">
          <div className="year">2022</div>
          <div className="dot">.</div>
          <div className="duration">107 min</div>
          <div className="type">Movie</div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
