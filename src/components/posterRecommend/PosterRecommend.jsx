import React from "react";
import "./posterRecommend.css";
import useAxios from "axios-hooks";
import axios from "axios";
import { useState } from "react";

const PosterRecommend = () => {
  const [{ data, loading, error }] = useAxios(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=dfb83a503ccee16b00464b65bc3ac410&language=en-US&page=1"
  );
  // eslint-disable-next-line
  const [videoKey, setVideoKey] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const results = data.results;
  const first10 = results.slice(0, 21);

  const handlePosterClick = async (movieId) => {
    const videoData = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=dfb83a503ccee16b00464b65bc3ac410&language=en-US`
    );
    const key = videoData.data.results[0].key;
    setVideoKey(key);
    window.open("https://www.youtube.com/watch?v=" + key);
  };

  return (
    <div className="posterRecommend">
      <div className="posterSlot">
        {first10.map((movie) => (
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
            <div className="title">{movie.title}</div>
            <div className="metaData">
              <div className="year">{movie.release_date.slice(0, 4)}</div>
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

export default PosterRecommend;
