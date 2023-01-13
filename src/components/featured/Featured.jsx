import React from "react";
import "./featured.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";

const Featured = ({ item, backdrop }) => {
  return (
    <div className="featured">
      <div className="image">
        <img
          src={`https://image.tmdb.org/t/p/w1280/${backdrop}`}
          alt=""
        />
      </div>

      <div className="info">
        <h1>{item.title}</h1>
        <div className="metaInfo">
          <div className="resolution">4K</div>
          <div className="rating">
            <StarIcon className="icon" />
            {item.vote_average}
          </div>
          <div className="duration">192 min</div>
          <div className="genre-1">SciFi</div>
          <div className="genre-2">Drama</div>
          <div className="genre-3">Action</div>
        </div>
        <div className="desc">{item.overview}</div>
        <div className="buttons">
          <button>
            <PlayArrowIcon className="icon" />
            Watch Now
          </button>
          <button>
            <FavoriteBorderIcon className="icon" />
            Add to list
          </button>
        </div>
      </div>
      <div className="poster"></div>
    </div>
  );
};

export default Featured;
