import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { SwiperSlide, Swiper } from "swiper/react";

import MovieCard from "../movie-card/MovieCard";
import getList from "./helpers/getList";
import "./movieList.scss";

const MovieList = ({ type, category, id }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getList(type, category, id, setItems);
  }, [type, category, id]);

  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            {/* <img src={apiConfig.w500Image(item.poster_path)} alt="#" /> */}
            <MovieCard item={item} category={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

MovieList.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MovieList;
