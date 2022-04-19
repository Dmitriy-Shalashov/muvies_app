import tmdbApi from "../../../api/tmdbApi";

const getActors = async (setActors, category, id) => {
  const response = await tmdbApi.credits(category, id);
  //   console.log(response);
  setActors(response.cast.slice(0, 6));
};

export default getActors;
