import { useState, useEffect } from "react";
import tmdbApi, { category as cate } from "../../../api/tmdbApi";

function useGetList(type, category, id) {
  const [dataMovieList, setDataMovieList] = useState([]);

  useEffect(() => {
    let response = null;
    const params = {};

    (async function getList() {
      try {
        if (type === "similar") {
          response = await tmdbApi.similar(category, id);
        } else {
          switch (category) {
            case cate.movie:
              response = await tmdbApi.getMoviesList(type, { params });
              break;
            case cate.tv:
              response = await tmdbApi.getTvList(type, { params });
              break;
            default:
              // "no default case";
              response = {};
          }
        }
        setDataMovieList(response.results);
      } catch (error) {
        console.log(`error in useGetList ==> ${error}`);
      }
    })();
  }, [type, category, id]);

  return dataMovieList;
}

export default useGetList;
