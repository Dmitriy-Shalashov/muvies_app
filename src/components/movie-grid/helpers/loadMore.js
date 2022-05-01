import tmdbApi, { category, movieType, tvType } from "../../../api/tmdbApi";

const loadMore = async (cate, setItems, setPage, keyword, page, items) => {
  let response = null;

  if (keyword === undefined) {
    const params = {
      page: page + 1,
    };
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
      page: page + 1,
      query: keyword,
    };
    response = await tmdbApi.search(cate, { params });
  }
  setItems([...items, ...response.results]);
  setPage(page + 1);
};

export default loadMore;
