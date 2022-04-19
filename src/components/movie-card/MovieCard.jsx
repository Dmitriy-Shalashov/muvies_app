import React from "react";
import "./movieCard.scss";

import { Link } from "react-router-dom";
import Button from "../../common/button/Button";

import { category } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

import img from "../../assets/not-found-image.jpg";

const MovieCard = (props) => {
  const item = props.item;
  const link = "/" + category[props.category] + "/" + item.id;
  const background = apiConfig.w500Image(
    item.poster_path || item.backdrop_path
  );

  return (
    <Link to={link}>
      <div
        className="movie-card"
        style={{
          backgroundImage:
            item.poster_path || item.backdrop_path
              ? `url(${background})`
              : `url(${img})`,
        }}
      >
        <Button>
          <i className="bx bx-play" />
        </Button>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  );
};

export default MovieCard;
