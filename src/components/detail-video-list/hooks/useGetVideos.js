import { useState, useEffect } from "react";
import tmdbApi from "../../../api/tmdbApi";

function useGetVideos(category, id) {
  const [dataVideoList, setDataVideoList] = useState([]);

  useEffect(() => {
    (async function getVideos() {
      try {
        const response = await tmdbApi.getVideos(category, id);
        setDataVideoList(response.results.slice(0, 2));
      } catch (error) {
        console.log(`error in useGetVideos ==> ${error}`);
      }
    })();
  }, [category, id]);
  return dataVideoList;
}

export default useGetVideos;
