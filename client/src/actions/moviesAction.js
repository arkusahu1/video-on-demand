import { FETCH_MOVIES } from '../actionTypes/moviesActionTypes';

/**
 * Action creator to fetch movie data.
 *
 */
export const fetchMovies = () => {
  return {
    type: FETCH_MOVIES,
  };
};

export default fetchMovies;
