import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

import { useNavigate } from "react-router-dom";
import { category } from "../../api/tmdbApi";

import Input from "../../common/input/Inpit";
import Button from "../../common/button/Button";

const MovieSearch = ({ cate, keyword }) => {
  const navigate = useNavigate();

  const [searchKeyword, setSearchKeyword] = useState(keyword ? keyword : "");
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);

  const goToSearch = useCallback(() => {
    let regexp = /^[a-zA-Z]/;

    if (!searchKeyword) {
      setVisible(true);
      setError(false);
    } else if (regexp.test(searchKeyword)) {
      navigate(`/${category[cate]}/search/${searchKeyword}`);
      setError(false);
      setTimeout(() => {
        setSearchKeyword("");
      }, 2000);
    } else {
      setError(true);
      setVisible(false);
      setSearchKeyword("");
    }
  }, [searchKeyword, cate, navigate]);

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
  }, [searchKeyword, goToSearch]);

  return (
    <div className="movie-search">
      <Input
        type="text"
        placeholder={visible ? "Please enter your choice" : "Enter keyword"}
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        error={visible}
      />
      {error && <p>please enter your choice on english </p>}
      <Button size="small" onClick={() => goToSearch(cate, searchKeyword)}>
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
