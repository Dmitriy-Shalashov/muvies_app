import { useState, useEffect } from "react";
import tmdbApi, { category, movieType, tvType } from "../../../api/tmdbApi";

function useGetDataGrid(cate, keyword) {
  const [dataGrid, setDataGrid] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, settotalPages] = useState(0);

  useEffect(() => {
    let response = null;
    const params = {};

    async function getGrid() {
      try {
        if (keyword) {
          const params = {
            query: keyword,
          };
          response = await tmdbApi.search(cate, { params });
        } else {
          switch (cate) {
            case category.movie:
              response = await tmdbApi.getMoviesList(movieType.upcoming, {
                params,
              });
              break;
            case category.tv:
              response = await tmdbApi.getTvList(tvType.popular, {
                params,
              });
              break;
            default:
              // "no default case";
              response = [];
          }
        }
        setDataGrid(response.results);
        settotalPages(response.total_pages);
      } catch (error) {
        console.log(`error in useGetDataGrid ==> ${error}`);
      }
    }
    getGrid();
  }, [cate, keyword]);

  const loadMore = async () => {
    let response = null;
    try {
      if (keyword) {
        const params = {
          page: page + 1,
          query: keyword,
        };
        response = await tmdbApi.search(cate, { params });
      } else {
        const params = {
          page: page + 1,
        };
        switch (cate) {
          case category.movie:
            response = await tmdbApi.getMoviesList(movieType.upcoming, {
              params,
            });
            break;
          case category.tv:
            response = await tmdbApi.getTvList(tvType.popular, {
              params,
            });
            break;
          default:
            // "no default case";
            response = [];
        }
      }
      setDataGrid([...dataGrid, ...response.results]);
      setPage(page + 1);
    } catch (error) {
      console.log(`error in loadMore function ==> ${error}`);
    }
  };

  return { dataGrid, totalPages, page, loadMore };
}

export default useGetDataGrid;
