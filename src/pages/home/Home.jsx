import React from "react";
import Slider from "../../components/swiper/Slider";
import Header from "../../components/header/Header";
import "./home.css";
import Recommend from "../../components/recommendations/Recommend";
import Latest from "../../components/latest/Latest";
import TVseries from "../../components/tvSeries/TVseries";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Slider />
      <Recommend />
      <Latest />
      <TVseries />
      <Footer />
    </div>
  );
};

export default Home;
