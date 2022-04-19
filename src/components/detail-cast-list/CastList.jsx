import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import apiConfig from "../../api/apiConfig";

import getActors from "./helpers/getActors";

import "./castList.scss";
import img from "../../assets/not-found-image.jpg";

const CastList = ({ id }) => {
  const { category } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    getActors(setActors, category, id);
  }, [category, id]);

  return (
    <div className="casts mb-2">
      {actors.map((item, i) => (
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
              backgroundImage: item.profile_path
                ? `url(${apiConfig.w500Image(item.profile_path)})`
                : `url(${img})`,
            }}
          ></div>
          <p className="casts__item-name">{item.name}</p>
        </a>
      ))}
    </div>
  );
};

export default CastList;
