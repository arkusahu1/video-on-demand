import { takeLatest, put, call } from 'redux-saga/effects';
import invokeAPI from '../RestClient';
import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_ERROR,
} from '../actionTypes/moviesActionTypes';
import { filterDataByCategory } from '../utils/utils';

export function* fetchMovieListHelper() {
  try {
    const result = yield call(invokeAPI, 'assets/mockdata/movies.json', 'get');
    if (result.isSuccess) {
      const dataList =
        result.data && result.data.entries.length > 0 && result.data.entries;
      const newMovieData = dataList ? filterDataByCategory(dataList) : [];
      yield put({ type: FETCH_MOVIES_SUCCESS, payload: newMovieData });
    } else {
      yield put({ type: FETCH_MOVIES_FAILURE, payload: result.error });
    }
  } catch (error) {
    yield put({ type: FETCH_MOVIES_ERROR, error: { message: error.message } });
  }
}

export function* fetchMoviesWatcher() {
  yield takeLatest(FETCH_MOVIES, fetchMovieListHelper);
}
