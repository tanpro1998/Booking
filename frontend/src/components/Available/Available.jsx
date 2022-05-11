import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./available.scss";
import { displayIcon } from "../../Icons/Icons";
import { RoomDetails } from "../../Redux/API";

const Available = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const details = useSelector((state) => state.details.booking);
  const availableBookings = useSelector((state) => state.bookings.booking);

  const handleSubmit = (room) => {
    const { title, price } = room;
    const rawDates = details.dates[1].getTime() - details.dates[0].getTime();
    const totalNights = Math.round(rawDates / (1000 * 3600 * 24));
    const totalPrice = totalNights * price;

    dispatch(RoomDetails({ title, price, totalNights, totalPrice }));
    navigate("/booking/checkout");
  };
  const rawDates = details.dates[1].getTime() - details.dates[0].getTime();
  const totalNights = Math.round(rawDates / (1000 * 3600 * 24));
  console.log(availableBookings)
  return (
    <div className="available">
      {availableBookings.length > 1 &&
        availableBookings?.map((room, index) => (
          <React.Fragment key={index}>
            <div className="room-card">
              <div className="card-img">
                <img src={`image/room/${room.mainImage}`} alt="" />
              </div>
              <div className="card-info">
                <h2 className="alt-font">{room.title}</h2>
                <span className="location">
                  <i className="fas fa-map-marker-alt"></i> Flash Resort
                </span>
                <div className="details">
                  <div>
                    <label>Size:</label>
                    <p>{room.size}</p>
                  </div>
                  <div>
                    <label>Occupancy:</label>
                    <p>{`${room.adults} Adults & ${room.children} Children`}</p>
                  </div>
                  <div>
                    <label>Bedding:</label>
                    <p>{room.bedding}</p>
                  </div>
                </div>
                <div className="amenities">
                  <label>Amenities:</label>
                  <ul>
                    {room.amenities.map((item) => (
                      <li key={item}>
                        <i className={`${displayIcon(item)}`}></i>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="card-price">
                <div>
                  <label>Daily Price</label>
                  <h4>{`$${room.price}`}</h4>
                </div>
                <div>
                  <label>Total ({totalNights} Nights)</label>
                  <h4>{`$${room.price * totalNights}`}</h4>
                </div>
                {room.hasError ? (
                  <button
                    className="btn"
                    style={{
                      color: "white",
                      backgroundColor: "black",
                      cursor: "not-allowed",
                    }}
                  >
                    Unavailable
                  </button>
                ) : (
                  <button className="btn" onClick={() => handleSubmit(room)}>
                    Book
                  </button>
                )}
              </div>
            </div>
            {room.hasError && (
              <span className="err-msg">
                This room has been booked from{" "}
                {new Date(room.hasError.dates[0]).toLocaleString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}{" "}
                to{" "}
                {new Date(room.hasError.dates[1]).toLocaleString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </span>
            )}
          </React.Fragment>
        ))}
    </div>
  );
};

export default Available;
