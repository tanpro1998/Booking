import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import jsCookie from "js-cookie";
import {
  faBed,
  faPlane,
  faUtensils,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [header, setHeader] = useState("");
  const scrollEvent = (e) => {
    if (window.scrollY < 73) {
      return setHeader("");
    } else if (window.scrollY > 70) {
      return setHeader("scroll-color");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  return (
    <div className={`header ${header}`}>
      <div className="headerContainer">
        <Link to="/">
          <span className="logo">Flash Booking</span>
        </Link>
        <div className="headerList">
          <Link to="/rooms">
            <div className="headerListItem">
              <FontAwesomeIcon icon={faBed} />
              <span>Rooms</span>
            </div>
          </Link>
          <Link to="/dining">
            <div className="headerListItem">
              <FontAwesomeIcon icon={faUtensils} />
              <span>Dining</span>
            </div>
          </Link>
          <Link to="/tours">
            <div className="headerListItem">
              <FontAwesomeIcon icon={faPlane} />
              <span>Tours</span>
            </div>
          </Link>
          <Link to="/about">
            <div className="headerListItem">
              <FontAwesomeIcon icon={faCircleInfo} />
              <span>About</span>
            </div>
          </Link>
        </div>
        <div className="headerItem">
          {user ? (
            <>
              <button
                className="headerButton"
                onClick={() => {
                  localStorage.clear();
                  jsCookie.remove("access");
                  jsCookie.remove("refresh");
                  window.location.reload();
                }}
              >
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
