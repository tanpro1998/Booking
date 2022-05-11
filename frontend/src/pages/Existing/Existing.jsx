import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteBooking } from "../../Redux/API";
import "./existing.scss";

const Existing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const existing = useSelector((state) => state.existing.booking);
  const [loading, setLoading] = useState(true);

  const handleDelete = (id) => {
    dispatch(deleteBooking({ id }));
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [dispatch]);
  return (
    <div className="r">
      <div className="rooms">
        <header className="header-main">
          <img
            src={"/image/existing/existing-header.jpg"}
            alt=""
            className="header-img"
          />
        </header>
        {existing.length > 0 ? (
          existing.map((inf) => (
            <div className="card" key="">
              <div className="info">
                <h1>Confirmation Code:</h1>
                <h1>{inf.confirmation}</h1>
                <div>
                  <h3>Room:</h3>
                  <h3>{inf.room}</h3>
                </div>
                <div>
                  <h3>Name:</h3>
                  <h3>
                    {inf.firstName} {inf.lastName}
                  </h3>
                </div>
                <div>
                  <h3>Email:</h3>
                  <h3>{inf.email}</h3>
                </div>
                <div>
                  <h3>Phone:</h3>
                  <h3>{inf.phone}</h3>
                </div>
                <div>
                  <h3>Guests:</h3>
                  <h3>
                    {inf.adults} Adults{" "}
                    {inf.children > 0 && `& ${inf.children} Children`}
                  </h3>
                </div>
                <div>
                  <h3>Dates</h3>
                  <h3>
                    {new Date(inf.startDate).toLocaleString("en-us", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}{" "}
                    -{""}
                    {new Date(inf.endDate).toLocaleString("en-us", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </h3>
                </div>
                <div>
                  <h3>Payment Type:</h3>
                  <h3>{inf.cardType}</h3>
                </div>
                <div>
                  <h3>Card Number:</h3>
                  <h3>XXXXXXXXXXXX{inf.cardNum.slice(12, 16)}</h3>
                </div>
              </div>
              <div className="actions">
                <button
                  className="delete-btn"
                  onClick={() => [
                    handleDelete(inf.confirmation),
                    window.location.href = "/booking",
                  ]}
                >
                  DELETE
                </button>
              </div>
            </div>
          ))
        ) : loading ? (
          <div className="loader">
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <h2>Loading...</h2>
          </div>
        ) : (
          <section className="desc">
            <h1>No Booking was Found...</h1>
            <button className="btn" onClick={() => navigate("/booking")}>
              Go Back
            </button>
          </section>
        )}
      </div>
    </div>
  );
};

export default Existing;
