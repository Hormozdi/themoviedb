import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import "./style.scss";

const Carousel = ({ delay = 3000, slidesPerView = 7, slides = [] }) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      loop
      navigation
      autoplay={{ delay }}
      slidesPerView={slidesPerView}
    >
      {slides?.map((slide) => (
        <SwiperSlide key={slide.id} className="swiper-carousel">
          <span className="item">
            <img src={slide.poster} className="poster" />
            <p className="title">{slide.title}</p>
          </span>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;