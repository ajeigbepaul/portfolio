import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Portfolio from "./Portfolio";
import Calltoaction from "./Calltoaction";
import Footer from "./Footer";
import "./Homepage.css";
import Skills from "./Skills";

function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <Banner />
      <Portfolio />
      <Calltoaction />
      <Skills />
      <Footer />
    </div>
  );
}

export default HomePage;
