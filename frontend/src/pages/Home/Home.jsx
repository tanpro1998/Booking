import React, { useEffect } from "react";
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";
import FPropertyList from "../../components/FPropertyList/FPropertyList";
import Header from "../../components/Header/Header";
import Mail from "../../components/Mail/Mail";
import Navbar from "../../components/Navbar/Navbar";
import PropertyList from "../../components/PropertyList/PropertyList";
import "./home.css";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home">
      <Header />
      <Navbar />
      <div className="container">
        <Features />
        <h1 className="title">Browse by property type</h1>
        <PropertyList />
        <h1 className="title">Location guests love</h1>
        <FPropertyList />
        <Mail />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
