import React from "react";
import "./movieCard.scss";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import apiConfig from "../../api/apiConfig";
import getLink from "./helpers/getLink";

import img from "../../assets/not-found-image.jpg";

const MovieCard = ({ item, category }) => {
  const background = apiConfig.w500Image(
    item.poster_path || item.backdrop_path
  );

  return (
    <Link to={getLink(category, item.id)}>
      <div
        className="movie-card"
        style={{
          backgroundImage:
            item.poster_path || item.backdrop_path
              ? `url(${background})`
              : `url(${img})`,
        }}
      >
        <div className="movie-card__btn">
          <i className="bx bx-play" />
        </div>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  );
};

MovieCard.propTypes = {
  item: PropTypes.object,
  category: PropTypes.string,
};

export default MovieCard;
