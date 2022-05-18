import { useState, useEffect } from "react";
import tmdbApi, { movieType } from "../../../api/tmdbApi";

function useGetRandomMovies() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    (async function getMovies() {
      const randomPage = (min, max) => {
        const r = Math.random() * (max - min) + min;
        return Math.floor(r);
      };

      const params = { page: randomPage(0, 15) };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        setMoviesList(response.results.slice(0, 5));
      } catch (error) {
        console.log(`error in useGetRandomMovies ==> ${error}`);
      }
    })();
  }, []);

  return moviesList;
}
export default useGetRandomMovies;
