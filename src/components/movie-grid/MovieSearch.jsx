import React, { useState, useEffect, useCallback } from "react";

import { useNavigate } from "react-router-dom";
import { category } from "../../api/tmdbApi";

import Input from "../../common/input/Inpit";
import Button from "../../common/button/Button";

const MovieSearch = ({ cate, keyword }) => {
  const navigate = useNavigate();

  const [searchword, setKeyword] = useState(keyword ? keyword : "");

  const goToSearch = useCallback(() => {
    if (searchword.trim().length > 0) {
      navigate(`/${category[cate]}/search/${searchword}`);
    }
  }, [searchword, cate, navigate]);

  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        goToSearch();
      }
    };
    document.addEventListener("keyup", enterEvent);
    return () => {
      document.removeEventListener("keyup", enterEvent);
    };
  }, [searchword, goToSearch]);

  return (
    <div className="movie-search">
      <Input
        type="text"
        placeholder="Enter keyword"
        value={searchword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button className="small" onClick={() => goToSearch(cate, searchword)}>
        Search
      </Button>
    </div>
  );
};

export default MovieSearch;
