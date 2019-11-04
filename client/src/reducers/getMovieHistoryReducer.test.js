import {
  GET_MOVIE_HISTORY_SUCCESS,
  GET_MOVIE_HISTORY_FAILURE,
  GET_MOVIE_HISTORY_ERROR,
} from '../actionTypes/movieHistoryTypes';
import reducer from './getMovieHistoryReducer';

describe('getMovieHistoryReducer test', () => {
  const action = { type: '' };
  const initialState = {
    isSuccess: false,
    data: [],
    serviceError: null,
    error: null,
  };
  it('getMovieHistoryReducer initiate', () => {
    const getMovieHistoryReducerData = reducer(undefined, action);
    expect(getMovieHistoryReducerData).toStrictEqual(initialState);
  });

  it('getMovieHistoryReducer service success response', () => {
    action.type = GET_MOVIE_HISTORY_SUCCESS;
    action.payload = [{ test: '' }];
    const getMovieHistoryReducerData = reducer({}, action);
    expect(getMovieHistoryReducerData.isSuccess).toBe(true);
  });

  it('getMovieHistoryReducer failure response', () => {
    action.type = GET_MOVIE_HISTORY_FAILURE;
    action.payload = [{}];
    const getMovieHistoryReducerData = reducer({}, action);
    expect(getMovieHistoryReducerData.isSuccess).toBe(false);
  });

  it('getMovieHistoryReducer error response', () => {
    action.type = GET_MOVIE_HISTORY_ERROR;
    action.payload = [{}];
    const getMovieHistoryReducerData = reducer({}, action);
    expect(getMovieHistoryReducerData.isSuccess).toBe(false);
  });
});
