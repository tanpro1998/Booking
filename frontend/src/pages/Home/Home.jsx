import React, { useEffect } from "react";
import About from "../../components/About/About";
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";
import FPropertyList from "../../components/FPropertyList/FPropertyList";
import Header from "../../components/Header/Header";
import Mail from "../../components/Mail/Mail";
import Navbar from "../../components/Navbar/Navbar";
import PropertyList from "../../components/PropertyList/PropertyList";
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
        <h1 className="title">Browse by property type</h1>
        <PropertyList />
        <h1 className="title">Famous Area</h1>
        <FPropertyList />
        <About />
        <Mail />
      </div>
    </div>
  );
};

export default Home;
