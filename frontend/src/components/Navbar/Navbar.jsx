import React from "react";
import "./navbar.scss";

import BookingWidget from "../Booking/BookingWidget";

const Navbar = ({ type }) => {
  return (
    <div className="navbar">
      <div
        className={type === "list" ? "navbarContainer list" : "navbarContainer"}
      >
        {type !== "list" && (
          <>
            <div className="navbarBody">
              <h1 className="navbarTitle">Welcome to Viet Nam!</h1>
              <p className="navbarDesc">
                Vietnam, country occupying the eastern portion of mainland
                Southeast Asia. Vietnam is announced as “Asia’s Leading
                Destination 2021” by The World Travel Awards. Vietnam has
                welcomed more than 200 foreign tourists to its largest island,
                the first to visit the Southeast Asian country after nearly two
                years of border closure due to the COVID-19 pandemic
              </p>
            </div>
            <BookingWidget />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
