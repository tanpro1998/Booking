import React, { useEffect} from "react";
// import { useLocation } from "react-router-dom";
import BookingWidget from "../../components/Booking/BookingWidget";
import "./tour.scss";

const Tour = () => {
  // const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="r">
      <div className="rooms">
        <header className="header-main">
          <img
            src={"/image/tour/tour-header.jpg"}
            alt=""
            className="header-img"
          />
          <div className="header-content">
            <h2 className="header-title">Tours & Activities</h2>
            <p className="header-p">
              Explore all of our tours and activities here
            </p>
          </div>
          <BookingWidget />
        </header>
        <section className="header-desc">
          <h1 className="alt-font">View all of our tours</h1>
          <p>
            Explore evrything Vietnam has to offer while staying at our resort.
            From it's pristine white sand beaches, breathtaking nature, uniquie
            cuisine, and friendly locals, Vietnam has someone special for
            everybody.
          </p>
        </section>
        <section className="desc-main">
          <article className="left">
            <div className="bg-light"></div>
            <h1 className="alt-font">Tam Chuc Pagoda</h1>
            <p>
              Tam Chuc Pagoda tourist complex in Ha Nam stretches over an area
              of ​​more than 500 hectares, is an attractive spiritual tourist
              area in Vietnam, attracting a large number of tourists in recent
              years. In the article, we will share with you the experience of
              traveling to Tam Chuc pagoda in Ha Nam so that you have the most
              complete trip.
            </p>
          </article>
          <div className="right">
            <img src="/image/tour/tour-temple.jpg" alt="" />
          </div>
        </section>
        <section className="desc-sec">
          <div className="img-container">
            <img src="/image/tour/tour-market.jpg" alt="markets" />
          </div>
          <article>
            <div>
              <h1 className="alt-font">Explore the local markets</h1>
              <p>
                After more than 100 years of existence and development, Ben
                Thanh market is not only a place of trade for townspeople but
                also becomes a tourist destination not to be missed when coming
                to Ben Thanh. From the unique architecture of the market, the
                friendly vendors, to the variety of goods, everyone wants to
                visit once.
              </p>
            </div>
            <span></span>
          </article>
        </section>
        <section className="desc_gallery">
          <div className="left">
            <h2 className="alt-font">Hon Trong Mai</h2>
            <div className="img-container">
              <img
                className="lg-img"
                src="/image/tour/tour-island3.jpg"
                alt="island_tour"
              />
            </div>
          </div>
          <div className="right">
            <img src="/image/tour/tour-island1.jpg" alt="island_tour_01" />
            <article>
              <h2 className="alt-font">Pristine Beaches and Blue Waters</h2>
              <p>
                You won’t be short on things to do as Koh Phi Phi has plenty of
                activities on offer, from diving, snorkelling, rock climbing and
                kayaking. For those who prefer to relax, there are several
                amazing spas that offer a range of pampering and revitalizing
                packages.
              </p>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tour;
