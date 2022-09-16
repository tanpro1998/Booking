import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import BookingWidget from "../../components/Booking/BookingWidget";
import "./booking.scss";
import {useDispatch, useSelector} from "react-redux";
import {getSingleBooking} from "../../redux/callAPI";
import Available from "../../components/Available/Available";

const Booking = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {booking} = useSelector((state) => state.bookings);
    const details = useSelector((state) => state.details);
    const [formData, setFormData] = useState({
        confirmation: "", email: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.confirmation === "" && formData.email === "") {
            return setError("Please fill out ONE of these fields");
        }
        if (formData.confirmation.length > 0 && formData.email.length > 0) {
            return setError("Only Fill out ONE of these fields");
        }

        getSingleBooking(formData, dispatch);
        navigate("/booking/existing");
    };

    return (<div className="r">
        <div className="rooms">
            <header className="header-main">
                <img
                    src={"/image/booking/booking-header.jpg"}
                    alt=""
                    className="header-img"
                />
                <div className="header-content">
                    <h2 className="header-title">Booking Now</h2>
                </div>
                <BookingWidget/>
            </header>
            <section className="ready">
                <label>Already have a Booking?</label>
                <form>
                    <input
                        type="text"
                        maxLength={6}
                        name="confirmation"
                        placeholder="Confirmation Code"
                        onChange={handleChange}
                        value={formData.confirmation}
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Or Enter Email"
                        onChange={handleChange}
                        value={formData.email}
                    />
                    <button onClick={handleSubmit}>Look</button>
                </form>
                {error.length > 0 && <span style={{color: "red"}}>{error}</span>}
            </section>
            <section className="desc">
                <h1 className="alt-font">BOOK A ROOM</h1>
            </section>
            {details.booking.adults && booking.length < 1 && (<div className="loader">
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
            </div>)}
            {booking && booking.length > 0 ? (<Available/>) : (<div className="filter"></div>)}
        </div>
    </div>);
};

export default Booking;