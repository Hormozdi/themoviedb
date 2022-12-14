import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import Image from "../Kit/Image";

import "swiper/css";
import "swiper/css/navigation";

import "./style.scss";

const Carousel = ({
  delay = 5000,
  slidesPerView = 7,
  slides = [],
  title = "",
}) => {
  return (
    <div className="carousel-container">
      <h2 className="carousel-title">{title}</h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        loop
        navigation
        autoplay={{ delay }}
        slidesPerView={slidesPerView}
        className="swiper-carousel"
      >
        {slides?.map((slide) => (
          <SwiperSlide key={slide.id} className="slide">
            <Link to={`/movie/${slide.id}`} className="item">
              <Image src={slide.poster} />
              <p className="title">{slide.title}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
