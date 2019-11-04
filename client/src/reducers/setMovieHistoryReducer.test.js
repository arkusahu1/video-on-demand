import {
  SET_MOVIE_HISTORY_SUCCESS,
  SET_MOVIE_HISTORY_FAILURE,
  SET_MOVIE_HISTORY_ERROR,
} from '../actionTypes/movieHistoryTypes';
import reducer from './setMovieHistoryReducer';

describe('setMovieHistoryReducer test', () => {
  const action = { type: '' };
  const initialState = {
    isSuccess: false,
    data: {},
    serviceError: null,
    error: null,
  };
  it('setMovieHistoryReducer initiate', () => {
    const setMovieHistoryReducerData = reducer(undefined, action);
    expect(setMovieHistoryReducerData).toStrictEqual(initialState);
  });

  it('setMovieHistoryReducer service success response', () => {
    action.type = SET_MOVIE_HISTORY_SUCCESS;
    action.payload = [{ test: '' }];
    const setMovieHistoryReducerData = reducer({}, action);
    expect(setMovieHistoryReducerData.isSuccess).toBe(true);
  });

  it('setMovieHistoryReducer failure response', () => {
    action.type = SET_MOVIE_HISTORY_FAILURE;
    action.payload = [{}];
    const setMovieHistoryReducerData = reducer({}, action);
    expect(setMovieHistoryReducerData.isSuccess).toBe(false);
  });

  it('setMovieHistoryReducer error response', () => {
    action.type = SET_MOVIE_HISTORY_ERROR;
    action.payload = [{}];
    const setMovieHistoryReducerData = reducer({}, action);
    expect(setMovieHistoryReducerData.isSuccess).toBe(false);
  });
});
