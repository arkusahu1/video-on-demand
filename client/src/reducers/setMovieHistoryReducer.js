import {
  SET_MOVIE_HISTORY_SUCCESS,
  SET_MOVIE_HISTORY_FAILURE,
  SET_MOVIE_HISTORY_ERROR,
} from '../actionTypes/movieHistoryTypes';

const initialState = {
  isSuccess: false,
  data: {},
  serviceError: null,
  error: null,
};

/**
 * It will receive all the data use for the watch history component(For History)
 * @function :  dataReducer
 * @param {object} state:contain initial and final state of set history details data
 * @param {object} action:return the action object
 */
export default (state = initialState, action) => {
  switch (action.type) {
    /**
     * Dispatched from movie history saga when api call is success
     */
    case SET_MOVIE_HISTORY_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isSuccess: true,
      };

    /**
     * Dispatched from movie history saga when api call fails
     */
    case SET_MOVIE_HISTORY_FAILURE:
      return {
        ...state,
        serviceError: action.payload,
        isSuccess: false,
      };

    /**
     * Dispatched from movie history saga when there is an error in the saga
     */
    case SET_MOVIE_HISTORY_ERROR:
      return {
        ...state,
        error: action.error,
        isSuccess: false,
      };
    default:
      return state;
  }
};
