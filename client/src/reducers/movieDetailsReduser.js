import {
  FETCH_MOVIES_DETAILS_SUCCESS,
  FETCH_MOVIES_DETAILS_ERROR,
} from '../actionTypes/movieDetailsActionTypes';

const initialState = {
  data: {},
  error: null,
};

/**
 * It will receive all the data use for the movie details component
 * @function :  dataReducer
 * @param {object} state:contain initial and final state of movie details data
 * @param {object} action:return the action object
 */
export default (state = initialState, action) => {
  switch (action.type) {
    /**
     * Dispatched from movie details saga when api call is success
     */
    case FETCH_MOVIES_DETAILS_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    /**
     * Dispatched from movie details saga when there is an error in the saga
     */
    case FETCH_MOVIES_DETAILS_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
