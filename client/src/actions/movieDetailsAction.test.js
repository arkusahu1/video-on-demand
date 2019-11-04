import { FETCH_MOVIES_DETAILS } from '../actionTypes/movieDetailsActionTypes';
import { fetchMoviesDetails } from './movieDetailsAction';

describe('fetchMoviesDetails ', () => {
  let action;
  beforeEach(() => {
      action = fetchMoviesDetails('testId');
  });
  it('returns correct action type', () => {
      expect(action.type).toBe(FETCH_MOVIES_DETAILS);
  });
  it('returns correct payload', () => {
    expect(action.movieId).toBe('testId');
});
});
