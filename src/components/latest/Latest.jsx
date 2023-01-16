import React from "react";
import "./latest.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import PosterLatest from "../posterLatest/PosterLatest";
import { useNavigate } from "react-router-dom";

const Latest = () => {
  const navigate = useNavigate();
  return (
    <div className="latest">
      <div className="titleBar">
        <h1>Latest</h1>
        <div className="viewAll">
          <p
            onClick={() => {
              navigate("/movies");
            }}
          >
            View all
          </p>
          <ArrowCircleRightIcon className="icon" />
        </div>
      </div>
      <PosterLatest />
    </div>
  );
};

export default Latest;
