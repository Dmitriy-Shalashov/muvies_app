import React, { useState, useEffect } from "react";
import "./rating.scss";
import PropTypes from "prop-types";

const Rating = ({ vote }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const newStyle = {
      opacity: 1,
      width: `${vote * 10}%`,
    };
    const delay = setTimeout(() => {
      setStyle(newStyle);
    }, 1000);
    return () => {
      clearTimeout(delay);
    };
  }, [vote]);

  return (
    <>
      <h2>Rating:</h2>
      <div className="rating">
        <div className="rating__value">
          <p>{vote}</p>
        </div>
        <div className="rating__line" style={style}></div>
      </div>
    </>
  );
};

Rating.propTypes = {
  vote: PropTypes.number,
};

export default Rating;
