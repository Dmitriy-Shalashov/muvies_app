import React from "react";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import classNames from "classnames";

import HeroSliderItem from "./HeroSliderItem";
import TrailerModal from "./TrailerModal";

import "./heroSlider.scss";

import useGetRandomMovies from "./hooks/useGetRandomMovies";

const HeroSlider = () => {
  SwiperCore.use([Autoplay]);

  const moviesList = useGetRandomMovies();

  return (
    <div className="hero-slider">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 7000 }}
      >
        {moviesList.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <HeroSliderItem
                item={item}
                className={classNames({ active: isActive })}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {moviesList.map((item, i) => (
        <TrailerModal key={i} item={item} />
      ))}
    </div>
  );
};

export default HeroSlider;
