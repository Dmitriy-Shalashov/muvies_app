import React from "react";
import PropTypes from "prop-types";

import { SwiperSlide, Swiper } from "swiper/react";

import MovieCard from "../movie-card/MovieCard";
import useGetList from "./hooks/useGetList";
import "./movieList.scss";

const MovieList = ({ type, category, id }) => {
  const dataMovieList = useGetList(type, category, id);

  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
        {dataMovieList.map((item, i) => (
          <SwiperSlide key={i}>
            <MovieCard item={item} category={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

MovieList.propTypes = {
  type: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.number,
};

export default MovieList;
