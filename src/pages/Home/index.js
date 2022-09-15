import React from "react";
import Carousel from "../../components/Carousel";
import Layout from "../../components/Layout";

import "./style.scss";

const Home = () => {
  return (
    <Layout>
      <>
        <Carousel />
        <Carousel />
        <Carousel />
      </>
    </Layout>
  );
};

export default Home;
