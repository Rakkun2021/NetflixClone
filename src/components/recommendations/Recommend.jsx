import React from "react";
import "./recommend.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import PosterRecommend from "../posterRecommend/PosterRecommend";

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
        {/* <div className="viewAll">
          <p>View all</p>
          <ArrowCircleRightIcon className="icon"/>
        </div> */}
      </div>
      <PosterRecommend />
    </div>
  );
};

export default Recommend;
