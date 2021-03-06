import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

import CastList from "../../components/detail-cast-list/CastList";
import VideoList from "../../components/detail-video-list/VideoList";
import MovieList from "../../common/movie-list/MovieList";
import Rating from "../../common/rating/Rating";
import apiConfig from "../../api/apiConfig";

import useGetDetail from "./hooks/useGetDetail";
import motionSetForPoster from "./helpers/motionSetForPoster";
import motionSetForGenres from "./helpers/motionSetForGenres";

import "./detail.scss";

const Detail = () => {
  const { category, id } = useParams();
  const detailList = useGetDetail(category, id);

  return (
    <>
      {detailList && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                detailList.backdrop_path || detailList.poster_path
              )})`,
            }}
          ></div>
          <div className="mb-3 movie-content container">
            <motion.div
              className="movie-content__poster"
              variants={motionSetForPoster}
              initial="hidden"
              animate="visible"
            >
              <div
                className="movie-content__poster-img "
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    detailList.poster_path || detailList.backdrop_path
                  )})`,
                }}
              ></div>
            </motion.div>
            <div className="movie-content__info">
              <h1 className="title">{detailList.title || detailList.name}</h1>
              <div className="genres">
                {detailList.genres &&
                  detailList.genres.slice(0, 5).map((genre, i) => (
                    <motion.span
                      key={i}
                      className="genres__item"
                      variants={motionSetForGenres}
                      initial="hidden"
                      animate="visible"
                      custom={i}
                    >
                      {genre.name}
                    </motion.span>
                  ))}
              </div>
              <p className="overview">{detailList.overview}</p>
              <div className="cast">
                <div className="section__header">
                  <h2 className="cast__title">Casts:</h2>
                </div>
                <CastList id={detailList.id} />
                <Rating vote={detailList.vote_average} />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="section mb-3 ">
              <VideoList id={detailList.id} />
            </div>
            <div className="section mb-3 ">
              <div className="section__header mb-2">
                <h2>Similar</h2>
              </div>
              <MovieList
                category={category}
                type="similar"
                id={detailList.id}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;
