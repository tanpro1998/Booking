import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import jsCookie from "js-cookie";
import {
  faBed,
  faCalendarDays,
  faCar,
  faP,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  return (
    <div className="header">
      <div className="headerContainer">
        <Link to="/">
          <span className="logo">Flash Booking</span>
        </Link>
        <div className="headerList">
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />

            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />

            <span>Cars</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />

            <span>Airport Taxis</span>
          </div>
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
