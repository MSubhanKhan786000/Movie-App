const axios = require("axios").default;
import {
  TMBD_BASE_URL,
  TMDB_IMAGE_BASE_URL,
  END_POINTS,
  YOUTUBE_BASE_URL,
} from "constants/Urls";
import LANGUAGES from "constants/Languages";
const TMDB_API_KEY = process.env.TMDB_API_KEY;

const TMBD_HTTP_REQUEST = axios.create({
  baseURL: TMBD_BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
  },
});

const getNowPlayingMovies = async () => {
  try {
    const response = await TMBD_HTTP_REQUEST.get(END_POINTS.NOW_PLAYING_MOVIES);
    return response.data;
  } catch (error) {
    console.error("Error fetching now playing movies:", error);
    throw error;
  }
};

const getUpcomingMovies = async () => {
  try {
    const response = await TMBD_HTTP_REQUEST.get(END_POINTS.UPCOMING_MOVIES);
    return response.data;
  } catch (error) {
    console.error("Error fetching upcoming movies:", error);
    throw error;
  }
};

const getTopRatedMovies = async () => {
  try {
    const response = await TMBD_HTTP_REQUEST.get(END_POINTS.TOP_RATED);
    return response.data;
  } catch (error) {
    console.error("Error fetching top rated movies:", error);
    throw error;
  }
};

const getAllGenres = async () => {
  try {
    const response = await TMBD_HTTP_REQUEST.get(END_POINTS.GENRES);
    return response.data;
  } catch (error) {
    console.error("Error fetching Genres of movies:", error);
    throw error;
  }
};

const getMoviesById = (movieId, append_to_response = "") =>
  TMBD_HTTP_REQUEST.get(
    `${END_POINTS.MOVIE}/${movieId}`,
    append_to_response ? { params: { append_to_response } } : null
  );

const getPoster = path => `${TMDB_IMAGE_BASE_URL}/original${path}`;

const getVideo = key => `${YOUTUBE_BASE_URL}?v=${key}`;

const getLanguages = language_iso =>
  LANGUAGES.find(language => language.iso_639_1 === language_iso);

export {
  getNowPlayingMovies,
  getPoster,
  getLanguages,
  getUpcomingMovies,
  getTopRatedMovies,
  getAllGenres,
  getMoviesById,
  getVideo,
};
