import React from "react";
import { useSelector } from "react-redux";
import "./success.scss";

const Success = () => {
  const confirm = useSelector((state) => state.confirm.confirmation);
  console.log(confirm);
  return (
    <div className="r">
      <div className="rooms">
        <header className="header-main">
          <img
            src={"/image/success/success-header.jpg"}
            alt=""
            className="header-img"
          />
          <div className="header-content">
            <h2 className="header-title">Successfully, Now Let's Go</h2>
          </div>
        </header>

        <section className="details-code">
          {confirm && confirm.confirmation ? (
            <>
              <h1 className="thank">Thank you for your booking</h1>
              <div className="code">
                <h1>Your confirmation code: </h1>
                <h2>{confirm.confirmation}</h2>
                <div className="btnPrint">
                  <button className="btn" onClick={() => window.print()}>
                    <i className="fas fa-print"></i> Print
                  </button>
                </div>
              </div>
            </>
          ) : (
            <h1 className="wrong">Something went wrong...</h1>
          )}
        </section>
      </div>
    </div>
  );
};

export default Success;
