import React from "react";
import { useParams } from "react-router-dom";
import "./movieGrid.scss";
import PropTypes from "prop-types";

import MovieCard from "../../common/movie-card/MovieCard";
import Button from "../../common/button/Button";
import MovieSearch from "./MovieSearch";

import useGetDataGrid from "./hooks/useGetDataGrid";

const MovieGrid = ({ cate }) => {
  const { keyword } = useParams();
  const { dataGrid, totalPages, page, loadMore } = useGetDataGrid(
    cate,
    keyword
  );

  return (
    <>
      <div className="container">
        <div className="section mb-3">
          <MovieSearch cate={cate} keyword={keyword} />
        </div>
        <div className="movie-grid">
          {dataGrid.map((item, i) => (
            <MovieCard category={cate} item={item} key={i} />
          ))}
        </div>
        {page < totalPages ? (
          <div className="movie-grid__loadmore">
            <Button size="small" outline onClick={loadMore}>
              Load more
            </Button>
          </div>
        ) : (
          <div className="movie-grid__loadmore">
            <p>all {cate} recived</p>
          </div>
        )}
      </div>
    </>
  );
};

MovieGrid.propTypes = {
  cate: PropTypes.string,
};

export default MovieGrid;
