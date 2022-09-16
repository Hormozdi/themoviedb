import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import "./style.scss";

const Carousel = ({ delay = 5000, slidesPerView = 7, slides = [] }) => {
  return (
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
          <Link to={`movie/${slide.id}`} className="item">
            <img src={slide.poster} className="poster" />
            <p className="title">{slide.title}</p>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
