import React from "react";
import "./fPropertyList.scss";

const FPropertyList = () => {
  return (
    <div className="fP">
      <div className="fPItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/22931657.jpg?k=a915121c8908a2c158024b43e9abbdf5c5efb01cda36846d0f6eac28a8672878&o=&hp=1"
          alt=""
          className="fPImage"
        />
        <span className="fPTitle">JW Marriott Hotel</span>
        <span className="fPLocation">Ha Noi</span>
      </div>
      <div className="fPItem">
        <img
          src="https://www.phunu8.vn/PhuNu8DuLieu/PhuNu8HinhAnh/u4678/phu-nu-8-resort-dep-nhat-viet-nam-anh5.jpg"
          alt=""
          className="fPImage"
        />
        <span className="fPTitle">Amanoi Resort</span>
        <span className="fPLocation">Ninh Thuan</span>
      </div>
      <div className="fPItem">
        <img
          src="https://blog.rever.vn/hs-fs/hubfs/The%20View/phoi-canh-truc-dien-sunshine-city-sai-gon.jpg?width=2000&name=phoi-canh-truc-dien-sunshine-city-sai-gon.jpg"
          alt=""
          className="fPImage"
        />
        <span className="fPTitle">Sunshine City Sai Gon</span>
        <span className="fPLocation">Ho Chi Minh</span>
      </div>
      <div className="fPItem">
        <img
          src="https://toplist.vn/images/800px/homestay-reply-1994-332235.jpg"
          alt=""
          className="fPImage"
        />
        <span className="fPTitle">Homestay Reply 1994</span>
        <span className="fPLocation">Da Lat</span>
      </div>
    </div>
  );
};

export default FPropertyList;
