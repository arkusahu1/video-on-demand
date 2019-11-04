import { FETCH_MOVIES } from '../actionTypes/moviesActionTypes';
import { fetchMovies } from './moviesAction';

describe('setMovieHistory ', () => {
  let action;
  beforeEach(() => {
      action = fetchMovies();
  });
  it('returns correct action type', () => {
      expect(action.type).toBe(FETCH_MOVIES);
  });
});
