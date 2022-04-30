import React, { useState } from "react";
import "./bookingWidget.scss";

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
import { useNavigate } from "react-router-dom";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

const BookingWidget = (props) => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState(props.date);
  console.log(date);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState(props.options);
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

  return (
    <div className="bW">
      <div className="navbarSearch">
        <div className="navbarSearchItem">
          <FontAwesomeIcon icon={faBed} className="navbarIcon" />
          <input
            type="text"
            placeholder={props.destination}
            className="navbarSearchInput"
            // onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className="navbarSearchItem">
          <FontAwesomeIcon icon={faCalendarDays} className="navbarIcon" />
          <span
            className="navbarSearchText"
            onClick={() => setOpenDate(!openDate)}
          >
            {`${format(props.date[0].startDate, "MM/dd/yyyy")} to ${format(
              props.date[0].endDate,
              "MM/dd/yyyy"
            )}`}
          </span>
          {openDate && (
            <DateRange
              ranges={date}
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
          >{`${props.options.adult} adult · ${props.options.children} children · ${props.options.room} room`}</span>
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
                  <span className="optionCounterNumber">{options.adult}</span>
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
                  <span className="optionCounterNumber">{options.room}</span>
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
          <button className="navbarButton">Search</button>
        </div>
      </div>
    </div>
  );
};

export default BookingWidget;
