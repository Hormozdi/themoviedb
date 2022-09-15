import React from "react";
import Carousel from "../../components/Carousel";
import Header from "../../components/Header";

import "./style.scss";

const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Carousel />
      <Carousel />
    </>
  );
};

export default Home;
