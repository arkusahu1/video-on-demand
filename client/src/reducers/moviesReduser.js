import {
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_ERROR,
} from '../actionTypes/moviesActionTypes';

const initialState = {
  isSuccess: false,
  data: [],
  serviceError: null,
  error: null,
};

/**
 * It will receive all the data use for the movie component(For Home page)
 * @function :  dataReducer
 * @param {object} state:contain initial and final state of movie details data
 * @param {object} action:return the action object
 */
export default (state = initialState, action) => {
  switch (action.type) {
    /**
     * Dispatched from movies saga when api call is success
     */
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isSuccess: true,
      };

    /**
     * Dispatched from movies saga when api call fails
     */
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        serviceError: action.payload,
        isSuccess: false,
      };

    /**
     * Dispatched from movies saga when there is an error in the saga
     */
    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        error: action.error,
        isSuccess: false,
      };
    default:
      return state;
  }
};
