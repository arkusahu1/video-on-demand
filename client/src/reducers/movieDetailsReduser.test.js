import {
  FETCH_MOVIES_DETAILS_SUCCESS,
  FETCH_MOVIES_DETAILS_ERROR,
} from '../actionTypes/movieDetailsActionTypes';
import reducer from './movieDetailsReduser';

describe('movieDetailsReduser test', () => {
  const action = { type: '' };
  const initialState = {
    data: {},
    error: null,
  };
  it('movieDetailsReduser initiate', () => {
    const movieDetailsReduserData = reducer(undefined, action);
    expect(movieDetailsReduserData).toStrictEqual(initialState);
  });

  it('movieDetailsReduser service success response', () => {
    action.type = FETCH_MOVIES_DETAILS_SUCCESS;
    action.payload = [{ test: '' }];
    const movieDetailsReduserData = reducer({}, action);
    expect(movieDetailsReduserData).toStrictEqual({ data: action.payload });
  });

  it('movieDetailsReduser error response', () => {
    action.type = FETCH_MOVIES_DETAILS_ERROR;
    action.error = {};
    const movieDetailsReduserData = reducer({}, action);
    expect(movieDetailsReduserData).toStrictEqual({ error: {} });
  });
});
