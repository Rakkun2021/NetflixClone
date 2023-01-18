import React from "react";
import "./header.css";
import Search from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import OutsideClickHandler from "react-outside-click-handler";
// import Logout from "../../components/logout/Logout.jsx";
// import { useClickOutside } from "react-use";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const dropdownRef = useRef(null);
  // eslint-disable-next-line
  const [logout, setLogout] = useState(false);
  const navigate = useNavigate();
  // const [dropdownRef, setOpen] = useClickOutside(() => setOpen(false));

  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleClick = () => {
    setIsClicked(!isClicked);
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    navigate("/signUp");
  };

  return (
    <div className={isScrolled ? "header header-scrolled" : "header"}>
      <div className="container">
        <div className="headerLogo">
          <img src="./images/netflix-logo-png-2582.png" alt="" />
        </div>
        <Link to="/" className="menuItem">
          Home
        </Link>
        <Link to="/movies" className="menuItem">
          Genre
        </Link>
        <Link to="/movies" className="menuItem">
          Country
        </Link>
        <Link to="/movies" className="menuItem">
          Movies
        </Link>
        <Link to="/tv" className="menuItem">
          TV-Series
        </Link>
        <div className="searchBar">
          <Search className="icon" />
          <input type="text" placeholder="Enter your keywords..." />
        </div>
        <div className="profile">
          <NotificationsActiveIcon className="icon" />
          <img
            src="./images/instyle-july-mos-jon-hamm-3-2000-8fcab15780f641c6b4aae6d27ede694f.jpeg"
            alt=""
          />
          <div ref={dropdownRef}>
            <ArrowDropDownIcon className="icon" onClick={handleClick} />
            {isOpen && (
              <div className="options">
                <span>Settings</span>
                <span onClick={handleLogout}>Logout</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
