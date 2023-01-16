import React from "react";
import "./movies.css";
import FolderIcon from "@mui/icons-material/Folder";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import PublicIcon from "@mui/icons-material/Public";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import SortIcon from "@mui/icons-material/Sort";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Header from "../../components/header/Header.jsx";
// import PosterLatest from "../../components/posterLatest/PosterLatest.jsx";
import Footer from "../../components/footer/Footer.jsx";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Poster from "../../components/poster/Poster";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  // useEffect(() => {
  //   // Use Promise.all to make the two requests in parallel
  //   Promise.all([
  //     axios.get(
  //       "https://api.themoviedb.org/3/movie/now_playing?api_key=dfb83a503ccee16b00464b65bc3ac410&language=en-US&page=1"
  //     ),
  //     axios.get(
  //       "https://api.themoviedb.org/3/movie/now_playing?api_key=dfb83a503ccee16b00464b65bc3ac410&language=en-US&page=2"
  //     ),
  //   ])
  //     .then((responses) => {
  //       // Concatenate the responses from the two pages into one array
  //       const allMovies = responses[0].data.results.concat(
  //         responses[1].data.results
  //       );
  //       // Set the state with the concatenated array
  //       setMovies(allMovies);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=dfb83a503ccee16b00464b65bc3ac410&language=en-US&page=${page}`
      )
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  const handlePageClick = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <Header />
      <div className="movies">
        <div className="titleBar">Movies</div>
        <div className="optionsTab">
          <button>
            <FolderIcon />
            Genre <span>All</span>
          </button>
          <button>
            <FolderCopyIcon />
            Type <span> Movie</span>
          </button>
          <button>
            <PublicIcon />
            <span>Country</span>
          </button>
          <button>
            <CalendarMonthIcon />
            <span>Year</span>
          </button>
          <button>
            <AspectRatioIcon />
            <span>Quality</span>
          </button>
          <button>
            <SortIcon />
            <span>Sort</span>
          </button>
          <button>
            <FilterAltIcon />
            <span>Filter</span>
          </button>
        </div>
        <Poster movies={movies} />
      </div>
      <div className="pagination">
        <button onClick={() => handlePageClick(page - 1)}>
          <ArrowBackIosIcon />
        </button>
        <button onClick={() => handlePageClick(1)}>1</button>
        <button onClick={() => handlePageClick(2)}>2</button>
        <button onClick={() => handlePageClick(3)}>3</button>
        <button onClick={() => handlePageClick(4)}>4</button>
        <button onClick={() => handlePageClick(5)}>5</button>
        <button onClick={() => handlePageClick(6)}>6</button>
        <button onClick={() => handlePageClick(page + 1)}>
          <ArrowForwardIosIcon />
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Movies;
