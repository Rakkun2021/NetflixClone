import React from "react";
import "./watch.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackIcon className="backButton" />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://res.cloudinary.com/rakkun/video/upload/v1673456148/ybpuosg5ck4fzlpvhuj0.mp4"
      />
    </div>
  );
};

export default Watch;
