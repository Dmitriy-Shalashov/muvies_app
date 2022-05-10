import React from "react";
import PropTypes from "prop-types";

import { SwiperSlide, Swiper } from "swiper/react";

import MovieCard from "../movie-card/MovieCard";
import useGetList from "./helpers/useGetList";
import "./movieList.scss";

const MovieList = ({ type, category, id }) => {
  const result = useGetList(type, category, id);

  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
        {result.map((item, i) => (
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
  type: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.number,
};

export default MovieList;
