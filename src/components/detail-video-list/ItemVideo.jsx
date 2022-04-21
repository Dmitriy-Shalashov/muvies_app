import React, { useRef, useEffect } from "react";
import calcHeight from "./helpers/calcHeight";

const ItemVideo = ({ item }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    calcHeight(iframeRef);
  }, []);

  return (
    <div className="video">
      <div className="video__title">
        <h2>{item.name}</h2>
      </div>
      <iframe
        src={`https://www.youtube.com/embed/${item.key}`}
        ref={iframeRef}
        width="100%"
        title="video"
      ></iframe>
    </div>
  );
};

export default ItemVideo;
