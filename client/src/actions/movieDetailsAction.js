import { FETCH_MOVIES_DETAILS } from '../actionTypes/movieDetailsActionTypes';

/**
 * Action creator to fetch movie detail data.
 *
 * @param {String} movieId
 */
export const fetchMoviesDetails = movieId => {
  return {
    type: FETCH_MOVIES_DETAILS,
    movieId,
  };
};

export default fetchMoviesDetails;
