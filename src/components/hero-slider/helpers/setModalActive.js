import tmdbApi, { category } from "../../../api/tmdbApi";

const setModalActive = async (item) => {
  const modal = document.querySelector(`#modal_${item.id}`);

  const videos = await tmdbApi.getVideos(category.movie, item.id);

  if (videos.results.length > 0) {
    const videSrc = "https://www.youtube.com/embed/" + videos.results[0].key;
    modal
      .querySelector(".modal__content > iframe")
      .setAttribute("src", videSrc);
  } else {
    modal.querySelector(".modal__content").innerHTML = "No trailer";
  }

  modal.classList.toggle("active");
};

export default setModalActive;
