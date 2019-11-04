import { takeLatest, put, call } from 'redux-saga/effects';
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

const movieHistorySelector = (dataList, historyDataList) => {
  const newDataList = [];
  const { entries = [] } = dataList;
  historyDataList.forEach(element => {
    const dataObj = entries.find(item => {
      return item.id === element.movieId;
    });
    if (dataObj) {
      newDataList.push(dataObj);
    }
  });
  return newDataList;
};
export function* getMovieHistoryHelper() {
  try {
    const result = yield call(invokeAPI, '/api/history', 'get');
    if (result.isSuccess) {
      const response = yield call(
        invokeAPI,
        'assets/mockdata/movies.json',
        'get',
      );
      if (response.isSuccess) {
        const data = movieHistorySelector(response.data, result.data);
        yield put({ type: GET_MOVIE_HISTORY_SUCCESS, payload: data });
      } else {
        yield put({ type: GET_MOVIE_HISTORY_SUCCESS, payload: [] });
      }
    } else {
      yield put({ type: GET_MOVIE_HISTORY_FAILURE, payload: result.error });
    }
  } catch (error) {
    yield put({
      type: GET_MOVIE_HISTORY_ERROR,
      error: { message: error.message },
    });
  }
}

export function* setMovieHistoryHelper(action) {
  try {
    const result = yield call(
      invokeAPI,
      '/api/history',
      'post',
      action.payload,
    );
    if (result.isSuccess) {
      yield put({ type: SET_MOVIE_HISTORY_SUCCESS, payload: result.data });
    } else {
      yield put({ type: SET_MOVIE_HISTORY_FAILURE, payload: result.error });
    }
  } catch (error) {
    yield put({
      type: SET_MOVIE_HISTORY_ERROR,
      error: { message: error.message },
    });
  }
}

export function* getMovieHistoryWatcher() {
  yield takeLatest(GET_MOVIE_HISTORY, getMovieHistoryHelper);
}

export function* setMovieHistoryWatcher() {
  yield takeLatest(SET_MOVIE_HISTORY, setMovieHistoryHelper);
}
