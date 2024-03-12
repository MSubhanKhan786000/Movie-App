const TMBD_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
const YOUTUBE_BASE_URL = "https://www.youtube.com/watch";

const TMDB_API_KEY = process.env.TMDB_API_KEY;

const END_POINTS = {
  NOW_PLAYING_MOVIES: "/movie/now_playing",
  UPCOMING_MOVIES: "/movie/upcoming",
  TOP_RATED: "/movie/top_rated",
  GENRES: "/genre/movie/list",
  MOVIE: "/movie",
};
const APPEND_TO_RESPONSE = {
  VIDEO: "videos",
  CREDITS: "credits",
  RECOMMENDATIONS: "recommendations",
  SIMILAR: "similar",
};

export {
  TMBD_BASE_URL,
  TMDB_IMAGE_BASE_URL,
  END_POINTS,
  TMDB_API_KEY,
  APPEND_TO_RESPONSE,
  YOUTUBE_BASE_URL,
};
