import React from "react";
import "./tvSeries.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Grid from "../grid/Grid";
import Poster from "../poster/Poster";


const TVseries = () => {
  return (
    <div className="tvSeries">
      <div className="titleBar">
        <h1>TV Series</h1>
        <div className="viewAll">
          <p>View all</p>
          <ArrowCircleRightIcon className="icon" />
        </div>
      </div>
      <Grid numColumns={7} numRows={2} Component={Poster} />
    </div>
  );
};

export default TVseries;
