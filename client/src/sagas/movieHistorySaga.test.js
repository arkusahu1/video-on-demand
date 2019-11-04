import { takeLatest, put, call } from 'redux-saga/effects';
import {
  getMovieHistoryHelper,
  setMovieHistoryHelper,
  getMovieHistoryWatcher,
  setMovieHistoryWatcher,
} from './movieHistorySaga';
import filteredMockData from '../../mockData/filteredMockData';
import {
  SET_MOVIE_HISTORY,
  SET_MOVIE_HISTORY_SUCCESS,
  SET_MOVIE_HISTORY_FAILURE,
  SET_MOVIE_HISTORY_ERROR,
  GET_MOVIE_HISTORY,
  GET_MOVIE_HISTORY_SUCCESS,
  GET_MOVIE_HISTORY_FAILURE,
  GET_MOVIE_HISTORY_ERROR,
} from '../actionTypes/movieHistoryTypes';
import invokeAPI from '../RestClient';

describe('SAGAS', () => {
  const action = {
    payload: {},
  };
  it('should dispatch action "SET_MOVIE_HISTORY" ', () => {
    const generator = setMovieHistoryWatcher(action);
    expect(generator.next().value).toEqual(
      takeLatest(SET_MOVIE_HISTORY, setMovieHistoryHelper),
    );
    expect(generator.next().done).toBeTruthy();
  });
  it('should dispatch action "SET_MOVIE_HISTORY_SUCCESS" with result from fetch movies API', () => {
    const data = {
      data: [],
      isSuccess: true,
    };
    const generator = setMovieHistoryHelper(action);
    expect(generator.next(true).value).toEqual(
      call(invokeAPI, '/api/history', 'post', action.payload),
    );
    expect(generator.next(data).value).toEqual(
      put({
        type: SET_MOVIE_HISTORY_SUCCESS,
        payload: [],
      }),
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('should dispatch action "SET_MOVIE_HISTORY_ERROR" with result from fetch movies API', () => {
    const data = {
      error: {},
      isSuccess: false,
    };
    const generator = setMovieHistoryHelper(action);
    expect(generator.next(true).value).toEqual(
      call(invokeAPI, '/api/history', 'post', action.payload),
    );
    expect(generator.next(undefined).value).toEqual(
      put({
        type: SET_MOVIE_HISTORY_ERROR,
        error: { message: `Cannot read property 'isSuccess' of undefined` },
      }),
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('should dispatch action "SET_MOVIE_HISTORY_FAILURE" with result from fetch movies API', () => {
    const data = {
      error: {},
      isSuccess: false,
    };
    const generator = setMovieHistoryHelper(action);
    expect(generator.next(true).value).toEqual(
      call(invokeAPI, '/api/history', 'post', action.payload),
    );
    expect(generator.next(data).value).toEqual(
      put({
        type: SET_MOVIE_HISTORY_FAILURE,
        payload: {},
      }),
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('should dispatch action "SET_MOVIE_HISTORY" ', () => {
    const generator = getMovieHistoryWatcher();
    expect(generator.next().value).toEqual(
      takeLatest(GET_MOVIE_HISTORY, getMovieHistoryHelper),
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('should dispatch action "GET_MOVIE_HISTORY_SUCCESS" with result from fetch movies API', () => {
    const movieListData = {
      data: {
        entries: [{ id: 'test' }]
      },
      isSuccess: true,
    };
    const data = {
      data: [{ movieId: 'test' }],
      isSuccess: true,
    };
    const generator = getMovieHistoryHelper(action);
    expect(generator.next(true).value).toEqual(
      call(invokeAPI, '/api/history', 'get'),
    );
    expect(generator.next(data).value).toEqual(
      call(invokeAPI, 'assets/mockdata/movies.json', 'get'),
    );
    expect(generator.next(movieListData).value).toEqual(
      put({
        type: GET_MOVIE_HISTORY_SUCCESS,
        payload: [{ ...movieListData.data.entries[0] }],
      }),
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('should dispatch action "GET_MOVIE_HISTORY_SUCCESS" with empty result from fetch movies API', () => {
    const movieListData = {
      data: {},
      isSuccess: true,
    };
    const data = {
      data: [{ movieId: 'test' }],
      isSuccess: true,
    };
    const generator = getMovieHistoryHelper(action);
    expect(generator.next(true).value).toEqual(
      call(invokeAPI, '/api/history', 'get'),
    );
    expect(generator.next(data).value).toEqual(
      call(invokeAPI, 'assets/mockdata/movies.json', 'get'),
    );
    expect(generator.next(movieListData).value).toEqual(
      put({
        type: GET_MOVIE_HISTORY_SUCCESS,
        payload: [],
      }),
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('should dispatch action "GET_MOVIE_HISTORY_SUCCESS" with result from fetch movies API', () => {
    const data = {
      data: [],
      isSuccess: true,
    };

    const innerData = {
      error: {},
      isSuccess: false,
    };
    const generator = getMovieHistoryHelper(action);
    expect(generator.next(true).value).toEqual(
      call(invokeAPI, '/api/history', 'get'),
    );
    expect(generator.next(data).value).toEqual(
      call(invokeAPI, 'assets/mockdata/movies.json', 'get'),
    );
    expect(generator.next(innerData).value).toEqual(
      put({
        type: GET_MOVIE_HISTORY_SUCCESS,
        payload: [],
      }),
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('should dispatch action "GET_MOVIE_HISTORY_FAILURE" with result from fetch movies API', () => {
    const data = {
      error: {},
      isSuccess: false,
    };
    const generator = getMovieHistoryHelper(action);
    expect(generator.next(true).value).toEqual(
      call(invokeAPI, '/api/history', 'get'),
    );
    expect(generator.next(data).value).toEqual(
      put({
        type: GET_MOVIE_HISTORY_FAILURE,
        payload: {},
      }),
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('should dispatch action "GET_MOVIE_HISTORY_ERROR" with result from fetch movies API', () => {
    const data = {
      error: {},
      isSuccess: false,
    };
    const generator = getMovieHistoryHelper(action);
    expect(generator.next(true).value).toEqual(
      call(invokeAPI, '/api/history', 'get'),
    );
    expect(generator.next(undefined).value).toEqual(
      put({
        type: GET_MOVIE_HISTORY_ERROR,
        error: { message: `Cannot read property 'isSuccess' of undefined` },
      }),
    );
    expect(generator.next().done).toBeTruthy();
  });

});
