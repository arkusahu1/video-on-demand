import { takeLatest, put, call } from 'redux-saga/effects';
import {
  fetchMovieDetailsHelper,
  fetchMovieDetailsWatcher,
} from './movieDetailsSaga';
import filteredMockData from '../../mockData/filteredMockData';
import {
  FETCH_MOVIES_DETAILS,
  FETCH_MOVIES_DETAILS_SUCCESS,
  FETCH_MOVIES_DETAILS_ERROR,
} from '../actionTypes/movieDetailsActionTypes';
import invokeAPI from '../RestClient';

describe('SAGAS', () => {
  const action = {
    movieId: filteredMockData.data[0].data[0].id,
  };
  it('should dispatch action "FETCH_MOVIES_DETAILS" ', () => {
    const generator = fetchMovieDetailsWatcher(action);
    expect(generator.next().value).toEqual(
      takeLatest(FETCH_MOVIES_DETAILS, fetchMovieDetailsHelper),
    );
    expect(generator.next().done).toBeTruthy();
  });
  it('should dispatch action "FETCH_MOVIES_DETAILS_SUCCESS" with result from fetch movies API', () => {
    const data = {
      data: {
        entries: filteredMockData.data[0].data,
      },
    };
    const generator = fetchMovieDetailsHelper(action);
    expect(generator.next(true).value).toEqual(
      call(invokeAPI, 'assets/mockdata/movies.json', 'get'),
    );
    expect(generator.next(data).value).toEqual(
      put({
        type: FETCH_MOVIES_DETAILS_SUCCESS,
        payload: filteredMockData.data[0].data[0],
      }),
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('should dispatch action "FETCH_MOVIES_DETAILS_SUCCESS" with empty result from fetch movies details API', () => {
    const data = {
      data: {
        entries: undefined,
      },
    };
    const generator = fetchMovieDetailsHelper(action);
    expect(generator.next(true).value).toEqual(
      call(invokeAPI, 'assets/mockdata/movies.json', 'get'),
    );
    expect(generator.next(data).value).toEqual(
      put({
        type: FETCH_MOVIES_DETAILS_SUCCESS,
        payload: undefined,
      }),
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('should dispatch action "FETCH_MOVIES_DETAILS_ERROR" with empty result from fetch movies API', () => {
    const data = {
      data: {
        entries: [undefined],
      },
    };
    const generator = fetchMovieDetailsHelper(action);
    expect(generator.next(true).value).toEqual(
      call(invokeAPI, 'assets/mockdata/movies.json', 'get'),
    );
    expect(generator.next(data).value).toEqual(
      put({
        type: FETCH_MOVIES_DETAILS_ERROR,
        error: { message: `Cannot read property 'id' of undefined` },
      }),
    );
    expect(generator.next().done).toBeTruthy();
  });
});
