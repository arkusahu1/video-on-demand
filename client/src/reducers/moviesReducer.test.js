import {
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_ERROR,
} from '../actionTypes/moviesActionTypes';
import reducer from './moviesReduser';

describe('moviesReduser test', () => {
  const action = { type: '' };
  const initialState = {
    isSuccess: false,
    data: [],
    serviceError: null,
    error: null,
  };
  it('moviesReduser initiate', () => {
    const moviesReduserData = reducer(undefined, action);
    expect(moviesReduserData).toStrictEqual(initialState);
  });

  it('moviesReduser service success response', () => {
    action.type = FETCH_MOVIES_SUCCESS;
    action.payload = [{ test: '' }];
    const moviesReduserData = reducer({}, action);
    expect(moviesReduserData.isSuccess).toBe(true);
  });

  it('moviesReduser failure response', () => {
    action.type = FETCH_MOVIES_FAILURE;
    action.payload = [{}];
    const moviesReduserData = reducer({}, action);
    expect(moviesReduserData.isSuccess).toBe(false);
  });

  it('moviesReduser error response', () => {
    action.type = FETCH_MOVIES_ERROR;
    action.payload = [{}];
    const moviesReduserData = reducer({}, action);
    expect(moviesReduserData.isSuccess).toBe(false);
  });
});
