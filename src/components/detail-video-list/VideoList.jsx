import React from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import ItemVideo from "./ItemVideo";
import useGetVideos from "./hooks/useGetVideos";
import "./videoList.scss";

const VideoList = ({ id }) => {
  const { category } = useParams();
  const dataVideoList = useGetVideos(category, id);

  return (
    <>
      {dataVideoList.map((item, i) => (
        <ItemVideo key={i} item={item} />
      ))}
    </>
  );
};

VideoList.propTypes = {
  id: PropTypes.number,
};

export default VideoList;
