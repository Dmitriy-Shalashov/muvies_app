import tmdbApi, { category as cate } from "../../../api/tmdbApi";

const getList = async (type, category, id, setItems) => {
  let response = null;
  const params = {};

  if (type !== "similar") {
    switch (category) {
      case cate.movie:
        response = await tmdbApi.getMoviesList(type, { params });
        break;
      default:
        response = await tmdbApi.getTvList(type, { params });
    }
  } else {
    response = await tmdbApi.similar(category, id);
  }
  setItems(response.results);
};

export default getList;
