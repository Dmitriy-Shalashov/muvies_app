import tmdbApi, { category, movieType, tvType } from "../../../api/tmdbApi";

const getList = async (cate, setTotalPage, setItems, keyword) => {
  let response = null;

  if (keyword === undefined) {
    const params = {};
    switch (cate) {
      case category.movie:
        response = await tmdbApi.getMoviesList(movieType.upcoming, {
          params,
        });
        break;
      default:
        response = await tmdbApi.getTvList(tvType.popular, {
          params,
        });
    }
  } else {
    const params = {
      query: keyword,
    };
    response = await tmdbApi.search(cate, { params });
  }
  setItems(response.results);
  setTotalPage(response.total_pages);
};

export default getList;
