import React from "react";
import "./mail.scss";

const Mail = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <p className="mailDesc">Sign up and we'll send the best deals to you</p>
      <div className="mailForm">
        <input type="text" placeholder="Your Email" className="mailInput" />
        <button className="mailButton">Subscribe</button>
      </div>
    </div>
  );
};

export default Mail;
