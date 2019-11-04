import {
  SET_MOVIE_HISTORY,
  GET_MOVIE_HISTORY,
} from '../actionTypes/movieHistoryTypes';

/**
 * Action creator to movieHistory data.
 *
 */
export const setMovieHistory = movieId => {
  return {
    type: SET_MOVIE_HISTORY,
    payload: { movieId },
  };
};

export const getMovieHistory = () => {
  return {
    type: GET_MOVIE_HISTORY,
  };
};
