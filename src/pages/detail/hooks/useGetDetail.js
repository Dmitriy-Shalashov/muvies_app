import { useState, useEffect } from "react";
import tmdbApi from "../../../api/tmdbApi";

function useGetDetail(category, id) {
  const [dataDetail, setDataDetail] = useState(null);

  useEffect(() => {
    (async function getDetail() {
      const response = await tmdbApi.detail(category, id, { params: {} });
      setDataDetail(response);
    })();
  }, [category, id]);

  return dataDetail;
}

export default useGetDetail;
