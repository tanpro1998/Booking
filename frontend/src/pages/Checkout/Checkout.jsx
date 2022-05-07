import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./checkout.scss";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { useState } from "react";
import { createBooking } from "../../Redux/API";

const card = [
  {
    value: "VISA",
    label: "VISA",
  },
  {
    value: "MASTERCARD",
    label: "MASTERCARD",
  },
  {
    value: "DISCOVER",
    label: "DISCOVER",
  },
  {
    value: "OTHER",
    label: "OTHER",
  },
];

const Checkout = () => {
  const { room } = useSelector((state) => state.details);
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    phone: "",
    paymentType: "VISA",
    cardNum: "0112358132134558",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    for (let val in formData) {
      if (formData[val] === "") {
        setErrMsg("You must Fill all field!");
        return setError(true);
      }
    }

    if (isNaN(Number(formData.phone))) {
      setErrMsg("Phone number must only numbers!");
      return setError(true);
    }

    if (/.+@.+\..+/.test(formData.email) === false) {
      setErrMsg("Email not valid!");
      return setError(true);
    }

    if (formData.email !== formData.confirmEmail) {
      setErrMsg("Emails must match!");
      return setError(true);
    }

    dispatch(createBooking({ formData, details }));
    // create a booking for the guest
    navigate("/booking/success");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData.phone);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="r">
      <div className="rooms">
        <header className="header-main">
          <img
            src={"/image/checkout/checkout-header.jpeg"}
            alt=""
            className="header-img"
          />
          <div className="header-content">
            <h2 className="header-title">Checkout</h2>
          </div>
        </header>
        <section className="header-desc">
          <h1 className="alt-font">Your Booking Details</h1>
        </section>
        <section className="room-info">
          {room && (
            <>
              <h1>Booking Summary</h1>
              <div>
                <h4>Room</h4> <span>{room.title}</span>
              </div>
              <div>
                <h4>Dates</h4>{" "}
                <span>{`${details.booking.dates[0].toLocaleString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })} - ${details.booking.dates[1].toLocaleString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}`}</span>
              </div>
              <div>
                <h4>Numbers of Nights</h4> <span>{room.totalNights}</span>
              </div>
              <div>
                <h4>Guests</h4>{" "}
                <span>
                  {details.booking.adults} Adults{" "}
                  {details.booking.children > 0 &&
                    `${details.booking.children} Children`}
                </span>
              </div>
              <div>
                <h4>Total</h4> <span className="total">${room.totalPrice}</span>
              </div>
            </>
          )}
        </section>
        <section className="details">
          <h1>Your Information</h1>
          {error && <span className="error-msg">{errMsg}</span>}
          <form autoComplete="off">
            <TextField
              required
              className="input"
              label="First Name"
              name="firstName"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              required
              className="input"
              label="Last Name"
              name="lastName"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              required
              className="input"
              label="Email"
              name="email"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              required
              className="input"
              label="Confirm Email"
              name="confirmEmail"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              required
              className="input"
              label="Phone"
              name="phone"
              variant="outlined"
              inputProps={{
                inputMode: "numeric",
                pattern: "[0-9]*",
              }}
              onChange={handleChange}
            />
            <TextField
              required
              className="input"
              label="Select Payment"
              name="paymentType"
              variant="outlined"
              onChange={handleChange}
              value={formData.paymentType}
              select
            >
              {card.map((c) => (
                <MenuItem key={c.value} value={c.value}>
                  {c.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              required
              className="input"
              label="Card Number"
              name="cardNumber"
              variant="outlined"
              onChange={handleChange}
              value={formData.cardNum}
              InputProps={{ readOnly: true }}
              helperText="This value cannot be changed!"
            />
            <div className="btnContainer">
              <Button
                className="button"
                onClick={handleSubmit}
                variant="outlined"
              >
                Submit
              </Button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Checkout;
