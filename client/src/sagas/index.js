/* istanbul ignore file */
import { fork } from 'redux-saga/effects';
import { fetchMoviesWatcher } from './moviesSaga';
import { fetchMovieDetailsWatcher } from './movieDetailsSaga';
import {
  setMovieHistoryWatcher,
  getMovieHistoryWatcher,
} from './movieHistorySaga';

/**
 * Its a root saga of the application
 */
export default function* rootSagas() {
  yield* [
    fork(fetchMoviesWatcher),
    fork(fetchMovieDetailsWatcher),
    fork(setMovieHistoryWatcher),
    fork(getMovieHistoryWatcher),
  ];
}
