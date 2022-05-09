import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./movieGrid.scss";
import PropTypes from "prop-types";

import MovieCard from "../../common/movie-card/MovieCard";
import Button from "../../common/button/Button";
import MovieSearch from "./MovieSearch";

import loadMore from "./helpers/loadMore";
import getList from "./helpers/getList";

const MovieGrid = ({ cate }) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const { keyword } = useParams();

  useEffect(() => {
    getList(cate, setTotalPage, setItems, keyword);
  }, [cate, keyword]);

  return (
    <>
      <div className="container">
        <div className="section mb-3">
          <MovieSearch cate={cate} keyword={keyword} />
        </div>
        <div className="movie-grid">
          {items.map((item, i) => (
            <MovieCard category={cate} item={item} key={i} />
          ))}
        </div>
        {page < totalPage ? (
          <div className="movie-grid__loadmore">
            <Button
              size="small"
              outline
              onClick={() =>
                loadMore(cate, setItems, setPage, keyword, page, items)
              }
            >
              Load more
            </Button>
          </div>
        ) : null}
      </div>
    </>
  );
};

MovieGrid.propTypes = {
  cate: PropTypes.string,
};

export default MovieGrid;
