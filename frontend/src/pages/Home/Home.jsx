import React, { useEffect } from "react";
import About from "../../components/About/About";
import Features from "../../components/Features/Features";
import Mail from "../../components/Mail/Mail";
import Navbar from "../../components/Navbar/Navbar";
import "./home.scss";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home">
      <div className="topBg">
        <Navbar />
      </div>
      <div className="container">
        <Features />
        <About />
        <Mail />
      </div>
    </div>
  );
};

export default Home;
