import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import "./list.css";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import SearchResult from "../../components/SearchResult/SearchResult";

const List = () => {
  const location = useLocation();
  console.log(location);
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <Navbar type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="listItem">
              <label>Destination</label>
              <input
                type="text"
                placeholder={destination}
                className="listItemInput"
              />
            </div>
            <div className="listItem">
              <label>Check-in Date</label>
              <span
                onClick={() => setOpenDate(!openDate)}
                className="listItemDate"
              >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  ranges={date}
                  minDate={new Date()}
                  onChange={(item) => setDate([item.selection])}
                />
              )}
            </div>
            <div className="listItem">
              <label>Options</label>
              <div className="listOptions">
                <div className="listOptionItem">
                  <span className="listOptionTitle">Min price per night</span>
                  <input type="text" className="listOptionInput" />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionTitle">Max price per night</span>
                  <input type="text" className="listOptionInput" />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionTitle">Adult</span>
                  <input
                    type="number"
                    min={1}
                    placeholder={options.adult}
                    className="listOptionInput"
                  />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionTitle">Children</span>
                  <input
                    type="number"
                    min={0}
                    placeholder={options.children}
                    className="listOptionInput"
                  />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionTitle">Room</span>
                  <input
                    type="number"
                    min={1}
                    placeholder={options.room}
                    className="listOptionInput"
                  />
                </div>
              </div>
            </div>
            <button className="listButton">Search</button>
          </div>
          <div className="listResult">
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
