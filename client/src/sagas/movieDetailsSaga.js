import { takeLatest, put, call } from 'redux-saga/effects';
import {
  FETCH_MOVIES_DETAILS,
  FETCH_MOVIES_DETAILS_SUCCESS,
  FETCH_MOVIES_DETAILS_ERROR,
} from '../actionTypes/movieDetailsActionTypes';
import invokeAPI from '../RestClient';

const movieDetailsSelector = (result, movieId) => {
  const {
    data: { entries = [] },
  } = result;
  const movieDetailData = entries.find(item => {
    return item.id === movieId;
  });
  return movieDetailData;
};

export function* fetchMovieDetailsHelper(action) {
  try {
    const result = yield call(invokeAPI, 'assets/mockdata/movies.json', 'get');
    const movieDetail = movieDetailsSelector(result, action.movieId);
    yield put({ type: FETCH_MOVIES_DETAILS_SUCCESS, payload: movieDetail });
  } catch (error) {
    yield put({
      type: FETCH_MOVIES_DETAILS_ERROR,
      error: { message: error.message },
    });
  }
}

export function* fetchMovieDetailsWatcher() {
  yield takeLatest(FETCH_MOVIES_DETAILS, fetchMovieDetailsHelper);
}
