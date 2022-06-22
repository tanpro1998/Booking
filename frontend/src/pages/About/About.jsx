import React from "react";
import BookingWidget from "../../components/Booking/BookingWidget";
import "./about.scss";

const About = () => {


  return (
    <div className="r">
      <div className="rooms">
        <header className="header-main">
          <img
            src={"/image/about/about-header.jpg"}
            alt=""
            className="header-img"
          />
          <div className="header-content">
            <h2 className="header-title">About</h2>
            <p className="header-p">Learn about our family owned resort</p>
          </div>
          <BookingWidget />
        </header>
        <section className="header-desc">
          <h1 className="alt-font">Flash Booking More About</h1>
          <p>
            Explore evrything Vietnam has to offer while staying at our resort.
            From it's pristine white sand beaches, breathtaking nature, uniquie
            cuisine, and friendly locals, Vietnam has someone special for
            everybody.
          </p>
        </section>
        <section className="desc-photo">
          <div className="left">
            <h1 className="alt-font">Friendly people</h1>
            <p>
              The factor that makes Vietnamese tourism attractive comes from the
              spirit of the residential community. The friendliness and
              thoughtfulness when "guests come to the house" is a cultural
              beauty that has existed for thousands of generations of Vietnamese
              people. As one of the countries going through a lot of pain by
              war, but the friendliness in the way of life and human behavior is
              always present.
            </p>
          </div>
          <div className="right">
            <img src="/image/about/about-people.jpg" alt="" />
          </div>
        </section>
        <section className="testimonials">
          <h1 className="alt-font">Testimonials</h1>
          <article className="testimonials-card">
            <div className="img-container">
              <img src="/image/about/about-people1.jpeg" alt="" />
            </div>
            <div className="quote-container">
              <p>
                <em>
                  "Before making the decision to settle down in the country,
                  Hurley had spent time in Thailand, Malaysia, and Cambodia.
                  Coming to Asia was his first experience outside of his home
                  country. “I am very pleased with my choice to live in
                  Vietnam,” Hurley said. “Every country has its problems, but
                  overall, I am thoroughly impressed with the different aspects
                  of Vietnam, from the food and the people to the daily life.
                  "This is a place I want to live.” After being in Vietnam for
                  roughly four years, Hurley married a Vietnamese woman and got
                  a tattoo of Vietnam’s map. “I decided to get my Vietnam tattoo
                  after four years in the country," he said. "Even before I
                  started my YouTube channel, I felt like Vietnam had changed my
                  life forever, and it was one way for me to always remember my
                  second home.”
                </em>
              </p>
              <span>Hurley, who goes by Phuc Map, USA</span>
            </div>
          </article>
          <article className="testimonials-card reversed">
            <div className="img-container">
              <img src="/image/about/about-people2.jpg" alt="" />
            </div>
            <div className="quote-container">
              <p>
                <em>
                  Max's passion for food is clearly shown in the way he is
                  always happy to enjoy the food. For you to easily grasp the
                  restaurant information and visualize the taste, Max's vlogs
                  are all appended with Vietnamese subtitles. Thanks to his
                  thoughtfulness and positive energy, you will have moments of
                  excitement mixed with a bit of pride when you witness a friend
                  from far away constantly talking and whispering while enjoying
                  the food. Very popular street of Vietnamese people.
                </em>
              </p>
              <span>Max McFarlin, Arkansas, USA</span>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default About;
