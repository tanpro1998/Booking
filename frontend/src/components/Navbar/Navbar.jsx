import React, { useState } from "react";
import "./navbar.scss";
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
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Navbar = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [destination, setDestination] = useState("");

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const handleSearch = () => {
    navigate("/rooms", { state: { destination, date, options } });
  };
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
            <div className="navbarSearch">
              <div className="navbarSearchItem">
                <FontAwesomeIcon icon={faBed} className="navbarIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="navbarSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="navbarSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="navbarIcon" />
                <span
                  className="navbarSearchText"
                  onClick={() => setOpenDate(!openDate)}
                >
                  {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                    onChange={(item) => setDate([item.selection])}
                  />
                )}
              </div>
              <div className="navbarSearchItem">
                <FontAwesomeIcon icon={faPerson} className="navbarIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="navbarSearchText"
                >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="navbarSearchItem">
                <button className="navbarButton" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
