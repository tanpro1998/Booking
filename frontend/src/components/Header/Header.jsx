import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import {
  faBed,
  faPlane,
  faUtensils,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { userLogout } from "../../redux/callAPI";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [header, setHeader] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const scrollEvent = (e) => {
    if (window.scrollY < 70) {
      return setHeader("");
    } else if (window.scrollY > 70) {
      return setHeader("scroll-color");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  const handleLogout = () => {
    userLogout();
  };

  return (
    <div className={`header ${header}`}>
      <div className="hamburger-menu">
        <i
          className={`fas ${showMenu ? "fa-times" : "fa-bars"}`}
          onClick={() => setShowMenu(!showMenu)}
        ></i>
      </div>
      <div className="headerContainer">
        <Link to="/">
          <span className="logo">Flash Booking</span>
        </Link>
        <div className={`headerList ${showMenu && "show-menu"}`}>
          <Link to="/rooms" onClick={() => setShowMenu(false)}>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faBed} />
              <span>Rooms</span>
            </div>
          </Link>
          <Link to="/dining" onClick={() => setShowMenu(false)}>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faUtensils} />
              <span>Dining</span>
            </div>
          </Link>
          <Link to="/tours" onClick={() => setShowMenu(false)}>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faPlane} />
              <span>Tours</span>
            </div>
          </Link>
          <Link to="/about" onClick={() => setShowMenu(false)}>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faCircleInfo} />
              <span>About</span>
            </div>
          </Link>
        </div>
        <div className="headerItem">
          {user ? (
            <>
              <button className="headerButton" onClick={handleLogout}>
                Logout
              </button>
              <span className="headerUser">{user.name}</span>
            </>
          ) : (
            <>
              <Link to="/register">
                <button className="headerButton">Register</button>
              </Link>
              <Link to="/login">
                <button className="headerButton">Login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
