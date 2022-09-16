import React from "react";
import "./features.scss";

const Features = () => {
  return (
    <div className="features">
      <div className="featuresItem">
        <img
          src="https://owa.bestprice.vn/images/destinations/uploads/trung-tam-thanh-pho-ha-noi-603da1f235b38.jpg"
          alt=""
          className="img"
        />
        <div className="featuresText">
          <p>Ha Noi</p>
        </div>
      </div>
      <div className="featuresItem">
        <img
          src="https://media.vneconomy.vn/images/upload/2021/12/03/da-nang1.jpg"
          alt=""
          className="img"
        />
        <div className="featuresText">
          <p>Da Nang</p>
        </div>
      </div>
      <div className="featuresItem">
        <img
          src="https://vcdn1-vnexpress.vnecdn.net/2021/03/19/NhaTrang-KhoaTran-27-1616120145.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=P6rNJD2Fm6OK-HTwBviZ4A"
          alt=""
          className="img"
        />
        <div className="featuresText">
          <p>Nha Trang</p>
        </div>
      </div>
      <div className="featuresItem">
        <img
          src="https://touristjourney.com/wp-content/uploads/2020/11/Ho-Chi-Minh-City.jpg"
          alt=""
          className="img"
        />
        <div className="featuresText">
          <p>Ho Chi Minh</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
