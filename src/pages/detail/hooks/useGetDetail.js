import { useState, useEffect } from "react";
import tmdbApi from "../../../api/tmdbApi";

function useGetDetail(category, id) {
  const [dataDetail, setDataDetail] = useState(null);

  useEffect(() => {
    (async function getDetail() {
      try {
        const response = await tmdbApi.detail(category, id, { params: {} });
        setDataDetail(response);
      } catch (error) {
        console.log(`error in useGetDetail ==> ${error}`);
      }
    })();
  }, [category, id]);

  return dataDetail;
}

export default useGetDetail;
