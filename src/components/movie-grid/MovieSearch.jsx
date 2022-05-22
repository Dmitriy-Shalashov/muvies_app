import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

import { useNavigate } from "react-router-dom";
import { category } from "../../api/tmdbApi";

import Input from "../../common/input/Inpit";
import Button from "../../common/button/Button";

const MovieSearch = ({ cate, keyword }) => {
  const navigate = useNavigate();

  const [searchword, setKeyword] = useState(keyword ? keyword : "");
  const [visible, setVisible] = useState(false);

  const goToSearch = useCallback(() => {
    if (searchword.trim().length > 0) {
      navigate(`/${category[cate]}/search/${searchword}`);
      setTimeout(() => {
        setKeyword("");
        setVisible(false);
      }, 3000);
    } else {
      setVisible(!visible);
    }
  }, [searchword, cate, visible, navigate]);

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
        placeholder={visible ? "Please enter your choice" : "Enter keyword"}
        value={searchword}
        onChange={(e) => setKeyword(e.target.value)}
        error={visible}
      />
      <Button size="small" onClick={() => goToSearch(cate, searchword)}>
        Search
      </Button>
    </div>
  );
};

MovieSearch.propTypes = {
  cate: PropTypes.string,
  keyword: PropTypes.string,
};

export default MovieSearch;
