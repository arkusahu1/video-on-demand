import {
  SET_MOVIE_HISTORY,
  GET_MOVIE_HISTORY,
} from '../actionTypes/movieHistoryTypes';

import {
  setMovieHistory,
  getMovieHistory,
} from './movieHistoryAction';

describe('setMovieHistory ', () => {
  let action;
  beforeEach(() => {
      action = setMovieHistory('testId');
  });
  it('returns correct action type', () => {
      expect(action.type).toBe(SET_MOVIE_HISTORY);
  });
  it('returns correct payload', () => {
      expect(action.payload).toEqual({ movieId: 'testId' });
  });
});

describe('getMovieHistory ', () => {
  let action;
  beforeEach(() => {
      action = getMovieHistory();
  });
  it('returns correct action type', () => {
      expect(action.type).toBe(GET_MOVIE_HISTORY);
  });
});