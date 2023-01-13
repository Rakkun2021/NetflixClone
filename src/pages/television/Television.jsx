import React from "react";
import "./television.css";
import FolderIcon from "@mui/icons-material/Folder";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import PublicIcon from "@mui/icons-material/Public";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import SortIcon from "@mui/icons-material/Sort";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Header from "../../components/header/Header.jsx";
import Poster from "../../components/poster/Poster.jsx";
import Grid from "../../components/grid/Grid.jsx";
import Footer from "../../components/footer/Footer.jsx";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Television = () => {
  return (
    <>
      <Header />
      <div className="television">
        <div className="titleBar">TV Series</div>
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
        <Grid numColumns={7} numRows={4} Component={Poster} />
      </div>
      <div className="pagination">
        <button>
          <ArrowBackIosIcon />
        </button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>
          <ArrowForwardIosIcon />
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Television;
