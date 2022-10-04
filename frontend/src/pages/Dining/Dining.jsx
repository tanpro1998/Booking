import React from "react";
import BookingWidget from "../../components/Booking/BookingWidget";
import "../Room/roomItem.scss";
import "./dining.scss";

const Dining = () => {
  return (
    <div className="r">
      <div className="rooms">
        <header className="header-main">
          <img
            src={"/image/dining/dining-header1.jpg"}
            alt=""
            className="header-img"
          />
          <div className="header-content">
            <h2 className="header-title">Restaurants</h2>
            <p className="header-p">Discover Phu Quoc's best dining</p>
          </div>
          <BookingWidget />
        </header>
        <section className="header-desc">
          <h1 className="alt-font">Authentic Viet Cuisine</h1>
          <p>
            The essence of Viet food is all about balance – achieving the
            perfect harmony between sweet, sour, hot and salty. Pungent fresh
            herbs, such as lemongrass and galangal, tone down overpowering
            spices, while salty sauces are tempered with sugars and offset by
            acids, such as lemon and lime.
          </p>
        </section>
        <section className="desc_gallery">
          <div className="descLeft">
            <h2 className="alt-font">Pho</h2>
            <div className="img-container">
              <img src="/image/dining/dining-pho.jpg" alt="" />
            </div>
          </div>
          <div className="descRight">
            <img src="/image/dining/dining-chef.jpg" alt="" className="chef" />
            <article>
              <h2 className="alt-font">World Class Culinary Team</h2>
              <p>
                Be captivated by the cosmopolitan buzz of Nobu, where you’ll
                delight in the world-famous fusion of Japanese and Peruvian
                cuisine invented by Michelin-starred master chef, Nobuyuki
                Matsuhisa. With stunning views of iconic Table Mountain, our
                Cape Town fine dining restaurant and chic bar comes alive with
                innovative dishes, intriguing cocktails, sparkling conversation
                and chilled-out tunes.
              </p>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dining;
