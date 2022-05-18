import { useState, useEffect } from "react";
import tmdbApi from "../../../api/tmdbApi";

function useGetActors(category, id) {
  const [actorsList, setActorsList] = useState([]);

  useEffect(() => {
    (async function getActors() {
      try {
        const response = await tmdbApi.credits(category, id);
        setActorsList(response.cast.slice(0, 6));
      } catch (error) {
        console.log(`error in useGetActors ==> ${error}`);
      }
    })();
  }, [category, id]);
  return actorsList;
}
export default useGetActors;
