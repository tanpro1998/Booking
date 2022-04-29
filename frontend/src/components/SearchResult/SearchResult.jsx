import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./searchResult.css";

const SearchResult = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="searchRs">
      <img
        src="https://phuot3mien.com/wp-content/uploads/2021/03/acqua-villa-2.jpg"
        alt=""
        className="searchRsImg"
      />
      <div className="searchRsL">
        <h1 className="searchRsLTitle">Tower street Apartment</h1>
        <span className="searchRsLDistance">500m from center</span>
        <span className="searchRsLTaxi">Free airport taxi</span>
        <span className="searchRsLSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="searchRsLFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="searchRsLCancel">Free cancellation</span>
        <span className="searchRsLDesc">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="searchRsR">
        <div className="searchRsRTop">
          <span className="searchRsRTopText">Excellent</span>
          <button className="searchRsRTopRating">9.0</button>
        </div>
        <div className="searchRsRBottom">
          <span className="searchRsRBottomPrice">$200</span>
          <span className="searchRsRBottomText">Includes taxes and fees</span>
          <Link to="/hotels/:id">
            <button className="searchRsRBottomButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
