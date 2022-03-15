import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

import "./castList.scss";

const CastList = (props) => {
  console.log(props);
  const { category } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getCredits = async () => {
      const response = await tmdbApi.credits(category, props.id);
      console.log(response);
      setCasts(response.cast.slice(0, 5));
    };
    getCredits();
  }, [category, props.id]);

  return (
    <div className="casts">
      {casts.map((item, i) => (
        <a
          href={`https://en.wikipedia.org/wiki/${item.name}`}
          target="_blank"
          rel="noopener noreferrer"
          key={i}
          className="casts__item"
        >
          <div
            className="casts__item-img"
            style={{
              backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`,
            }}
          ></div>
          <p className="casts__item-name">{item.name}</p>
        </a>
      ))}
    </div>
  );
};

export default CastList;
