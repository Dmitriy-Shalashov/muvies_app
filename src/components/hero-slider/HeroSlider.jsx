import React, { useState, useEffect } from "react";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import HeroSliderItem from "./HeroSliderItem";
import TrailerModal from "./TrailerModal";

import "./heroSlider.scss";

import getMovies from "./helpers/getMovies";

const HeroSlider = () => {
  SwiperCore.use([Autoplay]);
  const [moveieItems, setMovieItems] = useState([]);

  useEffect(() => {
    getMovies(setMovieItems);
  }, []);

  return (
    <div className="hero-slider">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 7000 }}
      >
        {moveieItems.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <HeroSliderItem
                item={item}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {moveieItems.map((item, i) => (
        <TrailerModal key={i} item={item} />
      ))}
    </div>
  );
};

export default HeroSlider;
