import React from "react";
import "./recommend.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Poster from "../poster/Poster";
import Grid from "../grid/Grid";

const Recommend = () => {
  return (
    <div className="recommend">
      <div className="titleBar">
        <h1>Recommended</h1>
        <button>
          <PlayCircleIcon className="icon" />
          Movies
        </button>
        <button>
          <FormatListBulletedIcon className="icon" /> TV Series
        </button>
        <button>
          <TrendingUpIcon className="icon" /> Trending
        </button>
      </div>
      <Grid numColumns={7} numRows={2} Component={Poster} />
    </div>
  );
};

export default Recommend;
