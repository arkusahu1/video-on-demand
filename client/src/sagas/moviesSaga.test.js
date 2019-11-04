import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchMovieListHelper, fetchMoviesWatcher } from './moviesSaga';
import filteredMockData from '../../mockData/filteredMockData';
import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_ERROR,
} from '../actionTypes/moviesActionTypes';
import invokeAPI from '../RestClient';

describe('SAGAS', () => {
  it('should dispatch action "FETCH_MOVIES" ', () => {
    const generator = fetchMoviesWatcher();
    expect(generator.next().value).toEqual(
      takeLatest(FETCH_MOVIES, fetchMovieListHelper),
    );
    expect(generator.next().done).toBeTruthy();
  });
  it('should dispatch action "FETCH_MOVIES_SUCCESS" with result from fetch movies API', () => {
    const data = {
      data: {
        entries: filteredMockData.data[0].data,
      },
      isSuccess: true,
    };
    const generator = fetchMovieListHelper();
    expect(generator.next(true).value).toEqual(
      call(invokeAPI, 'assets/mockdata/movies.json', 'get'),
    );
    expect(generator.next(data).value).toEqual(
      put({ type: FETCH_MOVIES_SUCCESS, payload: filteredMockData.data }),
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('should dispatch action "FETCH_MOVIES_SUCCESS" with empty result from fetch movies API', () => {
    const data = {
      data: undefined,
      isSuccess: true,
    };
    const generator = fetchMovieListHelper();
    expect(generator.next(true).value).toEqual(
      call(invokeAPI, 'assets/mockdata/movies.json', 'get'),
    );
    expect(generator.next(data).value).toEqual(
      put({ type: FETCH_MOVIES_SUCCESS, payload: [] }),
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('should dispatch action "FETCH_MOVIES_FAILURE" with empty result from fetch movies API', () => {
    const data = {
      error: {},
      isSuccess: false,
    };
    const generator = fetchMovieListHelper();
    expect(generator.next(true).value).toEqual(
      call(invokeAPI, 'assets/mockdata/movies.json', 'get'),
    );
    expect(generator.next(data).value).toEqual(
      put({ type: FETCH_MOVIES_FAILURE, payload: {} }),
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('should dispatch action "FETCH_MOVIES_ERROR" with empty result from fetch movies API', () => {
    const data = {
      data: {
        entrie: {},
      },
      isSuccess: true,
    };
    const generator = fetchMovieListHelper();
    expect(generator.next(true).value).toEqual(
      call(invokeAPI, 'assets/mockdata/movies.json', 'get'),
    );
    expect(generator.next(data).value).toEqual(
      put({
        type: FETCH_MOVIES_ERROR,
        error: { message: `Cannot read property 'length' of undefined` },
      }),
    );
    expect(generator.next().done).toBeTruthy();
  });
});
