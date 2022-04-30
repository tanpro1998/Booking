import React from "react";
import { Link } from "react-router-dom";
import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <section className="aboutTop">
        <h1 className="aboutTitle">Welcome to beautiful VietNam</h1>
        <p>
          Curious what awaits you in Vietnam? Take a 360-degree tour of some of
          the country’s most compelling natural wonders and cultural attractions
          right here.
        </p>
      </section>
      <section className="aboutMain">
        <article className="mainLeft">
          <div className="bg-light"></div>
          <h1 className="mainTitle">PHU QUOC IS CALLING</h1>
          <p>
            Phu Quoc's gleaming white sand beaches have earned it the nickname
            "Pearl Island", but the island's environmental conservation efforts
            and cultural heritage deserve as much attention as its picturesque
            sand and surf. Fishing and agriculture remain primary industries,
            and more than half the laid-back island has been protected by a
            UNESCO Biosphere Reserve since 2006. Home to fish sauce, pepper, and
            pearls, Phu Quoc offers both luxury and local life, with clean water
            by day and clear skies at night.
          </p>
          {/* <h2>RESORT OPEN</h2> */}
          <Link to="/rooms">
            <button className="btn">Discover More</button>
          </Link>
        </article>
        <div className="mainRight">
          <img src="/image/home/home-resort.jpg" alt="home_resort" />
        </div>
      </section>
      <section className="spotlight">
        <h1 className="alt-font">Spotlight</h1>
        <div className="card-row">
          <div className="card">
            <div>
              <img src="/image/home/home-food.jpeg" alt="home_food" />
            </div>
            <article>
              <h2 className="alt-font">Delicious Food</h2>
              <p>
                In Vietnam, before eating we say “Chúc ngon miệng!”-- meaning
                'enjoy your meal' (but of course you will.) While Vietnamese
                cuisine abroad still flies under the banners of phở and bánh mì,
                the full spectrum of Vietnamese food is a symphony of
                delightfully textured, bright and piquant flavours. The
                Vietnamese love their food and cooks make the most of each
                region's abundance produce and special ingredients to make their
                meals. Northern food is known for its simplicity; the dishes of
                central Vietnam are generous in spice and quantity; Southerners
                like to add sugar. Wherever you travel across the country,
                you're sure to eat well.
              </p>
              <Link to="/dining">
                <button className="btn">Discover More</button>
              </Link>
            </article>
          </div>
          <div className="card">
            <div>
              <img src="/image/home/home-room.jpg" alt="home_room" />
            </div>
            <article>
              <h2 className="alt-font">Luxury Rooms</h2>
              <p>
                Luxury room features: High-quality furnishings with opulent,
                expensive touches, attention to aesthetic detail, a quiet room
                with fresh air, original art on the walls, windows that open,
                robes and slippers, adequate storage, hangers, desk, reading
                chair, safe, good-size flat-screen TV, iPhone/iPod dock, coffee
                maker, full-length mirror, effective heating/AC system…And of
                course a King bed with a good mattress, high-quality sheets and
                a variety of pillow types (or a pillow menu)!
              </p>
              <Link to="/rooms">
                <button className="btn">Discover More</button>
              </Link>
            </article>
          </div>
          <div className="card">
            <div>
              <img src="/image/home/home-tour.jpg" alt="home_food" />
            </div>
            <article>
              <h2 className="alt-font">Amazing Tours</h2>
              <p>
                Magnificent mountains. Bewitching bays. Vietnam’s mind-boggling
                geography lends itself to an extraordinary collection of sport
                and adventure holidays. Swim from island to island, hike a
                circuit of remote villages, camp within the largest caves on the
                planet, weave your way on a bike through highlands and
                coastline. Here are four adventurous holiday ideas for your next
                trip to Vietnam.
              </p>
              <Link to="/tours">
                <button className="btn">Discover More</button>
              </Link>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
