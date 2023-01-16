import React from "react";
import "./poster.css";
import axios from "axios";
import { useState } from "react";

const Poster = ({ movies }) => {
  // eslint-disable-next-line
  const [videoKey, setVideoKey] = useState(null);
  const handlePosterClick = async (movieId) => {
    const videoData = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=dfb83a503ccee16b00464b65bc3ac410&language=en-US`
    );
    const key = videoData.data.results[0].key;
    setVideoKey(key);
    window.open("https://www.youtube.com/watch?v=" + key);
  };

  // console.log(videoKey);

  const preferredTvShows = movies.filter(
    (tvShow) => tvShow.original_language === "en"
  );

  return (
    <div className="posterTemplate">
      <div className="posterSlot">
        {preferredTvShows.map((movie) => (
          <div
            key={movie.id}
            className="poster"
            onClick={() => handlePosterClick(movie.id)}
          >
            <p>HD</p>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="title">{movie.name}</div>
            <div className="metaData">
              <div className="year">{movie.first_air_date.slice(0, 4)}</div>
              <div className="dot">.</div>
              <div className="duration">190 min</div>
              <div className="type">Movie</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Poster;
