const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "74a371098627fb3b23db8eb146ce7a27",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
