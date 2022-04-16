import React from "react";
import { useNavigate } from "react-router-dom";

import Button, { OutlineButton } from "../button/Button";

import apiConfig from "../../api/apiConfig";
import setModalActive from "./helpers/setModalActive";

const HeroSliderItem = ({ item, className }) => {
  let navigate = useNavigate();

  const backgroud = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  return (
    <div
      className={`hero-slide__item ${className} `}
      style={{ backgroundImage: `url(${backgroud})` }}
    >
      <div className="hero-slide__item__content container ">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <Button onClick={() => navigate("/movie/" + item.id)}>
              Watch now
            </Button>
            <OutlineButton onClick={() => setModalActive(item)}>
              Watch trailer
            </OutlineButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt="#" />
        </div>
      </div>
    </div>
  );
};

export default HeroSliderItem;
