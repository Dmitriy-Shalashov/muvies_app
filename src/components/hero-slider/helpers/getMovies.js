import tmdbApi, { movieType } from "../../../api/tmdbApi";

const getMovies = async (setMovieItems) => {
  const params = { page: randomPage(0, 15) };
  try {
    const response = await tmdbApi.getMoviesList(movieType.popular, {
      params,
    });
    setMovieItems(response.results.slice(0, 5));
  } catch {
    console.log("error");
  }
};

const randomPage = (min, max) => {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
};

export default getMovies;
