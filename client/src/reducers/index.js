import { combineReducers } from 'redux';
import moviesReduser from './moviesReduser';
import moviesDetailsReduser from './movieDetailsReduser';
import setMovieHistoryReducer from './setMovieHistoryReducer';
import getMovieHistoryReducer from './getMovieHistoryReducer';

export default combineReducers({
  moviesData: moviesReduser,
  moviesDetailsData: moviesDetailsReduser,
  setHistoryData: setMovieHistoryReducer,
  getHistoryData: getMovieHistoryReducer,
});
