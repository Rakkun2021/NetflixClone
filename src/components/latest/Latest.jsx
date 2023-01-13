import React from "react";
import "./latest.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Grid from "../grid/Grid";
import Poster from "../poster/Poster";

const Latest = () => {
  return (
    <div className="latest">
      <div className="titleBar">
        <h1>Latest</h1>
        <div className="viewAll">
          <p>View all</p>
          <ArrowCircleRightIcon className="icon"/>
        </div>
      </div>
      <Grid numColumns={7} numRows={2} Component={Poster} />
    </div>
  );
};

export default Latest;
