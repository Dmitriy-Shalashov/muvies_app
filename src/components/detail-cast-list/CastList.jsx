import React from "react";
import { useParams } from "react-router-dom";

import apiConfig from "../../api/apiConfig";

import useGetActors from "./hooks/useGetActors";

import "./castList.scss";
import img from "../../assets/not-found-image.jpg";
import PropTypes from "prop-types";

const CastList = ({ id }) => {
  const { category } = useParams();
  const actorsList = useGetActors(category, id);

  return (
    <div className="casts mb-2">
      {actorsList.map((item, i) => (
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

CastList.propTypes = {
  id: PropTypes.number,
};

export default CastList;
