import React, { useState } from "react";
import "./bookingWidget.scss";

import { useLocation, useNavigate } from "react-router-dom";

import { addDays } from "date-fns";
import { useDispatch } from "react-redux";
import { getAllAvailable, BookingDetails } from "../../Redux/API";
import { TextField } from "@material-ui/core";
import { DateRangePicker, LocalizationProvider } from "@material-ui/lab";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import Box from "@mui/material/Box";
import { addWeeks } from "date-fns/esm";

const BookingWidget = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location)
  const [formData, setFormData] = useState({
    dates: [new Date(), addDays(new Date(), 7)],
    adults: 1,
    children: 0,
  });

  const getWeeksAfter = (date, amount) => {
    return date ? addWeeks(date, amount) : undefined;
  };

  const updateAdults = (val) => {
    if (formData.adults === 1 && val === -1) return;
    if (formData.adults === 5 && val === 1) return;
    setFormData({ ...formData, adults: formData.adults + val });
  };

  const updateChildren = (val) => {
    if (formData.children === 0 && val === -1) return;
    if (formData.children === 5 && val === 1) return;
    setFormData({ ...formData, children: formData.children + val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { adults, children, dates } = formData;
    if (location.pathname !== "/booking") {
      navigate("/booking");
    }
    dispatch(getAllAvailable({ adults, children, dates }));
    dispatch(BookingDetails({ adults, children, dates }));
  };

  return (
    <div className="bW">
      <form onSubmit={handleSubmit}>
        <div className="date">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
              disablePast
              maxDate={getWeeksAfter(formData.dates[0], 4)}
              startText="From"
              endText="To"
              value={formData.dates}
              onChange={(newValue) => {
                if (!newValue.includes(null)) {
                  setFormData({
                    ...formData,
                    dates: newValue,
                  });
                }
              }}
              renderInput={(start, end) => (
                <React.Fragment>
                  <TextField {...start} />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...end} />
                </React.Fragment>
              )}
            />
          </LocalizationProvider>
        </div>
        <div className="guest">
          <div className="adults">
            <label>Adults</label>
            <div className="guest-select">
              <div
                className="btn-sm"
                name="adults"
                onClick={() => updateAdults(-1)}
              >
                <i className="fas fa-minus"></i>
              </div>
              <span>{formData.adults}</span>
              <div
                className="btn-sm"
                name="adults"
                onClick={() => updateAdults(1)}
              >
                <i className="fas fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="children">
            <label>Children</label>
            <div className="guest-select">
              <div
                className="btn-sm "
                name="children"
                onClick={() => {
                  updateChildren(-1);
                }}
              >
                <i className="fas fa-minus"></i>
              </div>
              <span>{formData.children}</span>
              <div
                className="btn-sm"
                name="children"
                onClick={() => {
                  updateChildren(1);
                }}
              >
                <i className="fas fa-plus"></i>
              </div>
            </div>
          </div>
        </div>
        <button className="btn">Check</button>
      </form>
    </div>
  );
};

export default BookingWidget;
