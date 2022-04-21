import tmdbApi from "../../../api/tmdbApi";

const getVideos = async (category, id, setVideos) => {
  const response = await tmdbApi.getVideos(category, id);
  setVideos(response.results.slice(0, 2));
};

export default getVideos;
