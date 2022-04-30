import React, { useEffect, useState } from "react";
import "./roomItem.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllRooms } from "../../Redux/API";
import Header from "../../components/Header/Header";
import BookingWidget from "../../components/Booking/BookingWidget";
import Footer from "../../components/Footer/Footer";

const RoomItem = () => {
  const { rooms } = useSelector((state) => state.rooms);
  const [room, setRoom] = useState({});
  const { roomSlug } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (rooms.length < 1) {
      dispatch(getAllRooms());
    } else {
      setRoom(rooms.find((r) => r.url === roomSlug));
    }
  }, [rooms, roomSlug]);
  console.log(room);
  return (
    <div className="r">
      <div className="rI">
        <header className="header-main">
          <img
            src={`/image/room/${room.mainImage}`}
            alt=""
            className="header-img"
          />
          <div className="header-content">
            <h2 className="header-title">{room.title}</h2>
            <p className="header-p">{room.titleHeader}</p>
          </div>
          <BookingWidget />
        </header>
      </div>
    </div>
  );
};

export default RoomItem;
