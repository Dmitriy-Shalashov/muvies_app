import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import ItemVideo from "./ItemVideo";
import getVideos from "./helpers/getVideos";
import "./videoList.scss";

const VideoList = ({ id }) => {
  const { category } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos(category, id, setVideos);
  }, [category, id]);

  return (
    <>
      {videos.map((item, i) => (
        <ItemVideo key={i} item={item} />
      ))}
    </>
  );
};

VideoList.propTypes = {
  id: PropTypes.number,
};

export default VideoList;
