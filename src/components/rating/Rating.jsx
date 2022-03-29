import React, { useState, useEffect } from "react";
import "./rating.scss";

const Rating = (props) => {
  const [style, setStyle] = useState({});

  console.log(props.vote);

  useEffect(() => {
    const newStyle = {
      opacity: 1,
      width: `${props.vote * 10}%`,
    };
    setTimeout(() => {
      setStyle(newStyle);
    }, 400);
  }, [props]);

  return (
    <>
      <h2>Rating:</h2>
      <div className="rating">
        <div className="rating__value">
          <p>{props.vote}</p>
        </div>
        <div className="rating__line" style={style}></div>
      </div>
    </>
  );
};

export default Rating;
