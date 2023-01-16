import React from "react";
import "./tvSeries.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import PosterTvSeries from "../posterTvSeries/PosterTvSeries";
import { useNavigate } from "react-router-dom";

const TVseries = () => {
  const navigate = useNavigate();

  return (
    <div className="tvSeries">
      <div className="titleBar">
        <h1>TV Series</h1>
        <div className="viewAll">
          <p
            onClick={() => {
              navigate("/tv");
            }}
          >
            View all
          </p>
          <ArrowCircleRightIcon className="icon" />
        </div>
      </div>
      <PosterTvSeries />
    </div>
  );
};

export default TVseries;
