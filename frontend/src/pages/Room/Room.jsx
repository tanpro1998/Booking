import React, { useEffect } from "react";
import BookingWidget from "../../components/Booking/BookingWidget";
import "./room.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllRooms } from "../../Redux/API";
import { Link, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
const Room = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getAllRooms());
  }, [dispatch]);
  const { rooms } = useSelector((state) => state.rooms);
  return (
    <div className="r">
      <Header />
      <div className="rooms">
        <header className="header-main">
          <img
            src="/image/room/room-header1.jpg"
            alt=""
            className="header-img"
          />
          <div className="header-content">
            <h2 className="header-title">Rooms</h2>
            <p className="header-p">
              Our generous guest rooms at Flash Resort boast breathtaking views
              and exclusive amenities
            </p>
          </div>
          <BookingWidget className="header-widget" />
        </header>
        <section className="header-desc">
          <h1 className="alt-font">Be Captivated</h1>
          <p>
            Choose between spectacular balcony views of The Villa or our
            resort’s private Beach Resort and Oceanside View, from the largest
            hotel rooms in Phu Quoc.
          </p>
        </section>
        <section className="room">
          {rooms.length < 1 ? (
            <div className="loader">
              <div className="loader-roller">
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
            rooms.map((room, index) => (
              <div className="card" key={index}>
                <Link to={`/rooms/${room.url}`}>
                  <button className="button btn-alt">EXPLORE</button>
                </Link>
                <div>
                  <h1 className="room-title">{room.title}</h1>
                  <p>{room.description}</p>
                </div>
                <div className="room-img">
                  <img src={`/image/room/${room.mainImage}`} alt="" />
                </div>
              </div>
            ))
          )}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Room;
