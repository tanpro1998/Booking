import React from "react";
import { useState } from "react";
import "./mail.scss";

const Mail = () => {
  const [subscribe, setSubscribe] = useState(false);
  const [mail, setMail] = useState("");
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <p className="mailDesc">Sign up and we'll send the best deals to you</p>
      <div className="mailForm">
        <input
          type="text"
          placeholder="Your Email"
          className="mailInput"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <button
          className="mailButton"
          onClick={() => [setSubscribe(true), setMail("")]}
        >
          Subscribe
        </button>
      </div>
      {subscribe && <span className="subscribe">Thank you for subscribe!</span>}
    </div>
  );
};

export default Mail;
