import React from "react";
import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://nemtv.vn/wp-content/uploads/2019/03/khach-san-ha-noi-5-sao.jpg"
          alt=""
          className="pImg"
        />
        <div className="pListText">
          <h3>Hotels</h3>
          <h4>300 hotels</h4>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://i.ytimg.com/vi/SW_puvokRQA/maxresdefault.jpg"
          alt=""
          className="pImg"
        />
        <div className="pListText">
          <h3>Apartments</h3>
          <h4>300 apartments</h4>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://www.vietnambooking.com/wp-content/uploads/2021/03/resort-phan-thiet-gia-re-hai-au.jpg"
          alt=""
          className="pImg"
        />
        <div className="pListText">
          <h3>Resorts</h3>
          <h4>300 resorts</h4>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://blogsaigonrest.files.wordpress.com/2018/03/top-4-luxury-villa-in-thao-dien-ho-chi-minh-city.jpg"
          alt=""
          className="pImg"
        />
        <div className="pListText">
          <h3>Villas</h3>
          <h4>300 villas</h4>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://rt.mediacdn.vn/213132630616088576/2020/8/31/hstay-dep-1-1598868142834254147533.jpg"
          alt=""
          className="pImg"
        />
        <div className="pListText">
          <h3>Homestays</h3>
          <h4>300 homestays</h4>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
