import React, { useEffect, useState } from "react";
import "./roomItem.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllRooms } from "../../redux/callAPI";
import BookingWidget from "../../components/Booking/BookingWidget";
import { displayIcon } from "../../Icons/Icons";
const RoomItem = () => {
  const { rooms } = useSelector((state) => state.rooms);
  const [room, setRoom] = useState({});
  const { roomSlug } = useParams();
  const dispatch = useDispatch();
  const [show, setShow] = useState(4);

  useEffect(() => {
    if (rooms.length < 1) {
      dispatch(getAllRooms());
    } else {
      setRoom(rooms.find((r) => r.url === roomSlug));
    }
  }, [dispatch, rooms, roomSlug]);

  const handleShow = () => {
    show === 4 ? setShow(room.amenities.length) : setShow(4);
  };
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
        <section className="header-desc">
          <h2 className="header-title">{room.header}</h2>
          <p className="header-p">{room.subHeader}</p>
        </section>
        <section className="rIInfo">
          <div className="left">
            <div className="info">
              <div>
                <h3>VIEW</h3>
                <p>{room.view}</p>
              </div>
              <div>
                <h3>SIZE</h3>
                <p>{room.size}</p>
              </div>
              <div>
                <h3>OCCUPANCY</h3>
                <p>
                  {room.adults} Adults & {room.children} Children
                </p>
              </div>
              <div>
                <h3>BEDDING</h3>
                <p>{room.bedding} </p>
              </div>
            </div>
            {room.amenities && (
              <div className="infoIcons">
                <h3>AMENITIES</h3>
                <ul>
                  {room.amenities
                    .filter((item, index) => index < show)
                    .map((item) => (
                      <li key={item}>
                        <i className={`${displayIcon(item)} itemIcon`}></i>
                        <p>{item}</p>
                      </li>
                    ))}
                  <li onClick={handleShow}>
                    <i
                      className={`${
                        show <= 4 ? "fas fa-plus" : "fas fa-minus"
                      } itemIcon itemShow`}
                    >
                      {show <= 4 && <span>{room.amenities.length - 4}</span>}
                    </i>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="right">
            <h2 className="">ROOM OVERVIEW</h2>
            <p>{room.paragraph}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RoomItem;
